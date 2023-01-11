import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiselsComponent } from './bisels.component';

describe('BiselsComponent', () => {
  let component: BiselsComponent;
  let fixture: ComponentFixture<BiselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiselsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
