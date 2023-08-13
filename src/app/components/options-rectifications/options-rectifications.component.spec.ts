import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsRectificationsComponent } from './options-rectifications.component';

describe('OptionsRectificationsComponent', () => {
  let component: OptionsRectificationsComponent;
  let fixture: ComponentFixture<OptionsRectificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsRectificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsRectificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
