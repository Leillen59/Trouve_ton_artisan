import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ToptroisFilterPipe } from '../../Pipes/toptrois-filter.pipe.js';
import { ArtisansDataService } from '../../services/artisans-data.service';
import { StarRatingComponent } from '../star-rating/star-rating.component.js';

@Component({
  selector: 'app-toptrois',
  standalone: true,
  imports: [NgFor, ToptroisFilterPipe, StarRatingComponent],
  templateUrl: './toptrois.component.html',
  styleUrl: './toptrois.component.scss'
})

export class ToptroisComponent implements OnInit {
  artisans:any

  constructor(private artisanDataService: ArtisansDataService) {}

  ngOnInit(): void {
      this.artisans = this.artisanDataService.artisanList;
  }
}
