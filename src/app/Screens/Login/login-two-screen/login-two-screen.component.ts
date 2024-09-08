import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-login-two-screen',
  templateUrl: './login-two-screen.component.html',
  styleUrls: ['./login-two-screen.component.scss']
})
export class LoginTwoScreenComponent implements OnInit {
  htmlCode: string = "";
  tsCode: string = "";
  scssCode: string = "";
  
  constructor(private commonSvc:CommonService) { }

  ngOnInit(): void {
  }
  
  copyCode(data:string){
    this.commonSvc.copyToClipboard(data);
  }

}
