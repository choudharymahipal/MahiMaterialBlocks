import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-two-screen',
  templateUrl: './blog-two-screen.component.html',
  styleUrls: ['./blog-two-screen.component.scss']
})
export class BlogTwoScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
