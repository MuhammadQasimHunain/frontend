import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ApiHelperService} from '../utils/api-helper.service';
import {Country} from '../utils/country.model';
import {MyErrorStateMatcher} from '../utils/my-state-error-matcher';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatCard } from '@angular/material/card';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {

  isLoading = true;
  filteredCountries: Observable<Country[]>;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^([a-zA-Z0-9]+)$'),
  ]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  nameFormControl = new FormControl('', []);
  countryFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private apiHealper: ApiHelperService, private snackBar: MatSnackBar, private route: Router) {}

  ngOnInit(): void {
    this.isLoading = false;
    this.filteredCountries = this.apiHealper.getCountries();
    this.filteredCountries.subscribe(res => {
      this.isLoading = true;
    });
  }
  isFormValid(): boolean {
    return (
      this.emailFormControl.errors == null &&
      this.passwordFormControl.errors == null &&
      this.nameFormControl.errors == null &&
      this.countryFormControl.errors == null &&
      this.emailFormControl.errors == null
    );
  }
  onSubmit(): void {
    if (!this.isFormValid()) return;
    const employe = {
      username: this.usernameFormControl.value,
      password: this.passwordFormControl.value,
      name: this.nameFormControl.value,
      country: this.countryFormControl.value,
      email: this.emailFormControl.value,
    };
    this.isLoading = false;
    this.apiHealper.postEmpoyee(employe).subscribe(res => {
      if (res) {
        this.route.navigateByUrl('/user?userid=' + res?.id);
        this.snackBar.open('data is stored.','close');
      } else {
        this.snackBar.open('Some thing went wrong.','close');
      }
      this.isLoading = true;
    });
  }
  resetForm(): void {
    this.matcher.reset(this.emailFormControl);
    this.matcher.reset(this.usernameFormControl);
    this.matcher.reset(this.nameFormControl);
    this.matcher.reset(this.countryFormControl);
    this.matcher.reset(this.passwordFormControl);
  }
}
