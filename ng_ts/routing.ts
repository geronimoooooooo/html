import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
const routes: Routes = [
{ path: 'user', component: UserComponent },
{ path: 'login', component: LoginComponent },
{path : '', component : LoginComponent}
];
@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }
----------------------------------------------------
  <router-outlet></router-outlet> in app.component.html
---------------------------------------
  <a routerLink="/detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
  </a>
---------------------------------------------
//Wenn man im code irgendwo auf eine Routerseite möchte
       this.router.navigateByUrl('/dashboard');
---------------------------------------------
