import { Component, OnInit } from '@angular/core';

export interface Product {
  name: string;
  img?: 'https://akademiasmaku.pl/upload/recipes/13/chleb-pszenny-na-zakwasie-z-karmelizowana-cebulka-13.jpg';
  description?: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  price: number;
}

export interface Category {
  name: string;
  img: string;
  style: string;
}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  panelOpenState: boolean = false;

  products: Product[] = [
    {name: 'chleb zwykły', price: 2},
    {name: 'chleb sniadaniowy', price: 1.2},
    {name: 'chleb okragly', price: 4},
    {name: 'chleb dziadka', price: 2},
    {name: 'chleb babci', price: 3},
    {name: 'chleb wiejski', price: 0},
  ];

  categories: Category[] = [
    {name: 'pieczywo pszenne', img: "https://pliki.dlahandlu.pl/i/01/55/43/015543_r0_940.jpg", style: "jasne" },
    {name: 'pieczywo razowe', img: "http://www.gotuj.pl/uploads/recipes/logo/thumbnails/gallery_260-chleb-razowy-jpg-1337944435-35.jpg", style: "zytnie" },
    {name: 'pieczywo żytnie', img: "http://www.wacyn.com.pl/htm/a/layout/piekarnia-radom.jpg", style:"razowe" },
    {name: 'słodkie wypieki', img: "https://r-scale-60.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/cda72177eba360ff16b7f836e2754370/fb6789b1-7d14-4d1e-ab2c-93947cf366fb.jpg?type=1&srcmode=0&srcx=1/1&srcy=1/1&srcw=1/1&srch=1/1&dstw=640&dsth=360&quality=80", style: "slodkie" },

  ]

  constructor() { }

  ngOnInit() {
  }

}
