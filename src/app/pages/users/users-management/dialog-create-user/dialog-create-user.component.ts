import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface CreateUser {
  email: string
  fullname: string
  phone: string
  gender: boolean
}

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent implements OnInit {
  formFields: Array<any> = [
    {
      formControl: new FormControl('', [Validators.required, Validators.email]),
      label: "Enter your email",
      placeholder: "pat@example.com",
      model: 'email'
    },
    {
      formControl: new FormControl('', [Validators.required]),
      label: "Enter your full name",
      placeholder: "",
      model: 'fullname'
    },
    {
      formControl: new FormControl('', [Validators.required]),
      label: "Enter your phone",
      placeholder: "",
      model: 'phone'
    },
  ]

  user = {} as CreateUser

  constructor(
    public dialogRef: MatDialogRef<DialogCreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage(validator) {
    if (validator.hasError('required')) {
      return 'You must enter a value';
    }

    return validator.hasError('email') ? 'Not a valid email' : '';
  }
}
