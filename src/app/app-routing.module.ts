import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserRegistrationFormComponent} from './user-registration-form/user-registration-form.component';

const routes: Routes = [{path: '', component: UserRegistrationFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
