import sys
def h(x):
    x=x.lstrip('#'); return [int(x[i:i+2],16)/255 for i in (0,2,4)]
def L(c):
    c=[v/12.92 if v<=0.03928 else ((v+0.055)/1.055)**2.4 for v in h(c)]
    return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]
def cr(a,b):
    a,b=L(a),L(b); return (max(a,b)+0.05)/(min(a,b)+0.05)
def mix(fg,bg,a):
    f,b=h(fg),h(bg); return '#'+''.join('%02X'%round((f[i]*a+b[i]*(1-a))*255) for i in range(3))
for line in sys.stdin:
    line=line.strip()
    if not line or line.startswith('#!'): continue
    p=line.split()
    print(f"{p[0]:>8} / {p[1]:<8} {cr(p[0],p[1]):5.2f}  {' '.join(p[2:])}")
