import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';
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
  checkSave!: any;
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
      createdAt: ['', Validators.required]
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
      slug: Math.random().toString(36).substring(2, 15),
      title: this.iF.title.value,
      image: this.iF.image.value,
      body: this.iF.body.value,
      description: this.iF.description.value,
      tagList: this.tags
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

  subPro(id: any) {
    this.checkSave = true;
    this.id = id;
    this.productService.getProduct(id).subscribe(res => {
      this.iF.name.setValue(res.name);
      this.iF.category.setValue(res.category);
      this.iF.image.setValue(res.image);
      this.iF.price.setValue(res.price);
      this.iF.quantity.setValue(res.quantity);
      this.iF.description.setValue(res.description);
    })

  }
  onEditProduct() {
    let pro = {
      id: this.id,
      name: this.iF.name.value,
      category: this.iF.category.value,
      image: this.iF.image.value,
      price: this.iF.price.value,
      quantity: this.iF.quantity.value,
      description: this.iF.description.value
    }

    this.productService.updateProduct(pro, this.id).subscribe(res => {
      console.log(res);
      this.form.reset();
      // $('#editorProduct').modal('hide')
      this.getAllProducts();

    })
  }
  // deleteProduct(id: any) {
  //   this.productService.deleteProduct(id).subscribe(res => {
  //     console.log(res);
  //     this.getAllProducts();
  //   })
  // }
}
