from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from usuario.crud import *

uri = "mongodb+srv://sette:rQt12bAk75tRCFX5@settedb.hpu8xln.mongodb.net/?appName=SetteDB&retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
global db
db = client.mercado_libre_sette

key = 0
sub = 0
while (key != 'S' or key != 's'):
    print("1-CRUD Usuário")
    print("2-CRUD Vendedor")
    print("3-CRUD Produto")
    key = input("Digite a opção desejada? (S para sair) ")

    if (key == '1'):
        print("Menu do Usuário")
        print("1-Create Usuário")
        print("2-Read Usuário")
        print("3-Update Usuário")
        print("4-Delete Usuário")
        sub = input("Digite a opção desejada? (V para voltar) ")
        if (sub == '1'):
            print("Create usuario")
            create_usuario(db)
            
        elif (sub == '2'):
            nome = input("Read usuário, deseja algum nome especifico? ")
            read_usuario(db, nome)
        
        elif (sub == '3'):
            nome = input("Update usuário, deseja algum nome especifico? ")
            update_usuario(db, nome)

        elif (sub == '4'):
            print("delete usuario")
            nome = input("Nome a ser deletado: ")
            sobrenome = input("Sobrenome a ser deletado: ")
            delete_usuario(db, nome, sobrenome)
            
    elif (key == '2'):
        print("Menu do Vendedor")        
    elif (key == '3'):
        print("Menu do Produto")        

print("Tchau Prof...")
