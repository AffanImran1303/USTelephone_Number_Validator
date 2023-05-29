function Telephone_Num_Validator(str){
    const reg=/^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
    return reg.test(str)
}
console.log(Telephone_Num_Validator("5555555555"))
