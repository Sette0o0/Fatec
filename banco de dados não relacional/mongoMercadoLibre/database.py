from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://sette:rQt12bAk75tRCFX5@settedb.hpu8xln.mongodb.net/?appName=SetteDB&retryWrites=true&w=majority"

# Create a new client and connect to the server
def getDatabase():
    client = MongoClient(uri, server_api=ServerApi('1'))
    return client.mercado_libre_sette
