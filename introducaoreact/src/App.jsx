import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/footer.jsx'
import ImgCard from './Components/ImgCard.jsx'
import GameCard from './Components/GameCard.jsx'
import './Components/Img.css'



function App() { 
  return ( 
    <> 
    <Header title="Meu site" />
    
    <Header title="Lorem ipsum" />
  
    <Header title="Introdução ao React" />

    <ImgCard caption="Lorem ipsum dolor sit amet," />

    

    <Banner>
      <h1>Bem-Vindo ao meu site</h1>
       <p>Aqui você encontrará conteúdos sobre desenvolvimento web.</p>
    </Banner>
      <Card />

      <section>
        <h2 style={{ textAlign: 'center' }}>Meus jogos favoritos</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <GameCard title="The Legend of Zelda: BOTW" genre="Aventura" platform="Switch" rating="9.8">
            <p>Um mundo aberto enorme para explorar, cheio de puzzles e liberdade criativa.</p>
            <ul>
              <li>Mundo aberto</li>
              <li>Combate estratégico</li>
              <li>Trilha sonora marcante</li>
            </ul>
          </GameCard>

          <GameCard title="Hollow Knight" genre="Metroidvania" platform="PC" rating="9.5">
            <p>Exploração desafiadora em um reino subterrâneo cheio de segredos.</p>
            <ul>
              <li>Arte desenhada à mão</li>
              <li>Chefes difíceis</li>
              <li>Trilha atmosférica</li>
            </ul>
          </GameCard>

          <GameCard title="Stardew Valley" genre="Simulação" platform="Multiplataforma" rating="9.2">
            <p>Cuide da sua fazenda, faça amizades e relaxe em um vilarejo tranquilo.</p>
            <ul>
              <li>Modo cooperativo</li>
              <li>Personalização da fazenda</li>
              <li>Ritmo tranquilo</li>
            </ul>
          </GameCard>
        </div>
      </section>

      <Footer title="new Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>

    </>
  ) 
} 

export default App
