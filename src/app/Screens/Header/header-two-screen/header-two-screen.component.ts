import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-two-screen',
  templateUrl: './header-two-screen.component.html',
  styleUrls: ['./header-two-screen.component.scss']
})
export class HeaderTwoScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
