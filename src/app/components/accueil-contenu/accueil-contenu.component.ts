import { Component } from '@angular/core';

import { Chart } from 'chart.js/auto';

import { ModalService } from '../../_modal';

@Component({
  selector: 'app-accueil-contenu',
  templateUrl: './accueil-contenu.component.html',
  styleUrls: ['./accueil-contenu.component.css']
})

export class AccueilContenuComponent {

  public chartBarVertical: any;
  public chartBarHorizontal: any;
  public bodyText!: string

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chartBarHorizontal = new Chart("chartBarHorizontal", {
      data: {
        labels: ['2023', '2022'],
        datasets: [
          {
            type: 'bar', //bar, pie, line, polarArea, radar
            indexAxis: 'y',
            label: "Légende 1",
            data: ['100', '200'],
            backgroundColor: "#d63384"
          },
          {
            type: 'bar', //bar, pie, line, polarArea, radar
            indexAxis: 'y',
            label: "Légende 2",
            data: ['150', '175'],
            backgroundColor: "#dc3545"
          }
        ]
      },
      options: {
        aspectRatio: 4.5,
        onClick: (e) => {
          const res = this.chartBarHorizontal.getElementsAtEventForMode(
            e,
            'nearest',
            { intersect: true },
            true
          );
          this.bodyText = this.chartBarHorizontal.data.labels[res[0].index];
          this.openModal("modalChart");
        }
      }
    });
    this.chartBarVertical = new Chart("chartBarVertical", {
      data: {
        labels: ['2023', '2022'],
        datasets: [
          {
            type: 'bar', //bar, pie, line, polarArea, radar
            indexAxis: 'x',
            label: "Légende 1",
            data: ['100', '200'],
            backgroundColor: "#fd7e14"
          },
          {
            type: 'bar', //bar, pie, line, polarArea, radar
            indexAxis: 'x',
            label: "Légende 2",
            data: ['150', '175'],
            backgroundColor: "#ffc107"
          }
        ]
      },
      options: {
        aspectRatio: 4.5,
      },
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}