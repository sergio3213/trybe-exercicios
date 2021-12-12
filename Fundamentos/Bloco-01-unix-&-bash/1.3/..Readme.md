
					PARTE 1😎️
1.mkdir unix_tests depois cd unix-tests

2.touch trybe.txt

3.cp trybe.txt trype_backup.txt

4.mv trybe.txt novo_nome.txt(mv tem a função de mover arquivos mas se você não indicar o nome da pasta para qual quer move-lo então ele renomeará o arquivo)

5.mkdir backup

6.mv trybe_backup.txt /backup

7.mkdir backup2

8.mv backup/trybe_backup.txt /backup2

9.rmdir backup

10.mv backup2 backup

11.pwd depois ls para listar os arquivos do diretório atual

12.rm -rf backup(como backup não é um diretório vazio temos que usar o -rf sendo o r indicando que vai apagar todos os subdiretorios e arquivos e o f para indicar que não vai aparecer mensagem de permissão na tela)

13.clear

14.head -n 5 skills.txt

15.tail -n 4 skills.txt

16.rm *.txt


						PARTE 2😎️
						

1.curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

2.cat countries.txt

3.less countries.txt e para passar de pagina pressiona "z"

4.less countries.txt e digita /Zambia

5.less countries.txt e digita/Brazil

6.less -i countries.txt e digita /brasil(-i indica que é para ignorar letras maiusculas e minusculas)

7.grep -iv fox phrases.txt(o i indica que é para ignorar o lower case e o "v fox" indica que é para pegar linhas que não contenham a palavra fox)

8.wc -w phrases.txt

9.wc -l phrases.txt

10.mkdir empty.tb empty.pdf

11.ls

12.ls *.txt

13.ls *.t?t

14.man ls
