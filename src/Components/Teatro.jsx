import imgGoldoni from "../images/goldoni2.png"

const Teatro = () => {
    return (
        <div className="flex flex-col gap-8 justify-center text-center m-5 p-5">
            <h2 className="text-[#66FCF1] text-5xl">L'inizio dell'attività teatrale</h2>
            <div className="flex flex-row justify-center gap-20 p-10">
                
                
                
                <div className="flex items-center w-[500px]">
                    <p className="text-3xl text-slate-300 text-left">
                        Nel 1734 a Verona Goldoni conosce il capocomico Giuseppe Imer e diventa l'autore
                        dei canovacci della sua compagnia a Venezia, nel teatro Sant'Angelo. A causa di 
                        ristrettezze economiche decide di andare a Pisa e viene ammesso alla "Colonia" arcadica, svolgendo 
                        l'incarico di avvocato. Nel 1745, a Livorno, Goldoni conosce il capocomico Gerolamo
                        Medebach, che gli offre di lavorare per la sua compagnia, la quale si sarebbe presto
                        stabilita al teatro Sant'Angelo. Goldoni accetta, e tornato a Venezia scrive varie
                        commedie fino al 1753.
                    </p>
                </div>

                <img className="rounded-xl w-[600px] h-[600px]" 
                    src={imgGoldoni}
                    alt="Carlo Goldoni, autore della Locandiera">
                </img>

                
            </div>
        </div>
    )
}

export default Teatro