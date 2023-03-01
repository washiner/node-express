const express = require('express')
const app = express()

/* NOTA
  SE VC COLOCAR http:://localhost:3000 vc entra no indez se vc coloca /sobre vai para sobre
  se vc colocar /blog vc abre a pagina blog lembrando que pra cada alteracao tem que reiniciar
  o servidor pois ainda nao estamos usando nodemon
 */

app.get('/', function(require, response){
    response.send('Seja bem vindo ao meu app')
})

app.get('/sobre', function(require,response){

    response.send('ESTAMOS NA PAGINA SOBRE')
})

app.get('/blog', function(require,response){
    response.send('ESTAMOS NA PAGINA BLOG')
})

app.listen(3000, function(){
    console.log("Servidor rodando na porta http://localhost:3000")
})





/* NOTAS
    linha 1  -> cria uma variavel chamando modulo express
    linha 2  -> cria uma variavel que representa tudo que vem do express

    //app.listen e referente a porta ou seja localhost ele tem que ficar na ultima linda do codigo sempre se nao express nao funciona
    
    //app.listen tem a funcao de callback pra poder fazer tudo acontecer
 
 */