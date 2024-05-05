import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LibrarianComponent } from './librarian/librarian.component';
import { PatronComponent } from './patron/patron.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    {path: '', component:HomeComponent, pathMatch: 'full'},
    {path: 'fetch-data', component: FetchDataComponent},
    {path: 'librarian', component: LibrarianComponent},
    {path: 'patron', component: PatronComponent},
    {path: 'login', component: LoginComponent}
];
