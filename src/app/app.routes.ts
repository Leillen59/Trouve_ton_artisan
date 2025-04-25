import { Routes } from '@angular/router';

//importaion des différentes pages
import { HomeComponent } from './Pages/home/home.component.js';
import { AlimentationComponent } from './Pages/alimentation/alimentation.component.js';
import { BatimentComponent } from './Pages/batiment/batiment.component.js';
import { FabricationComponent } from './Pages/fabrication/fabrication.component.js';
import { ErrorComponent } from './Pages/error404/error.component.js';


export const routes: Routes = [
    { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
    { path: 'Accueil', component:HomeComponent },
    { path: 'Alimentation', component:AlimentationComponent },
    { path: 'Batiment', component:BatimentComponent },
    { path: 'Fabrication', component:FabricationComponent },
    { path: '**', component:ErrorComponent},
];
