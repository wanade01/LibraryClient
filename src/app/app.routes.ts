import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { PatronComponent } from './patron/patron.component';
import { LoginComponent } from './auth/login.component';
import { BookComponent } from './patron/book.component';

export const routes: Routes = [
    {path: '', component:HomeComponent, pathMatch: 'full'},
    {path: 'librarian', component: LibrarianComponent},
    {path: 'patron', component: PatronComponent},
    {path: 'login', component: LoginComponent},
    {path: 'book/:id', component: BookComponent}
    
];
