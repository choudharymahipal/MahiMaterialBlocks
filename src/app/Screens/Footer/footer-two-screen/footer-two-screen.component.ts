import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-two-screen',
  templateUrl: './footer-two-screen.component.html',
  styleUrls: ['./footer-two-screen.component.scss']
})
export class FooterTwoScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
