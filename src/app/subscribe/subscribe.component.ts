import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  video:any;
  constructor(private activatedRoute:ActivatedRoute,private videoService:VideoServiceService) { }
  id:any=this.activatedRoute.snapshot.params.id;

  ngOnInit(): void {
    this.videoService.getVideoById(this.id).subscribe(data=>this.video=data);
  }

}
