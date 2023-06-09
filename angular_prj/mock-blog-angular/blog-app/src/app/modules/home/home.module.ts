import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { ArticleFeedComponent } from './components/article-feed/article-feed.component';
import { HomeService } from './components/services/home.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleHomeListComponent } from './components/article-home-list/article-home-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    TagListComponent,
    ArticleFeedComponent,
    ArticleHomeListComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [HomeService],
})
export class HomeModule { }
