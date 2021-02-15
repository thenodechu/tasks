class Converter{
    constructor() {
        const instructionForConverting = {
            "m": {
                "mToft": {"value":3.281},
                "mTocm": { "value": 100 },
                "mToyd": { "value": 1.094 },
                "mTomm": { "value": 1000},
                "mTokm": { "value":0.001}
            },
            "toM": {
                "ftTom": { "value": 0.3048},
                "cmTom": { "value": 0.01},
                "ydTom": { "value": 1.094 },
                "mmTom": { "value": 0.001},
                "kmTom": { "value": 1000 }
            }
         
           
        }
        this.instructionForConverting = instructionForConverting;


    }
    convertToValueOfAnotherType(option) {
        if (option["distance"]["unit"] === "m") {
            let value = option["distance"]["value"] * this.instructionForConverting["m"]["mTo" + option["convertTo"]]["value"];
            console.log(value)
            return { "unit": option["convertTo"], "value": value };
        } else {
            if (option["convertTo"] === "m") {
                let id = option["distance"]["unit"]+"Tom";
                let convertedInM;
                convertedInM = option["distance"]["value"] * this.instructionForConverting["toM"][id]["value"];
                console.log(convertedInM)
            } else {
                let id = option["distance"]["unit"]+"Tom";
                let convertedInM;
                convertedInM = option["distance"]["value"] * this.instructionForConverting["toM"][id]["value"];
                let finalResult = convertedInM * this.instructionForConverting["m"]["mTo" + option["convertTo"]]["value"];
                console.log(finalResult)
            }
        }
        

       

   }
}

let converter = new Converter();


converter.convertToValueOfAnotherType({ "distance": { "unit": "km", "value": 2 }, "convertTo": "m" });



console.log({ "distance": { "unit": "ft", "value": 3 }, "convertTo": "yd" });