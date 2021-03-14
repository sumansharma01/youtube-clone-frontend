import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-create-video',
  templateUrl: './create-video.component.html',
  styleUrls: ['./create-video.component.css']
})
export class CreateVideoComponent implements OnInit {

  createVideo=this.fb.group({});
  constructor(private fb:FormBuilder,private videoServiceService:VideoServiceService,private router:Router) { }

  ngOnInit(): void {
    this.createVideo.addControl('videoName',new FormControl());
    this.createVideo.addControl('videoViews',new FormControl());
    this.createVideo.addControl('uploadDate',new FormControl());
    this.createVideo.addControl('thumbnail',new FormControl());
    this.createVideo.addControl('channelName',new FormControl());
    this.createVideo.addControl('channelLogo',new FormControl());
    this.createVideo.addControl('videoTitle',new FormControl());
    this.createVideo.addControl('description',new FormControl());
  }

  saveVideo(){
    console.log(this.createVideo);
    this.videoServiceService.saveVideo(this.createVideo.value);
    this.router.navigate(["/"]);
  }

}
