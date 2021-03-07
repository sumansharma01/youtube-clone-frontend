import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-youtube-likes-title',
  templateUrl: './youtube-likes-title.component.html',
  styleUrls: ['./youtube-likes-title.component.css']
})
export class YoutubeLikesTitleComponent implements OnInit {

  video:any;
  
  constructor(private activatedRoute:ActivatedRoute,private videoService:VideoServiceService) { }
  id=this.activatedRoute.snapshot.params.id;
  
  ngOnInit(): void {
    this.videoService.getVideoById(this.id).subscribe(data=>this.video=data);
  }

}
