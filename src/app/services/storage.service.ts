import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Article } from 'src/app/interfaces';
import { ArticleComponent } from '../components/article/article.component';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private _articles: Article[] = [];

  get getLocalArticles(){
    return [...this._articles];
  }

  constructor(private storage: Storage) {
    this.init();
   }
   async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }

  async saveOrRenoveArticle(article:Article) {

    const exists = this._articles.find(LocalArticle => LocalArticle.title===article.title);
    if (exists) {
      this._articles = this._articles.filter(LocalArticle =>LocalArticle.title!=article.title);
    }else {
      this._articles = [article,...this._articles];
    }
    this.storage.set('articles', this._articles);

  };

  async loadFavorites(){
    try {
      const articles = await this._storage.get('articles');
      this._articles = articles || [];
      
    } catch (error) {
      console.log(error);
      
    }
  }

  articleInFavorites(article:Article){
    return !!this._articles.find(localArticle=>localArticle.title === article.title)
  }
}
