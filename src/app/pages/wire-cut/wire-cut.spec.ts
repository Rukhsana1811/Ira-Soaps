import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WireCut } from './wire-cut';

describe('WireCut', () => {
  let component: WireCut;
  let fixture: ComponentFixture<WireCut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WireCut],
    }).compileComponents();

    fixture = TestBed.createComponent(WireCut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
