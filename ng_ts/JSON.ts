 savePersonDetails(){
        alert(`saved!!! ${JSON.stringify(this.person)}`);
    }
---------------------------
 return JSON.parse(JSON.stringify(object));
---------------------------
How to parse JSON string in Typescript
https://stackoverflow.com/questions/38688822/how-to-parse-json-string-in-typescript

interface MyObj {
    myString: string;
    myNumber: number;
}

let obj: MyObj = JSON.parse('{ "myString": "string", "myNumber": 4 }');
console.log(obj.myString);
console.log(obj.myNumber);
---------------------------
---------------------------
---------------------------
---------------------------
---------------------------
---------------------------
---------------------------
