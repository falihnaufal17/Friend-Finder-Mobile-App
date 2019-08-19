import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCGCF_LPC0Zjuo1ZvTrt75zY-OTXAsHQ00",
    authDomain: "friend-finder-1566057916145.firebaseapp.com",
    databaseURL: "https://friend-finder-1566057916145.firebaseio.com/",
    projectId: "friend-finder-1566057916145",
    storageBucket: "",
    messagingSenderId: "964738643294",
    appId: "com.friendfinder"
}

let app = Firebase.initializeApp(config);

export const Database = app.database();
export const Auth = app.auth();
