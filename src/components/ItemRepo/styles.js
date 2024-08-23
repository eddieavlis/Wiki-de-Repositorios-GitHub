import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    padding: 14px; 

    h2 {
        font-size: 22px;
        color: #4493f8;
    }

    p {
        font-size: 16px;
        color: #8d96a0;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none; /* Remove o sublinhado dos links */
        font-size: 12px;
        color: #ffffff;
        display: block; /* Faz com que cada link ocupe a largura total do contêiner */
        margin-bottom: 10px; /* Adiciona um espaçamento entre os links */
    }

    a.remover {
        font-size: 12px;
        color: #f85149;
        margin-top: 10px; /* Adiciona espaçamento entre "Ver no GitHub" e "Remover" */
    }

    /* Linha separadora agora abaixo do link "Remover" */
    hr {
        border: 0;
        border-top: 1px solid #8d96a0; /* Define a cor e a espessura da linha separadora */
        margin: 20px 0;
    }
`;
