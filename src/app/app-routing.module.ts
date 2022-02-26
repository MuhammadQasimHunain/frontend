import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserRegistrationFormComponent} from './user-registration-form/user-registration-form.component';

const routes: Routes = [
  {path: '', component: UserRegistrationFormComponent},
  {path: 'user', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
