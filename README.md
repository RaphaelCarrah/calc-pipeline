# **🚀 PiperCalc - Calculadora CI/CD**  

<div align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">
  <img src="https://img.shields.io/badge/Version-1.0.0-green" alt="Version">
  <img src="https://img.shields.io/badge/Pipeline-CI%2FCD-orange" alt="Pipeline">
</div>

---

## **📌 Sobre o Projeto**  

A **PiperCalc** é uma calculadora web desenvolvida com **Material Design**, totalmente responsiva e construída em **HTML, CSS e JavaScript**.  

### **Objetivos do Projeto**  
- Estudar e implementar **pipelines de CI/CD** (Integração Contínua e Entrega Contínua).  
- Aprender boas práticas de **automação de testes, linting e deploy**.  
- Criar um ambiente colaborativo usando **GitHub Actions**.  

---

## **🛠️ Tecnologias & Ferramentas**  

| **Categoria**       | **Tecnologias**                                                                 |
|----------------------|---------------------------------------------------------------------------------|
| **Frontend**         | HTML5, CSS3, JavaScript (ES6+)                                                  |
| **Design**           | Material Design, Responsividade                                                |
| **CI/CD**            | GitHub Actions, Workflows Automatizados                                        |
| **Versionamento**    | Git, GitHub                                                                     |
| **Testes**           | Jest                                                                           |
| **Linting**          | ESLint, Prettier                                                               |

---

## **⚙️ Pipelines Implementadas**  

### **1️⃣ CI (Integração Contínua)**  
- **Objetivo**: Garantir que todo novo código não quebre a aplicação.  
- **Gatilho**: Executado a cada **push** ou **pull request**.  
- **Etapas**:  
  1. Instala dependências (`npm install`).  
  2. Roda testes unitários (`npm test`).  
  3. Verifica linting com ESLint (`npm run lint`).  

📌 **Arquivo de Configuração**: `.github/workflows/ci.yml`  

### **2️⃣ CD (Entrega Contínua - Em Desenvolvimento)**  
- **Objetivo**: Deploy automático para **GitHub Pages** ou outro host.  
- **Próximos Passos**:  
  - Configurar **autodeploy** após testes bem-sucedidos.  
  - Adicionar **notificações no Slack/Discord**.  

---

## **📂 Estrutura do Projeto**  

```bash
pipercalc/
├── .github/              # Configurações de CI/CD
├── src/                  # Código-fonte (HTML, CSS, JS)
├── tests/                # Testes automatizados
├── docs/                 # Documentação
├── .eslintrc.json        # Configuração do ESLint
├── .prettierrc           # Configuração do Prettier
└── README.md             # Este arquivo
```

---

## **🚀 Como Contribuir?**  

Quer ajudar a melhorar a **PiperCalc** e aprender sobre **CI/CD**?  

1. **Faça um Fork** do projeto.  
2. **Crie uma Branch**:  
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```  
3. **Envie suas Alterações**:  
   ```bash
   git commit -m "Adiciona nova feature"
   git push origin feature/nova-funcionalidade
   ```  
4. **Abra um Pull Request**.  

📜 **Leia nosso [CONTRIBUTING.md](docs/CONTRIBUTING.md)** para mais detalhes!  

---

## **📜 Licença**  

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais informações.  

---

## **🔗 Links Úteis**  
- [GitHub Actions Docs](https://docs.github.com/en/actions)  
- [Jest - Testes em JS](https://jestjs.io/)  
- [ESLint - Linting para JS](https://eslint.org/)  
- [Prettier - Formatação de Código](https://prettier.io/)  
- [Material Design Guidelines](https://material.io/design)  

---

## **🔮 Próximas Atualizações**  
- Adicionar **mais testes**.  
- Implementar **deploy automático**.  
- Melhorar **documentação de CI/CD**.  