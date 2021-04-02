import { LoginDataService } from './../login-data.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialoge',
  templateUrl: './login-dialoge.component.html',
  styleUrls: ['./login-dialoge.component.scss']
})
export class LoginDialogeComponent implements OnInit {
    myForm: FormGroup;

    constructor(private fb: FormBuilder,
                private loginDataService: LoginDataService,
                public dialogRef: MatDialogRef<LoginDialogeComponent>,
                @Inject(MAT_DIALOG_DATA) p) {}

      onNoClick(): void {
        this.dialogRef.close(this.loginDataService.loginData);
      }
      ngOnInit(): void{
        this.myFormSet();
      }

      myFormSet(): any {
        this.myForm = this.fb.group({
            id: ['',[Validators.required, Validators.email]],
            password: ['',[Validators.required,]]
        });
      }
      submit(): any {
        localStorage.setItem(this.myForm.value.id, JSON.stringify(this.myForm.value));
        JSON.parse(localStorage.getItem(this.myForm.value.id));
        this.loginDataService.loginData = this.myForm.value.id;
        this.allStorage();
        this.dialogRef.close(this.loginDataService.loginData);
      }

      OnRegister(): any{

      }

    allStorage(): any {
        const values = [];
        const keys = Object.keys(localStorage);
        let  i = keys.length;

        while ( i-- ) {
            console.log(values.push( localStorage.getItem(keys[i]) ));
        }
        console.log(values);
        return values;
    }

}
