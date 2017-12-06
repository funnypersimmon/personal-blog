import firebase from 'firebase/app';

class FirebaseApp {
    constructor() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAmtVVifhFYWJ6uRjMroCPYmXaj6OZASPI',
            authDomain: 'tajniki-36fb4.firebaseio.com',
            databaseURL: 'https://tajniki-36fb4.firebaseio.com',
            storageBucket: 'tajniki-36fb4.appspot.com'
        });
    }
}

export default FirebaseApp;
export let app = new FirebaseApp();
