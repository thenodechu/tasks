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
    convertToValueOfAnotherType(option) {
        const distanceToConvert = option["distance"]["value"]
        const valueToConvert = this.instructionForConverting[option["convertTo"]];
        const valueConvertFrom = this.instructionForConverting[option["distance"]["unit"]];
        let result = distanceToConvert * valueConvertFrom / valueToConvert;
        return { "unit": option["convertTo"], "value": result };
    }
}

let converter = new Converter();

console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 300 }, "convertTo": "km" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "km", "value": 0.005 }, "convertTo": "m" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 0.31 }, "convertTo": "in" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "in", "value": 0.5 }, "convertTo": "m" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 0.5 }, "convertTo": "yd" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "yd", "value": 0.5 }, "convertTo": "m" }))

console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "m", "value": 0.9144 }, "convertTo": "ft" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "ft", "value": 0.5 }, "convertTo": "m" }))
console.log(converter.convertToValueOfAnotherType({ "distance": { "unit": "km", "value": 0.0006096 }, "convertTo": "ft" }))
