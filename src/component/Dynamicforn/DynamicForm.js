import React, { useState } from 'react'

const data = [
    {
        fieldName : "name",
        type : "text",
        value : "",
        required : true
    },
    {
        fieldName : "lastname",
        type : "text",
        value : "",
        required : true
    },
    {
        fieldName : "email",
        type : "email",
        value : "",
        required : true
    },
    {
        fieldName : "password",
        type : "password",
        value : "",
        required : true
    },
    {
        fieldName : "checkbox",
        type : "checkbox",
        value : false,
        required : false
    },
]

const formData = data.reduce((acc,curr) => {
                acc[curr.fieldName] = curr.value
                return acc
    } , {})
const DynamicForm = () => {
    const [formObj , setFormObj] = useState(formData)

    const handleChange = (e , fieldName) => {
        if(fieldName === "checkbox"){
            setFormObj({...formObj , [fieldName] : !formObj.checkbox})
        }
        else{
            setFormObj({...formObj , [fieldName] : e.target.value})
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formObj)
    }
  return (
        <form onSubmit={handleSubmit}>
            {data.map(field => 
                (
                    <input 
                        type={field.type} 
                        name={field.fieldName} 
                        placeholder = {field.fieldName}
                        value={formObj[field.fieldName]} 
                        onChange={(e) => handleChange(e , field.fieldName)}
                        required={field.required}
                        className = "dynamic-input"
                    />
                )
            )}
            <button type='submit'>Submit</button>
        </form>
  )
}

export default DynamicForm