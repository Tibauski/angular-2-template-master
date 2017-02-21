import {Component} from 'angular2/core';
import {config} from './config.service';
import {video} from './video';
import {PlaylistComponent} from './playlist';
@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
  mainHeading= config.MAIN_HEADING;
  videos:Array<video>;

  constructor(){
    this.videos = [
      new video(1, "Goedendaag", "Gm5wCr1ST9w", "Beste ontvanger, dit is een bericht"),
      new video(2, "wat een onderwerp", "qsdfsqfdsqfsdf", "WAKKA sdf FLAMME"),
      new video(3, "test", "slkfdjlskjf", "jslkjflsqkjfs")
    ]
  }
}
