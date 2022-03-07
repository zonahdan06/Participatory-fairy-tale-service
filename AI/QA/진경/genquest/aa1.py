#Author: Indrajith Indraprastham
#Date:  Wed Dec 20 00:12:39 IST 2017 (last update)

# The text file is read using a Python package called textblob
from textblob import TextBlob
import nltk
from textblob import Word
import sys
import requests

def get_translate(text,src,dst):
    client_id = "9wHsv4pta4R6GYfpUhAC" # <-- client_id 기입
    client_secret = "PnG6IF3mqu" # <-- client_secret 기입

    data = {'text' : text,
            'source' : src,
            'target': dst}

    url = "https://openapi.naver.com/v1/papago/n2mt"

    header = {"X-Naver-Client-Id":client_id,
              "X-Naver-Client-Secret":client_secret}

    response = requests.post(url, headers=header, data=data)
    rescode = response.status_code

    if(rescode==200):
        send_data = response.json()
        trans_data = (send_data['message']['result']['translatedText'])
        return trans_data
    else:
        print("Error Code:" , rescode)
        

# Each paragraph is further broken down into sentences using the function parse(string):
def parse(string):
    """
    Parse a paragraph. Devide it into sentences and try to generate quesstions from each sentences.
    """
    string=get_translate(string,"ko","en") ### 한글 -> 영어 번역
    
    try:
        txt = TextBlob(string)
        # Each sentence is taken from the string input and passed to genQuestion() to generate questions.
        for sentence in txt.sentences:
            genQuestion(sentence)

    except Exception as e:
        raise e



