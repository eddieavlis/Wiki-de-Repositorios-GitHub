import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
  return (
    <ItemContainer>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a 
        href={repo.html_url} 
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver no GitHub
      </a>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#" 
        className="remover"
        onClick={() => handleRemoveRepo(repo.id)}
      >
        Remover
      </a>
      <hr /> {/* Linha separadora abaixo do link "Remover" */}
    </ItemContainer>
  );
}

export default ItemRepo;
