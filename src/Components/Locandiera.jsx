import imgMirandolina from "../images/mirandolina.png"

const Locandiera = () => {
    return(
        <div className="flex flex-col gap-8 justify-center text-center m-5 p-5">
            <h2 className="text-[#66FCF1] text-5xl">La Locandiera, commedia di Goldoni</h2>
            <div className="flex flex-row justify-center gap-20 p-10">
                <div className="flex items-center w-[500px]">
                    <p className="text-3xl text-slate-300 text-left">
                        La Locandiera è l'opera più famosa di Carlo Goldoni, scritta nel 1752.
                        È una commedia scritta in prosa suddivisa in tre atti. Vengono narrate le vicende
                        di Mirandolina, una donna che gestisce una locanda a Firenze e di cui tutti gli 
                        uomini si innamorano. Durante la storia, Mirandolina conosce un cavaliere misogino,
                        l'unico personaggio che inizialmente non è innamorato di lei a differenza di tutti
                        coloro che frequentano la sua locanda, ma nonostante ciò proverà in tutti i modi a 
                        farlo innamorare di lei. 
                    </p>
                </div>

                <img className="rounded-xl w-[600px] h-[600px]" 
                    src={imgMirandolina}
                    alt="Mirandolina, protagonista della Locandiera">
                </img>
            </div>
        </div>
    )
}

export default Locandiera