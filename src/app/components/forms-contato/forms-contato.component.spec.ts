import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsContatoComponent } from './forms-contato.component';

describe('FormsContatoComponent', () => {
  let component: FormsContatoComponent;
  let fixture: ComponentFixture<FormsContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
