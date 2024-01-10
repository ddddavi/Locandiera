import React from "react";
import { info } from "./Data/info";
import Title from "./Components/Title";
import Locandiera from "./Components/Locandiera";
import Goldoni from "./Components/Goldoni";
import Teatro from "./Components/Teatro";
import Rivoluzione from "./Components/Rivoluzione";
import Card from "./Components/Card";
import Footer from "./Components/Footer";



function App() {

  return (
    <div className="m-0 p-0 box-border">
      <Title/>
      <Locandiera/>
      <Goldoni/>
      <Teatro/>
      <Rivoluzione/>
      <div className="flex flex-col align-center gap-10">
        <h2 className="text-center text-5xl text-[#66FCF1]">Interpreti</h2>
        <p className="text-center text-3xl text-slate-300">In seguito alcune delle interpreti tra 
      l'800 e il 900</p>
      </div>
      <div className="xl:flex xl:flex-row justify-between flex-wrap xl:p-5 xl:gap-10">
        {info.map((info) => {
          return (
          
            <Card nome={info.nome} dataDiNascita = {info.dataDiNascita} immagine={info.immagine}/>
  
          )
        })}
      </div>
      <Footer/>

      
    </div>
  );
}

export default App;
