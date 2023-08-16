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


/**
 * 
 * 
 * 
 *  create a typescript function that  check 
 *  nested json data for those  
 *  keys which repeating and their value are not repeating and also not array or object 
 *  and return as it is in original nested structured  
 *  it should check key and value on every level
 * 
 */

export { validateInput } from "./input";
export * from "./checkbox";
export * from "./dropdown";
export * from "./switch";
export * from "./textarea";





export function flattenObject(obj: any, prefix = ''): any[] {
    return Object.keys(obj).flatMap(key => {
        const currentValue = obj[key];
        const currentLocation = prefix ? `${prefix}[${key}]` : `[${key}]`;

        if (typeof currentValue === 'object' && currentValue !== null) {
            return flattenObject(currentValue, currentLocation);
        } else {
            return { key: key, value: currentValue, location: currentLocation };
        }
    });
}

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
