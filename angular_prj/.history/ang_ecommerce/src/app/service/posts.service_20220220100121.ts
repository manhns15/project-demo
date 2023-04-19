import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  BASE_URL = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    const url = `${this.BASE_URL}posts`;
    return this.httpClient.get<Post[]>(url).pipe(

    )
  }
  getPost(slug: string) {
    const url = `${this.BASE_URL}posts/${slug}`;
    return this.httpClient.get<Post>(url).pipe(

    )
  }
  createPost(data: Post) {
    const url = `${this.BASE_URL}posts`;
    const body: Post = data
    return this.httpClient.post<Post>(url, body).pipe(

    )
  }

  updatePost(data: Post, slug: string) {
    const url = `${this.BASE_URL}posts/${slug}`;
    const body: Post = data
    return this.httpClient.put<Post>(url, body).pipe(

    )
  }

  deletePost(slug: string) {
    const url = `${this.BASE_URL}posts/${slug}`;
    return this.httpClient.delete(url).pipe(

    )
  }
}
