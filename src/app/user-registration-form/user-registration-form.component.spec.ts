import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserRegistrationFormComponent} from './user-registration-form.component';

describe('UserRegistrationFormComponent', () => {
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check user registration fields has name', () => {
    expect(component.nameFormControl).toBeTruthy();
  });

  it('should check user registration fields has countryFormControl', () => {
    expect(component.countryFormControl).toBeTruthy();
  });

  it('should check user registration fields has emailFormControl', () => {
    expect(component.emailFormControl).toBeTruthy();
  });

  it('should check user registration fields has countryFormControl', () => {
    expect(component.countryFormControl).toBeTruthy();
  });
});
