import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos:any;
  constructor(private videoService:VideoServiceService) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(data=>this.videos=data);
  }

}
