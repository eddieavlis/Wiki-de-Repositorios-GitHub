# Decisão de Desativação de Regras de Linting

## Motivo da Desativação

### Regra Desativada: `react/jsx-no-target-blank`
- **Motivo:** A desativação foi necessária para permitir o uso de `target="_blank"` sem `rel="noopener noreferrer"`, pois o link específico é gerenciado e não representa risco de segurança no contexto atual.

### Regra Desativada: `jsx-a11y/anchor-is-valid`
- **Motivo:** O valor do atributo `href` não pode ser um URL válido para alguns casos de uso específicos, e foi decidido usar um `<a>` estilizado. A acessibilidade é garantida por outras medidas no projeto.

## Justificativa

- **Segurança e Acessibilidade:** Avaliamos que, no contexto atual do projeto, os riscos de segurança e acessibilidade são mitigados por outras práticas e medidas. A desativação é uma solução temporária até que uma abordagem mais apropriada possa ser implementada.
  
## Histórico de Alterações

- **[23/08/2024]** - [Desativação de Regras de Linting] - [Antonio Siva]

