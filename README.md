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

Tratativa de erros: 
Para erros internos do sistema que forem gerados em produção, é essêncial é que seus logs sejam enviados para uma ferramenta externa como DataDog/NewRelic/Sentry

Testes:
TDD - Test-driven development (desenvolvimento dirigido a teste), metodologia que facilita entender e caminhar pelas regras de negócio das funcionalidades enquanto elas são desenvolvidas, muito boa para features mais complexas. (Exemplo realizado na criação de check-ins)
red - Estado quando se cria o teste primeuro mas a funcionalidade ainda não está implementada.
green - Estado quando a funcionaldiade está criada e quando é realizado o teste ele não gera erro.
refactor - Estado quando você refatroa o código para ?? 

npm run test - Roda os testes sem ficar observando a cada mudança (watch).
npm run test:watch - Roda os testes e fica observando a cada mudança (watch).
npm run test:coverage - Roda os testes e cria /coverage/index.html para visualização do cobrimento dos testes.
npm run test:ui - Interface para visualiação e execução de testes.

Design Pattern:
In Memory Test Database - Representação do banco de dados em memória para realização de testes, dessa forma evitando precisar de um banco para testes, tornando os testes mais rápidos, foco em testar funcionalidades das funções, como caso de usos.
Factory - Adiciona uma abstração extra para a instanciação de dependências de um método ou classe, ou seja, no código isso reflete nas dependências dos casos de uso que são instanciadas e passadas nos controllers, mas para evitar isso criamos as factories abstraindo as chamadas de dependerias e no conrtroller chamamos apenas a factory.

SOLID:
D - Dependency Inversion Principle (Casos de uso não instancia dependências, ele as recebe como parâmetro)

## App
GymPass style app.

### RFs (Requisitos funcionais - O que?)
- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

### RNs (Regras de negócio - Quando?)
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

### RNFs (Requisitos não-funcionais - Técnicos)
- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados rpecisam estar páginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON web Token);