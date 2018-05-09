apiRoot: string = "http://httpbin.org";

doGET() {
console.log("GET");
let url = `${this.apiRoot}/get`;
this.http.get(url).subscribe(res => console.log(res.text())); 
//this.http.get(url).subscribe(res => console.log(res.json()));
}

import {URLSearchParams} from '@angular/http';
.
.
.
doGET() {
console.log("GET");
let url = `${this.apiRoot}/get`;
let search = new URLSearchParams();
search.set('foo', 'moo');
search.set('limit', 25);
this.http.get(url, {search: search}).subscribe(res => console.log(res.json())); ①
}
---------------------------
doPOST() {
console.log("POST");
let url = `${this.apiRoot}/post`;
this.http.post(url, {moo:"foo",goo:"loo"}).subscribe(res =>
console.log(res.json()));
}
------------------------------
doDELETE() {
console.log("DELETE");
let url = `${this.apiRoot}/delete`;
let search = new URLSearchParams();
search.set('foo', 'moo');
search.set('limit', 25);
this.http.delete(url, {search}).subscribe(res => console.log(res.json()));
}
------------------------------
doPUT() {
console.log("PUT");
let url = `${this.apiRoot}/put`;
let search = new URLSearchParams();
search.set('foo', 'moo');
search.set('limit', 25);
this.http.put(url, {moo:"foo",goo:"loo"}, {search}).subscribe(res =>
console.log(res.json()));
}
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
