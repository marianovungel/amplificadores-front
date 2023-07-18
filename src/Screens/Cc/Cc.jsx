import React, { useState } from 'react'
import './Cc.css'
import Polarizacao from '../../Components/Polarizacao/Polarizacao'
import Auto from '../../Components/Auto/Auto'

export default function Cc() {
  const [circuito, setCircuito] = useState("polarizacao")
    
  return (
    <div className="full">
        {circuito === "polarizacao" && (<Polarizacao setCircuito={setCircuito} />)}
        {circuito === "auto" && (<Auto setCircuito={setCircuito} />)}
    </div>
  )
}
