import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsFrameComponent } from './components/comments-frame/comments-frame.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CommentFormComponent,
    CommentComponent,
    CommentsFrameComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
