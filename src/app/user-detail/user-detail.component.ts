import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiHelperService } from '../utils/api-helper.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  isLoading = false;
  employee: any;
  constructor(private route: ActivatedRoute,private apiHealper: ApiHelperService) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.loadData(params);
    });
  }
  loadData(params: any): void {
    const userId = params.userid;
    this.isLoading = false;
    this.apiHealper.getEmpoyee(userId).subscribe(res => {
      this.isLoading = true;
      if (res) {
        this.employee = res;
      }
      this.isLoading = true;
    });
  }
}
