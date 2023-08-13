import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilContenuComponent } from './accueil-contenu.component';

describe('AccueilContenuComponent', () => {
  let component: AccueilContenuComponent;
  let fixture: ComponentFixture<AccueilContenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilContenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
