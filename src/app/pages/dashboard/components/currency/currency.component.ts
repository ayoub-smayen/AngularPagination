import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document
      .getElementById('arc1')
      .setAttribute('d', this.describeArc(150, 150, 110, -70, -90, 1));
    document
      .getElementById('arc2')
      .setAttribute('d', this.describeArc(150, 150, 110, -50, -70, 1));
    document
      .getElementById('arc3')
      .setAttribute('d', this.describeArc(150, 150, 110, -20, -50, 1));
    document
      .getElementById('arc4')
      .setAttribute('d', this.describeArc(150, 150, 110, 50, -20, 1));

    document
      .getElementById('arc5')
      .setAttribute('d', this.describeArc(170, 90, 90, 180, 160, 0));
    document
      .getElementById('arc6')
      .setAttribute('d', this.describeArc(150, 150, 110, 20, 40, 0));
    document
      .getElementById('arc7')
      .setAttribute('d', this.describeArc(150, 150, 110, 40, 60, 0));
    document
      .getElementById('arc8')
      .setAttribute('d', this.describeArc(150, 150, 110, 60, 80, 0));
  }

  public clicked(): void {
    console.log('clicked');
  }
  public polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  public describeArc(x, y, radius, startAngle, endAngle, direction) {
    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      direction,
      end.x,
      end.y,
    ].join(' ');

    return d;
  }
}
