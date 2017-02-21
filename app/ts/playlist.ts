
import {Component} from 'angular2/core';
import {video} from './video'
@Component({
  selector: 'playlist',
  templateUrl: 'app/ts/playlist.component.html',
  inputs: ['videos']
})

export class PlaylistComponent{

  onSelect(vid:video){
    console.log(JSON.stringify(vid));
  }

}
