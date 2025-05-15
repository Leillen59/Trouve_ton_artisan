import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component.js';
import { ImageArtisansComponent } from '../image-artisans/image-artisans.component.js';

@Component({
  selector: 'app-artisan-card',
  standalone: true,
  imports: [ RouterLink, StarRatingComponent, ImageArtisansComponent],
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {
  @Input() data:any
}
