import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories;
  subCategories;
  shipping;
  colors = ['white', 'red', 'pink', 'grey', 'yellow', 'blue', 'orange', 'green', 'black'];
  MainImage: File;
  imgPath: string;

  PImages = new Array<IPath>();

  DesImages = new Array<IPath>();

  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.shipping = this.productService.getShippings();
  }

  save(f) {
    console.log(f);
    // call productService To post the product form
  }
  showSub(c) {
    this.subCategories = this.categories.find(x => x.id === Number(c)).subCategories;
  }
  setMainImage(files) {
    this.MainImage = files[0];
    this.previewMainImg();
  }
  previewMainImg() {
    if (this.MainImage) { // image exist
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent) => {
        this.imgPath = (<FileReader>e.target).result.toString();
      };
      reader.readAsDataURL(this.MainImage);
    }
  }

  addProductImages(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      const exist = (this.PImages.find(x => x.name === files[i].name)) ? true : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };

          if (this.PImages.length < 10) { this.PImages.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  addDescImages(files: File[]) {
    for (let i = 0; i < files.length; i++) {
      const exist = (this.DesImages.find(x => x.name === files[i].name)) ? true : false;
      if (files[i] && !exist) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent) => {
          const item: IPath = {
            img: files[i],
            name: files[i].name,
            data: (<FileReader>e.target).result.toString()
          };

          if (this.DesImages.length < 10) { this.DesImages.push(item); }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
  removeImage(name) {
    const elem = this.PImages.find(x => x.name === name);
    this.PImages.splice(this.PImages.indexOf(elem), 1);
  }
  removeDescImage(name) {
    const elem = this.DesImages.find(x => x.name === name);
    this.DesImages.splice(this.DesImages.indexOf(elem), 1);
  }
  getProductPhotos() {
    const array = [];
    this.PImages.forEach(e => {
      array.push(e.img);
    });
    return array;
  }
  getDescriptionPhotos() {
    const array = [];
    this.DesImages.forEach(e => {
      array.push(e.img);
    });
    return array;
  }

}

interface IPath {
  img: File;
  name: string;
  data: string;
}
