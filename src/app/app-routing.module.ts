import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PostCreateComponent } from './posts/post-create/post-create.component';

const routes: Routes = [
  // { path: 'post-create', component: PostCreateComponent },
  // { path: '',
  //   redirectTo: '/post-create',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
