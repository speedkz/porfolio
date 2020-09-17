import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tableData } from 'app/pages/users/users-management/data';

interface MatTable {
  text: string
  value: string
}

@Component({
  selector: 'app-bc-dv-my-report',
  templateUrl: './bc-dv-my-report.component.html',
  styleUrls: ['./bc-dv-my-report.component.scss']
})
export class BcDvMyReportComponent implements OnInit {

  matTable: MatTable[] = [
    { text: 'Mã báo cáo', value: 'name' },
    { text: 'Sở tài chính tỉnh/ thành phố', value: 'position' },
    { text: 'Đơn vị hành chính cấp Huyện', value: 'office' },
    { text: 'Đơn vị hành chính cấp Xã', value: 'age' },
    { text: 'Đơn vị thuộc cấp Huyện', value: 'date' },
    { text: 'Thời hạn báo cáo', value: 'salary' },
    { text: 'Tháng', value: 'test1' },
    { text: 'Năm', value: 'test2' },
    { text: 'Đính chính', value: 'test3' },
    { text: 'Tổng hợp', value: 'test4' },
    { text: 'Trạng thái', value: 'test5' },
    { text: 'Người tạo', value: 'test6' },
    { text: 'Cập nhật', value: 'test7' },
    { text: 'Thao tác', value: 'action' },
  ]
  displayedColumns: string[] = ["select"]
  dataSource = new MatTableDataSource(tableData);
  selection = new SelectionModel<MatTable>(true, []);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  constructor(
  ) { }

  ngOnInit(): void {
    this.displayedColumns = [...this.displayedColumns, ...this.matTable.map(x => x.value)]
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: any) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
