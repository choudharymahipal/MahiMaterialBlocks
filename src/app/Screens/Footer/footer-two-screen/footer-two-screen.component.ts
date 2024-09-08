import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-footer-two-screen',
  templateUrl: './footer-two-screen.component.html',
  styleUrls: ['./footer-two-screen.component.scss']
})
export class FooterTwoScreenComponent implements OnInit {
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
