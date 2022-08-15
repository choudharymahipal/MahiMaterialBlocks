import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-one-screen',
  templateUrl: './header-one-screen.component.html',
  styleUrls: ['./header-one-screen.component.scss']
})
export class HeaderOneScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
