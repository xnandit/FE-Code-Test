import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'landing', component:LandingComponent },
  { path: 'login', component:LoginComponent },
  { path: 'post', component:PostComponent },
  { path: 'post-detail/:id', component:PostDetailComponent },
  { path: 'profile', component:ProfileComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
