					Parte1😎️

1.cd unix_tests

2.cat > skills2.txt
	Internet
	Unix
	Bash
pressiono control+D

3.cat >> skills2.txt
	php
	javascript
	react
	html
	css
pressiono control+D
sort skills2.txt

4.wc -l skills2.txt

5.head -n 3 skills2.txt | sort > top_skills.txt
	Aqui eu usei o comando head -n3 que mostra as 3 primeiras linhas e esse resultado usei no comando sort para deixa-lo em ordem alfabética e por fim o sinal de maior que tem a função de colocar tudo isso no novo arquivo "top_skills.txt"
	
6.cat > phrases2.txt
	php faz conexão com mysql
	javascript tem recursos dinamicos
	html é a estrutura dos sites
	css deixa o site bonito
	
7.grep br phrases2.txt | wc -l

8.grep -v br phrases2.txt | wc -l

9.cat >> phrases2.txt
	Brasil
	Argentina
pressiono ctrl+D

10.cat phrases2.txt countries.txt > bunch_of_things.txt

11.sort bunch_of_things.txt -o bunch_of_things.txt. 
	-o nesse caso indica que a saída vai para outro arquivo ao inves de mostrar no 		terminal, e no caso esse arquivo tem o mesmo nome




					Parte2😎️
					

1.cd unix_tests

2.ls -l

3.chmod 666 bunch_of_things.txt
	aqui cada numeral representa um grupo de usuário(usuario,grupo,outros usuarios respectivamente)
	entao convertendo 6 para binario fica 110 ou seja, no rwx r=1 w=1 x=0 apenas o read e write estará ativado.

4.chmod a-r bunch_of_things.txt

5.chmod 644 bunch_of_things.txt


	
					Parte3😎️
					
1.ps

2.sleep 30 &

3.ps depois "kill numeroPID"

4.sleep 30 depois ctrl+Z depois bg numero jobs

5.sleep 300 &

6.sleep 200 depois ctrl+z, sleep 100 depois ctrl+z

7.fg numeroJobs depois ctrol+z para suspende-lo

8.bg numeroJobsDoSleep100

9.killall sleep
