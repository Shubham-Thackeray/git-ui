import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ChartComponent,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
  grid: any;
  stroke: any;
  plotOptions: any;
};
type HeatmapValue = { date: Date; count: number; name: string };
@Component({
  selector: "app-calender",
  templateUrl: "./calender.component.html",
  styleUrls: ["./calender.component.scss"],
})
export class CalenderComponent {
  @ViewChild("chart", { static: true }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  months = [
    "JAN",
    "FEB",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOMBER",
    "NOVENMBER",
    "DECEMBER",
  ];

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "monday",
          data: this.generateData(52, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "",
          data: this.generateData(52, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "wednsday",
          data: this.generateData(52, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "",
          data: this.generateData(52, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "friday",
          data: this.generateData(52, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "",
          data: this.generateData(52, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "",
          data: this.generateData(52, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 200,
        type: "heatmap",
      },
      // stroke: {
      //   width: 2
      // },
      dataLabels: {
        enabled: false,
      },

      colors: ["#216E3A"],
      title: {
        text: "",
      },
      grid: {
        padding: {
          right: 10,
        },
      },
      plotOptions: {
        heatmap: {
          radius: 15,
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          distributed: false,
          useFillColorAsStroke: false,
          // colorScale: {
          //   ranges: [{
          //       from: 0,
          //       to: 100,
          //       color: undefined,
          //       foreColor: undefined,
          //       name: undefined,
          //   }],
          //   inverse: false,
          //   min: undefined,
          //   max: undefined
          // },
        },
      },
    };
  }

  generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "";
      //  this.months[Math.floor(i/5)].toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
