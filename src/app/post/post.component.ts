import { Component, OnInit } from '@angular/core';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  details: any;
  search:any;

  constructor(private api: TechService) { }

  ngOnInit(): void {
    this.alldetails();
  }

  alldetails() {
    this.api.getmethod().subscribe(res => {
      this.details = res
    })
  }
// aldetails() {
//     this.api.postmethod().subscribe(res => {
//       this.details = res
//     })
//   }
}

