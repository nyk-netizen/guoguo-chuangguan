/* ═════════ 基础字库：23 个字（原画、甲骨文、形近字）+ 16 条拼字链 ═════════
   来自作者 2026-09 给儿子做的识字卡。新字不要加在这里，加在 字库补充.js。 */
const S={ink:'#18140F',red:'#FF6B5A',sea:'#3BA5E0',grass:'#35C07A',sun:'#FFC53D',cream:'#FFFDF7'};
const sv=(inner)=>`<svg viewBox="0 0 100 100">${inner}</svg>`;

const ZI={
 /* ── 组1 画出来的 ── */
 '日':{py:'rì',g:0,cap:'太阳',near:['目','田','白','旦','由'],
   pic:sv(`<circle cx="50" cy="50" r="23" fill="none" stroke="${S.red}" stroke-width="5"/><circle cx="50" cy="50" r="13" fill="${S.red}"/>`+
     [0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;
     return `<line x1="${50+Math.cos(r)*31}" y1="${50+Math.sin(r)*31}" x2="${50+Math.cos(r)*42}" y2="${50+Math.sin(r)*42}" stroke="${S.red}" stroke-width="4.5" stroke-linecap="round"/>`}).join('')),
   oracle:sv(`<ellipse cx="50" cy="50" rx="22" ry="30" fill="none" stroke="${S.ink}" stroke-width="6"/><circle cx="50" cy="50" r="5" fill="${S.ink}"/>`)},
 '月':{py:'yuè',g:0,cap:'月亮',near:['用','舟','有','肉','丹'],
   pic:sv(`<path d="M62 18 A36 36 0 1 0 62 82 A29 29 0 1 1 62 18 Z" fill="${S.sea}"/><circle cx="77" cy="27" r="3.4" fill="${S.sun}"/><circle cx="85" cy="45" r="2.6" fill="${S.sun}"/><circle cx="73" cy="61" r="2.2" fill="${S.sun}"/>`),
   oracle:sv(`<path d="M60 14 A40 40 0 1 0 60 86 A31 31 0 1 1 60 14 Z" fill="none" stroke="${S.ink}" stroke-width="6"/><line x1="41" y1="36" x2="41" y2="64" stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round"/>`)},
 '山':{py:'shān',g:0,cap:'大山',near:['出','止','上','川','凵'],
   pic:sv(`<path d="M8 80 L34 36 L50 60 L66 26 L92 80 Z" fill="${S.grass}"/><path d="M66 26 L57 45 L66 41 L74 47 Z" fill="${S.cream}"/><path d="M34 36 L27 49 L34 46 L40 51 Z" fill="${S.cream}"/>`),
   oracle:sv(`<line x1="14" y1="78" x2="86" y2="78" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><line x1="50" y1="78" x2="50" y2="20" stroke="${S.ink}" stroke-width="6.5" stroke-linecap="round"/><line x1="24" y1="78" x2="24" y2="40" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><line x1="76" y1="78" x2="76" y2="40" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/>`)},
 '竹':{py:'zhú',g:0,cap:'竹子',near:['林','付','什','行','们'],
   pic:sv(`<rect x="30" y="20" width="9" height="62" rx="3" fill="${S.grass}"/><rect x="59" y="20" width="9" height="62" rx="3" fill="${S.grass}"/><line x1="30" y1="42" x2="39" y2="42" stroke="${S.cream}" stroke-width="3"/><line x1="30" y1="62" x2="39" y2="62" stroke="${S.cream}" stroke-width="3"/><line x1="59" y1="42" x2="68" y2="42" stroke="${S.cream}" stroke-width="3"/><line x1="59" y1="62" x2="68" y2="62" stroke="${S.cream}" stroke-width="3"/><path d="M30 26 Q14 16 8 24 Q18 32 30 30 Z" fill="${S.grass}"/><path d="M68 26 Q84 16 90 24 Q80 32 68 30 Z" fill="${S.grass}"/>`),
   oracle:sv(`<path d="M32 30 L32 78" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M68 30 L68 78" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M32 32 Q20 22 14 30" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M68 32 Q56 22 50 30" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/>`)},
 '井':{py:'jǐng',g:0,cap:'水井',near:['开','升','丰','未','天'],
   pic:sv(`<rect x="16" y="16" width="68" height="68" rx="5" fill="none" stroke="${S.ink}" stroke-width="5"/><circle cx="50" cy="50" r="21" fill="${S.sea}"/><circle cx="50" cy="50" r="13" fill="none" stroke="${S.cream}" stroke-width="2.5" opacity=".7"/><circle cx="50" cy="50" r="6" fill="none" stroke="${S.cream}" stroke-width="2.5" opacity=".7"/>`),
   oracle:sv(`<line x1="34" y1="16" x2="30" y2="84" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><line x1="66" y1="16" x2="70" y2="84" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><line x1="16" y1="36" x2="84" y2="32" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><line x1="16" y1="66" x2="84" y2="62" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/>`)},

 /* ── 组2 人 ── */
 '人':{py:'rén',g:1,cap:'一个人',near:['入','八','大','个','从'],
   pic:sv(`<circle cx="50" cy="24" r="11" fill="${S.ink}"/><path d="M50 35 L50 58" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 58 L34 84" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 58 L66 84" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 42 L36 52" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/>`),
   oracle:sv(`<path d="M56 18 Q60 34 54 50" stroke="${S.ink}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M54 50 L34 84" stroke="${S.ink}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M54 30 Q40 38 32 50" stroke="${S.ink}" stroke-width="6.5" fill="none" stroke-linecap="round"/>`)},
 '大':{py:'dà',g:1,cap:'张开手脚',near:['太','天','夫','犬','木'],
   pic:sv(`<circle cx="50" cy="22" r="10" fill="${S.ink}"/><path d="M50 32 L50 56" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 40 L20 34" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 40 L80 34" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 56 L28 86" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 56 L72 86" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/>`),
   oracle:sv(`<path d="M50 18 L50 52" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M22 32 Q50 24 78 32" stroke="${S.ink}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M50 52 L26 84" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 52 L74 84" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/>`)},
 '子':{py:'zǐ',g:1,cap:'小宝宝',near:['了','孑','字','孔','于'],
   pic:sv(`<circle cx="50" cy="28" r="15" fill="${S.ink}"/><path d="M50 43 Q44 60 50 78" stroke="${S.ink}" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M28 52 Q50 44 72 52" stroke="${S.ink}" stroke-width="7" fill="none" stroke-linecap="round"/>`),
   oracle:sv(`<circle cx="50" cy="26" r="12" fill="none" stroke="${S.ink}" stroke-width="6"/><path d="M50 38 Q46 58 52 80" stroke="${S.ink}" stroke-width="6.5" fill="none" stroke-linecap="round"/><path d="M30 50 Q50 42 70 50" stroke="${S.ink}" stroke-width="6" fill="none" stroke-linecap="round"/>`)},
 '小':{py:'xiǎo',g:1,cap:'小小的',near:['少','尔','水','川','示'],
   pic:sv(`<circle cx="26" cy="54" r="7" fill="${S.sea}"/><circle cx="50" cy="42" r="9" fill="${S.sea}"/><circle cx="74" cy="54" r="7" fill="${S.sea}"/><circle cx="38" cy="70" r="4.5" fill="${S.sea}"/><circle cx="62" cy="70" r="4.5" fill="${S.sea}"/>`),
   oracle:sv(`<line x1="50" y1="24" x2="50" y2="76" stroke="${S.ink}" stroke-width="6.5" stroke-linecap="round"/><line x1="30" y1="34" x2="26" y2="60" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><line x1="70" y1="34" x2="74" y2="60" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/>`)},

 /* ── 组3 动物 ── */
 /* near 里绝对不能出现这个字自己——找字关会冒出点不对的"真"目标 */
 '犬':{py:'quǎn',g:2,cap:'狗',near:['大','太','天','尤','夫'],
   pic:sv(`<ellipse cx="56" cy="60" rx="21" ry="13" fill="#A0724A"/><circle cx="31" cy="50" r="13" fill="#A0724A"/><ellipse cx="22" cy="42" rx="5" ry="9" fill="#82593A" transform="rotate(-24 22 42)"/><ellipse cx="40" cy="40" rx="5" ry="9" fill="#82593A" transform="rotate(14 40 40)"/><circle cx="27" cy="50" r="2.4" fill="${S.ink}"/><ellipse cx="19" cy="55" rx="4" ry="3" fill="${S.ink}"/><rect x="42" y="70" width="6" height="14" rx="3" fill="#A0724A"/><rect x="64" y="70" width="6" height="14" rx="3" fill="#A0724A"/><path d="M76 56 Q88 48 84 36" stroke="#A0724A" stroke-width="5.5" fill="none" stroke-linecap="round"/>`),
   oracle:sv(`<path d="M44 16 Q32 18 30 26 Q29 32 38 34" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M44 34 L48 74" stroke="${S.ink}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M45 44 Q32 48 26 58" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M47 60 Q34 64 28 74" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M46 28 Q62 22 72 28 Q80 34 74 42" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/>`)},
 '狗':{py:'gǒu',g:2,cap:'汪汪',near:['狛','猫','猪','狼','独']},
 '猪':{py:'zhū',g:2,cap:'哼哼',near:['狗','猫','诸','著','煮']},
 '鸡':{py:'jī',g:2,cap:'咯咯哒',near:['鸭','鸟','鸦','鹅','鸠']},
 '鸭':{py:'yā',g:2,cap:'嘎嘎',near:['鸡','鸟','鸦','鹅','甲']},

 /* ── 组4 住的地方 ── */
 '门':{py:'mén',g:3,cap:'两扇门',near:['户','问','们','闩','冂'],
   pic:sv(`<rect x="18" y="20" width="30" height="64" rx="3" fill="${S.sun}" stroke="${S.ink}" stroke-width="4"/><rect x="52" y="20" width="30" height="64" rx="3" fill="${S.sun}" stroke="${S.ink}" stroke-width="4"/><circle cx="42" cy="54" r="3.5" fill="${S.ink}"/><circle cx="58" cy="54" r="3.5" fill="${S.ink}"/>`),
   oracle:sv(`<path d="M24 24 L24 82" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M76 24 L76 82" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M24 28 Q34 22 42 28" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M58 28 Q66 22 76 28" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/>`)},
 '户':{py:'hù',g:3,cap:'一扇门',near:['门','尸','斤','厅','启'],
   pic:sv(`<rect x="35" y="20" width="30" height="64" rx="3" fill="${S.sun}" stroke="${S.ink}" stroke-width="4"/><circle cx="58" cy="54" r="3.5" fill="${S.ink}"/>`),
   oracle:sv(`<path d="M40 24 L40 82" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M40 28 Q52 22 62 28" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/>`)},
 '家':{py:'jiā',g:3,cap:'屋顶下有猪',near:['宝','安','宇','宫','室'],
   pic:sv(`<path d="M12 44 L50 16 L88 44 Z" fill="${S.red}"/><rect x="20" y="44" width="60" height="40" fill="#F0E4D0" stroke="${S.ink}" stroke-width="3"/><ellipse cx="50" cy="66" rx="17" ry="12" fill="#F2A7B8"/><circle cx="34" cy="62" r="7" fill="#F2A7B8"/><ellipse cx="30" cy="63" rx="4" ry="3" fill="#D98BA0"/><circle cx="28" cy="62" r="1.1" fill="${S.ink}"/><circle cx="32" cy="62" r="1.1" fill="${S.ink}"/><circle cx="35" cy="57" r="2" fill="${S.ink}"/><path d="M67 64 q7 -2 5 5" stroke="#F2A7B8" stroke-width="3" fill="none" stroke-linecap="round"/>`),
   oracle:sv(`<path d="M14 40 Q50 14 86 40" stroke="${S.ink}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M18 40 L18 50 M82 40 L82 50" stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round"/><path d="M40 52 Q30 56 30 64" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M40 52 L44 82" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M42 62 Q32 66 28 74" stroke="${S.ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M42 72 Q32 76 30 84" stroke="${S.ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M44 58 Q58 54 66 60 Q72 66 66 72" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`)},
 '国':{py:'guó',g:3,cap:'围墙里有宝贝',near:['园','围','固','因','回'],
   pic:sv(`<rect x="14" y="20" width="72" height="64" rx="3" fill="none" stroke="${S.ink}" stroke-width="6"/><path d="M14 20 h12 v-7 h10 v7 h16 v-7 h10 v7 h12 v-7 h10 v7" fill="none" stroke="${S.ink}" stroke-width="5" stroke-linejoin="round"/><path d="M50 38 L62 52 L50 66 L38 52 Z" fill="${S.grass}"/><circle cx="50" cy="52" r="4.5" fill="${S.cream}"/>`),
   oracle:sv(`<rect x="16" y="22" width="68" height="60" rx="2" fill="none" stroke="${S.ink}" stroke-width="6"/><line x1="34" y1="40" x2="66" y2="40" stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round"/><line x1="34" y1="52" x2="66" y2="52" stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round"/><line x1="34" y1="64" x2="66" y2="64" stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round"/><line x1="50" y1="40" x2="50" y2="64" stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round"/><circle cx="62" cy="58" r="3.4" fill="${S.ink}"/>`)},

 /* ── 组5 剩下的 ── */
 '中':{py:'zhōng',g:4,cap:'正当中',near:['申','由','史','冲','忠'],
   pic:sv(`<rect x="28" y="30" width="44" height="40" rx="3" fill="none" stroke="${S.ink}" stroke-width="5"/><line x1="50" y1="12" x2="50" y2="88" stroke="${S.red}" stroke-width="6" stroke-linecap="round"/>`),
   oracle:sv(`<rect x="30" y="32" width="40" height="36" rx="2" fill="none" stroke="${S.ink}" stroke-width="5.5"/><line x1="50" y1="14" x2="50" y2="86" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M50 18 Q40 22 38 28" stroke="${S.ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M50 82 Q60 78 62 72" stroke="${S.ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`)},
 '长':{py:'cháng',g:4,cap:'长头发的人',near:['卡','丘','兵','斤','氏'],
   pic:sv(`<circle cx="50" cy="30" r="12" fill="${S.ink}"/><path d="M38 26 Q30 44 33 62" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M62 26 Q70 44 67 62" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M50 42 L50 70" stroke="${S.ink}" stroke-width="7" stroke-linecap="round"/><path d="M50 70 L38 86" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M50 70 L62 86" stroke="${S.ink}" stroke-width="6" stroke-linecap="round"/><path d="M50 50 L72 58" stroke="${S.ink}" stroke-width="5.5" stroke-linecap="round"/>`),
   oracle:sv(`<path d="M52 18 L52 74" stroke="${S.ink}" stroke-width="6.5" fill="none" stroke-linecap="round"/><path d="M40 22 Q30 32 28 46" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M52 24 Q40 30 34 40" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M28 56 Q44 50 66 56" stroke="${S.ink}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M52 74 Q60 82 72 84" stroke="${S.ink}" stroke-width="6" fill="none" stroke-linecap="round"/>`)},
 '清':{py:'qīng',g:4,cap:'水很清',near:['青','请','情','晴','精']},
 '路':{py:'lù',g:4,cap:'走的路',near:['跑','跳','足','各','咯']},
 '鼠':{py:'shǔ',g:4,cap:'老鼠',near:['臼','兔','象','龟','鸟'],
   pic:sv(`<ellipse cx="54" cy="58" rx="24" ry="17" fill="#8E8578"/><circle cx="32" cy="48" r="13" fill="#8E8578"/><circle cx="26" cy="36" r="7.5" fill="#A89E90"/><circle cx="40" cy="33" r="7.5" fill="#A89E90"/><circle cx="26" cy="36" r="4" fill="#C9BCA2"/><circle cx="40" cy="33" r="4" fill="#C9BCA2"/><circle cx="27" cy="48" r="2.6" fill="${S.ink}"/><circle cx="20" cy="52" r="2.2" fill="#E8A0A0"/><path d="M78 58 Q92 56 88 74 Q86 82 78 82" stroke="#8E8578" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M22 54 L10 52 M22 57 L11 60" stroke="${S.ink}" stroke-width="1.6" stroke-linecap="round"/>`),
   oracle:sv(`<path d="M46 16 Q34 20 34 30 Q34 38 44 40" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/><circle cx="30" cy="22" r="2.6" fill="${S.ink}"/><circle cx="28" cy="30" r="2.6" fill="${S.ink}"/><circle cx="31" cy="37" r="2.6" fill="${S.ink}"/><path d="M46 40 L50 72" stroke="${S.ink}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M46 48 Q34 52 30 60" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M48 58 Q36 62 32 70" stroke="${S.ink}" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M50 72 Q62 76 70 68 Q76 62 74 54" stroke="${S.ink}" stroke-width="5.5" fill="none" stroke-linecap="round"/>`)}
};

