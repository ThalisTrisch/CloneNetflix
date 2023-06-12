import {BsFillSunFill,BsFillMoonStarsFill} from "react-icons/bs";

function Header({FunctionTheme,theme}:any){
    return(
        <>
            <div className="W-full h-fit flex flex-row gap-6 justify-between items-center pt-3 z-9">
                <img className="ml-12 my-3 h-10 z-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"></img>
                <div className="flex flex-row gap-6 mr-12 z-10">
                    <div className="flex flex-row text-2xl w-24 rounded-md border-2 border-zinc-400/50 max-md:hidden">
                        <div className="bg-slate-600/80 w-1/2 flex justify-center p-1 z-10 rounded-tl-sm rounded-bl-sm" onClick={()=>FunctionTheme("dark")}>
                            {theme=="light"
                                ?<BsFillSunFill className="text-white"/>
                                :<BsFillSunFill/>
                            }
                        </div>
                        <div className="bg-slate-900/80 w-1/2  flex justify-center p-1 z-10 rounded-tr-sm rounded-br-sm" onClick={()=>FunctionTheme("light")}>
                            {theme=="dark"
                                ?<BsFillMoonStarsFill className="text-white"/>
                                :<BsFillMoonStarsFill/>
                            }
                        </div>
                    </div>
                    <select className="border-2 px-2 border-zinc-400/50 bg-slate-900/80 rounded-md text-white z-10 max-sm:hidden">
                        <option selected>Português</option>
                        <option>English</option>
                    </select>
                    <button className="bg-red-600 px-3 py-1 text-white rounded-md font-bold  z-10">
                        Entrar
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header;