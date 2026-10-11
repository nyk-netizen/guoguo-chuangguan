/* ═════════ 字库补充：基础字库（字库_基础.js）里没有的字，都加在这里 ═════════
   加字的规矩见同目录《怎么加字.md》。改完要跑：python3 gen_audio.py && python3 build.py

   每个字的格式：
     ZI['字']={py:'拼音', near:[形近干扰字], pic:原画SVG, oracle:甲骨文SVG}
       pic/oracle 只给真正的象形字，而且甲骨文要对照字源网站画，不许编。两样都有，这个字才会进「连线」
     CHAINS.push({k:类别, a:零件1, b:零件2, r:拼出来的字, t:'字 · 拼音<br>一句话讲法'})
       k：x 会意（真字源）/ s 形声（一半表意一半表音，别编故事）/ j 助记（不是字源）/ w 古书讲法（有争议）
   配音：lines2.json 里加 "w_字"（如「心，开心的心。」）；有拼字的再加 "k_字"
*/

/* 开局字墙上排在最前面的字（叶凯 2026-10-11 给的一批） */
const LIB_ORDER=[...'井竹鼠呆叶心中公园国路车狗猪犬大人小'];

KIND.w='古书《说文》的讲法 · 学界有争议，当故事讲、别当定论';

/* ── 2026-10-11 第一轮补字 ── */
ZI['木']={py:'mù',near:['大','米','水','本'],
  pic:sv(`<rect x="45" y="50" width="10" height="36" fill="#8B5A2B"/><circle cx="50" cy="38" r="24" fill="${S.grass}"/><circle cx="32" cy="50" r="14" fill="${S.grass}"/><circle cx="68" cy="50" r="14" fill="${S.grass}"/>`),
  oracle:sv(`<g stroke="${S.ink}" stroke-width="6" stroke-linecap="round" fill="none"><line x1="50" y1="12" x2="50" y2="88"/><path d="M50 44 L24 16 M50 44 L76 16"/><path d="M50 66 L26 88 M50 66 L74 88"/></g>`)};
[['林','lín'],['森','sēn'],['休','xiū'],['明','míng'],['笔','bǐ'],['尖','jiān'],['从','cóng'],['问','wèn']].forEach(([z,py])=>ZI[z]=ZI[z]||{py});
CHAINS.push({k:'x',a:'林',b:'木',r:'森',t:'森 · sēn<br>好多好多树，就是森林'});
const EXTRA_RECIPE={'森':['木','木','木']}; // 森也可以直接放三个木

/* ── 2026-10-11 第二轮补字：呆 叶 心 公 园 车 ── */
// 心：象形，甲骨文是一颗心的轮廓，上面开口、中间一道
ZI['心']={py:'xīn',near:['必','小','忆','沁'],
  pic:sv(`<path d="M50 84 C20 62 12 44 22 30 C30 19 44 20 50 32 C56 20 70 19 78 30 C88 44 80 62 50 84 Z" fill="${S.red}"/><path d="M34 34 Q30 40 32 48" stroke="#FFFDF7" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>`),
  oracle:sv(`<g stroke="${S.ink}" stroke-width="6" stroke-linecap="round" fill="none"><path d="M44 30 C34 18 18 26 22 44 C26 62 42 74 50 86 C58 74 74 62 78 44 C82 26 66 18 56 30"/><line x1="50" y1="44" x2="50" y2="64"/></g>`)};
// 车：象形，甲骨文是从上往下看的马车：两只轮子、一根车轴、中间车厢、往前一根辕杆和一道横木
ZI['车']={py:'chē',near:['东','年','牛','手'],
  pic:sv(`<rect x="46" y="10" width="8" height="46" fill="#8B5A2B"/><rect x="26" y="10" width="48" height="7" rx="3" fill="#8B5A2B"/><rect x="34" y="46" width="32" height="24" rx="3" fill="#C9A26B" stroke="#6B4A2B" stroke-width="3"/><rect x="14" y="56" width="72" height="5" fill="#6B4A2B"/><ellipse cx="14" cy="58" rx="7" ry="22" fill="#3a3a3a"/><ellipse cx="86" cy="58" rx="7" ry="22" fill="#3a3a3a"/>`),
  oracle:sv(`<g stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round" fill="none"><line x1="50" y1="12" x2="50" y2="50"/><line x1="30" y1="14" x2="70" y2="14"/><rect x="36" y="48" width="28" height="20"/><line x1="12" y1="58" x2="88" y2="58"/><ellipse cx="14" cy="58" rx="6" ry="20"/><ellipse cx="86" cy="58" rx="6" ry="20"/></g>`)};
// 呆：「口+木」是民间讲法，不是字源（呆本来是「保」的异体），只能当助记
ZI['呆']={py:'dāi',near:['杏','果','困','杲']};
CHAINS.push({k:'j',a:'口',b:'木',r:'呆',t:'呆 · dāi<br>口下面一个木，帮你记住它长什么样'});
// 叶：简化字的叶是借来的形，跟「树上长叶子」那幅古字（繁体「葉」）不是一回事，所以不进连线
ZI['叶']={py:'yè',near:['吐','叮','计','什']};
CHAINS.push({k:'j',a:'口',b:'十',r:'叶',t:'叶 · yè<br>口旁边一个十，帮你记住它长什么样'});
// 公：《说文》说「从八从厶」，八是分开、厶是私；这是古书的讲法，甲骨文的来历学界还在争
ZI['公']={py:'gōng',near:['么','分','台','去']};
CHAINS.push({k:'w',a:'八',b:'厶',r:'公',t:'公 · gōng<br>八是分开，厶是私，把私分开就是公'});
// 园：形声。囗是围墙（表意），元告诉你怎么念
ZI['园']={py:'yuán',near:['困','国','圆','因']};
CHAINS.push({k:'s',a:'囗',b:'元',r:'园',t:'园 · yuán<br>「囗」是围墙，「元」告诉你怎么念'});
