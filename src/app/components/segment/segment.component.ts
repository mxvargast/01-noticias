import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {

  public articles: Article []= [];
  page: number = 1;
  categories:string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
    
  ]
  selectedCategory:string;

  constructor(private newsService:NewsService) { }

  ngOnInit() {

    this.selectedCategory = this.categories[0];
    this.newsService.getTopHeadLines(this.page).subscribe(resp=> {
      console.log(resp);
      this.articles = resp.articles;
    })
    

  }

  segmentChanged(event:any) {
    console.log(event.detail.value);
    this.selectedCategory = event.detail.value;
    this.newsService.getTopHeadLinesByCategories(this.page,this.selectedCategory).subscribe(resp=>{
      console.log(resp);
      this.articles = resp.articles;
    
    })
  }
}