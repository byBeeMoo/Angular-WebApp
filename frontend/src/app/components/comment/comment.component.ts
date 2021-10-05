import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  constructor(public commentService: CommentService) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments().subscribe(
      (res) => {
        this.commentService.comments = res;
        if(this.commentService.comments.length > 0) {
          this.commentService.anyComments = false;
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
