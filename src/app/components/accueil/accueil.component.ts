import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html'
})
export class AccueilComponent {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/accueil']);
    }
    //this.router.navigate(['/accueil']);
  }
  deconnexion(): void {
    console.log("deconnexion");
    this.storageService.signOut();
    this.router.navigate(['/login']);
  }
}
