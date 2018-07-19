from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from urllib.request import urlretrieve
import sys
import time


def crawler(url, shopNum, typeNum, pageNum):
    options = Options()
    # options.add_argument('--headless')
    options.add_argument('--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36')
    driver = webdriver.Chrome(chrome_options= options)
    driver.get(url)
    
    # 8*3
    message = ''
    for i in range(2, 9):
        for j in range(1, 4):
            goodID = str(shopNum) + str(typeNum) + str(pageNum) + str(i) + str(j)
            text_xpath = '//div[@class="shop-hesper-bd grid"]/div['+ str(i) +']/dl[' + str(j) + ']/dd[1]/a'
            good_name = driver.find_element_by_xpath(text_xpath).text

            price_xpath = '//div[@class="shop-hesper-bd grid"]/div['+ str(i) +']/dl[' + str(j) + ']/dd[1]/div/div[1]/span[2]'
            price = driver.find_element_by_xpath(price_xpath).text
            message = message + goodID + ' ' + price + ' ' + good_name + '\n'

            img_xpath = '//div[@class="shop-hesper-bd grid"]/div['+ str(i) +']/dl[' + str(j) + ']/dt/a/img'
            img_element = driver.find_element_by_xpath(img_xpath)
            img_url = img_element.get_attribute('src')
            urlretrieve(img_url, '/Users/ludanxer/Work/Python/Vibra/images/' + goodID + '.jpg')
    
    with open('/Users/ludanxer/Work/Python/Vibra/goods/' + str(shopNum) + '_' + str(typeNum)  + '.txt', 'w') as file:
        file.write(message)



if __name__ == '__main__':
    argv_len = len(sys.argv)
    if argv_len == 5:
        crawler(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]) # url, shop, type, page
    else:
        print("Argument number error!")
