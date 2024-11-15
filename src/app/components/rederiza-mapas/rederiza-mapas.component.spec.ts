import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RederizaMapasComponent } from './rederiza-mapas.component';

describe('RederizaMapasComponent', () => {
  let component: RederizaMapasComponent;
  let fixture: ComponentFixture<RederizaMapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RederizaMapasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RederizaMapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
