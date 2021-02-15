class Converter{
    constructor() {
        const instructionForConverting = {
            "m": {
                "mToft": {"value":3.281,"action":"*"},
                "mTocm": { "value": 100, "action": "/" },
                "mToyd": { "value": 1.094, "action": "*" },
                "mTomm": { "value": 1000, "action": "*" },
                "mTokm": { "value":1000,"action":"/"}
            },
            "ft": {
                "ftTom": { "value": 3.281, "action": "/" },
                "ftTocm": { "value": 30.48, "action": "*" },
                "ftToyd": { "value": 3, "action": "/" },
                "ftTomm": { "value": 305, "action": "*" },
                "ftTokm":{"value":3281,"action":"/"}
            },
            "cm": {
                "cmTom": { "value": 100, "action": "/" },
                "cmToft": { "value": 30.48, "action": "/" },
                "cmToyd": { "value": 91.44, "action": "/" },
                "cmTomm": { "value": 10, "action": "*" },
                "cmTokm":{"value":100000,"action":"/"}
            },
            "yd": {
                "ydTom": { "value": 1.094, "action": "*" },
                "ydToft": { "value": 3, "action": "*" },
                "ydTocm": { "value": 91.44, "action": "*" },
                "ydTomm": { "value": 914, "action": "*" },
                "ydTokm": { "value": 1094, "action": "/" },
            },
            "mm": {
                "mmTom": { "value": 1000, "action": "/" },
                "mmToft": { "value": 305, "action": "/" },
                "mmTocm": { "value": 10, "action": "*" },
                "mmToyd": { "value": 914, "action": "/" },
                "mmTokm": { "value": 1000000, "action": "/" },
            },
            "km": {
                "kmTom": { "value": 1000, "action": "*" },
                "kmToft": { "value": 3281, "action": "*" },
                "kmTocm": { "value": 100000, "action": "*" },
                "kmToyd": { "value": 1094, "action": "*" },
                "kmTomm":{"value":1000000,"action":"*"}
            }
           
        }
        this.instructionForConverting = instructionForConverting;


    }
    convertToValueOfAnotherType(option) {
        let id = option["distance"]["unit"] + "To" +option["convertTo"];
        let allFormulas = this.instructionForConverting[option["distance"]["unit"]];
       

        let specificFormula = allFormulas[id];
        let result;
        if (specificFormula["action"] == "*") {
            result = option["distance"]["value"] * specificFormula["value"];
        } else {
            result = option["distance"]["value"] / specificFormula["value"];
        }


        return { "unit": option["convertTo"], "value": result };

   }
}

let converter = new Converter();

let resultOne = converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 0.5 }, "convertTo": "ft" });

let resultTwo = converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 10000 }, "convertTo": "km" });

let resultThree = converter.convertToValueOfAnotherType({ "distance": { "unit": "km", "value": 1 }, "convertTo": "m" });

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

