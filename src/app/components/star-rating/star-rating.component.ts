import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number = 0;
  stars: { full: boolean; half: boolean; empty: boolean }[] = [];

  ngOnInit(): void {
    this.updateStars();
  }

  updateStars(): void {
    this.stars = [];
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        this.stars.push({ full: true, half: false, empty: false });
      } else if (i === fullStars && hasHalfStar) {
        this.stars.push({ full: false, half: true, empty: false });
      } else {
        this.stars.push({ full: false, half: false, empty: true });
      }
    }
    console.log('Tableau stars:', this.stars);
  }
}