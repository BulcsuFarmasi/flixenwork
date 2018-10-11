import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';
import { By } from '@angular/platform-browser';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have an input for email', () => {
    const debugElement = fixture.debugElement.query(By.css('input[type="email"]'))

    expect(debugElement).toBeTruthy();
  })

  it ('should have an input for password', () => {
    const debugElement = fixture.debugElement.query(By.css('input[type="password"]'))

    expect(debugElement).toBeTruthy();
  })

  it ('should have a submit button', () => {
    const debugElement = fixture.debugElement.query(By.css('button[type="submit"]'))

    expect(debugElement).toBeTruthy();
  })
});
