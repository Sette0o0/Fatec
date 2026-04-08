from endereco.input import input_endereco

from database import getDatabase

global db
db = getDatabase()

def delete_usuario(email):
    #Delete
    mycol = db.usuario
    myquery = {"email": email}
    mydoc = mycol.delete_one(myquery)
    print("Deletado o usuário ",mydoc)

def create_usuario():
    #Insert
    mycol = db.usuario

    print("\nInserindo um novo usuário")

    nome = input("Nome: ")
    email = input("Email: ")
    senha = input("Senha: ")

    end = input_endereco()

    mydoc = { "nome": nome, "email": email, "senha": senha, "endereco": end }

    x = mycol.insert_one(mydoc)

    print("Documento inserido com ID: ", x.inserted_id)

def read_usuario(email):
    #Read
    mycol = db.usuario
    print("Usuários existentes: ")
    if not len(email):
        mydoc = mycol.find().sort("email")
        for x in mydoc:
            print(x["nome"] + ",", x["email"])
    else:
        myquery = {"email": email}
        mydoc = mycol.find(myquery)
        for x in mydoc:
            print(x["nome"] + ",", x["email"])

def update_usuario(email):
    #Read
    mycol = db.usuario
    myquery = {"email": email}
    mydoc = mycol.find_one(myquery)
    print("Dados do usuário: ",mydoc)
    nome = input("Mudar Nome:")
    if len(nome):
        mydoc["nome"] = nome

    email = input("Mudar email:")
    if len(email):
        mydoc["email"] = email


    newvalues = { "$set": mydoc }
    mycol.update_one(myquery, newvalues)
