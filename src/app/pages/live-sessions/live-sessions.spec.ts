import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiveSessions } from './live-sessions';

describe('LiveSessions', () => {
  let component: LiveSessions;
  let fixture: ComponentFixture<LiveSessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveSessions],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveSessions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
