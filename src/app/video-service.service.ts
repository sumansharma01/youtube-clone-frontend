import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  base_url:string="http://localhost:8080/youtube/api/videos";
  constructor(private http:HttpClient) { }

  getAllVideos(){
    return this.http.get(this.base_url);
  }
  getVideoById(id:any){
    return this.http.get(`${this.base_url}/${id}`);
  }

}
