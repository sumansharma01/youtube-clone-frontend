import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-home-video-container',
  templateUrl: './home-video-container.component.html',
  styleUrls: ['./home-video-container.component.css']
})
export class HomeVideoContainerComponent implements OnInit {
  videos:any;
  currentDate:any;
  constructor(private videoService:VideoServiceService) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(data=>this.videos=data);
    this.currentDate=new Date();
  }

}
