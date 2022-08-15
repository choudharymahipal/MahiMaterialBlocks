import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-one-screen',
  templateUrl: './footer-one-screen.component.html',
  styleUrls: ['./footer-one-screen.component.scss']
})
export class FooterOneScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
