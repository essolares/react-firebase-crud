import firebase from 'firebase/app';
import 'firebase/database';

    var firebaseConfig = {  
        apiKey: "AIzaSyChbizsvzJdT1rQhjXuOd1Aal5syo9u9G0",
        authDomain: "reactfirebasecrud-64dc8.firebaseapp.com",
        projectId: "reactfirebasecrud-64dc8",
        storageBucket: "reactfirebasecrud-64dc8.appspot.com",
        messagingSenderId: "1081705784074",
        appId: "1:1081705784074:web:159bca542df57254f150f3",
        measurementId: "G-C01JMF4N8L"
    };  
      
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase;
