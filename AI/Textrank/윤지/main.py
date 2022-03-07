from konlpy.tag import Komoran
from textrank import KeywordSummarizer

with open("tale_komoran.txt", "r", encoding="cp949") as f:
    sents = [sent.strip() for sent in f]

komoran = Komoran()
def komoran_tokenizer(sent):
    words = komoran.pos(sent, join=True)
    words = [w for w in words if ('/NN' in w or '/XR' in w)]
    words = [w for w in words if len(w)>=6]
    return words

keyword_summarizer = KeywordSummarizer(tokenize=komoran_tokenizer, min_count=2, min_cooccurrence=1)
keywords = keyword_summarizer.summarize(sents, topk=20)

for word, rank in keywords:
     print('{} ({:.3})'.format(word, rank))

