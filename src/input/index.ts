/**
 * input definition
 * 
 * rules :
 * 1. key can repeat 
 * 2. value can not repeat
 * 3. value must be in small length of char
 * 4. it should not contain boolean value
 * 
 * schema :
 * { 
 *      label:string,
 *      optional:[]any
 *      value:string | number
 *      type: email| number | password | text | url 
 * }
 * 
 * 
 */

const input = {
    key: "name",
    value: "arif"

}



class Input {
    private paragraph: any

    constructor(paragraph: any) {
        this.paragraph = paragraph
    }

    
    
}


export function validateInput(data: Record<string, any>): boolean {
    const seenValues = new Set<string>();

    for (const key in data) {
        if (typeof data[key] === "boolean") {
            return false; // Rule 4: Contains boolean value
        }

        const valueStr = String(data[key]);

        if (seenValues.has(valueStr)) {
            return false; // Rule 2: Value repeated
        }

        if (valueStr.length > 10) {
            return false; // Rule 3: Value length
        }

        seenValues.add(valueStr);
    }

    return true;
}




export default Input


// interface Schema {
//     [key: string]: any;
//   }
  
//   class DataValidator {
//     private schema: Schema;
  
//     constructor(schema: Schema) {
//       this.schema = schema;
//     }
  
//     private isValidValue(value: any): boolean {
//       if (typeof value === "boolean") {
//         return false;
//       }
//       if (typeof value === "string" && value.length > 0) {
//         return true;
//       }
//       if (typeof value === "number") {
//         return true;
//       }
//       return false;
//     }
  
//     private isValueValidType(value: any, type: string): boolean {
//       if (type === "email") {
//         return typeof value === "string" && /\S+@\S+\.\S+/.test(value);
//       }
//       if (type === "number") {
//         return typeof value === "number";
//       }
//       if (type === "password") {
//         return typeof value === "string" && value.length >= 8;
//       }
//       if (type === "text") {
//         return typeof value === "string";
//       }
//       if (type === "url") {
//         // This is a simple URL validation, you can adjust it as needed.
//         return typeof value === "string" && /^(http|https):\/\/\S+$/.test(value);
//       }
//       return true; // Unknown type, assume it's valid
//     }
  
//     validate(data: Record<string, any>): boolean {
//       for (const key in this.schema) {
//         const schemaEntry = this.schema[key];
//         if (schemaEntry.hasOwnProperty("value") && schemaEntry.hasOwnProperty("type")) {
//           const value = data[key];
//           const type = schemaEntry.type;
  
//           if (!this.isValidValue(value) || !this.isValueValidType(value, type)) {
//             return false;
//           }
//         }
//       }
  
//       return true;
//     }
  
//     createJSON(data: Record<string, any>): string | null {
//       if (this.validate(data)) {
//         const jsonOutput = JSON.stringify(data, null, 2);
//         return jsonOutput;
//       }
//       return null;
//     }
//   }
  
//   // Example usage
//   const inputSchema: Schema = {
//     label: { value: "Example Data", type: "text" },
//     optional: { value: [], type: "text" },
//     value: { value: "example@example.com", type: "email" },
//     type: { value: "email", type: "text" }
//   };
  
//   const validator = new DataValidator(inputSchema);
//   const inputData = {
//     label: "My Label",
//     value: "invalid-email",
//     type: "email"
//   };
  
//   if (validator.validate(inputData)) {
//     const jsonOutput = validator.createJSON(inputData);
//     console.log(jsonOutput);
//   } else {
//     console.log("Input data is invalid.");
//   }
  



