import React, {  useState } from 'react'
import Header from '../../Components/Header/Header'
import axios from 'axios'
import './Cc.css'

export default function Cc() {
    const [show, setShow] = useState('')
    const [prompt, setPrompt] = useState('Olá')
    const [data, setData] = useState('')
    const [type, setType] = useState('quadrado')


    const [ID, setID] = useState(-1000)
    const [IDSS, setIDSS] = useState(-1000)
    const [Vp, setVp] = useState(-1000)
    const [VGS, setVGS] = useState(-1000)
    const [VDD, setVDD] = useState(-1000)
    const [RD, setRD] = useState(-1000)
    const [VDS, setVDS] = useState(-1000)
    const [VD, setVD] = useState(-1000)
    const [VG, setVG] = useState(-1000)
    const [IS, setIS] = useState(-1000)
    const [VGG, setVGG] = useState(-1000)

    let verify = [-1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000]
    // let verifyName = ["ID", "IDSS", "Vp", "VGS", "VDD", "RD", "VDS", "VD", "VG", "IS", "VGG"]

    const Calcula =  () => {
        for(let x = 0; x < 7; x++){
            console.log(x)
                verify[0] = ID;
                verify[1] = IDSS;
                verify[2] = Vp;
                verify[3] = VGS;
                verify[4] = VDD;
                verify[5] = RD;
                verify[6] = VDS;
                verify[7] = VD;
                verify[8] = VG;
                verify[9] = IS;
                console.log(verify)
                if(verify[0] === -1000){
                    if(Vp !== -1000 && IDSS !== -1000 && VGS !== -1000){
                        let k = (1 - VGS/Vp) * (1 - VGS/Vp) * IDSS;
                        setID(k)
                        verify[0] = ID;
                    }else{
                        if(IS !== -1000){
                            let k = IS;
                            setID(k)
                            verify[0] = ID;
                        }
                    }
                }
        
                if(verify[1] === -1000){
                    if(ID !== -1000 && Vp !== -1000 && VGS !== -1000){
                        let p = (1 - VGS/Vp) * (1 - VGS/Vp);
                        let k = ID / p;
                        setIDSS(k)
                        verify[1] = IDSS
                    }
                }
        
                if(verify[2] === -1000){
                    if(IDSS !== -1000 && ID !== -1000 && VGS !== -1000){
                        let a = ID/IDSS;
                        let b = Math.sqrt(a)
                        let k = VGS/(1 - b)
                        setVp(k)
                        verify[2] = Vp
                    }
                }
                if(verify[3] === -1000){
                    if(ID !== -1000 && Vp !== -1000 && IDSS !== -1000){
                        let a = ID/IDSS;
                        let b = Math.sqrt(a)
                        let k =  Vp * (1 - b);
                        setVGS(k)
                        verify[3] = VGS;
                    }else{
                        if(VG !== -1000 ){
                            let k = VG
                            setVGS(k)
                            verify[3] = VGS
                        }
                    }
                    
                }
                if(verify[4] === -1000){
                    if(VDS !== -1000 && ID !== -1000 && RD !== -1000){
                        let k = VDS -  RD * ID;
                        setVDD(k)
                        verify[4] = VDD;
                    }else{
                        if(VDS !== -1000 && VD !== -1000){
                            let k = (VDS + VD);
                            setVDD(k)
                            verify[4] = VDD;
                        }
                    }
                    
                }
        
                if(verify[5] === -1000){
                    if(VDS !== -1000 && VDD !== -1000 && ID !== -1000){
                        let k = (VDD - VDS) / ID;
                        setRD(k)
                        verify[5] = RD;
                    }else{
                        if(ID !== -1000 && VD !== -1000){
                            let k = VD / ID;
                            setRD(k)
                            verify[5] = RD;
                        }
                    }
                }
                if(verify[6] === -1000){
                    if(VDD !== -1000 && ID !== -1000 && RD !== -1000){
                        let k = VDD - ID * RD;
                        setVDS(k)
                        verify[6] = VDS
                    }else{
                        if(VD !== -1000){
                            let k = VD;
                            setVDS(k)
                            verify[6] = VDS
                        }
                    }
                }
                if(verify[7] === -1000){
                    if(ID !== -1000 && RD !== -1000){
                        let k = ID * RD;
                        setVD(k)
                        verify[7] = VD
                    }else{
                        if(VDD !== -1000 && VDS !== -1000){
                            let k = VDD - VDS;
                            setVD(k)
                            verify[7] = VD
                        }else{
                            if( VDS !== -1000){
                                let k = VDS;
                                setVD(k)
                                verify[7] = VD
                            }
                        }
                    }
                }

                if(verify[8] === -1000){
                    if(VGS !== -1000){
                        let k = VGS;
                        setVG(k)
                        verify[8] = VG
                    }else{
                        if(VGG !== -1000){
                            let k = -VGG;
                            setVG(k)
                            verify[8] = VG
                        }
                    }
                }

                if(verify[9] === -1000){
                    if(ID !== -1000){
                        let k = ID;
                        setIS(k)
                        verify[9] = IS
                    }
                }

                if(verify[10] === -1000){
                    if(VGS !== -1000){
                        let k = - VGS;
                        setVGG(k)
                        verify[10] = VGG
                    }else{
                        if(VG !== -1000){
                            let k = -VG;
                            setVG(k)
                            verify[10] = VG
                        }
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
            <img className="ContentImg" src="./cc.png" alt="" />
        </div>
        <div className="contentVariable">
            <div className="leftVariable">
                <p className="paragrafoAling">ID = IS;</p>
                <p className="paragrafoAling">RG = 0; IG = 0;</p>
                <p className="paragrafoAling">VG = VDS;</p>
            </div>
            <div className="rightVariable">
                <p className="paragrafoAling">VGS = -VGG; VS = 0</p>
                <p className="paragrafoAling">VDS = VDD - ID * RD;</p>
                <p className="paragrafoAling">VD = VDS</p>
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
                    {/* <h4 className="dataTitle">Dados Inversor</h4> */}
                    <div className="allinpsContent topmarginForm">
                        <input className="inp" onChange={(e)=> setIDSS(e.target.value)} type="number"  placeholder="IDSS" />
                        <input className="inp" onChange={(e)=> setVp(e.target.value)} type="number"  placeholder="Vp" />
                        <input className="inp" onChange={(e)=> setVGS(e.target.value)} type="number"  placeholder="VGS" />
                        <input className="inp" onChange={(e)=> setVDD(e.target.value)} type="number"  placeholder="VDD" />
                        <input className="inp" onChange={(e)=> setRD(e.target.value)} type="number"  placeholder="RD" />
                        <input className="inp" onChange={(e)=> setVDS(e.target.value)} type="number"  placeholder="VDS" />
                        <input className="inp" onChange={(e)=> setID(e.target.value)} type="number"  placeholder="ID" />
                        <input className="inp" onChange={(e)=> setVD(e.target.value)} type="number"  placeholder="VD" />
                        <input className="inp" onChange={(e)=> setVG(e.target.value)} type="number"  placeholder="VG" />
                        <input className="inp" onChange={(e)=> setIS(e.target.value)} type="number"  placeholder="IS" />
                        <input className="inp" onChange={(e)=> setVGG(e.target.value)} type="number"  placeholder="VGG" />
                    </div>
                    <button className="buttCal marginbottomButtom" onClick={Calcula}>Calcular...</button>
                    
                </div>
                <div className="result">
                    <div className="resultData">
                        <p className="datap">ID = {ID === -1000 ? " " : ID} A</p>
                        <p className="datap">IDSS = {IDSS === -1000 ? " " : IDSS} A</p>
                        <p className="datap">Vp = {Vp === -1000 ? " " : Vp} ohm</p>
                        <p className="datap">VGS = {VGS === -1000 ? " " : VGS} ohm</p>
                        <p className="datap">VDD = {VDD === -1000 ? " " : VDD} V</p>
                        <p className="datap">RD = {RD === -1000 ? " " : RD} ohm</p>
                        <p className="datap">VDS = {VDS === -1000 ? " " : VDS} V</p>
                        <p className="datap">VD = {VD === -1000 ? " " : VD} V</p>
                        <p className="datap">VG = {VG === -1000 ? " " : VG} V</p>
                        <p className="datap">IS = {IS === -1000 ? " " : IS} A</p>
                        <p className="datap">VGG = {VGG === -1000 ? " " : VGG} A</p>
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

        <footer className="footerContent newHeight"><h4 className="hFooter">@Calculadora de Amplificador</h4></footer>
    </div>
  )
}
