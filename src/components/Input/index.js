import React from 'react';
import { InputContainer } from './styles';

function Input({ value, onChange, onEnter }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onEnter) {
      onEnter(); // Chama a função de busca quando a tecla Enter é pressionada
    }
  };

  return (
    <InputContainer>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown} // Adiciona o manipulador de eventos
      />
    </InputContainer>
  );
}

export default Input;
