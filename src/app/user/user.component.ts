import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { forkJoin } from 'rxjs';
import * as _ from 'lodash';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age'];
  dataSource: MatTableDataSource<User>;

  constructor(private userService: UserService) {

    const userNames = this.userService.getUserName();
    const userAges = this.userService.getUserAge();

    forkJoin([userNames, userAges]).subscribe(res => {
      const merged1 = _.map(res[0], item => {
        return _.assign(item, _.find(res[1], ['id', item.id]));
      });
      const merged2 = _.map(res[1], item => {
        return _.assign(_.find(res[0], ['id', item.id]), item);
      });
      const users = _.union(merged1, merged2);
      this.dataSource = new MatTableDataSource(users);
    });
  }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
