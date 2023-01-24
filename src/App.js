import './App.css';
import Mensaje from './Mensaje';

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Este es el mensaje pasado por un parametro'/>
    </div>
  );
}

export default App;
