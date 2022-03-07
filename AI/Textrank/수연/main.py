from konlpy.tag import Kkma

# 동화 데이터셋 75권 합본
with open("tale.txt", "r", encoding="utf-8") as f:
    str = f.read()

kkma = Kkma()

#명사 및 어근만 추출
def kkma_tokenizer(str):
    words = kkma.pos(str, flatten=True, join=True)
    words = [w for w in words if ('/NNG' in w or '/VV' in w or '/VA' in w)] #명사만 추출할 경우 /VV 및 /VA는 제외
    return words


with open('output_konlpy.txt', 'w') as f:
    f.writelines(kkma_tokenizer(str))
