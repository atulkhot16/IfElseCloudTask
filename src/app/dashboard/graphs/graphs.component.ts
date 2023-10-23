import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

    data: any;
    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['01', '05', '10', '15', '20', '25', '30'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [2400, 3400, 2500, 3000, 3000, 2200,1300],
                    fill: false,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--orange-300'),
                },
                {
                    label: 'Second Dataset',
                    data: [200,1200,900,2100,2500,3500,1500],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--blue-300'),
                    tension: 0.4,
                    backgroundColor: 'rgba(71, 105, 228, 0.1)'
                }
            ]
        };
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: textColor,
                        display: false,
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        display: false,
                        style: [5, 5],
                        drawBorder: true,
                        borderDash: [5, 5],
                        borderWidth : 1
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        callback: function (value: any) {
                            if (value === 0) {
                                return value;
                            } else {
                                const suffixes = ['', 'k', 'k', 'k', 'k', 'k'];
                                const suffixIndex = Math.floor(value / 1000);
                                return value / 1000 + suffixes[suffixIndex];
                            }
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        display: true,
                        borderDash: [5, 5],
                        borderWidth : 1
                        
                    },
                },



            }
        };










    }
}













