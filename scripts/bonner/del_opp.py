import json, re, collections
L=json.load(open('linjer.json'))
OMR=[('daglig',3,11),('mandag',12,15),('tirsdag',16,22),('onsdag',23,28),('torsdag',29,36),('fredag',37,41),('lordag',42,45),('sondag',46,50),('melaekt',51,54)]
def seksjon(side):
    for n,a,b in OMR:
        if a<=side<=b: return n
tekst=collections.defaultdict(lambda: collections.defaultdict(list))
feil=[]
for l in sorted(L,key=lambda l:(l['side'],l['kol'],l['top'])):
    s=seksjon(l['side'])
    if not s or l['size']>=14 or re.fullmatch(r'[\d፩-፼]+',l['t']): continue
    t=l['t']
    if l['kol']!='no' and re.search(r'[A-Za-zæøåÆØÅ]{2,}',t): feil.append((l['side'],l['kol'],t))
    if l['kol']=='no' and re.search(r'[ሀ-፿]',t): feil.append((l['side'],l['kol'],t))
    tekst[s][l['kol']].append(t)
print('blandet:',feil)
NUM=re.compile(r'(?:(?<=^)|(?<=\s)|(?<=።))(\d{1,2}|[፩-፳][፩-፱]?)\s?[\.፤](?=\s?\S)')
res={}
for s,_,_ in OMR:
    res[s]={}
    for kol in ['gez','am','no']:
        t=' '.join(tekst[s][kol])
        if kol=='no': t=re.sub(r'(\w)-\s+(\w)', r'\1\2', t)
        biter=NUM.split(t)
        vers=[biter[i+1].strip() for i in range(1,len(biter),2)]
        nr=[biter[i] for i in range(1,len(biter),2)]
        res[s][kol]={'forord':biter[0].strip(),'vers':vers,'nr':nr}
    print(s, {k:len(v['vers']) for k,v in res[s].items()}, res[s]['gez']['nr'])
json.dump(res,open('deler.json','w'),ensure_ascii=False,indent=1)
