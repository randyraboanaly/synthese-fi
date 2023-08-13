import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPrevisionnelComponent } from './suivi-previsionnel.component';

describe('SuiviPrevisionnelComponent', () => {
  let component: SuiviPrevisionnelComponent;
  let fixture: ComponentFixture<SuiviPrevisionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviPrevisionnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviPrevisionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
