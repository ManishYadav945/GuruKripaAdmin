import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationDocumentsService {

  constructor(private http: HttpClient) {
    
      
}

postStudent(body:any){
  return this.http.post("http://localhost:3000/studentdata",body)
 }
getStudent(){
  return this.http.get("http://localhost:3000/registeration")
 }
}