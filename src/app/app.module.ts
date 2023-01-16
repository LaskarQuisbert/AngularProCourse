import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBUisuyihYDxCF4tzitCb_vCqCNA0abxQw",
//   authDomain: "training-angular-a4d00.firebaseapp.com",
//   databaseURL: "https://training-angular-a4d00-default-rtdb.firebaseio.com",
//   projectId: "training-angular-a4d00",
//   storageBucket: "training-angular-a4d00.appspot.com",
//   messagingSenderId: "515715526530",
//   appId: "1:515715526530:web:c0674499bb0cf49f32e99b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);