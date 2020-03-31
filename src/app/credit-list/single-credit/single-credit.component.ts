import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-single-credit",
  templateUrl: "./single-credit.component.html",
  styleUrls: ["./single-credit.component.css"]
})
export class SingleCreditComponent implements OnInit {
  @Input() credit: any;

  colors = [
    { status: 1, color: "green" },
    { status: 2, color: "blue" },
    { status: 3, color: "red" }
  ];

  getColor(status) {
    return this.colors.filter(item => item.status === status)[0].color;
  }

  getStatus = status => {
    switch (status) {
      case 1:
        return "Approved";
      case 2:
        return "Waiting";
      case 3:
        return "Rejected";
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
