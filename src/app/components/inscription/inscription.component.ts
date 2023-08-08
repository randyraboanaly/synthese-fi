import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { UtilisateurService } from '../../services/utilisateur.service';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html'
})
export class InscriptionComponent {

  form: any = {
    username: null,
    password: null,
    passwordConfirm: null,
    nom: null,
    prenom: null,
    email: null,
    fonction: null,
    telephone: null,
  };

  constructor(
    private storageService: StorageService,
    private utilisateurService: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/inscription']);
    }
    else {
      this.router.navigate(['/accueil']);
    }
  }

  onSubmit(): void {

    const user = new Utilisateur;

    const {
      nom,
      prenom,
      email,
      telephone,
      fonction,
      username,
      password,
      passwordConfirm
    } = this.form;

    user.username = this.form.username;
    user.password = this.form.password;
    user.passwordConfirmation = this.form.passwordConfirm;
    user.nom = this.form.nom;
    user.prenom = this.form.prenom;
    user.email = this.form.email;
    user.fonction = this.form.fonction;
    user.telephone = this.form.telephone;

    this.utilisateurService.saveUtilisateur(user).subscribe({
      next: (data) => {
        alert('Inscription réussie');
      },
      error: error => {
        alert("Echec de l'inscription");
      }
    });
  }

}
