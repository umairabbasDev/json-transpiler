/**
 * checkbox definition
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

const checkbox = {
    key: "name",
    value: "arif"

}



class Checkbox {
    private paragraph: any

    constructor(paragraph: any) {
        this.paragraph = paragraph
    }

    validateTypes() {
        console.log("current value : ", this.paragraph);
    }
}


export default Checkbox



