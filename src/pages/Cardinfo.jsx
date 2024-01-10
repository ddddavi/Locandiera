import { Link, Router, createBrowserRouter, useLocation } from "react-router-dom";
import Card from "../Components/Card";
import { info } from "../Data/info";


const Cardinfo = (info) => {

    let location = useLocation();

    if(location.pathname === '/cards/Maddalena%20Gallina') {
        return(
            <div className="flex flex-col items-center gap-10">
                
                <h1 className="text-slate-300 text-7xl">Maddalena Gallina</h1>

                <img className="block m-auto rounded-xl w-[25%] xl:h-[500px]
                md:h-[300px]" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Colombina_-_stampa_ottocento.jpg/150px-Colombina_-_stampa_ottocento.jpg">

                </img>

                <div className="w-[50%]">
                    <h3 className="text-slate-300 text-3xl text-center">
                        Nasce a Cremona nel 1770 e in giovane età comincia a recitare mostrando talento nel ruolo
                        di servetta. Le sue interpretazioni più importanti nelle commedie sono: Rosaura, in 
                        "La Serva Amorosa", Eugenia in "Gli Innamorati" e Mirandolina in "La Locandiera".
                        Muore a cremona nel 1817.
                    </h3>
                </div>
                
                <Link className="w-fit m-5" to={'/'}>
                    <button
                        className="px-6 py-3.5 mt-5 block m-auto rounded-xl text-slate-600 bg-[#66FCF1]
                        hover:bg-[#45A29E] hover:scale-110 hover:text-slate-200 duration-300 ">
                            Torna alla home
                    </button>
                </Link>
                
            </div>
        )
    }

    if(location.pathname === '/cards/Maddalena%20Pelzet') {
        return(
            <div className="flex flex-col items-center gap-10">
                
                <h1 className="text-slate-300 text-7xl">Maddalena Pelzet</h1>
                <img className="block m-auto rounded-xl w-[25%] xl:h-[500px]
                md:h-[300px]" 
                src="https://movio.beniculturali.it/asrm/ilteatronellazio/getImage.php?id=345&w=800&h=600&c=0&co=1&f=0&t=0&.jpg">

                </img>

                <div className="w-[50%]">
                    <h3 className="text-slate-300 text-3xl text-center">
                        Nasce a Firenze nel 1801. Nel 1816 entra a far parte della compagnia Zannoni e Pinotti,
                        in cui conosce l'attore Ferdinando Pelzet, con il quale si sposa successivamente.
                        Viene ricordata per esser stata un versatile interprete di Vittorio Alfieri e Silvio Pellico.
                        Muore a Firenze nel 1854.
                    </h3>
                </div>

                <Link className="w-fit m-5" to={'/'}>
                    <button
                        className="px-6 py-3.5 mt-5 block m-auto rounded-xl text-slate-600 bg-[#66FCF1]
                        hover:bg-[#45A29E] hover:scale-110 hover:text-slate-200 duration-300 ">
                            Torna alla home
                    </button>
                </Link>
            </div>
        )
    }

    if(location.pathname === '/cards/Carlotta%20Marchionni') {
        return(
            <div className="flex flex-col items-center gap-10">

                <h1 className="text-slate-300 text-7xl">Carlotta Marchionni</h1>

                <img className="block m-auto rounded-xl w-[25%] xl:h-[500px]
                md:h-[300px]" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Giuseppe_Bezzuoli_Carlotta_Marchionni.jpg/220px-Giuseppe_Bezzuoli_Carlotta_Marchionni.jpg">

                </img>

                <div className="w-[50%]">
                    <h3 className="text-slate-300 text-3xl text-center">
                        Nasce a Pescia nel 1796. Attrice famosa che ha interpretato molte tragedie di Vittorio Alfieri,
                        Silvo Pellico e Carlo Marenco. È la figlia di un teatrante e di un'attrice proveniente da Siena,
                        Elisabetta Baldesi, famosa per aver interpretato alcuni testi di Alfieri. Muore a Torino nel 1861.
                    </h3>
                </div>

                <Link className="w-fit m-5" to={'/'}>
                    <button
                        className="px-6 py-3.5 mt-5 block m-auto rounded-xl text-slate-600 bg-[#66FCF1]
                        hover:bg-[#45A29E] hover:scale-110 hover:text-slate-200 duration-300 ">
                            Torna alla home
                    </button>
                </Link>
            </div>
        )
    }

    if(location.pathname === '/cards/Adelaide%20Ristori') {
        return(
            <div className="flex flex-col items-center gap-10">
                <div className="flex justify-center">

                
                

            </div>

                <h1 className="text-slate-300 text-7xl">Adelaide Ristori</h1>
                <img className="block m-auto rounded-xl w-[25%] xl:h-[500px]
                md:h-[300px]" 
                src="https://hips.hearstapps.com/hmg-prod/images/adelaide-ristori-biografia-1673882093.jpg?crop=1.00xw:0.743xh;0,0.137xh&resize=1200:*">

                </img>


                <div className="w-[50%]">
                    <h3 className="text-slate-300 text-3xl text-center">
                        Nasce a Cividale del Friuli nel 1822. Viene considerata l'attrice italiana più famosa e influente
                        dell'Ottocento. È un attrice tragica sempre apprezzata dal pubblico con applausi, figlia di 
                        due attori: Antonio Ristori e Maddalena Ricci-Pomatelli. Muore a Roma nel 1906.
                    </h3>
                </div>


                <Link className="w-fit m-5" to={'/'}>
                    <button
                        className="px-6 py-3.5 mt-5 block m-auto rounded-xl text-slate-600 bg-[#66FCF1]
                        hover:bg-[#45A29E] hover:scale-110 hover:text-slate-200 duration-300 ">
                            Torna alla home
                    </button>
                </Link>
            </div>
        )
    }
}

export default Cardinfo;