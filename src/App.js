import logo from './logo.svg';
import './App.css';
import CardApp from './Card';

function App() {
  return (
    <div className="App">
        {/* digimon */}
        <CardApp 
          src="https://i.pinimg.com/564x/f4/f3/30/f4f3307c1ed2a7b99a05ed9d69b9fffa.jpg" 
          href="https://digimon-creators.fandom.com/es/wiki/Digimon:_New_Generation"
          title="Digimon"   
          description="Los Digimon son formas de vida artificial, creados por bits y piezas perdidas de datos de computadoras, que viven dentro de los aparatos electrónicos. Ellos han modificado este mundo virtual, transformándolo en el Digital World, un plano paralelo a la Tierra, conectado a este por la red de computadores del planeta."   
          type="virtual"       
        />
        {/* pokemon */}
        <CardApp 
          src="https://i.pinimg.com/564x/ad/0a/38/ad0a38b8fcab6ed8fce7d260f427ca0b.jpg" 
          href="https://pokemon.fandom.com/es/wiki/Pok%C3%A9mon_Wiki"
          title="Pokemon"
          description="Los Pokémon son criaturas de todo tipo de formas y tamaños que viven bien en un medio salvaje o junto a los seres humanos. La mayoría de los Pokémon solo hablan para decir sus nombres. En la actualidad, hay más de 700 criaturas que habitan el universo Pokémon."
          type="real"              
        />
        {/* naruto */}
        <CardApp 
          src="https://i.pinimg.com/564x/33/8f/f7/338ff76ba896a42b535be655cac2bb5a.jpg" 
          href="https://naruto.fandom.com/es/wiki/Naruto_Wiki"
          title="Naruto"
          description="Naruto Uzumaki es un ninja adolescente que tiene encerrado en su interior al «Zorro de Nueve Colas» (Kyūbi no Kitsune 九尾の狐?), Kurama."              
        />
    </div>
  );
}

export default App;
