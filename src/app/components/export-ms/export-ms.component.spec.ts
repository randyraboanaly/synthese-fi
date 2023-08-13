import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequetesPilotagesMsComponent } from './export-ms.component';

describe('RequetesPilotagesMsComponent', () => {
  let component: RequetesPilotagesMsComponent;
  let fixture: ComponentFixture<RequetesPilotagesMsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequetesPilotagesMsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequetesPilotagesMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
