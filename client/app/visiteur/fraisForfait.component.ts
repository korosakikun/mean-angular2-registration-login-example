import { Component } from '@angular/core';
import { User } from '../_models';

import { ficheService, AlertService, UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'fraisForfait.component.html'
})

export class fraisForfaitComponent {
  currentUser: User;
  ficheDeFrais: any;
  types: any = [
    {
      nom: "restaurant",
      montant: 40
    }, {
      nom: "hotel",
      montant: 60
    }, {
      nom: 'mixte',
      montant: 100
    }
  ];
  montantTotal: number = 0;
  model: any = {};
  constructor(
    private ficheService: ficheService,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.currentUser = this.userService.user;
    this.types = [
      {
        libelle: "restaurant",
        montant_unitaire: 40
      }, {
        libelle: "hotel",
        montant_unitaire: 60
      }, {
        libelle: 'mixte',
        montant_unitaire: 100
      }
    ]
  }

  changeTotal() {
    if (this.model.quantite) {
      this.montantTotal = this.model.quantite * this.model.type.montant_unitaire;
    }
  }

  ajoutFrais() {
    this.ficheService.ajoutFrais(this.currentUser._id, this.model)
      .subscribe( data => {
        this.alertService.success('frais rajouter à ce mois', true);
      }, error => {
        this.alertService.error(error);
      })
  }

}
