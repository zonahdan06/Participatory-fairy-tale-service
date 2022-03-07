from konlpy.tag import Komoran

with open("tale2.txt", "r", encoding="utf-8") as f:
    sents = f.read()

komoran = Komoran()
def komoran_tokenizer(sent):
    words = komoran.pos(sent, join=True)
    words = [w for w in words if ('/NN' in w or '/XR' in w)]
    return words

with open('./tale_komoran.txt', 'w') as f:
    lines = komoran_tokenizer(sents)
    for line in lines:
        f.write(line)


