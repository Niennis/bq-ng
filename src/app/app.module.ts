import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponente } from './components/primer-componente/primer-componente.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { CocinaComponent } from './components/cocina/cocina.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { HeaderComponent } from './components/header/header.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { DetailComponent } from './components/detail/detail.component';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';


const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'primer'
  // },
  {
    path: '',
    component: PrimerComponente
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cocina',
    component: CocinaComponent
  },
  {
    path: 'mesas',
    component: MesasComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'prefix',
      //   redirectTo: 'users'
      // },
      {
        path: 'breakfast',
        component: BreakfastComponent
      },
      {
        path: 'lunch',
        component: LunchComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponente,
    MesasComponent,
    CocinaComponent,
    HeaderComponent,
    LunchComponent,
    BreakfastComponent,
    DetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes,{
      //enableTracing: true, // nos permite hacer mejor debugging
      paramsInheritanceStrategy: 'always',
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
