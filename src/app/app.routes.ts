import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AktuellesComponent } from './components/aktuelles/aktuelles.component';
import { TermineComponent } from './components/termine/termine.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aktuelles', component: AktuellesComponent },
    { path: 'termine', component: TermineComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