const GROUPS=[
  {n:'画出来的',z:['日','月','山','竹','井']},
  {n:'人',      z:['人','大','小','子']},
  {n:'动物',    z:['犬','狗','猪','鸡','鸭']},
  {n:'住的地方',z:['门','户','家','国']},
  {n:'剩下的',  z:['中','长','清','路','鼠']}
];

/* ═════════ 零件链（第四关）═════════
   g = 归哪一组，k = 这条链是哪一类，讲法完全不同，爸爸别讲串：
     x 会意 —— 真字源，故事可以照讲
     s 形声 —— 一半表示意思、一半表示读音
     j 助记 —— 不是字源，只是帮他记住字形长什么样 */
const KIND={x:'会意字 · 这是真的字源，故事可以照讲',
            s:'形声字 · 一半告诉你意思，一半告诉你读音',
            j:'⚠️ 这不是字源，只是帮他记住字形，别当来历讲'};
const CHAINS=[
  {g:0,k:'x',a:'日',b:'月',r:'明',t:'明 · míng<br>太阳和月亮都很亮'},
  {g:0,k:'x',a:'木',b:'木',r:'林',t:'林 · lín<br>两棵树站一起就是树林'},
  {g:0,k:'x',a:'竹',b:'毛',r:'笔',t:'笔 · bǐ<br>竹管子上装一撮毛，就是笔'},
  {g:1,k:'x',a:'小',b:'大',r:'尖',t:'尖 · jiān<br>上面小、下面大，就是尖'},
  {g:1,k:'x',a:'人',b:'木',r:'休',t:'休 · xiū<br>人靠在树上歇一会儿'},
  {g:1,k:'x',a:'人',b:'人',r:'从',t:'从 · cóng<br>一个人跟着一个人走'},
  {g:2,k:'j',a:'大',b:'丶',r:'犬',t:'犬 · quǎn<br>「大」旁边加一点'},
  {g:2,k:'s',a:'犭',b:'句',r:'狗',t:'狗 · gǒu<br>「犭」表示它是动物，「句」告诉你怎么念'},
  {g:2,k:'s',a:'犭',b:'者',r:'猪',t:'猪 · zhū<br>「犭」表示它是动物，「者」告诉你怎么念'},
  {g:2,k:'s',a:'甲',b:'鸟',r:'鸭',t:'鸭 · yā<br>「鸟」表示它是鸟，「甲」告诉你怎么念'},
  {g:2,k:'s',a:'又',b:'鸟',r:'鸡',t:'鸡 · jī<br>「鸟」表示它是鸟'},
  {g:3,k:'x',a:'宀',b:'豕',r:'家',t:'家 · jiā<br>屋顶底下有一头猪，才算一个家'},
  {g:3,k:'j',a:'囗',b:'玉',r:'国',t:'国 · guó<br>围墙围起来，里面有宝贝'},
  {g:3,k:'s',a:'门',b:'口',r:'问',t:'问 · wèn<br>「口」是嘴巴，问话要用嘴'},
  {g:4,k:'s',a:'氵',b:'青',r:'清',t:'清 · qīng<br>「氵」是三滴水'},
  {g:4,k:'s',a:'足',b:'各',r:'路',t:'路 · lù<br>「足」是脚，走路要用脚'}
];
