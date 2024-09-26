import {User} from "./user.model";

export class EmployeeStatistics{
  private vacationRequestNumber: number;
  private leaveRequestNumber: number;

  constructor(vacationRequestNumber:number = 0,leaveRequestNumber:number=0){
    this.vacationRequestNumber = vacationRequestNumber;
    this.leaveRequestNumber = leaveRequestNumber;
  }

  getVacationRequestNumber(): number {
    return this.vacationRequestNumber;
  }

  setVacationRequestNumber(vacationRequestNumber: number): void {
    this.vacationRequestNumber = vacationRequestNumber;
  }

  getLeaveRequestNumber(): number {
    return this.leaveRequestNumber;
  }

  setLeaveRequestNumber(leaveRequestNumber: number): void {
    this.leaveRequestNumber = leaveRequestNumber;
  }
}

export class EmployeeDetails {
  private reportingTo: string;
  private corporateLevel: number;
  private lifeTime: number;
  private vacationDaysLeft: number;
  private sickDaysLeft: number;

  constructor(
    reportingTo: string="",
    corporateLevel: number=0,
    lifeTime: number=0,
    vacationDaysLeft: number=0,
    sickDaysLeft: number=0
  ) {
    this.reportingTo = reportingTo;
    this.corporateLevel = corporateLevel;
    this.lifeTime = lifeTime;
    this.vacationDaysLeft = vacationDaysLeft;
    this.sickDaysLeft = sickDaysLeft;
  }

  getReportingTo(): string {
    return this.reportingTo;
  }

  setReportingTo(reportingTo: string): void {
    this.reportingTo = reportingTo;
  }

  getCorporateLevel(): number {
    return this.corporateLevel;
  }

  setCorporateLevel(corporateLevel: number): void {
    this.corporateLevel = corporateLevel;
  }

  getLifeTime(): number {
    return this.lifeTime;
  }

  setLifeTime(lifeTime: number): void {
    this.lifeTime = lifeTime;
  }

  getVacationDaysLeft(): number {
    return this.vacationDaysLeft;
  }

  setVacationDaysLeft(vacationDaysLeft: number): void {
    this.vacationDaysLeft = vacationDaysLeft;
  }

  getSickDaysLeft(): number {
    return this.sickDaysLeft;
  }

  setSickDaysLeft(sickDaysLeft: number): void {
    this.sickDaysLeft = sickDaysLeft;
  }
}

export class Employee extends User {
  private details: EmployeeDetails;
  private statistics: EmployeeStatistics;
  private salary: number;

  constructor(
    firstName: string="",
    lastName: string="",
    imagePath: string="",
    salary: number=0,
    jobTitle: string="",
    details: EmployeeDetails = new EmployeeDetails(),
    statistics: EmployeeStatistics = new EmployeeStatistics(),
  ) {
    super(firstName, lastName, jobTitle, imagePath);
    this.details = details;
    this.statistics = statistics;
    this.salary=salary;
  }
  //employee
  getSalary(): number {
    return this.salary;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  //EmployeeStatistics
  getVacationRequestNumber(): number {
    return this.statistics.getVacationRequestNumber();
  }

  setVacationRequestNumber(vacationRequestNumber: number): void {
    this.statistics.setVacationRequestNumber(vacationRequestNumber);
  }

  getLeaveRequestNumber(): number {
    return this.statistics.getLeaveRequestNumber();
  }

  setLeaveRequestNumber(leaveRequestNumber: number): void {
    this.statistics.setLeaveRequestNumber(leaveRequestNumber);
  }


  //EmployeeDetails
  getDetails(){
    return this.details;
  }

  getstatistics(){
    return this.statistics;
  }

  getReportingTo(): string {
    return this.details.getReportingTo();
  }

  setReportingTo(reportingTo: string): void {
    this.details.setReportingTo(reportingTo);
  }

  getCorporateLevel(): number {
    return this.details.getCorporateLevel();
  }

  setCorporateLevel(corporateLevel: number): void {
    this.details.setCorporateLevel(corporateLevel);
  }

  getLifeTime(): number {
    return this.details.getLifeTime();
  }

  setLifeTime(lifeTime: number): void {
    this.details.setLifeTime(lifeTime);
  }

  getVacationDaysLeft(): number {
    return this.details.getVacationDaysLeft();
  }

  setVacationDaysLeft(vacationDaysLeft: number): void {
    this.details.setVacationDaysLeft(vacationDaysLeft);
  }

  getSickDaysLeft(): number {
    return this.details.getSickDaysLeft();
  }

  setSickDaysLeft(sickDaysLeft: number): void {
    this.details.setSickDaysLeft(sickDaysLeft);
  }
}
