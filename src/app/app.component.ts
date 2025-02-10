import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Highcharts from 'highcharts';
import HighchartsWaterfall from 'highcharts/modules/waterfall';

// Initialize the waterfall module
HighchartsWaterfall(Highcharts);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-highcharts';

  
  // Create the chart
  Highcharts.chart('container', {
    chart: {
        type: 'waterfall'
    },
    title: {
        text: 'Waterfall Chart Example'
    },
    series: [{
        data: [
            { name: 'Start', y: 100 },
            { name: 'Increase', y: 60 },
            { name: 'Decrease', y: -30 },
            { name: 'End', isIntermediateSum: true },
            { name: 'Final', y: 130 }
        ]
    }]
  });

}
