import requests

url = "file:///D:/sitioweb/main.html"
response = requests.get(url)

print(response.content)
