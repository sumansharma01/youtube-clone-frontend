import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../video-service.service';

@Component({
  selector: 'app-individual-side-cards',
  templateUrl: './individual-side-cards.component.html',
  styleUrls: ['./individual-side-cards.component.css']
})
export class IndividualSideCardsComponent implements OnInit {
  videos:any=[];
  constructor(private videoService:VideoServiceService) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(data=>this.videos=data);
  }

}
