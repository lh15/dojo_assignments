import requests

r = requests.get('http://pokeapi.co/api/v2/pokemon/1/')
print r.status_code