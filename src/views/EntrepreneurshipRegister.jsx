import React from 'react'
import RegisterEntrepForm from '../components/entrepRegister/RegisterEntrepForm'
import SelectType from '../components/entrepRegister/SelectType'

function EntrepreneurshipRegister() {
  return (
    <div>
        <SelectType/>
        <br />
        <RegisterEntrepForm/>
    </div>
  )
}

export default EntrepreneurshipRegister