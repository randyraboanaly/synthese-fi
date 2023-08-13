import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTrajectoireComponent } from './suivi-trajectoire.component';

describe('SuiviTrajectoireComponent', () => {
  let component: SuiviTrajectoireComponent;
  let fixture: ComponentFixture<SuiviTrajectoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviTrajectoireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviTrajectoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
