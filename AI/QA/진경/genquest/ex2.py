import requests

def get_translate(text):
    client_id = "9wHsv4pta4R6GYfpUhAC" # <-- client_id 기입
    client_secret = "PnG6IF3mqu" # <-- client_secret 기입

    data = {'text' : text,
            'source' : 'ko',
            'target': 'en'}

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
        

str=get_translate("어미오리가 따스한 햇살이 내려앉은 개울가 덤불 숲에서 어미오리가 알을 품고 있었어요.")
print(str)