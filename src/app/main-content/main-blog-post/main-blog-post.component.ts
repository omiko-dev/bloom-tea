import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-blog-post',
  templateUrl: './main-blog-post.component.html',
  styleUrls: ['./main-blog-post.component.css']
})
export class MainBlogPostComponent implements OnInit{

  public cardArr: any = [];

  constructor (private cardData:ActivatedRoute){}

  ngOnInit(): void {
    this.cardArr = this.cardData.snapshot.queryParams;

    console.log(this.cardArr);

    window.scroll(0, 243);
  }

}
