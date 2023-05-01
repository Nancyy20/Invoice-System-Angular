import { Component } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { UserdataService } from '../Services/userdata.service';
import { CompletedBills } from '../classes/CompletedBills';
import { User } from '../classes/user';
import { DueBills } from '../classes/DueBills';
import { HttpServiceService } from '../Services/http-service.service';
import { FormControl } from '@angular/forms';
import { Observable, startWith , map} from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  Bills: any[] = [];
  name :string='';
  filterDueDate = '';
  filterStatus = '';
  filterService = '';
  Dates: string[] = [];
  CompletedBills: any[] = [];
  user12: any;
  user1: any;

  constructor(
    private userService: UsersDataService,
    private userDataService: UserdataService,
    private httpservice: HttpServiceService
  ) {}

  incomeControl = new FormControl();
  filteredValues: Observable<string[]> | undefined;

  ngOnInit() {
    this.user1 = this.userDataService.user;
    this.name = this.user1.firstname;
    for (const bill of this.user1.waterBills) {
      if (bill.amount !== 0 && bill !== null) {
        this.Bills.push({ ...bill, service: 'Water' });
        this.Dates.push(bill.date);
      }
    }
    for (const eB of this.user1.electricityBills) {
      if (eB.amount !== 0 && eB !== null)
        this.Bills.push({ ...eB, service: 'Electricity' });
        this.Dates.push(eB.date);
    }
    for (const tA of this.user1.telephoneBills) {
      if (tA.amount !== 0 && tA !== null)
        this.Bills.push({ ...tA, service: 'Telephone' });
        this.Dates.push(tA.date);
    }
    console.log(this.Bills);
    this.filteredValues = this.incomeControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value))
    );
  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Bills.filter((income) =>
      income.toLowerCase().includes(filterValue)
    );
  }

  get filteredBills() {
    return this.Bills.filter((bill) => {
      if (this.filterDueDate && bill.date !== this.filterDueDate) {
        return false; // filter out bills with different due date
      }
      if (this.filterService && bill.service !== this.filterService) {
        return false; // filter out bills with different service
      }
      if (this.filterStatus == 'Paid' && bill.status !== 'Paid') {
        return false; // filter out bills that are not completed
      }
      if (this.filterStatus == 'Due' && bill.status !== 'Due') {
        return false; // filter out bills that are completed
      }
      return true; // keep bills that pass all filters
    });
  }
}