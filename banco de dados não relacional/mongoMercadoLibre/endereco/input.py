from database import getDatabase

global db
db = getDatabase()

def input_endereco():
    cep = input("CEP: ")
    estado = input("Estado: ")
    cidade = input("Cidade: ")
    bairro = input("Bairro: ")
    rua = input("Rua: ")
    num = input("Num: ")
    return {        #isso nao eh json, isso é chave-valor, eh um obj
        "cep": cep,
        "estado": estado,
        "cidade": cidade,
        "bairro": bairro,
        "rua":rua,
        "num": num
    }