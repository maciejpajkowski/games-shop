import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSpotComponent } from './big-spot.component';

describe('BigSpotComponent', () => {
  let component: BigSpotComponent;
  let fixture: ComponentFixture<BigSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
