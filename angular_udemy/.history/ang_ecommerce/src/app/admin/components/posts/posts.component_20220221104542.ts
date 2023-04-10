import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  form!: FormGroup;
  tags: string[] = [];
  isDis: boolean = true;
  constructor(
    private postService: PostsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      slug: ['', Validators.required],
      title: ['', Validators.required],
      image: ['', Validators.required],
      body: ['', Validators.required],
      description: ['', Validators.required],
      tagList: ['', Validators.required],
    })
    this.getAll();
  }

  get iF(): any {
    return this.form.controls
  }
  getAll() {
    this.postService.getAllPosts().subscribe(res => {
      if (res) {
        this.posts = res;
      }
      console.log(this.posts);

    })
  }
  onAdd() {
    let obj = {
      slug: Math.random.toString().toLowerCase(2, 9)
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, ''),
      title: this.iF.title.value,
      image: this.iF.image.value,
      body: this.iF.body.value,
      description: this.iF.description.value,
      tagList: this.tags,

    }

    this.postService.createPost(obj).subscribe(res => {

      console.log(res);
      this.form.reset();
      // $('#editorProduct').modal('hide')
      this.getAll();

    })
  }
  onAddTag() {
    if (this.iF.tagList.value) {
      if (this.tags.indexOf(this.iF.tagList.value) < 0) {
        this.tags.push(this.iF.tagList.value)
      }
    }
    this.iF.tagList.setValue('')
  }
  removeTag(tagName: string) {
    this.tags = this.tags.filter(tag =>
      tag !== tagName
    )
  }
}
