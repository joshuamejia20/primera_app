import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoComponent } from './reto.component';

describe('RetoComponent', () => {
  let component: RetoComponent;
  let fixture: ComponentFixture<RetoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetoComponent]
    });
    fixture = TestBed.createComponent(RetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
