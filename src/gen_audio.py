# 按 lines.json 生成 audio/*.mp3（需要 pip install edge-tts）（已存在的跳过；改了文字就删掉对应 mp3 再跑）
import json,subprocess,pathlib,concurrent.futures as cf
here=pathlib.Path(__file__).parent;L=json.load(open(here/'lines.json'))
def gen(k):
    f=here/'audio'/f'{k}.mp3'
    if f.exists():return k,0,''
    t,args=L[k],['--voice','zh-CN-XiaoxiaoNeural','--rate=-15%']
    if t.startswith('[云希·偷字怪] '):t,args=t[len('[云希·偷字怪] '):],['--voice','zh-CN-YunxiNeural','--rate=-5%','--pitch=-12Hz']  # 偷字怪换男声
    r=subprocess.run(['edge-tts',*args,'--text',t,'--write-media',str(f)],capture_output=True,text=True)
    return k,r.returncode,r.stderr[-200:]
with cf.ThreadPoolExecutor(3) as ex:
    bad=[(k,e) for k,rc,e in ex.map(gen,L) if rc]
print('fail',bad) if bad else print('ok',len(L))
