import styled from 'styled-components';

export const InputContainer = styled.div`
    border: 1px solid #8d96a0;
    border-radius: 6px;
    
    height: 52px;
    width: 80%;
    margin: 20px;
    
    input {
        background: transparent;
        border: 1px solid transparent;
        border-radius: 6px;
        width: 93%;
        height: 52px;
        padding: 0 20px;
        color: #ffffff;
        font-size: 15px;
        
        /* Adiciona um estilo para quando o input estiver em foco */
        &:focus {
            border-color: #4493f8; /* Muda a cor da borda ao focar */
            outline: none; /* Remove o contorno padrão do navegador */
        }
    }
`;
