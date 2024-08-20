import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: '', component: HomeComponent },  //not show the page title in url
    { path: 'home', component: HomeComponent, title: "Home Page" },
    { path: 'contact-us', component: ContactUsComponent, title: "Contact-us Page", },
    { path: 'about', component: AboutComponent, title: "About Page", },
    { path: 'service', component: ServicesComponent, title: "Service Page" },
    { path: 'login', component: LoginComponent, title: "login Page" },
    { path: 'template-form', component: TemplateFormComponent, title: "template form" },
    { path: 'reactive-form', component: ReactiveFormComponent, title: "reactive form" },
    { path: '**', component: PageNotFoundComponent, title: "Page not found" },
];
