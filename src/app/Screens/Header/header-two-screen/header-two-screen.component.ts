import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-header-two-screen',
  templateUrl: './header-two-screen.component.html',
  styleUrls: ['./header-two-screen.component.scss']
})
export class HeaderTwoScreenComponent implements OnInit {
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
