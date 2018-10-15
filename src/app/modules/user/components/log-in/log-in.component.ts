import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  logIn (form) {
     this.authService.logIn(form.value).then(value => {
       console.log(value);
     });
  }

}
