import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  deconnexion(): void {
    console.log("deconnexion");
    this.storageService.signOut();
    this.router.navigate(['/login']);
  }

}
