import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBikeComponent } from './brand-bike.component';

describe('BrandBikeComponent', () => {
  let component: BrandBikeComponent;
  let fixture: ComponentFixture<BrandBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandBikeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
