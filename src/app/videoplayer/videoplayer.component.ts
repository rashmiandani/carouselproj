import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VgApiService, VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgStreamingModule } from '@videogular/ngx-videogular/streaming'


@Component({
  selector: 'app-videoplayer',
  standalone: true,
  imports: [CommonModule, VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule],
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent {
    api: VgApiService = new VgApiService;

    onPlayerReady(source: VgApiService) {
      this.api = source;
      this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
        this.autoplay.bind(this)
      )
    }

    autoplay() {
      this.api.play();

    }
}
