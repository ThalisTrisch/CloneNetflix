import {AiOutlinePlus} from "react-icons/ai"

function CardPerguntas({perguntas}:any){
    return(
        <>
            <div className="flex flex-row justify-between px-8 w-full bg-sky-950 items-center rounded-sm my-3 hover:bg-sky-900 transition-colors">
                <p className="text-2xl text-white p-6 max-md:text-xl">{perguntas}</p>
                <AiOutlinePlus className="text-5xl text-white max-md:text-2xl"></AiOutlinePlus>
            </div>
        </>
    )
}

export default CardPerguntas