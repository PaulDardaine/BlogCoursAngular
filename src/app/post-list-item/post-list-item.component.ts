import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  createdAt = new Date();
  itemColor: string = this.setColor();

  constructor() { }

  ngOnInit() {
  }

  like: number = 0;
  likeButton(like: NgForm) {
    this.like++;
  }

  dislikeButton(dislike: NgForm) {
    this.like--;
  }

  showLike() {
    return this.like;
  }

  setLikeColor() {
    if (this.showLike() == 0) { return 'black'; }
    else {
      if (this.showLike() > 0) { return 'green'; }
      else {
        if (this.showLike() < 0) { return 'red'; }
      }
    }
  }

  // pas réussi à faire fonctionner cette fonction
  i: number = 0;
  setColor() {

    if (this.i == 0) {
      this.i = 1;
      return 'green';
    }

    else {
      if (this.i == 1) {
        this.i = 0;
        return 'red';
      }
    }
  }

}
