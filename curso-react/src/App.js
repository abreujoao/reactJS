
import './App.css';
import Card from './components/Card';
import ComponenteCustomizavel from './components/ComponenteCustomizavel';
import PrimeiroComponente from './components/PrimeiroComponente';
import RenderizandoListas from './components/RenderizandoListas';
import SegundoComponente from './components/SegundoComponente';

function App() {
  return (
    <div className="App red">
      <Card>
        <PrimeiroComponente/>
      </Card>

      <Card>
        <SegundoComponente />
      </Card>

      <Card>
        <ComponenteCustomizavel saudacao = "eai meu bom, meu nome é " nome = "Henrique"/>
      </Card>

      <Card>
        <ComponenteCustomizavel titulo = "Componente Customizado 🎂" saudacao = "Eai querido, meu nome é " nome = "João"/>
      </Card>

      <Card>
        <RenderizandoListas />
      </Card>
      
     
    </div>
  );
}

export default App;
