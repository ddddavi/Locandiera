import { Link } from "react-router-dom"
import { info } from "../Data/info"


const Card = (info) => {
    return(
        <div className="xl:flex xl:flex-col text-center text-slate-300 
         xl:justify-center xl:w-[400px] md:w-[300px] sm:w-[50%] xl:gap-7 bg-[#1F2833] rounded-xl
         md:block md:m-auto sm:block sm:m-auto sm:mt-20 md:mt-20">
            <img 
            className="block m-auto rounded-xl w-full xl:h-[500px] p-0
            md:h-[300px]" 
            src={info.immagine} alt={info.nome}>
            </img>
            <h2>{info.nome}</h2>
            <p>{info.dataDiNascita}</p>
            <div className="flex justify-center">
            <Link className="w-fit" to={`/cards/${info.nome}`}>
                <button 
                className="block m-auto mb-5 px-6 py-3.5 rounded-xl text-slate-600 
                bg-[#66FCF1]
                hover:bg-[#45A29E] hover:scale-110 hover:text-slate-200 duration-300">Scopri di più
                </button>
            </Link>
            </div>
            
        </div>
    )
}

export default Card