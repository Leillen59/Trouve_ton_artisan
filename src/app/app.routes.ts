import { Routes } from '@angular/router';

//importaion des différentes pages
import { HomeComponent } from './Pages/home/home.component.js';
import { ErrorComponent } from './Pages/error404/error.component.js';
import { ArtisansComponent } from './Pages/artisans/artisans.component.js';
import { ArtisansInfosComponent } from './Pages/artisans-infos/artisans-infos.component.js';

export const routes: Routes = [
    { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
    { path: 'Accueil', component:HomeComponent, title: "Accueil | Trouve ton artisan"},
    { path: 'artisans', component:ArtisansComponent, title: "Annuaire | Trouve ton artisan"},
    { path: 'artisans/:categorie', component:ArtisansComponent, title: "Catégorie | Trouve ton artisans"},
    { path: 'artisans/infos/:id', component:ArtisansInfosComponent, title: "Artisans | Trouve ton artisan"},
    { path: '**', component:ErrorComponent, title:"Erreur 404 | Trouve ton artisan"},
];
