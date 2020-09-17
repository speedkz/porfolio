import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  formFields: Array<any> = [
    {
      formControl: new FormControl('', [Validators.required, Validators.email]),
      label: "Enter your email",
      placeholder: "pat@example.com",
    },
    {
      formControl: new FormControl('', [Validators.required]),
      label: "Enter your full name",
      placeholder: "",
    },
    {
      formControl: new FormControl('', [Validators.required]),
      label: "Enter your phone",
      placeholder: "",
    },
  ]

  constructor(
    public dialogRef: MatDialogRef<DialogCreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
