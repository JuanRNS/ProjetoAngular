import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaCafeComponent } from './america-cafe.component';

describe('AmericaCafeComponent', () => {
  let component: AmericaCafeComponent;
  let fixture: ComponentFixture<AmericaCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmericaCafeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericaCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
