import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: VideoplayerComponent, pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
