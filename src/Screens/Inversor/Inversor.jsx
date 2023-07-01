import React, {  useState } from 'react'
import './Inversor.css'
import Header from '../../Components/Header/Header'
import axios from 'axios'

export default function Inversor() {
    const [show, setShow] = useState('')
    const [prompt, setPrompt] = useState('Olá')
    const [data, setData] = useState('')
    const [type, setType] = useState('quadrado')


    const [Av, setAv] = useState(-1000)
    const [R1, setR1] = useState(-1000)
    const [Rf, setRf] = useState(-1000)
    const [I1, setI1] = useState(-1000)
    const [I2, setI2] = useState(-1000)
    const [V1, setV1] = useState(-1000)
    const [Vo, setVo] = useState(-1000)

    let verify = [-1000, -1000, -1000, -1000, -1000, -1000, -1000]
    // let verifyName = ["Av", "R1", "Rf", "I1", "I2", "V1", "Vo"]

    const Calcula =  () => {
        for(let x = 0; x < 7; x++){
            console.log(x)
                verify[0] = Av;
                verify[1] = R1;
                verify[2] = Rf;
                verify[3] = I1;
                verify[4] = I2;
                verify[5] = V1;
                verify[6] = Vo;
                console.log(verify)
                if(verify[0] === -1000){
                    if(Rf !== -1000 && Rf !== -1000){
                        let k = -(Rf/R1)
                        setAv(k)
                        verify[0] = Av;
                    }
                }else{
                    if(Vo !== -1000 && V1 !== -1000){
                        let k = -(Vo/V1)
                        setAv(k)
                        verify[0] = Av;
                    }
                }
        
                if(verify[6] === -1000){
                    if(R1 !== -1000 && Rf !== -1000 && V1 !== -1000){
                        let k = -(Rf/R1) * V1
                        setVo(k)
                        verify[6] = Vo
                    }else{
                        if(Av !== -1000 && V1 !== -1000){
                            let k = (Av * V1)
                            setVo(k)
                            verify[6] = Vo
                        }
                    }
                }
        
                if(verify[5] === -1000){
                    if(R1 !== -1000 && Rf !== -1000 && Vo !== -1000){
                        let k = (Vo*R1) / Rf
                        setV1(k)
                        verify[5] = V1
                    }
                }
                if(verify[1] === -1000){
                    if(Av !== -1000 && Rf !== -1000){
                        let k =  Rf/Av
                        setR1(k)
                        verify[1] = R1;
                    }else{
                        if(Rf !== -1000 && Vo !== -1000 && V1 !== -1000){
                            let k = (V1 * Rf) / Vo
                            setR1(k)
                            verify[1] = R1
                        }
                    }
                    
                }
                if(verify[2] === -1000){
                    if(Av !== -1000 && R1 !== -1000){
                        let k =  R1 * Av
                        setRf(k)
                        verify[2] = Rf
                    }else{
                        if(R1 !== -1000 && Vo !== -1000 && V1 !== -1000){
                            let k = (Vo * R1) / V1
                            setRf(k)
                            verify[1] = Rf
                        }
                    }
                    
                }
        
                if(verify[3] === -1000){
                    if(R1 !== -1000 && V1 !== -1000){
                        let k = V1 / R1
                        setI1(k)
                        verify[3] = I1
                    }
                }
                if(verify[4] === -1000){
                    if(Rf !== -1000 && Vo !== -1000){
                        let k = Vo / Rf
                        setI2(k)
                        verify[4] = I2
                    }
                }
        }
    }


    const setShowData = () =>{
        setType('retangulo')
        setShow('data')
    }
    const setShowIa = () =>{
        setType('retangulo')
        setShow('ia')
    }

    const getData = async ()=>{
        try {
            const res = await axios.post('http://localhost:8000/chat', {
                prompt
            })
            setData(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="content">
      <Header />
      <div className="imageContent">
            <img className="ContentImg" src="./inversivo.png" alt="" />
        </div>
        <div className="contentVariable">
            <div className="leftVariable">
                <p className="paragrafoAling">I1 = I2;</p>
                <p className="paragrafoAling">V1/R1 = -Vo/Rf;</p>
            </div>
            <div className="rightVariable">
                <p className="paragrafoAling">Vo = -(Rf / R1) * V1;</p>
                <p className="paragrafoAling">Av = - (Rf / R1)</p>
            </div>
        </div>
        {type === 'quadrado' ? (
            <div className='shoseContent'>
                <div className='shoseItemQuadeado' onClick={setShowData}>
                    <img className="ContentImg" src="./calc.png" alt="" />
                </div>
                <div className='shoseItemQuadeado' onClick={setShowIa}>
                    <img className="ContentImg" src="./robo.png" alt="" />
                </div>
            </div>
        ):(
            <div className='shoseContent'>
                <div className='shoseItem' onClick={setShowData}>Calculadora</div>
                <div className='shoseItem' onClick={setShowIa}>Ai</div>
            </div>
        )}
        {show === 'data' &&(
            <div className="contetForm">
                <div className="form">
                    <h4 className="dataTitle">Dados Inversor</h4>
                    <div className="allinpsContent">
                        <input className="inp" onChange={(e)=> setR1(e.target.value)} type="number"  placeholder="R1" />
                        <input className="inp" onChange={(e)=> setRf(e.target.value)} type="number"  placeholder="Rf" />
                        <input className="inp" onChange={(e)=> setI1(e.target.value)} type="number"  placeholder="I1" />
                        <input className="inp" onChange={(e)=> setI2(e.target.value)} type="number"  placeholder="I2" />
                        <input className="inp" onChange={(e)=> setV1(e.target.value)} type="number"  placeholder="V1" />
                        <input className="inp" onChange={(e)=> setVo(e.target.value)} type="number"  placeholder="V0" />
                        <input className="inp" onChange={(e)=> setAv(e.target.value)} type="number"  placeholder="Av" />
                    </div>
                    <button className="buttCal" onClick={Calcula}>Calcular...</button>
                    
                </div>
                <div className="result">
                    <div className="resultData">
                        <p className="datap">Vo = {Vo === -1000 ? " " : Vo} v</p>
                        <p className="datap">Av = {Av === -1000 ? " " : Av} V</p>
                        <p className="datap">R1 = {R1 === -1000 ? " " : R1} ohm</p>
                        <p className="datap">Rf = {Rf === -1000 ? " " : Rf} ohm</p>
                        <p className="datap">V1 = {V1 === -1000 ? " " : V1} V</p>
                        <p className="datap">I1 = {I1 === -1000 ? " " : I1} V</p>
                        <p className="datap">I2 = {I2 === -1000 ? " " : I2} V</p>
                    </div>
                </div>

            </div>
        )}
        {show === 'ia' &&(
            <div className="contetForm">
                <div className="form">
                    <h4 className="dataTitle">Dados</h4>
                    <div className="allinps">
                        <input className="inpIa" onChange={(e)=>setPrompt(e.target.value)} type="text"  placeholder="Text" />
                        <button className="buttCalIA" onClick={getData}>Obter Resposta...</button>
                    </div>
                    
                </div>
                <div className="result">
                    <div className="respostaIA">{data}</div>
                </div>

            </div>
        )}

        <footer className="footerContent"><h4 className="hFooter">@Calculadora de Amplificador</h4></footer>
    </div>
  )
}
