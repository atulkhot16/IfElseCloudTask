import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-graph',
  templateUrl: './doughnut-graph.component.html',
  styleUrls: ['./doughnut-graph.component.scss']
})
export class DoughnutGraphComponent implements OnInit {

  
  doughnutData : any;
  doughnutOptions : any;


  ngOnInit(){
    const documentStyle2 = getComputedStyle(document.documentElement);
        const textColor2 = documentStyle2.getPropertyValue('--text-color');

        this.doughnutData = {
            labels: ['Shopping', 'Workspace', 'Food', 'Entertainments'],
            datasets: [
                {
                    data: [20, 40, 30, 20],
                    backgroundColor: [documentStyle2.getPropertyValue('--blue-800'), documentStyle2.getPropertyValue('--blue-400'), documentStyle2.getPropertyValue('--blue-300'), documentStyle2.getPropertyValue('--blue-100')],
                    hoverBackgroundColor: [documentStyle2.getPropertyValue('--blue-800'), documentStyle2.getPropertyValue('--blue-400'), documentStyle2.getPropertyValue('--blue-300'),documentStyle2.getPropertyValue('--blue-100')]
                }
            ]
        };
        this.doughnutOptions = {
            cutout: '65%',
            plugins: {
                legend: {
                    position : 'right',
                    // display : false,
                    labels: {
                        color: textColor2,
                        usePointStyle: true,
                        font : {
                            size : 10
                        }
                        
                    }
                }
            },
            
        };
  }
}
  
