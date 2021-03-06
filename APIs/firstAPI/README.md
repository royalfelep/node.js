# Minha primeira API REST

## Sobre:

Obs: Para testar a API, é necessário o uso do [Postman](https://www.postman.com/downloads/).

A API é capaz de registrar, deletar, alterar e buscar produtos dentro de um banco de dados local, que é gerado automaticamente ao registrar o primeiro produto.

## Configurando a API:

Para configurar a API, use o comando `npm i express` ou `yarn add express` para instalar as dependências. Em seguida, use o comando `npm start` ou `yarn start` para iniciar o servidor (`localhost:3000/products`).

## Métodos:

- `GET` seleciona todos os produtos ou um em específico a partir de sua ID.
- `POST` cadastra um produto e gera um novo ID para ele. Se algum produto foi deletado, ele repõe outro produto no lugar, com a respectiva ID.
- `PUT` altera um produto a partir de sua ID. Se ele não existir, outro produto será criado no lugar.
- `DELETE` deleta um produto a partir de sua ID.

## Usando a API:

<p align=center> <b>Clique na imagem para assistir o vídeo explicativo<b> </p>
<p align=center>
<a href="https://youtu.be/F854-AS_KD0"> <img src="https://user-images.githubusercontent.com/73192682/113459564-4e4a7700-93ec-11eb-8299-a90480b6f85c.jpg" alt="Funcionamento da API"> </a>
</p>

## Produtos para teste:

```
Produto 1:
    name:Placa de Vídeo
    brand:Nvidia
    model:GeForce GTX 1660 TI
    value:3599.90

Produto 2:
    name:Processador
    brand:Intel
    model:BX80684I78700
    value:R$2.456.90

Produto 3:
    name:Memória
    brand:HyperX
    model:HX429C15PB3AK2/16
    value:R$1.023.41

Produto 4:
    name:Placa-Mãe
    brand:Asus
    model:ROG Strix B460-H Gaming
    value:R$ 1.411.65
```
