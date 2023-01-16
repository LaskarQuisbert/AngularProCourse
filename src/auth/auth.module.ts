import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// third-party modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// shared modules
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
      { path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
    ]
  }
];

export const firebaseConfig = {
  apiKey: "AIzaSyBUisuyihYDxCF4tzitCb_vCqCNA0abxQw",
  authDomain: "training-angular-a4d00.firebaseapp.com",
  databaseURL: "https://training-angular-a4d00-default-rtdb.firebaseio.com",
  projectId: "training-angular-a4d00",
  storageBucket: "training-angular-a4d00.appspot.com",
  messagingSenderId: "515715526530",
  appId: "1:515715526530:web:c0674499bb0cf49f32e99b"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
