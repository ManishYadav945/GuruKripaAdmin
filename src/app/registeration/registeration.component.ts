import { Component, OnInit } from '@angular/core';
import { RegistrationDocumentsService } from 'src/app/services/registration-documents.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
})
export class RegisterationComponent implements OnInit {
  studentData: any = {
    id: '',
    name: '',
    email: '',
    mobileNo: '',
    registrationId: '',
  };
  sdata: any;
  constructor(private stu: RegistrationDocumentsService) {}

  ngOnInit(): void {
    this.stu.getStudent().subscribe(
      (data) => {
        console.log(data);
        this.sdata = data;
      },
      (error) => {}
    );
  }
  postdata() {
    this.stu.postStudent(this.studentData).subscribe((data) => {
      this.studentData = {
        name: '',
        address: '',
        rollno: '',
        email: '',
      };
      this.stu.getStudent().subscribe(
        (data) => {
          console.log(data);
          this.sdata = data;
        },
        (error) => {}
      );
    });
  }
}
