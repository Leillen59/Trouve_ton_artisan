import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

import { ArtisansDataService } from '../../services/artisans-data.service.js';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component.js';
import { CategoryFilterPipe } from '../../Pipes/category-filter.pipe.js';
import { SearchPipe } from '../../Pipes/search.pipe.js';
import { FormsModule } from '@angular/forms';

import { InvalidSearchComponent } from '../../components/invalid-search/invalid-search.component.js';

import { Titreh2Component } from '../../components/titres/titreh2/titreh2.component.js';

@Component({
  selector: 'app-artisans',
  standalone: true,
  imports: [NgFor, NgIf, CategoryFilterPipe, SearchPipe, FormsModule, InvalidSearchComponent, ArtisanCardComponent, Titreh2Component],
  templateUrl: './artisans.component.html',
  styleUrl: './artisans.component.scss'
})
export class ArtisansComponent implements OnInit {
  categorie: string= ""
  artisans:any
  searchTerm:string = ""
  recherche:any = ""

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private artisansDataService: ArtisansDataService)
    {}

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.categorie = params["categorie"];
      })
      
      this.route.queryParams
      .subscribe((params) => {
      this.recherche = params;
      this.recherche = this.recherche.search
      })

      this.artisans = this.artisansDataService.artisanList

      //Routing sur un "aucun contenu ne correspond à votre recherche"
      if (!(this.categorie == "bâtiment" || this.categorie == "services" || this.categorie === "fabrication" || this.categorie === "alimentation" || !this.categorie)) {
        this.router.navigate(["Error404"])
    }
  }
}
