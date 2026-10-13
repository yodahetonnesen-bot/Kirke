import json, re
d=json.load(open('deler.json'))
RETT=[('E n tilbedelse','Én tilbedelse'),('som vi o g tilgir','som vi òg tilgir')]
def rens(t, kol):
    t=re.sub(r'\s+',' ',t).strip()
    if kol=='no':
        for a,b in RETT: t=t.replace(a,b)
        t=t.replace(' ,',',')
    return t
TITLER={
 'daglig':({'gez':'ጸሎት ዘዘወትር','am':'የዘወትር ጸሎት','no':'Daglig bønn'},'daglig'),
 'mandag':({'gez':'ሰኑይ','am':'ሰኞ','no':'Mandag'},'mandag'),
 'tirsdag':({'gez':'ሠሉስ','am':'ማክሰኞ','no':'Tirsdag'},'tirsdag'),
 'onsdag':({'gez':'ረቡዕ','am':'ረቡዕ','no':'Onsdag'},'onsdag'),
 'torsdag':({'gez':'ሐሙስ','am':'ሐሙስ','no':'Torsdag'},'torsdag'),
 'fredag':({'gez':'ዓርብ','am':'ዓርብ','no':'Fredag'},'fredag'),
 'lordag':({'gez':'ቀዳሚት ሰንበት','am':'ቅዳሜ','no':'Lørdag'},'lordag'),
 'sondag':({'gez':'ሰንበተ ክርስቲያን','am':'እሁድ','no':'Søndag'},'sondag'),
 'melaekt':({'gez':'ይዌድስዋ መላእክት','am':'የመላእክት ምስጋና','no':'Englenes lovsang'},'englenes-lovsang'),
}
DELT={'gez':'ውዳሴሃ','am':None,'no':'Lovprisning'}
ut=[]
for s,(tittel,slug) in TITLER.items():
    del_={'id':slug,'tittel':tittel}
    f={k:rens(d[s][k]['forord'],k) for k in ['gez','am','no']}
    if s in ('daglig','melaekt'):
        if any(f.values()): del_['innledning']=f
    else:
        am_i=f['am'].index('አንጪኝ።')+len('አንጪኝ።')
        g_i=f['gez'].index('ውዳሴሃ'); n_i=f['no'].index('Lovprisning')
        del_['velsignelse']={'gez':f['gez'][:g_i].strip(),'am':f['am'][:am_i].strip(),'no':f['no'][:n_i].strip().rstrip('.')+'.'}
        del_['overskrift']={'gez':f['gez'][g_i:].strip(),'am':f['am'][am_i:].strip(),'no':f['no'][n_i:].strip()}
    n=len(d[s]['gez']['vers'])
    assert all(len(d[s][k]['vers'])==n for k in ['am','no']), s
    del_['vers']=[{'nr':i+1,**{k:rens(d[s][k]['vers'][i],k) for k in ['gez','am','no']}} for i in range(n)]
    ut.append(del_)
bok={'kilde':{'tittel':'Bønnebok for daglig bruk – ge\'ez, amharisk og norsk','oversatt':'Fikre Sillassie','tid':'juli 2026'},'deler':ut}
json.dump(bok,open('/home/user/Kirke/content/bonner/bonnebok.json','w'),ensure_ascii=False,indent=1)
print([ (x['id'],len(x['vers'])) for x in ut])
print(json.dumps(ut[1]['velsignelse'],ensure_ascii=False)); print(json.dumps(ut[1]['overskrift'],ensure_ascii=False))
