import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ServicesComponent } from './content/services/services.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ContactComponent } from './content/contact/contact.component';
import { LoginComponent } from './content/auth/login/login.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProvider } from './_helpers/auth.interceptor';
import { MovieAddComponent } from './content/movie/add/add.component';
import { MovieEditComponent } from './content/movie/edit/edit.component';
import { MovieListComponent } from './content/movie/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    MovieAddComponent,
    MovieEditComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
