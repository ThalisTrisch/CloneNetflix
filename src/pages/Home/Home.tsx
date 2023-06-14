import { useState } from "react";

import Header from "../../components/Header";
import HomeScreenDark from "../../components/HomeScreen";
import CardPerguntas from "../../components/CardPerguntas";

function Home(){
    
    const perguntas = [
        {texto:"O que é a netflix?"},
        {texto:"Quanto custa a netflix?"},
        {texto:"Onde posso assistir?"},
        {texto:"Como faço para cancelar?"},
        {texto:"O que eu posso assistir na netflix?"},
        {texto:"É adequada para crianças?"}
    ]

    const [modeScreen,setModeScreen] = useState<string>("dark")
    function changeMode(theme:string){theme=="dark"?setModeScreen("light"):setModeScreen("dark")}

    return (
        <div>
            {modeScreen=="dark"?<HomeScreenDark/>:<HomeScreenDark/>}
    
            <Header 
                FunctionTheme={changeMode}
                theme={modeScreen}
            ></Header>

            <div className="mt-80 h-fit max-md:mt-96 max-xl:mt-96">
                <div className="mt-60 flex justify-center flex-row h-fit px-8 max-md:flex-wrap ">
                    <div id="CardGradient" className="mt-60 w-full p-10 h-96 m-2 z-20 rounded-2xl flex flex-col justify-center gap-2">
                        <p className="text-xl font-bold text-white mt-2">Aproveite na TV</p>
                        <p className="text-md text-white">Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</p>
                    </div>
                    <div id="CardGradient" className="mt-60 max-md:mt-6 w-full p-10 h-96 m-2 z-20 rounded-2xl  flex flex-col justify-center gap-2">
                        <p className="text-xl font-bold text-white mt-2">Assista onde quiser</p>
                        <p className="text-md text-white">Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
                    </div>
                </div>
                <div className="flex justify-center flex-row h-fit px-8  max-md:flex-wrap">
                    <div id="CardGradient" className="w-full p-10 h-96 m-2 z-20 rounded-2xl  flex flex-col justify-center gap-2">
                        <p className="text-xl font-bold text-white mt-2">Crie perfis para crianças</p>
                        <p className="text-md text-white">Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                    </div>
                    <div id="CardGradient" className="w-full p-10 h-96 m-2 z-20 rounded-2xl  flex flex-col justify-center gap-2">
                        <p className="text-xl font-bold text-white mt-2">Baixe séries para assistir offline</p>
                        <p className="text-md text-white">Disponíveis somente em planos sem anúncios.</p>
                    </div>
                </div>
            </div>
            <div className="px-32 max-md:px-20">
                <p className="text-4xl font-bold mt-16 mb-6 text-white">Perguntas Frequentes</p>
                    {perguntas.map((pergunta)=>{
                        return(
                            <CardPerguntas
                                key={pergunta.texto}
                                perguntas={pergunta.texto}
                            >
                            </CardPerguntas>
                        )
                    })}
                
            </div>
            <div className="px-32 max-md:px-20 mb-20">
                <p className="my-4 text-2xl text-white">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                <form  className="flex flex-wrap mt-4">
                    <input className="w-80 text-xl text-white p-3 pl-4 mr-8 border-2 px-2 border-zinc-400/50 bg-slate-900/80 rounded-md" placeholder="email" type="text" required/>
                    <button className="bg-red-600 px-3 py-1 text-white rounded-md font-bold text-2xl max-md:mt-4">
                        Vamos lá
                    </button>
                </form>
            </div>
            
        </div>
    )
}

export default Home;