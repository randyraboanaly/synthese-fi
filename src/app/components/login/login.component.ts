import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { StorageService } from '../../services/storage.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if(token){
        this.storageService.saveUser(token);
        this.router.navigate(['/accueil']);
      }
      else{
        if (!this.storageService.isLoggedIn()) {
          this.router.navigate(['/login']);
        }
        else {
          this.router.navigate(['/accueil']);
        }
      }
  });
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.loginService.login(username, password).subscribe({
        next: (data) => {
          this.storageService.saveUser(data);
          this.router.navigate(['/accueil']);
        },
        error: error => {

        }
      });
  }
}
