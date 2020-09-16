import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // posts = [
    // { title: "First Post", description: "first description", content: "first content" },
    // { title: "Second Post", description: "second description", content: "second content" },
    // { title: "Third Post", description: "third description", content: "third content" }
  // ];
  @Input() posts: Post[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
