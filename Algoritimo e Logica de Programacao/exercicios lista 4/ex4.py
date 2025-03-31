statement = """The Python Software Foundation and the global Python community welcome and encourage participation by everyone. Our community is based on mutual respect, tolerance, and encouragement, and we are working to help each other live up to these principles. We want our community to be more diverse: whoever you are, and whatever your background, we welcome you."""

statement = statement.replace(".", " ")
statement = statement.replace(":", " ")
statement = statement.replace(",", " ")

statement = statement.lower().split()

py = "python"
listaPY = []

for palavra in statement:
    if palavra[0] in py:
        listaPY.append(palavra)

print(listaPY)
