import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../brand';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() producthighcost!: Info;
  @Output() notify = new EventEmitter();
}
