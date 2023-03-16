import { Component,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  editProfileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    domain: new FormControl('', [Validators.required,Validators.email]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.maxLength(10),Validators.pattern('([0-9]{11}$)|(^[7-9][0-9]{9}$)')]),
    location: new FormControl('', [])
  })

  constructor(public dialogRef: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.editProfileForm.get('name')?.setValue(data.name);
    this.editProfileForm.get('name')?.updateValueAndValidity();
    this.editProfileForm.get('domain')?.setValue(data.domain);
    this.editProfileForm.get('domain')?.updateValueAndValidity();
    this.editProfileForm.get('dob')?.setValue(data.dob);
    this.editProfileForm.get('dob')?.updateValueAndValidity();
    this.editProfileForm.get('gender')?.setValue(data.gender);
    this.editProfileForm.get('gender')?.updateValueAndValidity();
    this.editProfileForm.get('phone')?.setValue(data.phone);
    this.editProfileForm.get('phone')?.updateValueAndValidity();
    this.editProfileForm.get('location')?.setValue(data.location);
    this.editProfileForm.get('location')?.updateValueAndValidity();
  }

  updatefield(){
    if(this.editProfileForm.valid){
      this.dialogRef.close(this.editProfileForm.value);
    }
  }
}
