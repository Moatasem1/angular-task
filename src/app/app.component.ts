import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faUser,faChartLine,faListCheck,faMagnifyingGlass,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FormsModule} from "@angular/forms";
import {HighlightPipe} from "./pipes/highlight.pipe";
import {Employee,EmployeeDetails,EmployeeStatistics} from "./models/employee.model";
import {VacationRequest} from "./models/vacation-request.model";

interface IEmployeeDetailsLabels{
  icon: any;
  label: string;
  value: string | number;
  prefix: string;
  suffix: string;
}

interface IemployeeStatisticsLabels{
    label: string;
    value: number;
}

interface ISliderData{
  imagePath: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,CommonModule,FormsModule,HighlightPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {

  //icons
  faUser = faUser;
  faChartLine = faChartLine;
  faListCheck =faListCheck;
  faMagnifyingGlass = faMagnifyingGlass;
  faAngleRight =faAngleRight;

  //main attributes
  employee:Employee;
  employeeDetailsLabels: IEmployeeDetailsLabels[];
  employeeStatisticsLabels: IemployeeStatisticsLabels[];
  newsSliderData: ISliderData[];
  vacationRequests:VacationRequest[];
  filteredVacationRequest: VacationRequest[];

  constructor(){
    this.employee = new Employee();
    this.employeeDetailsLabels = [
      // Ensure that this array is in the same order as the attributes of the EmployeeDetails class.
      {icon: this.faUser,label: "Reporting To",value: "" ,prefix:"",suffix:""},
      {icon: this.faChartLine,label: "Corporate Level",value:""  ,prefix:"level",suffix:""}
    ];

    this.employeeStatisticsLabels=[
      {label: "vacation requests",value: 0},
      {label: "leave requests",value: 0}
    ];

    this.newsSliderData = [{imagePath: "",title: "",desc:""}];

    this.vacationRequests = [];
    this.filteredVacationRequest= this.vacationRequests;
  }

  ngOnInit(){
    this.fetchEmployeeData();
    this.fillLabels(this.employee.getstatistics(),this.employeeStatisticsLabels);
    this.fillLabels(this.employee.getDetails(),this.employeeDetailsLabels);
    this.fetchNewsSliderData();
    this.fetchVacationsRequests();
  }

  //label should has value attribute
  private fillLabels(data: any, labels: any[]) {

    if(data.length < labels.length) return;

    // Convert the data object into an array of its values
    const values = Object.values(data);

    // Assign each value from the values array to the corresponding entry in the labels array
    for (let i = 0; i < labels.length; ++i) {
      labels[i].value = values[i];
    }
  }

  // assume it fetch sign in employee data
  private fetchEmployeeData(){
    const employeeStatistics = new EmployeeStatistics(10,10);
    const employeeDetails = new EmployeeDetails("Salwa Assem",10,2.5,14,3);
    this.employee = new Employee(
      "Ahamd"
      ,"Azmi",
      "https://randomuser.me/api/portraits/men/31.jpg",
      400,
      "Data Scientist",
      employeeDetails,
      employeeStatistics
    );
  }

  //assume it fetch news slider data
  private fetchNewsSliderData(){
    this.newsSliderData = [
      {
        imagePath: "https://picsum.photos/id/200/1920/1080",
        title: "Empowering Growth: Our Path Forward",
        desc: "We are excited to announce new opportunities for skill development and career growth within the company. As we strive to create a culture of continuous learning, we are implementing a range of training programs that will cater to diverse needs and interests. These programs will not only help you enhance your existing skills but also encourage you to explore new areas of knowledge and expertise. Our commitment to your professional development reflects our belief that our greatest asset is our people. We understand that in today's fast-paced work environment, staying ahead requires adaptability and innovation. Therefore, we are investing in workshops, online courses, and mentorship programs that are designed to empower you on your career journey. By equipping you with the necessary tools and resources, we aim to foster a sense of ownership over your personal and professional growth. Together, let us embark on this journey of empowerment and success, and work towards a future where every team member can reach their full potential."
      },
      {
        imagePath: "https://picsum.photos/id/236/1920/1080",
        title: "Celebrating Success: Team Achievements",
        desc: "Our team’s hard work and collaboration have led to remarkable results this quarter. Let’s take a moment to reflect on the incredible milestones we have achieved together. The dedication and commitment shown by every team member have been truly inspiring, and it is this spirit of teamwork that has propelled us to new heights. Over the past few months, we have successfully launched several projects that not only met but exceeded our clients' expectations. Each achievement is a testament to the collective effort, innovative ideas, and relentless pursuit of excellence that defines our team. As we celebrate these successes, it is essential to recognize the individual contributions that have made these accomplishments possible. Every brainstorming session, every late night, and every collaborative effort has played a pivotal role in our journey. Let us continue to support and motivate each other, pushing the boundaries of what we can achieve together. The road ahead is filled with opportunities, and I am excited to see where our hard work will take us next."
      },
      {
        imagePath: "https://picsum.photos/id/201/1920/1080",
        title: "Innovation in Action: Shaping Tomorrow",
        desc: "We’re launching new initiatives that will drive innovation and creativity in our projects. Your ideas matter, and we want to ensure that every voice is heard as we embark on this exciting journey. In a world that is constantly evolving, it is imperative that we stay ahead of the curve by embracing change and fostering a culture of creativity. Our new innovation program will encourage team members to think outside the box, challenge the status quo, and bring forth groundbreaking solutions that address our clients' needs. We believe that innovation is not just about new products or services; it's about creating an environment where creativity thrives and where everyone feels empowered to contribute. This initiative will include brainstorming sessions, hackathons, and collaborative workshops aimed at harnessing the diverse talents and perspectives within our team. By collaborating across departments, we can spark new ideas and drive transformative change. Together, let us shape a future where innovation is at the forefront of everything we do, enabling us to make a significant impact in our industry."
      }
    ];
  }

  //assume it fetch vacations requests
  private fetchVacationsRequests(){
    const vacationRequests = [
      {
        "employee": {
          "firstName": "John",
          "lastName": "Doe",
          "salary": 50000,
          "imagePath": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        "type": "Annual Leave",
        "from": "2024-09-01",
        "to": "2024-09-10",
        "duration": "10 days",
        "submittedOn": "2024-08-25",
        "isApproved": true,
        "approvedBy": {
          "firstName": "Jane",
          "lastName": "Smith"
        },
        "currentlyAt": {
          "firstName": "Michael",
          "lastName": "Johnson"
        }
      },
      {
        "employee": {
          "firstName": "Alice",
          "lastName": "Brown",
          "salary": 55000,
          "imagePath": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        "type": "Sick Leave",
        "from": "2024-09-05",
        "to": "2024-09-07",
        "duration": "3 days",
        "submittedOn": "2024-09-01",
        "isApproved": false,
        "approvedBy": null,
        "currentlyAt": {
          "firstName": "Sarah",
          "lastName": "Wilson"
        }
      },
      {
        "employee": {
          "firstName": "David",
          "lastName": "Smith",
          "salary": 60000,
          "imagePath": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "type": "Annual Leave",
        "from": "2024-09-15",
        "to": "2024-09-20",
        "duration": "5 days",
        "submittedOn": "2024-09-10",
        "isApproved": true,
        "approvedBy": {
          "firstName": "Lisa",
          "lastName": "Taylor"
        },
        "currentlyAt": {
          "firstName": "James",
          "lastName": "Davis"
        }
      },
      {
        "employee": {
          "firstName": "Moatasem",
          "lastName": "AlNaimat",
          "salary": 3000,
          "imagePath": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        "type": "Annual Leave",
        "from": "2024-09-15",
        "to": "2024-09-20",
        "duration": "5 days",
        "submittedOn": "2024-09-10",
        "isApproved": true,
        "approvedBy": {
          "firstName": "Lisa",
          "lastName": "Taylor"
        },
        "currentlyAt": {
          "firstName": "James",
          "lastName": "Davis"
        }
      },
    ];

    vacationRequests.forEach(vacationRequestItem=>{
      const employee = new Employee(
        vacationRequestItem.employee.firstName,
        vacationRequestItem.employee.lastName,
        vacationRequestItem.employee.imagePath,
        vacationRequestItem.employee.salary,
      );
      const approvedBy = new Employee();
      if(vacationRequestItem.isApproved && vacationRequestItem.approvedBy){
        approvedBy.setFirstName(vacationRequestItem.approvedBy.firstName);
        approvedBy.setLastName(vacationRequestItem.approvedBy.lastName);
      }
      const currentlyAt = new Employee(
        vacationRequestItem.currentlyAt.firstName,
        vacationRequestItem.currentlyAt.lastName
      );
      let vacationRequest = new VacationRequest(
        employee,
        vacationRequestItem.type,
        new Date(vacationRequestItem.from),
        new Date(vacationRequestItem.to),
        vacationRequestItem.duration,
        new Date(vacationRequestItem.submittedOn),
        vacationRequestItem.isApproved,
        approvedBy,
        currentlyAt
      );

      this.vacationRequests.push(vacationRequest);
    });
  }

  updateVacationRequests(searchQuery:string){
    const query = searchQuery.trim().toLowerCase();

    this.filteredVacationRequest = this.vacationRequests.filter(item =>
      item.getEmployee().getFullName().toLowerCase().includes(query) ||
      item.getSubmittedOnAsString().toLowerCase().includes(query) ||
      item.getDurationFormatted().toString().toLowerCase().includes(query) ||
      (item.getEmployee().getSalary().toString() +" AED".toLowerCase()).includes(query)
    );
  }
}
