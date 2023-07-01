import React from 'react'
import Header from '../../Components/Header/Header'
import './Style.css'

export default function Home() {
  return (
    <div className="content">
      <Header />
      <div className="imageContent">
            <img className="ContentImg" src="./amp.png" alt="" />
        </div>
        <h3 className="alingH">Amplificador Operacional Ideial</h3>
        <div className="contentVariable">
            <div className="leftVariable">
                <p className="paragrafoAling">Ri === infinito;</p>
                <p className="paragrafoAling">Ro === 0;</p>
                <p className="paragrafoAling">Ad === infinito;</p>
                <p className="paragrafoAling">I1 === NULL;</p>
                <p className="paragrafoAling">I2 === NULL;</p>
            </div>
            <div className="rightVariable">
                <p className="paragrafoAling">Amc === 0;</p>
                <p className="paragrafoAling">Bw === infinito;</p>
                <p className="paragrafoAling">Vo === Ad * (V1 - V2);</p>
                <p className="paragrafoAling">Io  25 mA;</p>
                <p className="paragrafoAling">-Vcc  = Vo = +Vcc NULL;</p>
            </div>
        </div>
        <footer className="footerContent"><h4 className="hFooter">@Calculadora de Amplificador</h4></footer>
    </div>
  )
}
