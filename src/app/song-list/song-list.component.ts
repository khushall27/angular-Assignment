import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent  {

  constructor() { }
   name:string = "Khush Hall";
   
   playList = ["Song1","Song2","Song3","Song4"];

  

}