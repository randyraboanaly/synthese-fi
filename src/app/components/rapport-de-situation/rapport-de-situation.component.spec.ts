import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportDeSituationComponent } from './rapport-de-situation.component';

describe('RapportDeSituationComponent', () => {
  let component: RapportDeSituationComponent;
  let fixture: ComponentFixture<RapportDeSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportDeSituationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportDeSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
