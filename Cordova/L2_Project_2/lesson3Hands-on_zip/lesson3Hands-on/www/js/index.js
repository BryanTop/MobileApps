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
        document.getElementById("btn").addEventListener("click", app.takePic);
    },


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
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

    takePic: function() {
        console.log("Test");

        navigator.camera.getPicture(app.onSuccess, app.onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
         });
         navigator.geolocation.getCurrentPosition(app.onLocationSuccess, app.onError);
    },

    onSuccess: function(imageData) {
        var image = document.getElementById('img');
        image.src = "data:image/jpeg;base64," + imageData;
        console.log("Success");
    },
    
    onFail: function(message) {
        alert('Failed because: ' + message);
    },

    onLocationSuccess: function(position) {

        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var timestamp = new Date(position.timestamp);

        var position = "latitude: " + latitude + " longitude: " + longitude;

        document.getElementById("timestamp").innerText = timestamp + ' ' + position;
    }, 

    onError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }    
};

app.initialize();