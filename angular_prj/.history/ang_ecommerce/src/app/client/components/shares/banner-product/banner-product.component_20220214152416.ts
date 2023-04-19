import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-banner-product',
  templateUrl: './banner-product.component.html',
  styleUrls: ['./banner-product.component.css']
})
export class BannerProductComponent implements OnInit {
  product!: Product
  id!: string;
  constructor(
    private productService: ProductsService,
    private activeRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.pipe(
      switchMap(params => {
        console.log(params);
        this.id = params.get('id') as string;
        return this.productService.getProduct(this.id);
      })
    ).subscribe(res => {
      console.log(res);
      this.product = res

    })
  }

}
