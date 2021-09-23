import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { NgForm } from '@angular/forms';
import { isObservable } from 'rxjs';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent implements OnInit {
  constructor(public commentService: CommentService) {}

  ngOnInit(): void {}

  addComment(form: NgForm) {
    let objType = this.commentService.createComment(form.value);
    if (isObservable(objType)) {
      objType.subscribe(
        (res) => form.reset(),
        (err) => console.error(err)
      );
    }
  }
}
