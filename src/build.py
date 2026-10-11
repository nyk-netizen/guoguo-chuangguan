# 把 字库_基础.js + 字库补充.js + audio/*.mp3 拼进 game.html，输出仓库根目录的 index.html（单文件、双击即玩、断网能响）
import base64,json,pathlib
here=pathlib.Path(__file__).parent
src=(here/'game.html').read_text()
for k in ['/*__AUDIO__*/{}','/*__ZIKU__*/','/*__BUCHONG__*/']:assert k in src,k
audio={f.stem:base64.b64encode(f.read_bytes()).decode() for f in sorted((here/'audio').glob('*.mp3'))}
out=here.parent/'index.html'
out.write_text(src.replace('/*__ZIKU__*/',(here/'字库_基础.js').read_text()).replace('/*__BUCHONG__*/',(here/'字库补充.js').read_text()).replace('/*__AUDIO__*/{}',json.dumps(audio,ensure_ascii=False)))
print(out.name,round(out.stat().st_size/1024),'KB',len(audio),'条配音')
