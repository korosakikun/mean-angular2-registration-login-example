import { Component } from '@angular/core';
import { User } from '../_models';

import { ficheService, AlertService, UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'comptable.component.html'
})

export class ComptableComponent {
  currentUser: User;
  ficheDeFrais: any;
  constructor(
    private ficheService: ficheService,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.currentUser = this.userService.user;
    this.getAllFiches();
  }
  //on récupere les fiche de tout les visiteur
  getAllFiches() {
    this.ficheService.getAll().subscribe(
      data => {
        this.ficheDeFrais = data;
      }
    )
  }

  // changerEtatFiches(ficheId: string, etat: string) {
  //   this.ficheService.changeStateFiches(ficheId, etat).subscribe( data => {
  //     console.log("réussi")
  //   }, error => {
  //     this.alertService.error(error);
  //   })
  // }

  // on change l'état d'un frais pour le passer a valider ou refuser
  changerEtatFrais(ficheId: string, fraisId: string, etat: string) {
    this.ficheService.changeStateFrais(ficheId, fraisId, etat).subscribe( data => {
      this.alertService.success("Etat du frais changer", true);
    }, error => {
      this.alertService.error(error);
    })
  }
}
