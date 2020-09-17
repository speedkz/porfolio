import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { tableData } from "./data"
import { DialogCreateUserComponent } from './dialog-create-user/dialog-create-user.component';

interface MatTable {
  text: string
  value: string
}

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit, AfterViewInit {

  matTable: MatTable[] = [
    { text: 'Name', value: 'name' },
    { text: 'Position', value: 'position' },
    { text: 'Office', value: 'office' },
    { text: 'Age', value: 'age' },
    { text: 'Date', value: 'date' },
    { text: 'Sallary', value: 'salary' }
  ]
  displayedColumns: string[] = []
  dataSource = new MatTableDataSource(tableData);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    public dialogCreateUser: MatDialog
  ) { }

  ngOnInit(): void {
    this.displayedColumns = this.matTable.map(x => x.value)
  }

  openDialog(): void {
    const dialogRef = this.dialogCreateUser.open(DialogCreateUserComponent, {
      width: '899px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }

}
