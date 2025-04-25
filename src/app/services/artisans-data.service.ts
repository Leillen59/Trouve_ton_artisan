import { Injectable } from '@angular/core';
import { artisans } from '../../assets/datas.json'

@Injectable({
  providedIn: 'root'
})
export class ArtisansDataService {
  artisanList = artisans
}
