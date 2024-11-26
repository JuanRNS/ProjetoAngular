import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTrabalheComponent } from './forms-trabalhe.component';

describe('FormsTrabalheComponent', () => {
  let component: FormsTrabalheComponent;
  let fixture: ComponentFixture<FormsTrabalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsTrabalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTrabalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
