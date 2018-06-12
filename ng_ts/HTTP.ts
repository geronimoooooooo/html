https://www.concretepage.com/angular-2/angular-httpclient-get-example
---------------------------------------------
    let url="https://gist.githubusercontent.com/geronimoooooooo/aa0da95fd7c0bf7956d5ad5a9ac9491e/raw/ea2d976eed25c0452f249dd5f3b924a476168323/q1.json";
   /*
    this.http.get<QuestionSingle[]>(url).subscribe(data =>{
      this.qList=data;
    }); */
    //, {responseType: 'text'}
    this.http.get(url).subscribe(data => {
      console.log(data);      
      console.log(JSON.stringify(data));      
      this.qList = <QuestionSingle[]>data;
      //console.log(data[0].question);
   
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
    
  });     
---------------------------------------------
obsBooks: Observable<Book[]>
getBooks() {
      this.obsBooks = this.writerService.getBooks();
} 
getBooks(): Observable<Book[]> {
     return this.http.get<Book[]>(this.bookUrl);
} 
        
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
