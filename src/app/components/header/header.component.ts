import { Component, inject } from '@angular/core';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  searchTerm:string= ''

  router = inject(Router)

  onSearch(search:any) {
    if (this.searchTerm != "") {
      this.router.navigate(['artisans'], {queryParams: {search: search.toLowerCase() } });
    } else {
      this.router.navigate(['artisans'])
    }
  }
}
