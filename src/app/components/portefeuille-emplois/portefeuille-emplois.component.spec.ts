import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilleEmploisComponent } from './portefeuille-emplois.component';

describe('PortefeuilleEmploisComponent', () => {
  let component: PortefeuilleEmploisComponent;
  let fixture: ComponentFixture<PortefeuilleEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortefeuilleEmploisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortefeuilleEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
