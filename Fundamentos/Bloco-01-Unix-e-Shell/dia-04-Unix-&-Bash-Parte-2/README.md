------------------------------UNIX E BASH EXERCÍCIOS----------------------------------
				PARTE 2 - 1
		
Criei uma nova pasta unix_teste por questão de organização.



1) Aqui pede para navegar até a pasta unix_tests. Para isso eu usei o comando "cd unix_tests". 



2) Aqui pede para criar um arquivo chamado skills2.txt e adicionar os valores Internet, Unix e Bash, um em cada linha.
Para isso usei o comando cat > skills2.txt, então digitei e apertei enter para cada palavra.
no final apertei ctrl +D para concluir.



3) aqui pede para adicionar 5 itens a minha lista de skills e depois imprimir na tela em ordem alfabética. Para adicionar os itens usei o comando cat >> skills2.txt e digitei 5 itens. Já para imprimir de forma ordenada usei o comando sort < skills2.txt



4)Aqui pede para mostrar quantas linhas tem o arquivo skills2.txt. Para isso usei o comando wc -l skills2.txt. O wc mostra o número de linhas,palavras e caracteres respectivamente. O -l, diz que é para mostrar só o numero de linhas.



5)Aqui pede para criar um arquivo chamado top_skills.txt com o conteúdo das 3 primeiras linhas do skills2.txt em ordem alfabética. Para isso foi usado o comando head -3 skills2.txt | sort > top_skills.txt. O HEAD -3 pega as 3 primeiras linhas. O PIPE(|) canaliza a saida do primeiro comando para o segundo, no caso o sort e o simbolo maior que (>) diz que é para guardar essas informações no arquivo top_skills.txt.



6)aqui pede para criar um arquivo chamado phrases2.txt e adicionar algumas frases a minha escolha. Então usei o comando cat>phrases2.txt e digitei algumas frases.



7)Aqui pede para contar o número de linhas que contem as letras "br".
usei o comando grep -c "br" phrases2.txt.



8)Aqui pede para contar o número de linhas que não contem as letras "br".
usei o comando grep -cv "br" phrases2.txt. Grepe -c serve para contar o número de linhas e -v diz que é para retornar apenas as linhas que não possuem as letras "br"



9)aqui pede para adicionar dois nomes de paises ao final do arquivo phrases2.txt
Para isso usei o comando cat>>phrases2.txt e digitei os nomes dos países



10)aqui pede para criar um arquivo chamado bunch_of_things.txt contendo o conteúdo de phrases2.txt e countries.txt.
OBS: O arquivo countries.txt estava na pasta do exercício anterior, copiei para essa pasta por questão de organização.

Para realizar o exercício usei o comando:  cat phrases2.txt countries.txt>bunch_of_things.txt



11)Aqui pede para ordenar o arquivo bunch_of_things.txt.Para isso usei o comando sort bunch_of_things.txt -o bunch_of_things.txt. O sort -o indica que é para transferir o conteudo do sort do primeiro arquivo para o segundo arquivo, nesse caso o primeiro e segundo arquivo são os mesmos

