import React, { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';
import Footer from '../components/Footer';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
      alert('Repositório já está na lista'); // Exibe alerta se o repositório já estiver na lista
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Repositório não existe'); // Exibe alerta se o repositório não for encontrado
      } else {
        alert('Erro ao buscar o repositório'); // Exibe alerta para outros erros
      }
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
        onEnter={handleSearchRepo} // Passa a função de busca para o componente Input
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
      <Footer />
    </Container>
  );
}

export default App;
