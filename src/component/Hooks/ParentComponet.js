import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

const ParentComponet = () => {
    const [age , setAge] = useState(0)
    const [salary , setSalary] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    } , [age])
    
    const incrementSalary =  useCallback(() => {
        setSalary(salary + 1)
    } , [salary])

  return (
    <div>
        <Title />
        <Count text='age' count={age}/>
        <Button handleClick = {incrementAge}>Increment Age</Button>
        <Count text='salary' count={salary}/>
        <Button handleClick = {incrementSalary}>Increment Salary</Button>
    </div>
  )
}  

export default ParentComponet