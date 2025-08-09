# Marvel Comics – Catálogo e Carrinho (React + Vite)

Aplicação front‑end que consome a Marvel Comics API para listar HQs, exibir detalhes e gerenciar um carrinho simples. O projeto foi pensado para ser claro, performático e fácil de rodar, servindo como prova de conceito para e‑commerce/consulta de catálogo.

## ✨ Objetivos do projeto

Explorar boas práticas de React (componentização, estado via Context API e rotas com React Router).

Usar styled-components para um design mobile‑first.

Integrar com a Marvel API de forma segura.

## 🚀 Funcionalidades

Catálogo de HQs com imagem, título e preço.

Busca (filtro por título) diretamente na Home.

Detalhes da HQ (capa, título, descrição, preço e personagens quando disponíveis).

Carrinho: adicionar itens a partir dos cards ou da página de detalhes.

Roteamento: Home /, Detalhes /comic/:id e Carrinho /cart.

## 🧱 Arquitetura & Decisões

Stack: React 18 + Vite + React Router + styled-components + Context API.

Estado global:

ComicsContext → dados de HQs e busca.

CartContext → itens do carrinho (adicionar/remover).

Estilos: styled-components com GlobalStyle e main flexível

Pastas: componentes reutilizáveis em src/components, telas em src/pages, contextos em src/context.

Estrutura de pastas (resumo)

<img width="150" height="575" alt="image" src="https://github.com/user-attachments/assets/e46f14cd-cca2-4903-94b6-c3d1fd7d7e47" />

## 🖥️ Requisitos

Node.js 18+ (recomendado LTS)

npm ou yarn

## 🧰 Como rodar localmente

### 1) Clone o repositório
git clone https://github.com/anac-silva/Marvel.git
cd Marvel

### 2) Instale as dependências
npm install
ou: yarn

### 3) Configure variáveis de ambiente (Marvel API)
cp .env.example .env
edite o .env com suas chaves

### 4) Ambiente de desenvolvimento
npm run dev

### 5) Build de produção
npm run build
npm run preview

## 🧭 Uso da aplicação

Home: mostra HQs com imagem, título e preço.  

Busca: digite para filtrar HQs pelo título.  

Detalhes: clique em Ver Detalhes para saber mais.  

Carrinho: adicione itens e veja em /cart.

## 📸 Capturas de tela

<img width="939" height="909" alt="image" src="https://github.com/user-attachments/assets/264ef772-08bb-49ab-9cd6-8d1b35889b26" />

## 📄 Licença

Projeto de portfólio – sem licença comercial definida. Ajustar para MIT se necessário.

## 👩🏻‍💻 Autoria

Desenvolvido por Ana Carolina para fins de avaliação técnica.

LinkedIn: [ Ana Carolina](https://www.linkedin.com/in/carolinamerloti/)

Portfólio: https://anac-silva.github.io/Portiflio/

E-mail: ana.carolina3551@gmail.com
