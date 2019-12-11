---
layout: posts
title: Como Encerrar Um Processo Executando Em uma Porta no Linux / MacOS
subtitle: Solucione o erro 'port is already in use' ao tentar rodar um servidor http
thumbnail_image: assets/como-encerrar-processo-linux-2018-12-29.png
cover: '../images/como-encerrar-processo-linux-2018-12-29.png'
category: dev
bg-color: black
date: 2018-12-29
description: ""
tags:
	- linux
---

9 de 10 desenvolvedores web passam pelo erro de **não conseguir inicializar um novo servidor http na sua máquina porque a porta já está em uso.**

- Às vezes porque um processo não foi encerado corretamente
- Às vezes porque aconteceu algum bug no seu framijerado linux
- Às vezes porque você esqueceu um servidor rodando em background

Trabalhando como front end me acontece de fazer a troca de um projeto e eu sempre me deparo com um erro retornado pelo npm que tem mais de um projeto rodando na mesma porta.

Alguns projetos rodam no webpack, outros no gulp; uns são configurados manualmente, outros são feitos via o cli de algum framework js.

Tudo isso causa uma confusão um processo não para de executar em uma porta específica automagicamente.

Como não é possível ter duplicidade de processos sendo executados para uma porta a solução é encerrar os projetos rodando na porta ocupada para liberá-la.

Na maioria dos casos eu percebo um erro nos seguintes casos:

- Quando recebo um erro do npm
- Quando tento iniciar um docker
- Quando quero iniciar um vagrant

```bash
Port 4200 is already in use. Use '--port' to specify a different port.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! Exit status 1
npm ERR!
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/user/.npm/_logs/2018-12-29T03_06_11_125Z-debug.log
```

Para solucionar este problema, precisamos liberar a porta no qual existem outros processos sendo executados.

Faremos dois simples passos para realizar tal tarefa:

1. Iremos verificar os processos que estão sendo executados. Eles retornam um PID único, que é um identificador para o processo.
2. Podemos matar o processo específicando PID retornado ou simplesmente encerrando todos os que estão sendo executados naquela porta.

## #1 Verificar os processos / arquivos que estão sendo executadas no linux:

Para listar os processos sendo executados na sua máquina basta rodar o seguinte script no seu terminal (ctrl/cmd + alt + t).

`lsof -n | grep LISTEN`

O comando `lsof` lista todos os arquivos abertos por processos no seu sistema Linux. MacOS e outros sistemas Unix também são suportados.

Utilizamos o `| grep LISTEN` para filtrar os arquivos que estão ouvindo alguma porta nesse momento. Você poderá verificar qual processo está iniciado na porta do seu projeto e pode matá-lo para tornar a porta livre novamente.

O argumento `-n` deixa a listagem mais rápida pois exibe o ip e porta no qual existem processos abertos no browser. ex: localhost:3000 > 127.0.0.1:3000

**para filtrar uma porta específica no linux** execute o comando acima da seguinte maneira:

`lsof -n 14TCP:[porta] | grep LISTEN`

Eu, por exemplo, estava com dificuldade em rodar um webpack na porta 4200 que estava ocupada, então meu caso se tornou o seguinte:

`lsof -n 14TCP:4200 | grep LISTEN`

## #2 Como encerrar um processo sendo executado em uma porta no linux

Depois de identificar quais processos estão abertos no sistema ouvindo a porta desejada, para encerrá-los e torná-las livres novamente basta utilizar mais alguns argumentos utilizando o comando acima.

A nova versão será a exibida abaixo. Executar o comando no seu sistema irá encerrar os processos abertos. Tenha certeza de que é isso que quer fazer.

`lsof -n -i4TCP:4200 | grep LISTEN | awk '{ print $2 }' | xargs kill`

Com isso as portas que estava querendo executar seu projeto no linux já estarão livres.
