# coding: utf-8

import torch
import torch.nn as nn
import torch.nn.functional as F
import matplotlib.pyplot as plt

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(in_channels=1, out_channels=64, kernel_size=4, stride=1, padding=2) # 4*4*3*64
        self.batch_norm1 = nn.BatchNorm2d(num_features=64)
        self.conv2 = nn.Conv2d(in_channels=64, out_channels=64, kernel_size=4, stride=1, padding=2)
        self.dropout1 = nn.Dropout2d(p=0.5)
        self.conv3 = nn.Conv2d(in_channels=64, out_channels=64, kernel_size=4, stride=1, padding=2)
        self.batch_norm2 = nn.BatchNorm2d(num_features=64)
        self.conv4 = nn.Conv2d(in_channels=64, out_channels=64, kernel_size=4, stride=1, padding=2)
        self.dropout2 = nn.Dropout2d(p=0.5)
        self.conv5 = nn.Conv2d(in_channels=64, out_channels=64, kernel_size=4, stride=1, padding=2)
        self.batch_norm3 = nn.BatchNorm2d(num_features=64)
        self.conv6 = nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3, stride=1, padding=0)
        self.dropout3 = nn.Dropout2d(p=0.5)
        self.conv7 = nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3, stride=1, padding=0)
        self.batch_norm4 = nn.BatchNorm2d(num_features=64)
        self.conv8 = nn.Conv2d(in_channels=64, out_channels=64, kernel_size=3, stride=1, padding=0)
        self.batch_norm5 = nn.BatchNorm2d(num_features=64)
        self.dropout4 = nn.Dropout2d(p=0.5)
        self.fc1 = nn.Linear(64*4*4*10, 500)
        self.fc2 = nn.Linear(500, 10)
        #self.pool=nn.MaxPool2d(2,2)
    
    def forward(self, x):
        #Here is where the network is specified.
        x = F.relu(self.conv1( x ))
        x = self.batch_norm1( x )
        x = F.relu(self.conv2( x ))
        x = F.max_pool2d(x, kernel_size=2, stride=2)
        x = self.dropout1( x )
        x = F.relu(self.conv3( x ))
        x = self.batch_norm2( x )
        x = F.relu(self.conv4( x ))
        x = F.max_pool2d(x, kernel_size=2, stride=2)
        x = self.dropout2( x )
        x = F.relu(self.conv5( x ))
        x = self.batch_norm3( x )
        x = F.relu(self.conv6( x ))
        x = self.dropout3( x )
        x = F.relu(self.conv7( x ))
        x = self.batch_norm4( x )
        x = F.relu(self.conv8( x ))
        x = self.batch_norm5( x )
        x = self.dropout4( x )
        x = x.view(-1,64*4*4*10)
        x = F.relu(self.fc1( x ))
        x = self.fc2( x )
        return x

net_now = torch.load("CNN")

img_file="colonial.png"
model="CNN"
classes = ('Cape Cod', 'Colonial', 'Craftsman', 'Georgian', 'Modern and Contemporary', 'Spanish', 'Tudor', 'Victorian and Queen Anne')

def read_and_predict(img_file, model):
    net_now = torch.load(model)
    net_now.eval()
    img=plt.imread(img_file)
    test_like=img.T.reshape(1,80,54)
    outputs=net_now(torch.tensor([test_like*255],dtype=torch.float))
    _, predicted = torch.max(outputs.data, 1)
    return classes[int(predicted)]
read_and_predict("Tudor_57.png","CNN")
