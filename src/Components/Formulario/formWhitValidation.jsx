import { useState } from "react"

export const formWhitValidation = (WrapedComponent) =>{

 

const FormWhitValidation = (props) =>{
    const [errors,setErrors] = useState ({})
    const validateForm = () =>{
        let newErrors = {}
    let isValid = true

    if (!props.formData.name) {
        newErrors.name = "El campo name es obligatorio"
        isValid = false
    }
    if (!props.formData.email) {
        newErrors.email = "El campo email es obligatorio"
        isValid = false

    }
    setErrors(newErrors)
    return isValid
    }

   

    return  <WrapedComponent
    {...props}
    errors = {errors}
    validateForm={validateForm}
    />
}
    return FormWhitValidation
}