/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('launch-editor').addEventListener('click', this.launchEditor, false);
        document.getElementById('take-picture').addEventListener('click', this.takePicture, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    /* Make a helper function to launch the Image Editor */
    launchEditor: function() {

        var imageUrl = document.getElementById('target-image').src;
        app.openEditor(imageUrl);
    },
    takePicture: function() {
        navigator.camera.getPicture(function(picUri){
            app.openEditor(picUri);
        }, function(message) {
            console.log('Failed because: ' + message);
        }, {
            quality: 100,
            destinationType: Camera.DestinationType.FILE_URI
        });
    },
    openEditor: function(imageUrl) {
        /* Prep work for calling `.edit()` */
        function success(newUrl) {
            console.log("Success!", newUrl);
            document.getElementById('target-image').src = newUrl;
        }

        function error(error) {
            console.log("Error!", error);
        }

        /* Optional `options` object. See API guide for usage. */
        var options = {
            // outputType: CSDKImageEditor.OutputType.JPEG,
            // tools: [
            //     CSDKImageEditor.ToolType.EFFECTS,
            //     CSDKImageEditor.ToolType.CROP
            // ],
            // quality: 50
        };

        /* Launch the Image Editor */
        CSDKImageEditor.edit(success, error, imageUrl, options);
    }
};
