import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisansDataService } from '../../services/artisans-data.service.js';
import { Titreh2Component } from '../../components/titres/titreh2/titreh2.component.js';
import { ImageArtisansComponent } from '../../components/image-artisans/image-artisans.component.js';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component.js';
import { NgIf } from '@angular/common';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component.js';

@Component({
  selector: 'app-artisans-infos',
  standalone: true,
  imports: [Titreh2Component, ImageArtisansComponent, NgIf, StarRatingComponent, ContactFormComponent],
  templateUrl: './artisans-infos.component.html',
  styleUrl: './artisans-infos.component.scss'
})
export class ArtisansInfosComponent {
  routeSub: any
  data:any
  artisansData:any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artisansDataService: ArtisansDataService
  ) {}

  ngOnInit() {
    this.artisansData = this.artisansDataService.artisanList

    this.routeSub= this.route.params.subscribe(params => {
      this.data = this.artisansData.find((item: {id: any; }) => item.id === params['id'])
    })

    if (!this.data) {
      this.router.navigate(["Error404"])
    }
  }
}
