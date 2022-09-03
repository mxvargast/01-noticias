import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './article/article.component';
import { SegmentComponent } from './segment/segment.component';



@NgModule({
  declarations: [

    ArticlesComponent,
    ArticleComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    
  ],
  exports:[
    ArticlesComponent,
    ArticleComponent,
    SegmentComponent
    
  ]
})
export class ComponentsModule { }
