export const validate = (input1: string):string => {
    let specialChar: Array<string> = [
        "!", 
        "=", 
        "'", 
        "*", 
        "$", 
        "%",
        "@"]
    for(let i in specialChar){
        if(input1.indexOf(specialChar[i])){
            input1.replace(specialChar[i], "")
        }
    }

    return input1
}