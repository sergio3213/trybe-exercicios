
--------------------------------PARTE 1 DOS EXERCICIOS---------------------------------------

1.Nesse Exercícios foi solicitada a criação de um diretório chamado unix_tests e navegar até ele. Para isso foi usado o comando mkdir(comando de criação de diretórios) e logo em seguida o espaço + nome do diretório(unix_tests). Para navegar até esse diretório foi usado o comando cd e em seguida espaço + nome do diretório que pretendo acessar(unix_tests).



2.Nesse exercício foi solicitada a criação de um arquivo chamado trybe.txt. Para isso foi utilizado o comando touch + trybe.txt. Touch é um comando para criação de arquivos.



3.Nesse exercício pedido para fazer uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.
Para isso foi usado o comando cp seguido do nome do primeiro arquivo em seguida o nome do novo arquivo de cópia (cp trybe.txt trybe_backup.txt).



4.Nesse exercício foi pedido para renomear o arquivo trybe. Foi usado o comando mv que tem a função principal de mover arquivo, porém pode ser usado para renomear também utilizando a sintaxe "mv trybe.txt trybe_novo_nome.txt".



5.Nesse exercício foi pedido para criar um diretório chamado backup dentro do diretório unix_tests. Para isso utilizei o comando "mkdir backup"(mkdir tem a função de criar diretórios).



6.Nesse exercício foi pedido para mover o arquivo trybe_backup.txt para o diretório backup. para isso foi utilizado o comando mv trybe_backup.txt backup.



7.Aqui foi pedido para criar um diretório chamado backup2 dentro do diretório unix_tests.Para isso foi utilizado o comando "mkdir backup2"(mkdir tem a função de criar diretórios).



8.Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
Aqui foi pedido para mudar o local do arquivo trybe.txt para o diretório backup2.
Para isso foi usado a sintaxe mv local_do_arquivo/arquivo.txt diretório_destino. ou seja mv backup/trybe_backup.txt backup2



9.Aqui foi pedido para excluir a pasta backup, para isso foi usado o comando rmdir(já que a pasta está vázia)--->rmdir backup.



10.Aqui foi pedido para renomear a pasta backup2 para backup. Para isso foi utilizado a seguinte linha de comando: mv backup2 backup.



11.Aqui foi pedido para mostrar o caminho do diretório atual e para isso foi usado o comando pwd.



12.Aqui foi pedido para apagar o diretório backup. 
Para isso foi usado a linha de comando rm -rf backup(rm -rf: r indica que é para apagar todos os arquivo internos e subdiretórios, o f indica que não precisa pedir permissão). 



13.Aqui foi pedido para limpar o terminal.Foi usado o comando clear


-------------------------------PARTE 2 DOS EXERCÍCIOS-----------------------------------------

1)Foi pedido para baixar o arquivo countries.txt do link "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries".
Para isso foi usado o comando curl---> Cliente URL--->Comando usado para testar a conectividade de uma URL e tbm para transferencia de dados. 
Então a sintaxe ficou assim:curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries".
A opção -o permite especificar um nome de diferente arquivo ou local.



2)Foi pedido para exibir o conteudo do arquivo baixado. O comando para exibir conteudo de um arquivo é cat, então foi usado a linha de comando cat countries.txt.



3)Aqui foi pedido para mostrar o conteúdo de countries.txt página por página até encontrar a palavra zambia. Para isso foi usado o comando less que tem exatamente essa funcionalidade. less countries.txt. Depois fui apertando espaço até aparecer "Zambia" e pressionar a tecla "q" para sair.



4)Esse exercícios é bem parecido com o exercício 3 porém agora dentro do comando less temos que digitar /Zambia para encontrar a palavra Zambia. Então less countries.txt depois digitei /Zambia, assim que apareceu digite a letra "q" para sair do less.



5)Esse exercícios é quase igual ao exercício 4 a unica diferença é que tem que digitar no less, /Brazil ao invés de /Zambia.



6)Esse exercício pede para buscar a palavra Brazil porém agora ignorando se as letras estão em minúsculo ou maiusculo. Para isso foi usado o comando less -i countries.txt. O -i serve para ignorar letras maíusuclas e minusculas na pesquisa.



7)Esse exercícios pede para que liste as linhas que não contenham a palavra fox. Para isso foi usado o comando grep que serve para buscar palavras dentro do arquivo.
grep -v fox phrases.txt. O -v indica que é para aparecer apenas linhas que não contenha esse termo.



8)aqui pede para contar o numero de palavras do arquivo phrases.txt
Para isso foi usado o comando wc -w phrases.txt. wc é um comando para apresentar o número de linhas, palavras e caracteres/bytes, nessa ordem. -w(word) indica que é para apresentar o número de palavras.



9)Esse exercicio é parecido com o exercício 8, a única diferença é que precisa usar o -l ao invés do -w.



10)Esse exercício pede para criar dois arquivo empty.tbt e empty.pdf. Foi usado a linha de comando touch empty.tbt empty.pdf para criar os dois arquivos ao mesmo tempo.



11)Aqui pede para listar todos os arquivos da pasta unix_tests e para isso foi usado o comando ls.



12)aqui pede para listar todos os arquivos que terminem com txt.
Para isso foi usado o comando ls *txt. * no inicio indica que é para mostrar TUDO depois diz que é para mostrar arquivos que terminam com txt.



13)aqui pede para listar todos os arquivo que terminem com tbt ou txt. Para isso foi usado o comando ls t?t. O interrogação diz que ali pode ter ser qualquer letra.



14) aqui pede para acessar o manual do comando ls. Para isso foi usado o comando man ls. Man serve para mostrar o manual dos comandos.
