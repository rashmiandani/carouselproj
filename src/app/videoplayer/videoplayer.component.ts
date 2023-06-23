import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgStreamingModule } from '@videogular/ngx-videogular/streaming'


@Component({
  selector: 'app-videoplayer',
  standalone: true,
  imports: [BrowserModule,VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule],
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent {

}
