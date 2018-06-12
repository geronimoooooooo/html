https://www.concretepage.com/angular-2/angular-httpclient-get-example
---------------------------------------------
    let url="https://gist.githubusercontent.com/geronimoooooooo/aa0da95fd7c0bf7956d5ad5a9ac9491e/raw/6b80b26853514f67d59bef63a6f9f5cc6384c6e9/q1.json";
   
    this.http.get(url, {responseType: 'json'}).subscribe(data => {
      console.log(data);      
      console.log(JSON.stringify(data));      
      this.qList = <QuestionSingle[]>data;
      console.log(data[0].question);
   
    let arrU: QuestionSingle[] = [];
    //Object.assign(arrU, data);
    //this.qList = arrU;
    //let u: QuestionSingle = new QuestionSingle();
    //let json1 = JSON.parse(this.json1);
    //Object.assign(u, data);
    //let json = JSON.parse(json1);
    
    //console.log(u.question);
    //console.log(arrU.length);
    //this.qList.push(u);    
---------------------------------------------
---------------------------------------------
---------------------------------------------
---------------------------------------------
---------------------------------------------
---------------------------------------------
---------------------------------------------
  
---------------------------
------------------------------
------------------------------
----------------------------------
import 'rxjs/add/operator/toPromise';
doGETAsPromise() {
console.log("GET AS PROMISE");
let url = `${this.apiRoot}/get`;
this.http.get(url)
.toPromise()
.then(res => console.log(res.json()));
}
----------------------------------
doGETWithHeaders() {
console.log("GET WITH HEADERS");
let headers = new Headers();
headers.append('Authorization', btoa('username:password'));
let opts = new RequestOptions();
opts.headers = headers;
let url = `${this.apiRoot}/get`;
this.http.get(url, opts).subscribe(
res => console.log(res.json()),
msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
);
}
