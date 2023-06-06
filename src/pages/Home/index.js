import '../../style.css';
import './Home.css';
import Header from "../../components/Header";
import background from '../../assets/images/background.png';
import Profile from '../../components/Profile';
import Itens from '../../components/Itens';
import { useState } from 'react';

function App() {

const [user, setUser] = useState('');
const [currentUser, setCurrentUser] = useState(null);
const [repos, setRepos] = useState();

const handleGetDate = async () => {
  const userData = await fetch(`https://api.github.com/users/${user}`);
  const newUser = await userData.json();

  if(newUser.name) {
    const {avatar_url, name, login, bio} = newUser;
    setCurrentUser({avatar_url, name, login, bio});

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if(newRepos.length){
      setRepos(newRepos);
    }

    console.log(repos);
  }
  
}

  return (
    <div className="App">
      <Header/>
      <section className='container-main'>
        <img src={background} className='background-img' alt="logo git background"/>
        <div className='container-content'>
          <div className='box-search'>
            <input 
              type='text' 
              className='input-search' 
              placeholder='@usuário' 
              value={user}
              onChange={evento => setUser(evento.target.value)}
            />
            <button className='btn-search' onClick={handleGetDate}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <div>
              <Profile
                avatar={currentUser.avatar_url}
                name={currentUser.name}
                nameId={currentUser.login}
                text={currentUser.bio}
              />
            </div>
          ) : null}
          <h2 className='content-title'>Repositórios</h2>
          {repos?.length ? (
            <div>
              {repos.map(repository => (
              <Itens
                title= {repository.name}
                link={repository.html_url}
                description= {repository.description}
              />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default App;
