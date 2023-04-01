# ignite_03_API_NodeJS_SOLID

## Anotações
A definição de save-exact=true no arquivo .npmrc serve para deixar as versões de todas as dependências fixas, assim se em algum momento for necessário baixar novamente ele buscará pela versão em que o projeto foi construido.

Criar ambiente Docker com postgres: docker compose up -d (irá rodar o arquivo docker-compose.yml subindo a imagem)
O mesmo comando de criação, mas diretamente no terminal:
docker run 
--name api-nodejs-solid-pg 
-e POSTGRESQL_USERNAME=docker 
-e POSTGRESQL_PASSWORD=docker 
-e POSTGRESQL_DATABASE=apisolid 
-p 5432:5432 bitnami/postgresql

ORM - Object Relational Mapper (Prisma, Sequilize, TypeORM)
Para subir as alterações nas tabelas criadas do Prisma para o banco basta executar: npx prisma migrate dev
Para subir todas as migrations de uma vez no momento de produção basta executar: npx prisma migrate deploy
E caso quiser ter uma visualização dos dados das tabelas basta executar: npx prisma studio

## App
GymPass style app.

### RFs (Requisitos funcionais - O que?)
- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio - Quando?)
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais - Técnicos)
- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados rpecisam estar páginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON web Token);