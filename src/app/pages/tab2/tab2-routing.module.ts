import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { SegmentComponent } from 'src/app/components/segment/segment.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
