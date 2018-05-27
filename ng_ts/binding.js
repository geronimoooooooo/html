class JokeComponent {
    @Input('joke') data: Joke;
}

<joke *ngFor="let j of jokes" [joke]="j"></joke>
------------------------------------------------------------
<header (loginChanged)="loggedIn = $event"></header>
<sidebar (searchTermChanged)="searchTerm = $event"></sidebar>
<content [searchTerm]="searchTerm"></content>
-------------------------------------------------------------
<strong ngNonBindable> {{(5*5+1)/2}} </strong>
-------------------------------------------------------------
products: Product[] = [];
constructor() {
    this.products = MockData.Products;
}
-------------------------------------------------------------
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

class ProductComponent{
    @Input('product') data: Product;
    @Output() removed = new EventEmitter();

    delete() {
    this.removed.emit(this.product);
    }
}

class ProductsComponent{
    
    deleteProduct(product: Product) {
    let index = this.products.indexOf(product);
    if (index !== -1) {
    this.products.splice(index, 1);
    }
    }
}
//wird in products.html hingeschrieben
<app-product class="col-md-3" [product]="p" (removed)="deleteProduct($event)" *ngFor="let p of products"></app-product>
--------------------------------------------------------------
//übergeben selectedHeroes an andere component und dort werden dann Einzelheiten gezeigt.
//in heroes.component.html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
//in hero-detail.component.ts
import { Component, OnInit, Input } from '@angular/core';
 @Input() hero:Hero;

-------------------------------------------------------------
