import { LoginDataService } from './../login-data.service';
import { LoginDialogeComponent } from './../login-dialoge/login-dialoge.component';
import {
  Component,
  OnInit
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
loginData;

  constructor(private router: Router,
              private loginDataService: LoginDataService,
              public dialog: MatDialog) {}

              openDialog(): void {
                const dialogRef = this.dialog.open(LoginDialogeComponent, {
                  width: '500px',
                  height: 'auto'
                });

                dialogRef.afterClosed().subscribe(result => {
                    if (result){
                        this.loginData = result;
                        console.log(this.loginData);
                        JSON.stringify(this.loginData);
                        console.log(this.loginData);
                        console.log('The dialog was closed ' + result);
                    }


                });
              }


  ngOnInit(): void {}

  home(): any {
    this.router.navigate(['/home']);
  }
  aboutUs(): any {
    this.router.navigate(['/about-us']);
  }
  gallery(): any {
    this.router.navigate(['/gallery']);
  }
  logout(): any {
      this.loginData = '';
      this.router.navigate(['/home']);
  }

}
