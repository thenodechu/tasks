class SortData{
    constructor(valDb) {
        this.db = valDb;
    }
    byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
      }
    sortAndFilter(condition) {
        let checkField = true;
        this.db["date"].map(function (item,index) {
            if (item["name"] === undefined) {
                checkField = false;
            } 
        });
        let firstResult;
        let finalResult;
        if (!checkField) {
            console.log("Error!!! Everyone item has to have filed 'name' ");
        } else {
            if (condition["condition"]["include"] !== undefined) {
                firstResult = this.db["date"].filter(x => condition["condition"]["include"].some(y => x.name === y.name));
            } else {
                firstResult = this.db["date"].filter(x => condition["condition"]["exclude"].some(y => x.name !== y.name));
            }
            
            finalResult = firstResult.sort(this.byField(condition["condition"]["sort_by"]));
        }

        return {"result": firstResult };
    }
}
  
let db = {
    "date": [
        { "name": "John", "email": "john2@gmail.com" },
        { "name": "John", "email": "john1@gmail.com" },
        { "name": "Jane","email": "jane@gmail.com"}
    ]
}

let sortData = new SortData(db);
console.log(sortData.sortAndFilter({"condition": {"exclude": [{"name": "John"}], "sort_by": ["email"]}} ));