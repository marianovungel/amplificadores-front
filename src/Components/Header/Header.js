import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="Header">
        <Link to='/inversor'><div className="itemMenu">Inversor</div></Link>
        <Link to='/ninversor'><div className="itemMenu">Não-Inversor</div></Link>
        <Link to='/'><img className="itemMenuImg" src="./amp.png" alt="" /></Link>
        <Link to='/cc'><div className="itemMenu">JFET-CC</div></Link>
        <Link to='/ca'><div className="itemMenu">JFET-CA</div></Link>
    </div>
  )
}
