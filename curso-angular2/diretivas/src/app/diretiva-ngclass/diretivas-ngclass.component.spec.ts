import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgclassComponent } from './diretivas-ngclass.component';

describe('DiretivasNgclassComponent', () => {
  let component: DiretivasNgclassComponent;
  let fixture: ComponentFixture<DiretivasNgclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasNgclassComponent]
    });
    fixture = TestBed.createComponent(DiretivasNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
