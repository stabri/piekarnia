import {Component, Input, OnInit} from '@angular/core';
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {MatDialog} from "@angular/material";
import {Product} from "../offer.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() product: Product;

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '50%',
      data: this.product,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
