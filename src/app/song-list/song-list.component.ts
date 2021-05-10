import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent  {

 constructor() {}

  SongList = ['Song1', 'Song2', 'Song3'];
  newSong: string;
  numSongVisible: boolean = true;
  ngOnInit() {}

  addSong(newSong: string) {
    console.log('khush');
    console.log(newSong);
    this.SongList.push(newSong);
  }

  ToggleNumSong() {
    this.numSongVisible = !this.numSongVisible;
  }
  

}