import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-two-screen',
  templateUrl: './login-two-screen.component.html',
  styleUrls: ['./login-two-screen.component.scss']
})
export class LoginTwoScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
