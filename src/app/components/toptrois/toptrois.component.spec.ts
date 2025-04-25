import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptroisComponent } from './toptrois.component';

describe('ToptroisComponent', () => {
  let component: ToptroisComponent;
  let fixture: ComponentFixture<ToptroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToptroisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToptroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
