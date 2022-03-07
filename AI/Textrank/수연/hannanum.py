# kkma 외에 쓸 수 있는 다른 클래스
from konlpy.tag import Hannanum

hannanum = Hannanum()

# morphs : 단어마다 분리
hannanum.morphs(u'롯데마트의 흑마늘 양념 치킨이 논란이 되고 있다.')
# nouns : 명사만 출력
hannanum.nouns(u'다람쥐 헌 쳇바퀴에 타고파')
# pos : 형태소 별로 분리 및 형태소와 함꼐 출력
hannanum.pos(u'웃으면 더 행복합니다!')
