import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisansInfosComponent } from './artisans-infos.component';

describe('ArtisansInfosComponent', () => {
  let component: ArtisansInfosComponent;
  let fixture: ComponentFixture<ArtisansInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisansInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtisansInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
