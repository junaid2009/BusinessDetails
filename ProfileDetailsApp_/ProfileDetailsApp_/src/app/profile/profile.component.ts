import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  profileDetails:any;
  constructor(public dialog: MatDialog, private profileService:ProfileService) {
    this.profileDetails = this.profileService.fetchDetails();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: this.profileDetails,
      width:'40%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.profileDetails = result;
      }
    });
  }

}
