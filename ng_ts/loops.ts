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
-----------------------------------------------------
-----------------------------------------------------
-----------------------------------------------------
