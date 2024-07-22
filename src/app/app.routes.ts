import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AktuellesComponent } from './components/aktuelles/aktuelles.component';
import { TermineComponent } from './components/termine/termine.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aktuelles', component: AktuellesComponent },
    { path: 'termine', component: TermineComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
