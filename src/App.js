import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from "./components/Footer/"

function App() {
  return (
    <div className="App">
      <Header 
        title="Galería de imágenes con React">
      </Header>
      <Card
        url="https://images.pexels.com/photos/16848569/pexels-photo-16848569/free-photo-of-mar-amanecer-paisaje-agua.png" 
        title="Una tarde en el lago"
        description="Una persona en un bote solitario flota en el sereno lago, rodeada de tranquilidad y belleza natural."
      ></Card>
      <Card
        url="https://images.pexels.com/photos/13173088/pexels-photo-13173088.jpeg" 
        title="Camino del desierto"
        description="Un camino de asfalto solitario se extiende hacia el horizonte, sin vehículos ni vegetación, inmerso en un ambiente desértico montañoso."
      ></Card>
      <Card
        url="https://images.pexels.com/photos/14696910/pexels-photo-14696910.jpeg" 
        title="Atardecer en el barrio"
        description="El sol se pone sobre un pueblo antiguo y apacible, donde la calma y la serenidad reinan sin presencia humana."
      ></Card>
      <Footer 
        FooterText="Explora la serenidad de un lago, la vastedad de un desierto y la tranquilidad de un pueblo antiguo en nuestra página web."
      ></Footer>
    </div>
  );
}

export default App;
