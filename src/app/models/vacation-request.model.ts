import {Employee} from "./employee.model";
import {DatePipe} from "@angular/common";

export class VacationRequest {
  private employee: Employee;
  private type: string;
  private from: Date;
  private to: Date;
  private duration: string;
  private submittedOn: Date;
  private isApproved: boolean;
  private approvedBy: Employee | null; // Allow null if not approved
  private currentlyAt: Employee;

  constructor(
    employee: Employee = new Employee(),
    type: string = "",
    from: Date = new Date(),
    to: Date = new Date(),
    duration: string = "",
    submittedOn: Date = new Date(),
    isApproved: boolean = false,
    approvedBy: Employee | null = null, // Allow null if not approved
    currentlyAt: Employee = new Employee()
  ) {
    this.employee = employee;
    this.type = type;
    this.from = from;
    this.to = to;
    this.duration = duration;
    this.submittedOn = submittedOn;
    this.isApproved = isApproved;
    this.approvedBy = approvedBy;
    this.currentlyAt = currentlyAt;
  }

  public getDurationFormatted(){
    const datePipe = new DatePipe('en-US');
    return `${this.duration} (${datePipe.transform(this.from,'d/M/yyyy')} - ${datePipe.transform(this.to,'d/M/yyyy')})`;
  }

  public getEmployee(): Employee {
    return this.employee;
  }

  public setEmployee(employee: Employee): void {
    this.employee = employee;
  }

  public getType(): string {
    return this.type;
  }

  public setType(type: string): void {
    this.type = type;
  }

  public getApprovedBy(): Employee | null {
    return this.approvedBy;
  }

  public setApprovedBy(approvedBy: Employee | null): void {
    this.approvedBy = approvedBy;
  }

  public getFrom(): Date {
    return this.from;
  }

  public setFrom(from: Date): void {
    this.from = from;
  }

  public getTo(): Date {
    return this.to;
  }

  public setTo(to: Date): void {
    this.to = to;
  }

  public getDuration(): string {
    return this.duration;
  }

  public setDuration(duration: string): void {
    this.duration = duration;
  }

  public getSubmittedOn(): Date {
    return this.submittedOn;
  }

  public getSubmittedOnAsString():string{
    const datePipe = new DatePipe("en-US");
     return datePipe.transform(this.getSubmittedOn(),"d/M/yyyy") || "";
  }

  public setSubmittedOn(submittedOn: Date): void {
    this.submittedOn = submittedOn;
  }

  public getCurrentlyAt(): Employee {
    return this.currentlyAt;
  }

  public setCurrentlyAt(currentlyAt: Employee): void {
    this.currentlyAt = currentlyAt;
  }
}
