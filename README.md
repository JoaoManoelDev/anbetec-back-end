# Anbetec Back-End Challenge

#### 🎲 Rodando o app

```bash
# Clone este repositório:
$ git clone git@github.com:JoaoManoelDev/anbetec-back-end.git

# Para facilitar a inicialização do banco de dados acesse o terminal/cmd no seguinte diretório:
$ cd anbetec-back-end/_database

# Instale as dependências:
$ npm install

# Crie uma arquivo .env e copie o arquivo .env.example dentro dele.
# Para facilitar, o arquivo já contem o DATABASE_URL padrão do Docker e JWT_SECRET configurado, só copiar.

# Para subir o banco rode o seguinte comando:
$ docker compose up -d

# Inicialize as migrations do prisma:
$ npx prisma migrate dev

# Para configurar o prisma client e suas tipagens digite o comando
$ npx prisma generate

# Você pode visualizar o banco com o seguinte comando:
$ npx prisma studio

# ==================================================================

# Configurando a api de empresas.
# Acesse a pasta do projeto no terminal/cmd.
$ cd anbetec-back-end/companies-api

# Instale as dependências
$ npm install

# Crie uma arquivo .env e copie o arquivo .env.example dentro dele.
# Para facilitar, o arquivo já contem o DATABASE_URL padrão do Docker configurado, só copiar.

# Para configurar o prisma client e suas tipagens digite o comando:
$ npx prisma generate

# Para rodar os testes digite o comando:
$ npm run test

# Para subir o servidor digite o comando:
$ npm run dev

# Deve aparecer a seguinte mensagem -> [COMPANIES API] - Server Running In Port 3333!

# ==================================================================

# Configurando a api de usuários.
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

```