# CURA Healthcare Service - Testes E2E com Cypress

Projeto de testes automatizados end-to-end para o sistema CURA Healthcare Service utilizando Cypress.

## 🚀 Tecnologias

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- JavaScript
- Page Object Model (POM)

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   └── cura.cy.js              # Testes E2E
├── fixtures/
│   ├── credentials.json         # Dados de autenticação
│   └── appointments.json        # Dados de agendamento
├── support/
│   ├── commands.js              # Comandos customizados
│   ├── e2e.js                   # Configurações globais
│   └── pages/                   # Page Objects
│       ├── HomePage.js
│       ├── LoginPage.js
│       ├── AppointmentPage.js
│       └── ConfirmationPage.js
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd "CURA Healthcare Service"
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando os Testes

### Modo Interativo (Cypress UI):
```bash
npx cypress open
```

### Modo Headless (CI/CD):
```bash
npx cypress run
```

## 📝 Padrões de Código

O projeto utiliza as seguintes boas práticas:

- **Page Object Model (POM)**: Separação entre lógica de UI e testes
- **Comandos Customizados**: Reutilização de ações comuns
- **Fixtures**: Dados de teste centralizados e organizados
- **Descrições Claras**: Testes auto-documentados em português

## 🧪 Cenários de Teste

- ✅ Navegação pela interface
- ✅ Autenticação de usuários
- ✅ Agendamento de consultas
- ✅ Validação de formulários
- ✅ Verificação de confirmações

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
