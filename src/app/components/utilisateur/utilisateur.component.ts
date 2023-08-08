import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../../models/utilisateur';
import { UtilisateurService } from '../../services/utilisateur.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html'
})
export class UtilisateurComponent implements OnInit {

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router,
    private storageService: StorageService
  ) { }

  utilisateurs!: Utilisateur[];
  utilisateur: Utilisateur = new Utilisateur();

  ngOnInit() {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    else {
      this.utilisateurService.getUtilisateurs().subscribe(data => {
        this.utilisateurs = data;
      })
    }
  }

}