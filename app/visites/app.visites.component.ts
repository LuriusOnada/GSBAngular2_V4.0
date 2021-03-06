import { Component } from '@angular/core';
import { DataService} from '../services/app.service.data';
import{ Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'my-visites',
  templateUrl: 'app.visites.html'
  
})
export class VisitesComponent {
  nomMedecin : string;
  lesMedecins : Array<any>; 
  medecin : any;
  gestionMajRapport : boolean = false;
  gestionAjoutRapport : boolean = false;
  dateVisite : Date;
  dateNouveauRapport :Date;
  nomMedicament : string;
  lesMedicaments : Array<any>; 
  medicamentsSelect : Array<any> = new Array();
  medicamentSelect : any;
  lesRapports : Array<any>;
  qtes : Array<number> = [1,2,3,4,5];
  qteSelect :number;
  titre : string; 
  rapport : any;
  motif : string;
  bilan : string;
  afficherRapport : boolean = false;
 messageMAJ : string ="";
  messageEnregistrement : string =""
  typeMessage : string ="";

  constructor(private dataService : DataService)
  {

  }
  
  chargerMedecins()
  {
    // Compléter en appelant la méthode chargerMedecins de DataService en s'inspirant de la partie 3
    this.dataService.chargerMedecins(this.nomMedecin).subscribe(
      (data)=>
      {
        this.lesMedecins = data;
      },(error)=>{});
  }
  
  selectionnerMedecin(med) : void
  {
        // Compléter en s'inspirant de la partie 3
  }
  
  modifierRapport(): void
  {
       // cette méthode initialise les champs
  }
  
  chargerVisites() : void
  {
      // cette méthode appelle la méthode chargerRapportsAunedate de DataService
  } 
  
  selectionner(rapport)
  {
       // compléter pour faire apparaître le rapport
  }
  
  valider(): void
  {
      // appelle majRapport de DataService 
      // dans le cas favorable, affiche un message de succès avec des classes CSS "alert alert-success"
      // et dans le cas défavorable, affiche un message avec des classes CSS "alert alert-danger"
  }
  
  initNouveauRapport()
  {
      this.nomMedecin ="";
      // compléter initialise les champ losque l'on ajoute un nouveau rapport
  }
  
  ajouterRapport(): void
  {
    this.initNouveauRapport();
    this.gestionAjoutRapport = true;
    this.gestionMajRapport = false;
  }

  chargerMedicaments()
  {
    // appelle la méthode chargerMedicaments du DataService
  }
  
  choisirMedicament(medicament : any)
  {
    // permet d'afficher le médicament
  }
  
  ajouter(): void
  {
    this.medicamentsSelect.push({id : this.medicamentSelect.id, nom : 
    this.medicamentSelect.nomCommercial, qte : this.qteSelect});
    this.nomMedicament ="";
  }

  retirer() : void
  {
    this.medicamentsSelect.pop();
  }

  enregistrer(): void
  {
  // appelle la méthode enregistrerRapport du dataService
  // dans le cas favorable, affiche un message de succès avec des classes CSS "alert alert-success"
  // et dans le cas défavorable, affiche un message avec des classes CSS "alert alert-danger"
  }
  
}
