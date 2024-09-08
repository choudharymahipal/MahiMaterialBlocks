import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-footer-one-screen',
  templateUrl: './footer-one-screen.component.html',
  styleUrls: ['./footer-one-screen.component.scss']
})
export class FooterOneScreenComponent implements OnInit {
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
