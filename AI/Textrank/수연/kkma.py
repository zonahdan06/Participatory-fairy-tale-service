#kkma 클래스의 다른 메소드
from konlpy.tag import Kkma

kkma = Kkma()

# morphs : 단어마다 분리
kkma.morphs(u'공부를 하면할수록 모르는게 많다는 것을 알게 됩니다.')
# nouns : 명사만 출력
kkma.nouns(u'대학에서 DB, 통계학, 이산수학 등을 배웠지만...')
# pos : 형태소 별로 분리 및 형태소와 함꼐 출력
kkma.pos(u'다 까먹어버렸네요?ㅋㅋ')
# sentences : 문장 별로 분리
kkma.sentences(u'그래도 계속 공부합니다. 재밌으니까!')
