statement = """The Python Software Foundation and the global Python community welcome and encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. We want our community to be more diverse: whoever you are, and whatever your background, we welcome you."""

statement = statement.replace(".", " ")
statement = statement.replace(":", " ")
statement = statement.replace(",", " ")

statement = statement.lower().split()

py = "python"
count = 0

for palavra in statement:
    for letra in palavra:
        if letra in py and len(palavra) > 4:
            count += 1
            break

print(f"{count}, número de palavras que contém alguma letra de 'python' e tenha mais que 4 letras.")