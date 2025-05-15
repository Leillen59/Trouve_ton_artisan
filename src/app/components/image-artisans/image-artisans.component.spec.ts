import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageArtisansComponent } from './image-artisans.component';

describe('ImageArtisansComponent', () => {
  let component: ImageArtisansComponent;
  let fixture: ComponentFixture<ImageArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageArtisansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
