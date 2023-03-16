import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const profileDetails={
  name:" Shaikh Junaid",
  domain:"www.openai.com",
  gender:"male",
  dob:new Date(2021, 12, 13),
  phone:"8446225225",
  location:"Beed"
}


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 
  constructor(private http:HttpClient) { }

  public fetchDetails(){
    return profileDetails;
  }

  public updateDetails(obj:any){
    // service call to update backend
    return this.http.post('URL',obj)
  }



}
