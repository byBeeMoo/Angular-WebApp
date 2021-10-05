import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { NgForm } from '@angular/forms';
import { isObservable } from 'rxjs';
import { Comment } from '../../interfaces/Comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  constructor(public commentService: CommentService) {}

  ngOnInit(): void {}

  addComment(form: NgForm) {   
    if ((form.value.author != '' && form.value.comment != '') && (form.value.author != null && form.value.comment != null)) {    
      let newComment: Comment = form.value;
      let objType = this.commentService.createComment(form.value);
      console.log(form.value);

      if (isObservable(objType)) {
        objType.subscribe(
          (res) => {
            form.reset();
            this.commentService.comments.push(newComment);
            this.commentService.anyComments = false;
          },
          (err) => console.error(err)
        );
      }
    } else {
      console.log('Unable to send empty form.');
    }
  }
}
