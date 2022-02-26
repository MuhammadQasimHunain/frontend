import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { Country } from '../utils/country.model';
import {MyErrorStateMatcher} from '../utils/my-state-error-matcher';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})

export class UserRegistrationFormComponent implements OnInit {
  filteredCountries: Observable<Country[]>;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^([a-zA-Z0-9]+)$'),
  ]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  nameFormControl = new FormControl('', []);
  countryFormControl = new FormControl('', []);
  matcher = new MyErrorStateMatcher();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}

