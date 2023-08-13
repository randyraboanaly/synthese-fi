import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { RecuperationComponent } from './components/recuperation/recuperation.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { MenuComponent } from './components/menu/menu.component';
import { TabsAccueilComponent } from './components/tabs-accueil/tabs-accueil.component';
import { AnneeEnCoursComponent } from './components/annee-en-cours/annee-en-cours.component';
import { ProjectionsComponent } from './components/projections/projections.component';
import { ParametragesComponent } from './components/parametrages/parametrages.component';
import { AccueilContenuComponent } from './components/accueil-contenu/accueil-contenu.component';
import { RequetesPilotagesMsComponent } from './components/requetes-pilotages-ms/requetes-pilotages-ms.component';
import { RapportDeSituationComponent } from './components/rapport-de-situation/rapport-de-situation.component';
import { SuiviPrevisionnelComponent } from './components/suivi-previsionnel/suivi-previsionnel.component';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { NgApexchartsModule } from "ng-apexcharts";
import { ModalModule } from "./_modal/modal.module";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'recuperation', component: RecuperationComponent },
  { path: 'accueil', component: AccueilComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        InscriptionComponent,
        RecuperationComponent,
        AccueilComponent,
        UtilisateurComponent,
        MenuComponent,
        TabsAccueilComponent,
        AnneeEnCoursComponent,
        ProjectionsComponent,
        ParametragesComponent,
        AccueilContenuComponent,
        RequetesPilotagesMsComponent,
        RapportDeSituationComponent,
        SuiviPrevisionnelComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientModule,
        CanvasJSAngularChartsModule,
        NgApexchartsModule,
        ModalModule
    ]
})
export class AppModule { }
