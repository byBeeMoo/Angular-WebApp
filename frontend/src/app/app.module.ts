import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsFrameComponent } from './components/comments-frame/comments-frame.component';
import { MainComponent } from './components/main/main.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StudiesComponent } from './components/studies/studies.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FooterComponent } from './components/footer/footer.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CommentFormComponent,
    CommentComponent,
    CommentsFrameComponent,
    MainComponent,
    AboutmeComponent,
    ProjectsComponent,
    StudiesComponent,
    BlogComponent,
    ResumeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
