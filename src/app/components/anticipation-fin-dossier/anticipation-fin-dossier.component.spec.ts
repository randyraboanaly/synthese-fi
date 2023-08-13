import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticipationFinDossierComponent } from './anticipation-fin-dossier.component';

describe('AnticipationFinDossierComponent', () => {
  let component: AnticipationFinDossierComponent;
  let fixture: ComponentFixture<AnticipationFinDossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnticipationFinDossierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnticipationFinDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
