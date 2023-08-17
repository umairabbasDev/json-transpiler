/**
 * what can handle :
 * 
 * 1.Input 
 * 2.Switch
 * 3.DropDown
 * 4.Textarea
 * 5.Checkbox
 *  
 */

import { validateInput } from "./input";


/**
 *  create a typescript function that  check 
 *  nested json data for those  
 *  keys which repeating and their value are not repeating and also not array or object 
 *  and return as it is in original nested structured  
 *  it should check key and value on every level
 */

export { validateInput, filterDataFromInput } from "./input";
// export * from "./checkbox";
// export * from "./dropdown";
// export * from "./switch";
// export * from "./textarea";

class TranspileFarm {
    private currentObj: any
    private flatObj: any
    private finalForm: any

    constructor(obj: any) {
        this.currentObj = obj
        this.flatObj = this.flattenObject(this.currentObj)
    }


    transForm() {
        validateInput()



    }

    editObj(location: string, value: any) {
        const newObj = this.currentObj
        return newObj
    }


    flattenObject(obj: any, prefix = ''): any[] {
        if (obj === null || obj === undefined) {
            return [];
        }


        return Object.keys(obj).flatMap(key => {
            const currentValue = obj[key];
            const currentLocation = prefix ? `${prefix}["${key}"]` : `["${key}"]`;
            if (typeof currentValue === 'object' && currentValue !== null) {
                return this.flattenObject(currentValue, currentLocation);
            } else {
                return { key: key, value: currentValue, location: currentLocation };
            }
        });
    }


    public getFlatList() {
        console.log(this.flatObj);
        return this.flatObj
    }
}


export { TranspileFarm }





/**
 *
 * old function
 */
// export function flattenObject(obj: any): any[] {
//     const result: any[] = [];

//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 result.push(...flattenObject(obj[key]));
//             } else {
//                 result.push({ [key]: obj[key] });
//             }
//         }
//     }

//     return result;
// }
