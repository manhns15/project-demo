import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.postService.getAllPosts().subscribe(res => {
      if (res) {
        this.posts = res;
      }
    })
  }
}
