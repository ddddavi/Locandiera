import imgTeatro from "../images/teatro.png"


const Rivoluzione = () => {
    return (
        <div className="flex flex-col gap-8 justify-center text-center m-5 p-5">
            <h2 className="text-[#66FCF1] text-5xl">Come Goldoni ha rivoluzionato il teatro</h2>
            <div className="flex flex-row justify-center gap-20 p-10">
                
                <img className="rounded-xl w-[600px] h-[600px]" 
                    src={imgTeatro}
                    alt="Teatro">
                </img>

                
                <div className="flex items-center w-[500px]">
                    <p className="text-3xl text-slate-300 text-left">
                        Goldoni è apprezzato per aver rivoluzionato il mondo teatrale. Precedentemente la  
                        commedia aveva un canovaccio, ovvero un testo teatrale in cui la storia viene 
                        riassunta e divisa in scene dove vengono solo indicati i personaggi e i fatti, 
                        ma non ci sono scritte le battute. Goldoni inventa quindi il copione come sostituo del 
                        canovaccio, in cui sono presenti battute e didascalie, che aiutano a comprendere gli 
                        scopi della commedia. Inoltre, impone una recitazione più spontanea possibile, 
                        nonostante le numerose prove e preparazioni; inoltre i personaggi devono parlare in 
                        italiano semplice, il dialetto è concesso solo per alcune battute. 
                    </p>
                </div>

                
                
            </div>
        </div>
    )
}

export default Rivoluzione;