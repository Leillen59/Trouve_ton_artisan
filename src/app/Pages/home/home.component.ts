import { Component } from '@angular/core';
import { ToptroisComponent } from '../../components/toptrois/toptrois.component.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToptroisComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
