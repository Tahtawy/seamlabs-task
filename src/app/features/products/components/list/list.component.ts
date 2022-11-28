import { Component, Input } from '@angular/core';

import { Product } from '../../../../data/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() products: Product[] = [];
  @Input() selectedCategories: string[] = [];
  @Input() selectedPrices: number[] = [];
}
