/**
 * dropdown definition
 * 
 * rules :
 * 1. key can repeat 
 * 2. value should be repeat
 * 3. value can be same
 * 4. it should not contain boolean value(optional) 
 * 
 * schema :
 * {
 *      label:string,
 *      optional:[]any
 *      value :[
 *              { 
 *               key:string,
 *               value:string | number  
 *              }
 *            ]
 * }
 */

const dropdown = {
    key: "name",
    value: "arif"

}



class Dropdown {
    private paragraph: any

    constructor(paragraph: any) {
        this.paragraph = paragraph
    }

    validateTypes() {
        console.log("current value : ", this.paragraph);
    }
}


export default Dropdown



