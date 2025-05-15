import { Component, input, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
@Component({
  selector: 'app-image-artisans',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './image-artisans.component.html',
  styleUrl: './image-artisans.component.scss'
})
export class ImageArtisansComponent {
  @Input() category:any
}
