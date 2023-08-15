/**
 * textarea definition
 * 
 * rules :
 * 1. key can repeat 
 * 2. value can not repeat
 * 3. value must be in large length of char
 * 4. it should not contain boolean value
 * 
 * schema :
 * { 
 *      label:string,
 *      value:string | number
 *      type: email| number | password | text | url 
 * }
 * 
 * 
 */

const textarea = {
    key: "name",
    value: "arif"

}



class Textarea {
    private paragraph: any

    constructor(paragraph: any) {
        this.paragraph = paragraph
    }

    validateTypes() {
        console.log("current value : ", this.paragraph);
    }
}


export default textarea



