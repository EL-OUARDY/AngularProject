import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      { Id: 100, title: 'Princess jewelries', image: '../assets/99.jpg', price: 110 },
      { Id: 101, title: 'Cindrella red shoes', image: '../assets/87.jpg', price: 45 },
      { Id: 102, title: 'beat Headphones', image: '../assets/14.jfif', price: 10 },
      { Id: 103, title: 'iPhone X', image: '../assets/7.jpg', price: 1000 },
      { Id: 104, title: 'Football shoes', image: '../assets/1.jpg', price: 20 },
    ];
  }

  getCategories() {
    return [{ id: 1, name: 'Sport', subCategories: [{ id: 1, name: 'Bicycle' }, { id: 2, name: 'Shoes' }] },
    { id: 2, name: 'Women', subCategories: [{ id: 1, name: 'Jewelery' }, { id: 2, name: 'Bracelet' }] },
    { id: 3, name: 'Phones', subCategories: [{ id: 1, name: 'Android' }, { id: 2, name: 'iOS' }] },
    ];
  }

  getShippings() {
    return ['GearBest', 'Ali Express', 'Other']; // available shipping methods
  }
}
