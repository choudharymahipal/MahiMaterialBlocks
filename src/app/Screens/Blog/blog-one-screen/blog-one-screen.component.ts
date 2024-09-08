import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Shared/Services/common.service';

@Component({
  selector: 'app-blog-one-screen',
  templateUrl: './blog-one-screen.component.html',
  styleUrls: ['./blog-one-screen.component.scss']
})
export class BlogOneScreenComponent implements OnInit {
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
