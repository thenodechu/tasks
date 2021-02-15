class Converter {
    constructor() {
        const instructionForConverting = {
            "m": 1,
            "cm": 0.01,
            "in": 0.0254,
            "ft": 0.3048,
            "mm": 0.001,
            "yd": 0.9144,
            "km": 1000
        }
        this.instructionForConverting = instructionForConverting;
        

    }
    checkUnits(option) {
        let result = 1;
        let permittedUnits = ["m", "km", "yd", "in", "cm", "ft", "mm"];
        for (let item = 0; item < permittedUnits.length; item++) { 
            if (option !== permittedUnits[item]) {
                
                result -= 1;
            } else if (option === permittedUnits[item]) {
                result = 1;
                break;
            }
        }
        return result;
    }

    checkValue(option) {
        let result;
        if (typeof option === "number") {
            result = 1;
        } else {
            result = -4;
        }
        return result;
    }
    convertToValueOfAnotherType(option) {

        let check = this.checkUnits(option["distance"]["unit"]) + this.checkUnits(option["convertTo"]) + this.checkValue(option["distance"]["value"]);

        if (check === 3) {
            const distanceToConvert = option["distance"]["value"]
            const valueToConvert = this.instructionForConverting[option["convertTo"]];
            const valueConvertFrom = this.instructionForConverting[option["distance"]["unit"]];
            let result = distanceToConvert * valueConvertFrom / valueToConvert;
            return { "unit": option["convertTo"], "value": result };
        } else {
            console.log("Error")
        }
      
    }
}

let converter = new Converter();

console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 3 }, "convertTo": "km" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "km", "value": 0.005 }, "convertTo": "m" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 0.31 }, "convertTo": "in" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "in", "value": 0.5 }, "convertTo": "m" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 0.5 }, "convertTo": "yd" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "yd", "value": 0.5 }, "convertTo": "m" }))

console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "mdsa", "value": 0.9144 }, "convertTo": "ft" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "543ft", "value": "342" }, "convertTo": "m" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "km", "value":"432432" }, "convertTo": "ft" }))
