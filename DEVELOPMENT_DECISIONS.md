# Decisão de Desativação de Regras de Linting

## Motivo da Desativação

### Regra Desativada: `react/jsx-no-target-blank`
- **Motivo:** A desativação foi necessária para permitir o uso de `target="_blank"` sem `rel="noopener noreferrer"`, pois o link específico é gerenciado e não representa risco de segurança no contexto atual.

### Regra Desativada: `jsx-a11y/anchor-is-valid`
- **Motivo:** O valor do atributo `href` não pode ser um URL válido para alguns casos de uso específicos, e foi decidido usar um `<a>` estilizado. A acessibilidade é garantida por outras medidas no projeto.

## Justificativa

- **Segurança e Acessibilidade:** Avaliamos que, no contexto atual do projeto, os riscos de segurança e acessibilidade são mitigados por outras práticas e medidas. A desativação é uma solução temporária até que uma abordagem mais apropriada possa ser implementada.

## Histórico de Alterações

- **[23/08/2024]** - [Desativação de Regras de Linting] - [Antonio Silva]


Usar o acima




# Documentação de Decisões de Desenvolvimento

## Desativação de Regras de Linting

### `react/jsx-no-target-blank`

- **Motivo da Desativação:** Permitir o uso de `target="_blank"` sem `rel="noopener noreferrer"` em links específicos gerenciados, sem risco de segurança no contexto atual.
- **Justificativa:** A decisão foi tomada para acomodar requisitos específicos do projeto. A segurança é gerenciada por outras medidas.

### `jsx-a11y/anchor-is-valid`

- **Motivo da Desativação:** O valor do atributo `href` não pode ser um URL válido para alguns casos de uso específicos. Optou-se por usar um `<a>` estilizado.
- **Justificativa:** A acessibilidade é abordada por outras práticas no projeto. Revisaremos e ajustaremos o código conforme necessário no futuro.

### `no-unused-vars`

- **Motivo da Desativação:** A função `handleKeyDown` foi desativada para evitar um aviso de linting sobre uma variável não utilizada. A função está atualmente comentada ou não sendo utilizada ativamente no código, mas será utilizada no futuro para gerenciar eventos de teclado, especificamente para a tecla "Enter".
- **Justificativa:** A desativação é uma solução temporária durante o desenvolvimento. A função será reativada quando a funcionalidade associada for implementada ou ajustada conforme necessário.

## Considerações Finais

- **Impacto e Mitigação:** Os riscos são monitorados e mitigados por práticas alternativas. Revisões futuras serão realizadas para garantir a conformidade com as melhores práticas e para garantir que a função `handleKeyDown` e outras funcionalidades sejam utilizadas corretamente.

## Histórico de Alterações

- **[Data]** - [Descrição da Alteração] - [Autor]
