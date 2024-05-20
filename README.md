# Anbetec Back-End Challenge

### 🎲 Rodando o app

```bash
# Clone este repositório:
$ git clone git@github.com:JoaoManoelDev/anbetec-back-end.git

# Para facilitar a inicialização do banco de dados acesse o terminal/cmd no seguinte diretório:
$ cd anbetec-back-end/_database

# Instale as dependências:
$ npm install

# Crie uma arquivo .env e copie o arquivo .env.example dentro dele.
# Para facilitar, o arquivo já contem o DATABASE_URL padrão do Docker configurado.

# Para subir o banco rode o seguinte comando:
$ docker compose up -d

# Inicialize as migrations do prisma:
$ npx prisma migrate dev

# Para configurar o prisma client e suas tipagens digite o comando:
$ npx prisma generate

# Você pode visualizar o banco com o seguinte comando:
$ npx prisma studio

# ==================================================================

# Configurando a API de empresas.
# Acesse a pasta do projeto no terminal/cmd.
$ cd anbetec-back-end/companies-api

# Instale as dependências
$ npm install

# Crie uma arquivo .env e copie o arquivo .env.example dentro dele.
# Para facilitar, o arquivo já contem o DATABASE_URL padrão do Docker e JWT_SECRET configurado.

# Para configurar o prisma client e suas tipagens digite o comando:
$ npx prisma generate

# Para rodar os testes digite o comando:
$ npm run test

# Para subir o servidor digite o comando:
$ npm run dev

# Deve aparecer a seguinte mensagem -> [COMPANIES API] - Server Running In Port 3333!

Documentação - http://localhost:3333/api-docs

# ==================================================================

# Configurando a API de usuários.
# Acesse em um terminal/cmd separado o seguinte diretório:
$ cd anbetec-back-end/users-api

# Instale as dependências
$ npm install

# Crie uma arquivo .env e copie o arquivo .env.example dentro dele.
# Para facilitar, o arquivo já contem o DATABASE_URL padrão do Docker configurado, só copiar.
# As demais variáveis deverão ser preenchidas de acordo com suas necessidades.

# Para configurar o prisma client e suas tipagens digite o comando:
$ npx prisma generate

# Para rodar os testes digite o comando:
$ npm run test

# Para subir o servidor digite o comando:
$ npm run dev

# Deve aparecer a seguinte mensagem -> [USERS API] - Server Running In Port 3334!

Documentação - http://localhost:3334/api-docs

```

### ℹ️ Instruções sobre o app

#### Passo 1: Criação de Usuário
- Use a rota de criação de usuário para adicionar um novo usuário ao sistema.

#### Passo 2: Atribuição de Empresa ao Usuário
- Inicialmente, o usuário criado não possuirá uma empresa atribuída, pois não haverá empresas cadastradas no sistema.
- Você pode atribuir uma empresa ao usuário posteriormente usando a rota de edição de usuários.

#### Passo 3: Autenticação
- Use as credenciais do usuário criado para fazer login e receber um token de autenticação.
- Com o token, você poderá realizar operações na API de empresas.

#### OBSERVAÇÕES
- Para que a API de usuários busque todos os usuários usando o cron, não se esqueça de preencher as variáveis de ambiente "NAME" e "PASSWORD" com os dados de um usuário já cadastrado, e a variável "COMPANY_ID" com o ID de uma empresa já cadastrada.

### 🛠️ Tecnologias

#### Backend

- **Node.js**: Ambiente de execução JavaScript para construir aplicações server-side.
- **Express**: Framework web para Node.js, usado para criar a API de forma simples e eficiente.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática, melhorando a robustez e a manutenção do código.

#### Banco de Dados

- **Prisma ORM**: ORM (Object-Relational Mapping) moderno e tipado, utilizado para interagir com o banco de dados de forma eficiente e segura.

#### Autenticação e Autorização

- **JWT (JSON Web Tokens)**: Utilizado para autenticação e autorização segura entre o cliente e o servidor.

#### Testes

- **Vitest**: Framework de testes unitários para JavaScript e TypeScript, garantindo a confiabilidade do código.

### 🧑‍💻 Padrões de Arquitetura e Design

- **SOLID**: Princípios para criação de design de software.

- **In-Memory**: Utilização de armazenamento em memória para testes e desenvolvimento, permitindo simular o comportamento do banco de dados sem persistência permanente.

- **Factories**: Padrão de criação para instanciar objetos de forma centralizada e controlada.

- **Repositories**: Abstração da camada de persistência, permitindo a separação de lógica de acesso a dados da lógica de negócio.

- **DTO (Data Transfer Object)**: Utilizar DTOs para transferir dados entre a camada de controle e a camada de use case, garantindo uma separação clara de responsabilidades e evitando vazamento de informações.

Feito por João Manoel.