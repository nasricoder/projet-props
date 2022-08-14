import './App.css';
import Profil from './conpo/Profil';


function App() {
  const FulName = 'STREET DEFENSE SYSTEM'
  const Profession = 'ORGANISATION DE SELF DEFENSE'
  const Bio = ['LA PLUS GRAND ORGANISTAION DE SELF DEFENSE EN TUNISIE ET EN AFRIQUE']
  const handleName=(a)=>{
    return alert(` ${a} vous souhaite la bienvenue `)
  }
  return (
    <div className="App">
    <Profil FulName={FulName} Profession = {Profession} Bio={Bio} handleName={handleName}>
    <img src='/PHOTO1.png' alt='not found'/>

  </Profil>

    </div>
  );
}

export default App;
