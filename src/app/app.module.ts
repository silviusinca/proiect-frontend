import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { BookViewComponent } from './book-view/book-view.component';
import { BookListComponent } from './book-list/book-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    BookViewComponent,
    BookListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule
  ],
  providers: [AuthService, AngularFireAuth, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
