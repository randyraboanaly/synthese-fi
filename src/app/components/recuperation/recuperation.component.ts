import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperation',
  templateUrl: './recuperation.component.html'
})
export class RecuperationComponent {

  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/recuperation']);
    }
    else{
      this.router.navigate(['/accueil']);
    }
  }

}
