import imgGoldoni from "../images/goldoni.png"


const Goldoni = () => {
    return (
        <div className="flex flex-col gap-8 justify-center text-center m-5 p-5">
            <h2 className="text-[#66FCF1] text-5xl">Carlo Goldoni</h2>
            <div className="flex flex-row justify-center gap-20 p-10">
                
                <img className="rounded-xl w-[600px] h-[600px]" 
                    src={imgGoldoni}
                    alt="Carlo Goldoni, autore della Locandiera">
                </img>
                
                <div className="flex items-center w-[500px]">
                    <p className="text-3xl text-slate-300 text-left">
                        Carlo Goldoni nasce a Venezia nel 1707 da una famiglia borghese. Sin da giovane
                        si appassiona al teatro, tuttavia suo padre lo indirizza verso lo studio della
                        filosofia. Nel 1721 abbandona gli studi di filosofia e si dedica agli studi 
                        giuridici, laureandosi a Padova nel 1731. Fino al 1747 lavora come avvocato e nel
                        mentre sposa Nicoletta Conio, dalla quale non ha figli. Muore a Parigi nel 1793.
                    </p>
                </div>

                
            </div>
        </div>
    )
}

export default Goldoni;