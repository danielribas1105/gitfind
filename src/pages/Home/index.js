import '../../style.css';
import './Home.css';
import Header from "../../components/Header";
import background from '../../assets/images/background.png';
import Profile from '../../components/Profile';
import Itens from '../../components/Itens';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className='container-main'>
        <img src={background} className='background-img' alt="logo git background"/>
        <div className='container-content'>
          <div className='box-search'>
            <input type='text' className='input-search' placeholder='@usuário' />
            <button className='btn-search'>Buscar</button>
          </div>
          <div>
            <Profile/>
          </div>
          <h2 className='content-title'>Repositórios</h2>
          <div>
            <Itens/>
            <Itens/>
            <Itens/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
