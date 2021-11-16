import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { Router } from '@angular/router';
import { WebuserService } from '../components/usersform/services/webuser.service';
import { AppusersService } from '../components/usersform/services/appusers.service';
import { InventoService } from '../services/invento.service';
import { ProductService } from '../components/products/services/product.service';
import { BusineslocationService } from '../components/businesslocations/services/busineslocation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  content = 'Angular highlight text';
  users = '';
  query_conversation;
  web_users: number;
  app_users: number;
  total_users: number = 0;
  total_scan: number = 0;
  total_product: number = 0;
  total_inventory: number = 0;
  total_locations: number = 0;

  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();

  constructor(private router: Router, private webUserService: WebuserService,
    private appUserservice: AppusersService, private scanService: InventoService,
    private productService: ProductService, private locationService: BusineslocationService) { }

  ngOnInit(): void {
    this.users = `assets/images/Img1.png`;
    // console.log(this.jsonObject);
    // console.log("Total_Object = " + this.keyCount);
    this.createSvg();
    this.drawBars(this.data);
    console.log(`this is dashboard`)
    let auth = JSON.parse(localStorage.getItem(`credential`));
    console.log(auth);
    this.webUserService.getWebUsersList().subscribe(data => {
      this.web_users = Object.keys(data).length;
      console.log("Webcount: " + this.web_users);
      this.total_users = this.total_users + this.web_users;
    });
    this.appUserservice.getAppUsersList().subscribe(data => {
      this.app_users = Object.keys(data).length;
      console.log("Appcount:" + this.app_users);
      this.total_users = this.total_users + this.app_users;
    });

    this.scanService.getBarcodelist().subscribe(data => {
      this.total_scan = Object.keys(data).length;
    });
    this.productService.getProductlist().subscribe(data => {
      this.total_product = Object.keys(data).length;
    });
    this.scanService.getInventorylist().subscribe(data => {
      this.total_inventory = Object.keys(data).length;
    });
    this.locationService.getLocationlist().subscribe(data => {
      this.total_locations = Object.keys(data).length;
    })

  }

  jsonObject = {
    "detections": [
      {
        "class": "dog",
        "confidence": 99.79
      },
      {
        "class": "bicycle",
        "confidence": 98.97
      },
      {
        "class": "truck",
        "confidence": 93.95
      }
    ],
    "image": "dog.png"
  };
  keyCount = Object.keys(this.jsonObject.detections).length;


  private data = [
    { "Framework": "Web Users", "Stars": "166443", "Released": "2014" },
    { "Framework": "App Users", "Stars": "150793", "Released": "2013" },
    { "Framework": "Category", "Stars": "62342", "Released": "2016" },
    { "Framework": "Product", "Stars": "27647", "Released": "2010" },
    { "Framework": "Location", "Stars": "21471", "Released": "2011" },
  ];
  private svg;
  private margin = 50;
  private width = 340 - (this.margin * 2);
  private height = 250 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Framework))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 200000])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(d.Framework))
      .attr("y", d => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d) => this.height - y(d.Stars))
      .attr("fill", "#d04a35");
  }


  // Pie
  public pieChartLabels: string[] = ['Barcode', 'Inventory Count', 'Advance Slotting', 'Analyze Report', 'Forecast'];
  public pieChartData: number[] = [40, 20, 20, 10, 10];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
