import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/Shared/Services/common.service';

export interface iIconData {
  id: string;
  name: string;
  icon: string;
}

/** Constants used to fill up our data base. */
const IconDataList: iIconData[] = [
  { id: '1', name: 'Home', icon: 'home' },
  { id: '2', name: 'Search', icon: 'search' },
  { id: '3', name: 'Option', icon: 'more_vert' },
  { id: '4', name: 'Menu', icon: 'menu' },
  { id: '5', name: 'Close', icon: 'close' },
  { id: '6', name: 'Add', icon: 'add' },
  { id: '7', name: 'Delete', icon: 'delete' },
  { id: '8', name: 'Login', icon: 'login' },
  { id: '9', name: 'Logout', icon: 'logout' },
  { id: '10', name: 'Add Circle', icon: 'add_circle' },
  { id: '11', name: 'Cancel', icon: 'cancel' },
  { id: '12', name: 'Settings', icon: 'settings' },
  { id: '13', name: 'Profile', icon: 'person' },
  { id: '14', name: 'Notifications', icon: 'notifications' },
  { id: '15', name: 'Warning', icon: 'warning' },
];

@Component({
  selector: 'app-material-icons',
  templateUrl: './material-icons.component.html',
  styleUrls: ['./material-icons.component.scss'],
})
export class MaterialIconsComponent implements AfterViewInit {
  startTag:string="<mat-icon>";
  endTag:string="</mat-icon>";
  displayedColumns: string[] = ['id', 'name', 'icon', 'code','action'];
  dataSource: MatTableDataSource<iIconData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private commonSvc:CommonService) {
    this.dataSource = new MatTableDataSource(IconDataList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  copyToClipboard(iconName:string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = "<mat-icon>"+iconName+"</mat-icon>";
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.commonSvc.openSnackBar("Copied to clipboard");
  }
}
