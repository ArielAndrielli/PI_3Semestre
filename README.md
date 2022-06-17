# Projeto Integrador Terceiro Semestre #
<hr>
<h2>Tema:</h2>
<p>Consumo de API's</p>
<h2>Sobre:</h2>
<p>O projeto trata-se de um site onde o usuário é capaz de avaliar um catálogo de filmes previamente cadastrados na base de dados<p>
  <a href="https://6286d4f2334bfc4fc40a3d59--dainty-entremet-a754d0.netlify.app/">Link do site hospedado no Netlify</a>
<h2>Tecnologias</h2>
<ul>
  <li>Java</li>
  <li>Spring</li>
  <li>React Js</li>
  <li>Postgresql</li>
</ul>
<h2>Sobre a API</h2>
<p>API desenvolvida usando Spring+Java, onde ela retorna um JSON dos filmes cadastrados em nossa base de dados usando o SGBD PostgreSql</p>
<p>Foram Criados dois EndPoints para requisições:
  <li>/Movies-> Retorna todos os filmes da base de dados. Exemplo: https://projectfatec-dsmovie.herokuapp.com/movies</li> 
  <li>/Movies/Id -> Onde o ID pode ser um número de 1 a 30 para retornar um JSON com os dados de um único filme de acordo com seu ID. Exemplo: https://projectfatec-dsmovie.herokuapp.com/movies/1</li>
<h2>Prototipação</h2>
<a href="https://www.figma.com/file/Hzcggsv0WLEWEzMOYC4SXH/DSMovie-V2?node-id=1%3A6">Figma</a>
<h2>Testando o projeto</h2>
<ul>
  <li>Certifique-se de ter instalado o Node.js</li>
  <li>Execute o comando: npm install --global yarn</li>
  <li>Clone o projeto e entre na pasta 'FrontEnd'</li>
  <li>Na pasta 'FrontEnd' no terminal execute 'yarn build' e logo em seguida 'yarn start'</li>
