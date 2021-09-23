import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../interfaces/Comment';

/* Service files iteract with the Backend API */

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  URL_API = 'http://localhost:4000/comments';

  comments: Comment[];
  newComment: Comment = {
    author: '',
    comment: '',
  };

  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get<Comment[]>(this.URL_API);
  }

  createComment(comment: Comment) {
    if (comment.author != null && comment.comment != null) {
      this.comments.push(comment);
      return this.http.post(this.URL_API, comment);
    } else {
      console.log('Cannot send empty form, dont be evil');
      return 1;
    }
  }
}
