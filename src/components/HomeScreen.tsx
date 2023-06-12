
function HomeScreen(){
    return(
        <>
            <div id="GradientDark" className="absolute z-10">
                <img className="opacity-0 z-0 min-h-full" src="https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/netflixteaser.png" alt="Netflix background" />
            </div>
            <section className="z-1 absolute flex justify-center">
                <div className="w-3/4 h-fit absolute mt-44 text-white z-10 p-8 max-xl:w-11/12 max-md:w-full">
                    <p className="text-7xl font-bold max-md:text-6xl max-sm:text-5xl">Filmes, séries e muito<br></br> mais, sem limites</p>
                    <p className="text-2xl font-bold max-md:text-xl my-6">Assista onde quiser. Cancele quando quiser.</p>
                    <p className="text-xl max-md:text-base">Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                    <form  className="flex flex-wrap mt-4">
                        <input className="w-2/3 text-xl p-3 pl-4 mr-8 border-2 px-2 border-zinc-400/50 mb-4 bg-slate-900/80 rounded-md" placeholder="email" type="text" required/>
                        <button className="bg-red-600 px-3 py-1 text-white rounded-md font-bold text-2xl">
                            Vamos lá
                        </button>
                    </form>
                    
                </div>
                <img className="opacity-30 z-0" src="https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/netflixteaser.png" alt="Netflix background" />
            </section>
        </>
    )
}

export default HomeScreen;