# API de Gestão de Choperia - Node.js, Express & Prisma 🍻🚀

Bem-vindo à API de Gestão de Choperia, um sistema desenvolvido para otimizar o gerenciamento de usuários, categorias, produtos e pedidos em uma choperia. Esta API foi construída utilizando **Node.js, Express, Prisma, Bcrypt e JWT**, garantindo segurança, escalabilidade e eficiência no controle de pedidos e estoque.

## 📌 Visão Geral
A API permite a criação e gerenciamento de usuários, categorias de produtos, itens do menu e pedidos. Além disso, é possível gerenciar mesas, adicionar e remover itens dos pedidos e controlar o fluxo de envio e finalização dos pedidos na cozinha.

## 💡 Tecnologias Utilizadas
- **Node.js** - Ambiente de execução para JavaScript no backend.
- **Express** - Framework minimalista para construção de APIs.
- **Prisma** - ORM para interação com bancos de dados relacionais.
- **PostgreSQL** - Banco de dados relacional para armazenar informações.
- **Bcrypt** - Para criptografia segura de senhas dos usuários.
- **JWT (JSON Web Token)** - Para autenticação e controle de acesso.
- **Multer** - Middleware para upload de arquivos (imagens de produtos).

## 🏗️ Estrutura dos Serviços (Services)
A API é organizada em módulos independentes para facilitar a manutenção e escalabilidade:

### 1. **Usuários (user.js)**
- Criação de usuários.
- Autenticação e controle de permissões com JWT.
- Gerenciamento de usuários.
- Armazenamento seguro de senhas com Bcrypt.
- **Endpoints:**
  - `POST /users` → Criar usuário.
  - `POST /session` → Autenticar usuário.
  - `GET /me` → Obter detalhes do usuário autenticado.

### 2. **Categorias (category.js)**
- Cadastro e listagem de categorias de produtos.
- **Endpoints:**
  - `POST /category` → Criar categoria.
  - `GET /category` → Listar categorias.

### 3. **Produtos (product.js)**
- Cadastro e listagem de produtos vinculados a uma categoria.
- **Endpoints:**
  - `POST /product` → Criar produto.
  - `GET /category/product` → Listar produtos por categoria.

### 4. **Pedidos (order.js)**
- Criação e gerenciamento de pedidos.
- Alteração de status dos pedidos.
- **Endpoints:**
  - `POST /order` → Criar pedido (abrir mesa).
  - `DELETE /order` → Remover pedido (fechar mesa).
  - `PUT /order/send` → Enviar pedido para a cozinha.
  - `GET /orders` → Listar pedidos pendentes.
  - `GET /orders/detail` → Obter detalhes de um pedido.
  - `PUT /order/finish` → Finalizar pedido.

### 5. **Itens do Pedido (item.js)**
- Adição e remoção de itens em um pedido.
- **Endpoints:**
  - `POST /order/add` → Adicionar item ao pedido.
  - `DELETE /order/remove` → Remover item do pedido.

## 🔧 Funcionalidades Principais
✅ Criação e gerenciamento de usuários com autenticação segura.  
✅ Cadastro e listagem de categorias e produtos.  
✅ Gestão de pedidos e itens de forma eficiente.  
✅ Controle de fluxo dos pedidos (rascunho, enviados e finalizados).  
✅ Upload de imagens de produtos via Multer.  
✅ Proteção de rotas com JWT e criptografia de senhas com Bcrypt.

## 🚀 Como Executar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/sistema-de-pedidos-backend.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure as variáveis de ambiente (`.env`).
4. Execute a aplicação:
   ```sh
   npm run dev
   ```

Agora sua API estará rodando e pronta para ser utilizada! 🎉

