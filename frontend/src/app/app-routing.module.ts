import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'blog',
    component: CommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
