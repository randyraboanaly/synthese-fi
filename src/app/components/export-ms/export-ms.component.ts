import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequetePms,ElementRequete } from '../../models/requetePms';
import { ExportMSService } from '../../services/exportMS.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-export-ms',
  templateUrl: './export-ms.component.html',
  styleUrls: ['./export-ms.component.css']
})
export class RequetesPilotagesMsComponent {
  constructor(
    private exportMSService: ExportMSService,
    private router: Router,
    private storageService: StorageService
  ) { }

  requetePmss!: RequetePms[];
  requetePms: RequetePms = new RequetePms();

  ngOnInit() {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    else {
      this.exportMSService.getRequetePMS().subscribe(data => {
        this.requetePmss = data;
      })
    }
  }

  lancerRequete(selectedElement: ElementRequete): void {
    if (selectedElement && selectedElement.requete) {
      alert(selectedElement.requete);
    }
  }
}
