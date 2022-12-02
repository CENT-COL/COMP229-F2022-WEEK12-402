import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { LoginComponent } from './content/auth/login/login.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { MovieAddComponent } from './content/movie/add/add.component';
import { MovieEditComponent } from './content/movie/edit/edit.component';
import { MovieListComponent } from './content/movie/list/list.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ServicesComponent } from './content/services/services.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movies/list', component: MovieListComponent},
  {path: 'movies/add', component: MovieAddComponent},
  {path: 'movies/edit/:id', component: MovieEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
