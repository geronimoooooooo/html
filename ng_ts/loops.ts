class SimpleChange {
  constructor(previousValue: any, currentValue: any)
  previousValue : any
  currentValue : any
  isFirstChange() : boolean
}
ngOnChanges(changes: SimpleChanges) {
  console.log(`ngOnChanges - data is ${this.data}`);
  for (let key in changes) {
    console.log(`${key} changed.
    Current: ${changes[key].currentValue}.
    Previous: ${changes[key].previousValue}`);
  }
}
-----------------------------------------------------
<ol>
<li *ngFor="let skill of skills">{{skill}}</li>
</ol>
-----------------------------------------------------
<app-product class="col-md-3" [product]="p" *ngFor="let p of products"></app-product>
-----------------------------------------------------
  <tr *ngFor="let entry of entries; let idx = index">
-----------------------------------------------------
//this sets all product descriptions to a max length of 10 characters
data.products.forEach( (element) => {
    element.product_desc = element.product_desc.substring(0,10);
});
Your version wasn't wrong though. It should look more like this:

for(let i=0; i<data.products.length; i++){
    console.log(data.products[i].product_desc); //use i instead of 0
}
-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------
