import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopHeadLines(){
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6ff46ef6db2e46068fe1fb8b57df2ebe')
  }

}
