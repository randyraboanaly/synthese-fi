import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAccueilComponent } from './tabs-accueil.component';

describe('TabsAccueilComponent', () => {
  let component: TabsAccueilComponent;
  let fixture: ComponentFixture<TabsAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
