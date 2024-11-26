import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: ProfileDetails = {
    username: 'Savaaa',
    email: 'johndoe123@gmail.com',
    tel: '123-123-123',
  }

  form = new FormGroup({
    username: new FormControl(this.profileDetails.username, [
      Validators.required,
      Validators.minLength(5)]),
    email: new FormControl(this.profileDetails.email, [
      Validators.required,
      emailValidator(DOMAINS)
    ]),
    tel: new FormControl(this.profileDetails.tel),
  })

  toggleEditMode() {
    this.showEditMode = !this.showEditMode
  }
  handleSaveProfile() {
    console.log(this.form.value);
    console.log(this.form.invalid)
    if (this.form.invalid) {
      return
    }

    this.profileDetails = this.form.value as ProfileDetails;
    this.toggleEditMode();
    console.log(this.profileDetails)
  }

  onCancel(event: Event) {
    event.preventDefault()
    console.log('On cancel Invoked')
    this.toggleEditMode()
  }
}
