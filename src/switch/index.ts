/**
 * switch definition
 * 
 * rules :
 * 1. key can repeat 
 * 2. value should boolean
 * 3. value must be ("1", "0"), ("true", "false"), ("yes","no")
 * 
 * schema :[
 * { 
 *      label:string,
 *      value:string | number | boolean
 *      type: ("1", "0"), ("true", "false"), ("yes","no")
 * },
 * {
 *      label:string,
 *      value:string | number | boolean
 *      type: ("1", "0"), ("true", "false"), ("yes","no")
 * }]
 * 
 */

const switchSchema = {
    key: "name",
    value: "arif"

}



class Switch {
    private paragraph: any

    constructor(paragraph: any) {
        this.paragraph = paragraph
    }

    validateTypes() {
        console.log("current value : ", this.paragraph);
    }
}


export default Switch



