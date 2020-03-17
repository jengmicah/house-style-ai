import React from 'react';
import DropzoneComponent from 'react-dropzone-component';

import '../styles/dropzone-theme.css';
import '../styles/dropzone.css'

export default class Dropzone extends React.Component {
    constructor(props) {
        super(props);

        // For a full list of possible configurations,
        // please consult http://www.dropzonejs.com/#configuration
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: true,
            dictDefaultMessage: "Drag images files here or browse from your computer",  
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'https:\/\/httpbin.org/post',
        };

        this.success = file => {
            // Only upload one file at a time
            if(this.dropzone) {
                if (this.dropzone.files.length > 1) 
                    this.dropzone.removeFile(this.dropzone.files[0]);
            }
            console.log('Uploaded', file.name);
            this.props.handleFileInput(file);
        }
        this.removedfile = file => {
            console.log('Removing...', file);
            this.props.refresh();
        }
        this.dropzone = null;
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            init: dz => this.dropzone = dz,
            // drop: this.callbackArray,
            // addedfile: this.addedfile,
            success: this.success,
            removedfile: this.removedfile,
        }

        return <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
    }
}
