// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";


export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDI7TZchdzl9CNlQDoyZhq0HeexQsOyA5M",
    authDomain: "claudia-cocinapp-ejemplo.firebaseapp.com",
    projectId: "claudia-cocinapp-ejemplo",
    storageBucket: "claudia-cocinapp-ejemplo.appspot.com",
    messagingSenderId: "443682194887",
    appId: "1:443682194887:web:18afbffe1adf740473c5e2"
  },
  apiReceta:'http://localhost:3000/recetas'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