# And each sentence is passed as string to function genQuestion(line):
def genQuestion(line):
    """
    outputs question from the given text
    """
    

    if type(line) is str:     # If the passed variable is of type string.
        line = TextBlob(line) # Create object of type textblob.blob.TextBlob

    bucket = {}               # Create an empty dictionary


    for i,j in enumerate(line.tags):  # line.tags are the parts-of-speach in English
        if j[1] not in bucket:
            bucket[j[1]] = i  # Add all tags to the dictionary or bucket variable
    
    if verbose:               # In verbose more print the key,values of dictionary
        print('\n','-'*20)
        print(line ,'\n')        
        print("TAGS:",line.tags, '\n')  
        print(bucket)
    
    question = ''            # Create an empty string 

    # These are the english part-of-speach tags used in this demo program.
    #.....................................................................
    # NNS     Noun, plural                                  복수 명사
    # JJ  Adjective                                         형용사
    # NNP     Proper noun, singular                         고유명사,단수
    # VBG     Verb, gerund or present participle            동명사,현재분사
    # VBN     Verb, past participle                         과거분사
    # VBZ     Verb, 3rd person singular present             3인칭 단수 동사
    # VBD     Verb, past tense                              과거형
    # IN      Preposition or subordinating conjunction 
    # PRP     Personal pronoun                              
    # NN  Noun, singular or mass                            단수 명사
    #.....................................................................

    # Create a list of tag-combination

    l1 = ['NNP', 'VBG', 'VBZ', 'IN'] or ['NN', 'VBG', 'VBZ', 'IN'] 
    l2 = ['NNP', 'VBG', 'VBZ'] or ['NN', 'VBG', 'VBZ'] 
    

    l3 = ['PRP', 'VBG', 'VBZ', 'IN'] 
    l4 = ['PRP', 'VBG', 'VBZ'] 
    l5 = ['PRP', 'VBG', 'VBD'] 
    l6 = ['NNP', 'VBG', 'VBD'] or ['NN', 'VBG', 'VBD']
    l7 = ['NN', 'VBG', 'VBZ'] or ['NNP', 'VBG', 'VBZ']

    l8 = ['NNP', 'VBZ', 'JJ'] or ['NN', 'VBZ', 'JJ'] 
    l9 = ['NNP', 'VBZ', 'NN'] or ['NN', 'VBZ', 'NN']

    l10 = ['NNP', 'VBZ'] or ['NN', 'VBZ']
    l11 = ['PRP', 'VBZ'] 
    l12 = ['NNP', 'NN', 'IN'] or ['NN', 'NN', 'IN'] 
    l13 = ['NN', 'VBZ'] or ['NNP', 'VBZ']


    # With the use of conditional statements the dictionary is compared with the list created above

    
    if all(key in  bucket for key in l1): #'NNP', 'VBG', 'VBZ', 'IN' in sentence.
        question = 'What' + ' ' + line.words[bucket['VBZ']] +' '+ line.words[bucket["NNP"]]+ ' '+ line.words[bucket['VBG']] + '?'

    
    elif all(key in  bucket for key in l2): #'NNP', 'VBG', 'VBZ' in sentence.
        question = 'What' + ' ' + line.words[bucket['VBZ']] +' '+ line.words[bucket['NNP']] +' '+ line.words[bucket['VBG']] + '?'

    
    elif all(key in  bucket for key in l3): #'PRP', 'VBG', 'VBZ', 'IN' in sentence.
        question = 'What' + ' ' + line.words[bucket['VBZ']] +' '+ line.words[bucket['PRP']]+ ' '+ line.words[bucket['VBG']] + '?'

    
    elif all(key in  bucket for key in l4): #'PRP', 'VBG', 'VBZ' in sentence.
        question = 'What ' + line.words[bucket['PRP']] +' '+  ' does ' + line.words[bucket['VBG']]+ ' '+  line.words[bucket['VBG']] + '?'

    elif all(key in  bucket for key in l7): #'NN', 'VBG', 'VBZ' in sentence.
        question = 'What' + ' ' + line.words[bucket['VBZ']] +' '+ line.words[bucket['NN']] +' '+ line.words[bucket['VBG']] + '?'

    elif all(key in bucket for key in l8): #'NNP', 'VBZ', 'JJ' in sentence.
        question = 'What' + ' ' + line.words[bucket['VBZ']] + ' ' + line.words[bucket['NNP']] + '?'

    elif all(key in bucket for key in l9): #'NNP', 'VBZ', 'NN' in sentence
        question = 'What' + ' ' + line.words[bucket['VBZ']] + ' ' + line.words[bucket['NNP']] + '?'

    elif all(key in bucket for key in l11): #'PRP', 'VBZ' in sentence.
        if line.words[bucket['PRP']] in ['she','he']:
            question = 'What' + ' does ' + line.words[bucket['PRP']].lower() + ' ' + line.words[bucket['VBZ']].singularize() + '?'

    elif all(key in bucket for key in l10): #'NNP', 'VBZ' in sentence.
        question = 'What' + ' does ' + line.words[bucket['NNP']] + ' ' + line.words[bucket['VBZ']].singularize() + '?'

    elif all(key in bucket for key in l13): #'NN', 'VBZ' in sentence.
        question = 'What' + ' ' + line.words[bucket['VBZ']] + ' ' + line.words[bucket['NN']] + '?'

    # When the tags are generated 's is split to ' and s. To overcome this issue.
    if 'VBZ' in bucket and line.words[bucket['VBZ']] == "’":
        question = question.replace(" ’ ","'s ")

    # Print the genetated questions as output.
    if question != '':
        question=get_translate(question,"en","ko")   ### 영어 -> 한글 번역
        print('\n', 'Question: ' + question )
   

def main():  
    """
    Accepts a text file as an argument and generates questions from it.
    """
    #verbose mode is activated when we give -v as argument.
    global verbose 
    verbose = False

    # Set verbose if -v option is given as argument.
    if len(sys.argv) >= 3: 
        if sys.argv[2] == '-v':
            print('Verbose Mode Activated\n')
            verbose = True

    # Open the file given as argument in read-only mode.
    filehandle = open(sys.argv[1], 'r', encoding="UTF-8")
    textinput = filehandle.read()
    print('\n-----------INPUT TEXT-------------\n')
    print(textinput,'\n')
    print('\n-----------INPUT END---------------\n')

    # Send the content of text file as string to function parse()
    parse(textinput)

if __name__ == "__main__":
    main()

