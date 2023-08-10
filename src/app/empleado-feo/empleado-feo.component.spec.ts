import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoFeoComponent } from './empleado-feo.component';

describe('EmpleadoFeoComponent', () => {
  let component: EmpleadoFeoComponent;
  let fixture: ComponentFixture<EmpleadoFeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoFeoComponent]
    });
    fixture = TestBed.createComponent(EmpleadoFeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
