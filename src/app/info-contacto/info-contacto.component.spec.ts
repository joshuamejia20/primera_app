import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoContactoComponent } from './info-contacto.component';

describe('InfoContactoComponent', () => {
  let component: InfoContactoComponent;
  let fixture: ComponentFixture<InfoContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoContactoComponent]
    });
    fixture = TestBed.createComponent(InfoContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
