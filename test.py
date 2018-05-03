# -*- coding: utf-8 -*-

import re
import os
import sys
# import xbmc
import urllib
import urllib2
import shutil
# import xbmcvfs
# import xbmcaddon
# import xbmcgui,xbmcplugin
from bs4 import BeautifulSoup

SUBHD_API  = 'http://www.subhd.com/search0/%s'
SUBHD_BASE = 'http://www.subhd.com'
UserAgent  = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)'

headers = {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
           'Accept-Encoding': 'gzip, deflate, sdch, br',
           'Accept-Language': 'zh-CN,zh;q=0.8',
           'Connection': 'keep-alive',
           'Upgrade-Insecure-Requests': '1',
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'}

def Search():
    subtitles_list = []

    # log( __name__ ,"Search for [%s] by name" % (os.path.basename( item['file_original_path'] ),))
    # if item['mansearch']:
        # url = SUBHD_API % (urllib.quote(item['mansearchstr']))
    # else:
        # url = SUBHD_API % (urllib.quote(item['title']))

    url = SUBHD_API % '创世纪'
    try:
        socket = urllib.urlopen(url)
        data = socket.read()
        socket.close()
    except Exception as e:
        pass
    else:
        soup = BeautifulSoup(data,'html.parser')
        divs = soup.find_all('div',class_='pull-left lb_r')
    finally:
        pass



    for i in divs:
        print i.find('div',class_='d_title').getText()
        print SUBHD_BASE + i.find('div',class_='d_title').a.get('href')
        span = i.find_all('span',class_='label')
        for j in span: print j.getText()
    # req = urllib2.Request(url)
    # req.add_header('User-Agent', UserAgent)
    # try:
    #     response = urllib2.urlopen(req)
    #     data = response.read()
    #     response.close()
    # except:
    #     pass
    #     # log(__name__, "%s (%d) [%s]" % (
    #     #        sys.exc_info()[2].tb_frame.f_code.co_name,
    #     #        sys.exc_info()[2].tb_lineno,
    #     #        sys.exc_info()[1]
    #     #        ))
    # else:
    #     print data
    # try:
    #     soup = BeautifulSoup(data)
    # except:
    #     return
    # results = soup.find_all("div", class_="box")
    # for it in results:
    #     link = SUBHD_BASE + it.find("div", class_="d_title").a.get('href').encode('utf-8')
    #     #version = it.find(text=re.compile('(字幕翻译|听译版本|机翻版本|官方译本)'.decode('utf-8'))).parent.get('title').encode('utf-8')
    #     version = it.find_all("span", class_=re.compile("label"))[-1].get('title').encode('utf-8')
    #     if version:
    #         if version.find('本字幕按 ') == 0:
    #             version = version.split()[1]
    #     else:
    #         version = '未知版本'
    #     try:
    #         r2 = it.find_all("span", class_="label")
    #         langs = [x.text.encode('utf-8') for x in r2][:-1]
    #     except:
    #         langs = '未知'
    #     name = '%s (%s)' % (version, ",".join(langs))
    #     if ('英文' in langs) and not(('简体' in langs) or ('繁体' in langs)):
    #         subtitles_list.append({"language_name":"English", "filename":name, "link":link, "language_flag":'en', "rating":"0", "lang":langs})
    #     else:
    #         subtitles_list.append({"language_name":"Chinese", "filename":name, "link":link, "language_flag":'zh', "rating":"0", "lang":langs})

    # if subtitles_list:
    #     for it in subtitles_list:
    #         listitem = xbmcgui.ListItem(label=it["language_name"],
    #                               label2=it["filename"],
    #                               iconImage=it["rating"],
    #                               thumbnailImage=it["language_flag"]
    #                               )

    #         listitem.setProperty( "sync", "false" )
    #         listitem.setProperty( "hearing_imp", "false" )

    #         url = "plugin://%s/?action=download&link=%s&lang=%s" % (__scriptid__,
    #                                                                     it["link"],
    #                                                                     it["lang"]
    #                                                                     )
    #         xbmcplugin.addDirectoryItem(handle=int(sys.argv[1]),url=url,listitem=listitem,isFolder=False)


if __name__ == '__main__':
    Search()