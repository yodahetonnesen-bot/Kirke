# Henter teksten i de tre kolonnene tegn for tegn, og retter Cambria-glyfene:
# i Cambria er «a» (cid 131) merket som «å»; ekte «å» er «a» fulgt av ringen (cid 465).
import pdfminer.converter as C, json, collections
orig=C.PDFLayoutAnalyzer.render_char
def rc(self, matrix, font, fontsize, scaling, rise, cid, ncs, graphicstate):
    w=orig(self, matrix, font, fontsize, scaling, rise, cid, ncs, graphicstate)
    self.cur_item._objs[-1].cid=cid
    return w
C.PDFLayoutAnalyzer.render_char=rc
import pdfplumber
pdf=pdfplumber.open('kilde.pdf')
GRENSER={'gez':(0,163),'am':(163,277),'no':(277,1000)}
def walk(o):
    if hasattr(o,'_objs'):
        for x in o._objs: yield from walk(x)
    else: yield o
alle=[]
for pn,p in enumerate(pdf.pages):
    H=p.height
    objs=[o for o in walk(p.layout) if getattr(o,'cid',None) is not None]
    grenser = {'gez':(0,150),'am':(150,265),'no':(265,1000)} if pn+1>=51 else GRENSER
    for kol,(a,b) in grenser.items():
        cs=[o for o in objs if a<=o.x0<b and 28<H-o.y1<H-20]
        rader=collections.defaultdict(list)
        for o in sorted(cs,key=lambda o:o.y0):
            # samme linje = omtrent samme grunnlinje (y0); spesialtegn kan ha annen høyde
            nokkel=next((k for k in rader if abs(k-o.y0)<3.5), o.y0)
            rader[nokkel].append(o)
        for k in sorted(rader, reverse=True):
            r=sorted(rader[k],key=lambda o:o.x0)
            ut=''
            for i,o in enumerate(r):
                t=o.get_text(); f=o.fontname.split('+')[1]
                if f=='Cambria':
                    nxt=r[i+1].cid if i+1<len(r) and r[i+1].fontname.split('+')[1]=='Cambria' else None
                    if o.cid==131: t='å' if nxt==465 else 'a'
                    elif o.cid==4: t='Å' if nxt==466 else 'A'
                    elif o.cid==8: t='É' if nxt==436 else 'E'
                    elif o.cid==135 and nxt==436: t='é'
                    elif o.cid in (465,466,436): t=''
                ut+=t
            ut=ut.strip()
            if ut: alle.append({'side':pn+1,'kol':kol,'top':round(H-r[0].y1),'size':round(max(o.size for o in r)),'t':ut})
json.dump(alle,open('linjer.json','w'),ensure_ascii=False,indent=0)
no=' '.join(l['t'] for l in alle if l['kol']=='no')
import re
print(collections.Counter(w for w in re.findall(r'\w*[åÅ]\w*',no)).most_common(40))
