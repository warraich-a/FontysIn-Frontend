import { UserType } from './../classes/Profile/UserType';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/Profile/User';
import { FilterService } from '../services/filter/filter.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {
  realm: string;


  years: Object[] = [
    {value: '1996', viewValue: '1996'},
    {value: '1997', viewValue: '1997'},
    {value: '1998', viewValue: '1998'},
    {value: '1999', viewValue: '1999'},
    {value: '2000', viewValue: '2000'},
    {value: '2001', viewValue: '2001'},
    {value: '2002', viewValue: '2002'},
    {value: '2003', viewValue: '2003'},
    {value: '2004', viewValue: '2004'},
    {value: '2005', viewValue: '2005'},
    {value: '2006', viewValue: '2006'},
    {value: '2007', viewValue: '2007'},
    {value: '2008', viewValue: '2008'},
    {value: '2009', viewValue: '2009'},
    {value: '2010', viewValue: '2010'},
    {value: '2011', viewValue: '2011'},
    {value: '2012', viewValue: '2012'},
    {value: '2013', viewValue: '2013'},
    {value: '2014', viewValue: '2014'},
    {value: '2015', viewValue: '2015'},
    {value: '2016', viewValue: '2016'},
    {value: '2017', viewValue: '2017'},
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'}
  ];

  departments: Object[] = [
    {value: '1', viewValue: 'ICT'},
    {value: '2', viewValue: 'Pedagogy'},
    {value: '3', viewValue: 'Buisness'},
    {value: '4', viewValue: 'Economy'}
  ];

  locations: Object[] = [
    {value: '1', viewValue: 'Venlo'},
    {value: '2', viewValue: 'Eindhoven'},
    {value: '3', viewValue: 'Tilburg'}
  ];

  
  
  StudentDisabled: boolean;
  EmployeeDisabled: boolean;


  constructor(private filterService: FilterService,
              private route: ActivatedRoute) { 
                this.StudentDisabled = false;
                this.EmployeeDisabled = false;
              }


  ngOnInit(): void { 
   }

  locationId=1;

  users: User[]; 
  user: User;



  getUsersByStudentType(){ 
    this.filterService.filterByUserType('Student').subscribe((data)=>
    {
      this.users=<User[]>data;
      this.StudentDisabled = true;
      this.EmployeeDisabled = false;
      console.log(this.users);      
    });
    
  }

  getUsersByTeacherType(){ 
    this.filterService.filterByUserType('Teacher').subscribe((data)=>
    {
      this.users=<User[]>data;
      this.StudentDisabled = false;
      this.EmployeeDisabled = true;
      console.log(this.users);      
    });
    
  }

  getUsersByFontysStaffType(){ 
    this.filterService.filterByUserType('FontysStaff').subscribe((data)=>
    {
      this.users=<User[]>data;
      this.StudentDisabled = false;
      this.EmployeeDisabled = true;
      console.log(this.users);      
    });
    
  }

  modo(){
    return this.realm;
  }

  getUsersByLocation(location){
    this.filterService.filterUserByLocation(location).subscribe((data)=>
    {
      this.users=<User[]>data; 
      console.log(this.users);      
    });
  }

  getUsersByDepartment(department){
    this.filterService.filterUserByDepartment(department).subscribe((data)=>
    {
      this.users=<User[]>data; 
      console.log(this.users);      
    });
  }

  getUsersByStudyYear(year){
    this.filterService.filterUsersByStartStudyYear(year).subscribe((data)=>
    {
     this.users=<User[]>data;
      console.log(this.users);  
      console.log(this.realm);   
    });
  }

  getUsersByWorkYear(year){
    this.filterService.filterUsersByStartWorkYear(year).subscribe((data)=>
    {
     this.users=<User[]>data;
      console.log(this.users);  
      console.log(this.realm);   
    });
  }

  real: string;
  departmentSelection: string;
  locationSelection: string;

  modoe(){
    return this.real;
  }

  foundDataByDepartment(){
    return this.departmentSelection;
  }

  foundDataByLocation(){
    return this.locationSelection;
  }

  foundDataByStartWorkYear(){
    return this.real;
  }
  

}
