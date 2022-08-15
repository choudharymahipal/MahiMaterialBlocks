import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-one-screen',
  templateUrl: './blog-one-screen.component.html',
  styleUrls: ['./blog-one-screen.component.scss']
})
export class BlogOneScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
