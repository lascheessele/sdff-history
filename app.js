:root{--bg:#090d14;--panel:#111827;--panel2:#182234;--line:#263449;--txt:#eef4ff;--dim:#93a4bd;--accent:#ffb020;--green:#42d392;--red:#ff6b6b;--blue:#60a5fa;--gold:#ffd166}*{box-sizing:border-box}body{margin:0;background:radial-gradient(circle at 15% -10%,#1a2943 0,transparent 34%),var(--bg);color:var(--txt);font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.45}.shell{max-width:1280px;margin:auto;padding:0 22px 70px}header{padding:34px 0 22px}.eyebrow{color:var(--accent);font-size:12px;text-transform:uppercase;letter-spacing:1.5px;font-weight:800}h1{font-size:34px;line-height:1.1;margin:7px 0}.sub{color:var(--dim)}nav{position:sticky;top:0;z-index:10;display:flex;gap:7px;overflow:auto;background:rgba(9,13,20,.9);backdrop-filter:blur(14px);padding:12px 0;border-bottom:1px solid var(--line)}nav button{border:1px solid transparent;background:transparent;color:var(--dim);padding:9px 14px;border-radius:9px;font-weight:700;cursor:pointer;white-space:nowrap}nav button.on{background:var(--accent);color:#131313}.section{display:none;padding-top:25px}.section.on{display:block}.hero{display:grid;grid-template-columns:1.5fr 1fr;gap:18px}.panel,.card,.award{background:linear-gradient(145deg,rgba(24,34,52,.98),rgba(15,23,36,.98));border:1px solid var(--line);border-radius:15px;box-shadow:0 12px 40px rgba(0,0,0,.2)}.panel{padding:20px}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.card{padding:16px}.lbl{font-size:11px;color:var(--dim);text-transform:uppercase;letter-spacing:.8px;font-weight:800}.big{font-size:27px;font-weight:850;margin-top:5px;color:var(--accent)}.note{font-size:12px;color:var(--dim);margin-top:3px}h2{font-size:21px;margin:5px 0 15px}h3{font-size:13px;color:var(--dim);text-transform:uppercase;letter-spacing:.8px;margin:26px 0 10px}.grid2{display:grid;grid-template-columns:1fr 1fr;gap:18px}.timeline{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px}.champ-card{padding:15px;border-top:3px solid var(--gold)}.champ-card .year{color:var(--dim);font-weight:800}.champ-card .who{font-size:17px;font-weight:850;color:var(--gold);margin-top:4px}.champ-card .team{font-size:12px;color:var(--dim)}table{width:100%;border-collapse:collapse;background:rgba(17,24,39,.72);border:1px solid var(--line);border-radius:12px;overflow:hidden;font-size:13px}th,td{padding:10px 11px;border-bottom:1px solid var(--line);text-align:right}th:first-child,td:first-child{text-align:left}th{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--dim);background:var(--panel2);cursor:pointer}tbody tr:hover{background:#1b2940}.gold{color:var(--gold);font-weight:800}.pos{color:var(--green)}.neg{color:var(--red)}.ctrls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:13px}select,input{background:var(--panel);border:1px solid var(--line);color:var(--txt);padding:9px 11px;border-radius:9px}.barrow{display:grid;grid-template-columns:145px 1fr 55px;gap:8px;align-items:center;margin:9px 0;font-size:12px}.track{height:14px;background:#0b111c;border-radius:999px;overflow:hidden}.fill{height:100%;background:linear-gradient(90deg,var(--accent),#ffd166)}.award-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px}.award{padding:16px;border-top:3px solid var(--accent)}.award .icon{font-size:23px}.award .who{font-weight:850;font-size:17px;margin-top:3px}.award .det{color:var(--dim);font-size:12px}.match{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;padding:12px;border-bottom:1px solid var(--line)}.match .r{text-align:right}.score{font-size:16px;font-weight:850}.pill{display:inline-block;padding:2px 7px;border-radius:999px;font-size:10px;background:#23314a;color:var(--dim)}.draftgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:9px}.pick{padding:11px;border:1px solid var(--line);border-radius:10px;background:var(--panel)}.pick .pk{color:var(--dim);font-size:11px}.pick .pl{font-weight:800}.pick .mg{font-size:11px;color:var(--dim)}footer{margin-top:35px;padding-top:22px;border-top:1px solid var(--line);color:var(--dim);font-size:12px;text-align:center}@media(max-width:900px){.hero,.grid2{grid-template-columns:1fr}.cards,.award-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.cards,.award-grid{grid-template-columns:1fr}.shell{padding:0 12px 50px}h1{font-size:27px}.barrow{grid-template-columns:105px 1fr 45px}}

.profile-select{min-width:240px}.profile-head{display:flex;gap:14px;align-items:center;flex-wrap:wrap}.profile-name{font-size:28px;font-weight:900}.rings{letter-spacing:2px;color:var(--gold)}.roast{font-size:16px;line-height:1.55}.stat-chip{display:inline-block;padding:6px 9px;border:1px solid var(--line);border-radius:999px;margin:3px;color:var(--dim);font-size:12px}.h2h-grid{overflow:auto}.wacky-card .big{font-size:21px}.subtitle{color:var(--dim);margin-top:-8px;margin-bottom:16px}.rank{font-weight:900;color:var(--accent)}

.header-pills{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.header-pills span{font-size:11px;font-weight:800;color:var(--dim);border:1px solid var(--line);background:rgba(17,24,39,.65);padding:6px 9px;border-radius:999px}.hero-intro{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:16px;background:linear-gradient(135deg,rgba(255,176,32,.13),rgba(24,34,52,.98) 46%,rgba(15,23,36,.98))}.kicker{font-size:11px;letter-spacing:1.4px;color:var(--accent);font-weight:900}.hero-title{font-size:26px;font-weight:900;line-height:1.15;max-width:720px;margin-top:6px}.hero-copy{color:var(--dim);font-size:13px;margin-top:8px}.hero-stamp{min-width:92px;text-align:center;font-weight:950;font-size:18px;color:var(--gold);border:1px solid rgba(255,209,102,.35);border-radius:14px;padding:12px;background:rgba(255,209,102,.06)}nav::-webkit-scrollbar{height:5px}nav::-webkit-scrollbar-thumb{background:var(--line);border-radius:999px}@media(max-width:560px){.hero-intro{align-items:flex-start}.hero-title{font-size:21px}.hero-stamp{display:none}.header-pills span:nth-child(n+3){display:none}}

.award.clickable{cursor:pointer;transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease}.award.clickable:hover{transform:translateY(-3px);border-color:rgba(255,176,32,.7);box-shadow:0 15px 38px rgba(0,0,0,.32)}.award .more{margin-top:9px;font-size:10px;color:var(--accent);font-weight:800;text-transform:uppercase;letter-spacing:.6px}.modal-backdrop{position:fixed;inset:0;background:rgba(2,6,12,.78);z-index:100;display:none;align-items:center;justify-content:center;padding:20px}.modal-backdrop.on{display:flex}.modal{width:min(620px,100%);background:linear-gradient(145deg,#182234,#0f1724);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 25px 80px rgba(0,0,0,.55);position:relative}.modal-close{position:absolute;right:14px;top:12px;border:0;background:transparent;color:var(--dim);font-size:24px;cursor:pointer}.modal-icon{font-size:34px}.modal h2{margin:6px 35px 4px 0}.modal-who{font-size:24px;font-weight:900;color:var(--accent)}.modal-detail{color:var(--dim);margin-top:8px;line-height:1.6}.section-note{padding:12px 14px;border:1px solid var(--line);border-radius:10px;background:rgba(96,165,250,.06);color:var(--dim);font-size:12px;margin-bottom:14px}

.profile-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:14px 0 20px}
.profile-metric{background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:12px}
.profile-metric .k{font-size:11px;text-transform:uppercase;letter-spacing:.45px;color:var(--dim);font-weight:700}
.profile-metric .v{font-size:18px;font-weight:800;margin-top:4px}
.profile-metric .d{font-size:12px;color:var(--dim);margin-top:3px}
.lore-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.lore-item{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px}
.lore-item .yr{color:var(--accent);font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.5px}
.lore-item .ttl{font-size:16px;font-weight:800;margin-top:3px}
.lore-item .copy{color:var(--dim);font-size:13px;margin-top:5px}
.season-awards{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:14px 0 22px}
@media(max-width:900px){.profile-grid,.season-awards{grid-template-columns:repeat(2,minmax(0,1fr))}.lore-list{grid-template-columns:1fr}}
@media(max-width:560px){.profile-grid,.season-awards{grid-template-columns:1fr}}

.trade-summary{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-bottom:18px}
.trade-card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:15px}
.trade-card .k{color:var(--dim);font-size:11px;text-transform:uppercase;letter-spacing:.5px;font-weight:700}
.trade-card .v{font-size:22px;font-weight:850;color:var(--accent);margin-top:5px}
.trade-card .d{font-size:12px;color:var(--dim);margin-top:4px}
.trade-filters{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:0 0 14px}
.trade-list{display:grid;gap:10px}
.trade-row{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:14px}
.trade-meta{display:flex;justify-content:space-between;gap:12px;align-items:center;margin-bottom:10px}
.trade-date{font-size:12px;color:var(--dim);font-weight:700}
.trade-season{font-size:11px;padding:3px 8px;border-radius:999px;background:rgba(245,166,35,.13);color:var(--accent);font-weight:800}
.trade-sides{display:grid;grid-template-columns:1fr 44px 1fr;gap:12px;align-items:stretch}
.trade-side{background:var(--panel2);border-radius:10px;padding:12px}
.trade-side .mgr{font-size:15px;font-weight:850}
.trade-side .team{font-size:12px;color:var(--dim);margin-top:1px}
.trade-side ul{list-style:none;margin-top:9px;display:grid;gap:5px}
.trade-side li{font-size:13px;border-top:1px solid var(--line);padding-top:5px}
.trade-side li:first-child{border-top:0;padding-top:0}
.trade-arrow{display:flex;align-items:center;justify-content:center;color:var(--dim);font-weight:900;font-size:20px}
.trade-grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.trade-bars{display:grid;gap:8px}
.trade-bar{display:grid;grid-template-columns:150px 1fr 38px;gap:9px;align-items:center;font-size:12.5px}
.trade-track{height:13px;background:var(--panel2);border-radius:999px;overflow:hidden}
.trade-fill{height:100%;background:var(--accent)}
.trade-note{font-size:12px;color:var(--dim);line-height:1.5;margin:8px 0 16px}
@media(max-width:900px){.trade-summary{grid-template-columns:repeat(2,minmax(0,1fr))}.trade-grid2{grid-template-columns:1fr}}
@media(max-width:620px){.trade-summary{grid-template-columns:1fr}.trade-sides{grid-template-columns:1fr}.trade-arrow{transform:rotate(90deg)}.trade-bar{grid-template-columns:110px 1fr 30px}}

.trade-grade{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:10px;font-weight:900;font-size:18px;background:rgba(245,166,35,.14);color:var(--accent);border:1px solid rgba(245,166,35,.35)}
.trade-grade.good{background:rgba(63,185,80,.15);color:var(--accent2);border-color:rgba(63,185,80,.35)}
.trade-grade.bad{background:rgba(248,81,73,.14);color:var(--red);border-color:rgba(248,81,73,.35)}
.trade-eval{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
.trade-eval-side{background:var(--panel2);border-radius:10px;padding:12px}
.trade-eval-head{display:flex;justify-content:space-between;gap:10px;align-items:center}
.trade-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
.trade-metric{border-top:1px solid var(--line);padding-top:7px}.trade-metric .k{font-size:10px;text-transform:uppercase;color:var(--dim);font-weight:700}.trade-metric .v{font-size:14px;font-weight:800;margin-top:2px}
.trade-method{font-size:12px;color:var(--dim);line-height:1.55}
.trade-rank-table td:first-child,.trade-rank-table th:first-child{text-align:center}
@media(max-width:700px){.trade-eval{grid-template-columns:1fr}.trade-metrics{grid-template-columns:1fr 1fr}}

.trade-rank-row{cursor:pointer;transition:background .15s ease}
.trade-rank-row:hover{background:rgba(88,166,255,.07)}
.trade-rank-row td:first-child{position:relative;padding-left:30px}
.trade-rank-row td:first-child::before{
  content:"›";position:absolute;left:13px;top:50%;transform:translateY(-50%);
  font-size:20px;color:var(--accent);transition:transform .18s ease
}
.trade-rank-row.open td:first-child::before{transform:translateY(-50%) rotate(90deg)}
.trade-rank-detail{display:none}
.trade-rank-detail.open{display:table-row}
.trade-rank-detail>td{padding:0!important;background:rgba(22,27,34,.72);white-space:normal}
.rank-detail-wrap{padding:18px 22px 22px;border-bottom:1px solid var(--line)}
.rank-detail-top{display:grid;grid-template-columns:1fr auto 1fr;gap:18px;align-items:stretch}
.rank-detail-side{background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:14px}
.rank-detail-side.winner{border-color:rgba(63,185,80,.55);box-shadow:inset 0 3px 0 rgba(63,185,80,.8)}
.rank-detail-side.loser{border-color:rgba(248,81,73,.4)}
.rank-detail-manager{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}
.rank-detail-manager .name{font-size:17px;font-weight:800}
.rank-detail-grade{font-size:24px;font-weight:900;color:var(--accent)}
.rank-detail-assets{margin:0;padding-left:18px;color:var(--txt)}
.rank-detail-assets li{margin:5px 0}
.rank-detail-arrow{display:flex;align-items:center;justify-content:center;font-size:28px;color:var(--dim)}
.rank-detail-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:14px}
.rank-detail-metric{background:var(--panel2);border:1px solid var(--line);border-radius:9px;padding:10px}
.rank-detail-metric .k{font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.45px;font-weight:700}
.rank-detail-metric .v{font-size:15px;font-weight:800;margin-top:4px}
.rank-detail-note{margin-top:13px;color:var(--dim);font-size:12.5px;line-height:1.55}
.rank-detail-hint{font-size:11px;color:var(--dim);margin-left:8px;font-weight:500}
@media(max-width:760px){
  .rank-detail-top{grid-template-columns:1fr}
  .rank-detail-arrow{transform:rotate(90deg);height:24px}
  .rank-detail-metrics{grid-template-columns:repeat(2,minmax(0,1fr))}
  .trade-rank-table th:nth-child(5),.trade-rank-table td:nth-child(5){display:none}
}

.trade-section-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;margin:16px 0 24px}
.trade-network-wrap{position:relative;min-height:520px}
.trade-network-svg{width:100%;height:500px;display:block}
.trade-network-edge{stroke:var(--line);stroke-linecap:round;opacity:.7;transition:opacity .2s,stroke .2s}
.trade-network-edge.active{stroke:var(--accent);opacity:1}
.trade-network-node{cursor:pointer}
.trade-network-node circle{fill:var(--panel2);stroke:var(--line);stroke-width:2;transition:stroke .2s,fill .2s}
.trade-network-node.active circle{stroke:var(--accent);fill:rgba(245,166,35,.12)}
.trade-network-node text{fill:var(--txt);font-size:11px;font-weight:700;text-anchor:middle}
.network-legend{font-size:12px;color:var(--dim);margin-top:6px}
.gm-profile-head{display:flex;justify-content:space-between;gap:16px;align-items:center;margin-bottom:12px}
.gm-score{font-size:34px;font-weight:900;color:var(--accent)}
.gm-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.gm-metric{background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:11px}
.gm-metric .k{font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.4px;font-weight:700}
.gm-metric .v{font-size:16px;font-weight:800;margin-top:4px}
.gm-list{margin-top:12px;border-top:1px solid var(--line);padding-top:12px}
.player-journey{display:flex;gap:10px;overflow-x:auto;padding:8px 0 4px}
.journey-stop{min-width:205px;background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:12px;position:relative}
.journey-stop:not(:last-child)::after{content:"→";position:absolute;right:-17px;top:42%;color:var(--accent);font-size:20px;z-index:2}
.journey-stop .date{font-size:11px;color:var(--dim);font-weight:700}
.journey-stop .mgr{font-size:15px;font-weight:800;margin-top:4px}
.journey-stop .deal{font-size:12px;color:var(--dim);margin-top:6px}
.signal-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.signal-card{background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:13px}
.signal-card .label{font-size:11px;color:var(--dim);text-transform:uppercase;font-weight:700}
.signal-card .name{font-size:16px;font-weight:800;margin-top:4px}
.signal-card .score{font-size:24px;font-weight:900;color:var(--accent);margin-top:3px}
.butterfly-list{display:grid;gap:12px}
.butterfly-card{background:var(--panel2);border:1px solid var(--line);border-radius:11px;padding:14px}
.butterfly-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:10px;align-items:center}
.butterfly-step{background:var(--panel);border:1px solid var(--line);border-radius:9px;padding:10px;text-align:center}
.butterfly-arrow{color:var(--accent);font-size:20px}
.trade-award-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px}
.trade-award-tabs button{background:var(--panel2);border:1px solid var(--line);color:var(--dim);padding:7px 10px;border-radius:8px;cursor:pointer}
.trade-award-tabs button.on{background:var(--accent);color:#0d1117;border-color:var(--accent)}
@media(max-width:900px){
 .trade-section-grid{grid-template-columns:1fr}
 .gm-metrics{grid-template-columns:repeat(2,minmax(0,1fr))}
 .butterfly-flow{grid-template-columns:1fr}
 .butterfly-arrow{transform:rotate(90deg)}
}
@media(max-width:560px){
 .gm-metrics,.signal-grid{grid-template-columns:1fr}
 .trade-network-wrap{min-height:420px}
 .trade-network-svg{height:400px}
}

/* ===== SDFF ARCHIVE VISUAL REFRESH ===== */
:root{
  --bg:#0a0f17;
  --panel:#111826;
  --panel2:#172132;
  --panel3:#1d293b;
  --line:#27364b;
  --txt:#f4f7fb;
  --dim:#93a1b5;
  --accent:#ffb02e;
  --accentSoft:rgba(255,176,46,.13);
  --green:#36c275;
  --red:#ff6b6b;
  --blue:#69a7ff;
  --shadow:0 14px 40px rgba(0,0,0,.22);
}
html{scroll-behavior:smooth}
body{
  background:
    radial-gradient(circle at 10% -10%,rgba(105,167,255,.08),transparent 34%),
    radial-gradient(circle at 92% 2%,rgba(255,176,46,.07),transparent 30%),
    var(--bg);
  letter-spacing:.01em
}
header{
  padding:34px 28px 28px;
  background:linear-gradient(180deg,rgba(18,26,39,.98),rgba(10,15,23,.96));
}
header h1{font-size:30px;letter-spacing:-.7px}
.sub{font-size:13px}
.wrap{max-width:1280px;padding:0 28px 80px}
nav{
  padding:12px 28px;
  box-shadow:0 10px 28px rgba(0,0,0,.16);
  overflow-x:auto;
  flex-wrap:nowrap;
  scrollbar-width:none
}
nav::-webkit-scrollbar{display:none}
nav button{white-space:nowrap;padding:9px 15px}
section{padding-top:34px;animation:pageIn .32s ease both}
@keyframes pageIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.panel,.card,.award,.chartbox,table,.tl,.mtch,.trade-card{
  box-shadow:var(--shadow)
}
.panel,.card,.award,.chartbox,.tl,.mtch,.trade-card{
  backdrop-filter:blur(8px)
}
h2{font-size:26px;letter-spacing:-.45px;margin-bottom:8px}
h3{margin-top:30px;color:#afc2dc;font-size:13px}
.subtitle{max-width:760px;font-size:14px;line-height:1.65;margin-bottom:20px}
.cards{gap:16px;margin-bottom:18px}
.card{padding:18px;border-radius:14px;transition:transform .18s ease,border-color .18s ease}
.card:hover,.award:hover,.trade-card:hover,.lore-item:hover{transform:translateY(-3px);border-color:#3c506d}
.card .big{font-size:27px}
table{border-radius:14px}
th{top:50px}
tbody tr{transition:background .13s ease}
button,select,input{transition:border-color .18s ease,background .18s ease,transform .18s ease}
button:hover{transform:translateY(-1px)}
.page-hero{
  position:relative;
  overflow:hidden;
  border:1px solid var(--line);
  border-radius:18px;
  padding:26px;
  margin:0 0 24px;
  background:
    linear-gradient(135deg,rgba(255,176,46,.11),rgba(105,167,255,.07) 58%,rgba(17,24,38,.9)),
    var(--panel);
  box-shadow:var(--shadow)
}
.page-hero::after{
  content:"";
  position:absolute;right:-80px;top:-100px;width:280px;height:280px;
  border-radius:50%;border:1px solid rgba(255,255,255,.05)
}
.page-hero .eyebrow{font-size:11px;color:var(--accent);text-transform:uppercase;letter-spacing:.9px;font-weight:800}
.page-hero .title{font-size:34px;font-weight:900;letter-spacing:-.8px;margin-top:5px}
.page-hero .dek{max-width:760px;color:var(--dim);font-size:14px;line-height:1.7;margin-top:8px}
.page-hero .hero-stats{display:flex;flex-wrap:wrap;gap:14px;margin-top:18px}
.page-hero .hero-stat{min-width:130px;padding:10px 12px;border-radius:10px;background:rgba(8,13,21,.45);border:1px solid rgba(255,255,255,.06)}
.page-hero .hero-stat .k{font-size:10px;color:var(--dim);text-transform:uppercase;font-weight:800;letter-spacing:.5px}
.page-hero .hero-stat .v{font-size:18px;font-weight:900;margin-top:3px}
.front-grid{display:grid;grid-template-columns:1.35fr .65fr;gap:18px;margin-bottom:24px}
.front-feature{min-height:270px}
.front-feature .headline{font-size:29px;font-weight:900;line-height:1.08;letter-spacing:-.6px;max-width:620px}
.front-feature .copy{color:var(--dim);line-height:1.65;margin-top:10px;max-width:650px}
.front-side{display:grid;gap:14px}
.story-card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:17px;box-shadow:var(--shadow)}
.story-card .label{font-size:10.5px;color:var(--accent);text-transform:uppercase;font-weight:800;letter-spacing:.55px}
.story-card .headline{font-size:18px;font-weight:850;margin-top:5px}
.story-card .copy{font-size:12.5px;color:var(--dim);line-height:1.5;margin-top:5px}
.timeline-rail{display:flex;gap:0;overflow-x:auto;padding:14px 2px 6px;scrollbar-width:thin}
.timeline-event{min-width:215px;position:relative;padding:0 16px 0 28px}
.timeline-event::before{content:"";position:absolute;left:0;top:9px;width:14px;height:14px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(255,176,46,.12)}
.timeline-event::after{content:"";position:absolute;left:14px;right:-5px;top:15px;height:1px;background:var(--line)}
.timeline-event:last-child::after{display:none}
.timeline-event .yr{font-size:12px;font-weight:900;color:var(--accent)}
.timeline-event .evt{font-weight:800;margin-top:8px}
.timeline-event .desc{font-size:12px;color:var(--dim);margin-top:4px;line-height:1.45}
.manager-chip{
  display:inline-flex;align-items:center;gap:7px;
  padding:3px 8px;border:1px solid var(--line);border-radius:999px;
  background:var(--panel2);font-weight:750
}
.manager-dot{width:8px;height:8px;border-radius:50%;display:inline-block}
.ring-row{font-size:19px;letter-spacing:2px}
.metric-strip{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin:14px 0 22px}
.metric-strip .item{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:13px}
.metric-strip .item .k{font-size:10px;color:var(--dim);text-transform:uppercase;font-weight:800}
.metric-strip .item .v{font-size:20px;font-weight:900;margin-top:4px}
.share-card{
  position:relative;border:1px solid var(--line);border-radius:16px;padding:18px;
  background:linear-gradient(145deg,var(--panel2),var(--panel));overflow:hidden
}
.share-card::before{content:"SDFF";position:absolute;right:12px;bottom:-12px;font-size:62px;font-weight:950;color:rgba(255,255,255,.025)}
.mini-chart{height:150px;width:100%;display:block}
.fade-card{animation:cardIn .45s ease both}
@keyframes cardIn{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}
.count-up{font-variant-numeric:tabular-nums}
footer{padding-top:40px}
@media(max-width:980px){
  .front-grid{grid-template-columns:1fr}
  .front-side{grid-template-columns:1fr 1fr}
  .metric-strip{grid-template-columns:repeat(3,minmax(0,1fr))}
}
@media(max-width:700px){
  .wrap{padding:0 15px 60px}
  header{padding:24px 16px 20px}
  nav{padding:10px 12px}
  .front-side{grid-template-columns:1fr}
  .page-hero{padding:20px}
  .page-hero .title{font-size:28px}
  .metric-strip{grid-template-columns:repeat(2,minmax(0,1fr))}
  .cards{grid-template-columns:1fr 1fr}
  table{font-size:12px}
  th,td{padding:8px}
}
@media(max-width:470px){
  .cards,.metric-strip{grid-template-columns:1fr}
}

/* ===== MOBILE-FIRST RESPONSIVE UPGRADE ===== */
.mobile-page-select-wrap{display:none}
.mobile-page-select{
  width:100%;background:var(--panel);color:var(--txt);
  border:1px solid var(--line);border-radius:10px;
  padding:11px 12px;font-size:15px;font-weight:700
}
.mobile-scroll-hint{
  display:none;color:var(--dim);font-size:11px;margin:5px 0 8px
}
.mobile-table-shell{
  width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;
  border-radius:12px;position:relative
}
.mobile-table-shell table{min-width:680px}
.mobile-action-row{
  display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;
  scrollbar-width:none;-webkit-overflow-scrolling:touch
}
.mobile-action-row::-webkit-scrollbar{display:none}

@media(max-width:900px){
  body{font-size:14px}
  .shell{width:100%;overflow-x:hidden}
  header{padding:22px 16px 18px}
  header h1{font-size:24px;line-height:1.15}
  .sub{font-size:12px;line-height:1.45}
  .header-pills{display:flex;gap:6px;overflow-x:auto;flex-wrap:nowrap;padding-bottom:3px}
  .header-pills span{flex:0 0 auto}
  main{padding:0 14px 56px;max-width:100%}
  nav{
    position:sticky;top:0;padding:9px 10px;
    gap:6px;overflow-x:auto;flex-wrap:nowrap;
    -webkit-overflow-scrolling:touch
  }
  nav button{
    flex:0 0 auto;min-height:42px;
    padding:9px 13px;font-size:13px
  }
  section{padding-top:22px}
  h2{font-size:23px}
  h3{margin-top:24px}
  .page-hero{padding:19px;border-radius:15px;margin-bottom:18px}
  .page-hero .title{font-size:27px;line-height:1.08}
  .page-hero .dek{font-size:13px;line-height:1.55}
  .page-hero .hero-stats{
    display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px
  }
  .page-hero .hero-stat{min-width:0;padding:10px}
  .page-hero .hero-stat .v{
    font-size:16px;overflow-wrap:anywhere
  }
  .front-grid,.trade-section-grid,.grid2,.trade-grid2{
    grid-template-columns:1fr!important;gap:14px!important
  }
  .front-side{grid-template-columns:1fr!important}
  .front-feature{min-height:auto}
  .front-feature .headline{font-size:25px}
  .cards,.award-grid,.profile-grid,.season-awards,.metric-strip,
  .gm-metrics,.signal-grid,.lore-list{
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:10px!important
  }
  .card,.award,.profile-metric,.gm-metric,.signal-card,.lore-item{
    padding:13px
  }
  .card .big{font-size:22px;overflow-wrap:anywhere}
  .timeline,.timeline-rail,.player-journey{
    scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch
  }
  .tl,.timeline-event,.journey-stop{scroll-snap-align:start}
  .timeline-event{min-width:190px}
  .trade-network-wrap{min-height:390px;padding:12px}
  .trade-network-svg{height:360px}
  .gm-profile-head{align-items:flex-start;flex-direction:column}
  .gm-profile-head select{width:100%}
  .profile-head,.prof-hd{align-items:flex-start}
  .statline{gap:10px 16px}
  .barrow .nm{width:90px;font-size:11px}
  .barrow .v{width:52px}
  .trade-summary{
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:9px!important
  }
  .trade-card{padding:13px}
  .trade-card .v{font-size:21px}
  .trade-rank-table{min-width:700px}
  .rank-detail-wrap{padding:14px}
  .rank-detail-top{grid-template-columns:1fr!important}
  .rank-detail-arrow{height:18px;transform:rotate(90deg)}
  .rank-detail-metrics{grid-template-columns:repeat(2,minmax(0,1fr))!important}
  .butterfly-flow{grid-template-columns:1fr!important}
  .butterfly-arrow{transform:rotate(90deg)}
  .ctrls{
    display:grid!important;grid-template-columns:1fr 1fr;
    gap:8px!important;align-items:stretch
  }
  .ctrls input[type=text]{grid-column:1/-1}
  .ctrls select,.ctrls input{width:100%;min-height:42px}
  .match{
    display:grid!important;grid-template-columns:1fr auto 1fr;
    gap:6px;padding:10px;font-size:12px
  }
  .match .score{font-size:14px;padding:0 5px}
  .draftgrid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .mobile-scroll-hint{display:block}
  .mobile-page-select-wrap{
    display:block;position:sticky;top:0;z-index:25;
    background:rgba(10,15,23,.97);padding:8px 14px;
    border-bottom:1px solid var(--line)
  }
}

@media(max-width:620px){
  header h1{font-size:21px}
  nav{display:none}
  .page-hero{padding:16px}
  .page-hero .title{font-size:24px}
  .page-hero .hero-stats,
  .cards,.award-grid,.profile-grid,.season-awards,.metric-strip,
  .gm-metrics,.signal-grid,.lore-list,.trade-summary{
    grid-template-columns:1fr!important
  }
  .front-feature .headline{font-size:23px}
  .story-card .headline{font-size:16px}
  .card,.award,.trade-card,.story-card,.panel{border-radius:12px}
  .rank-detail-metrics{grid-template-columns:1fr!important}
  .trade-rank-row td:first-child{padding-left:26px}
  .trade-rank-row td:first-child::before{left:9px}
  .trade-network-svg{height:320px}
  .trade-network-wrap{min-height:350px}
  .trade-bar{
    grid-template-columns:minmax(110px,1fr) minmax(90px,1.3fr) 34px!important;
    gap:7px;font-size:11px
  }
  .timeline-event{min-width:175px}
  .journey-stop{min-width:180px}
  .ctrls{grid-template-columns:1fr}
  .ctrls input[type=text]{grid-column:auto}
  .draftgrid{grid-template-columns:1fr}
  .match{
    grid-template-columns:1fr!important;
    text-align:center
  }
  .match .r,.match>div{text-align:center!important}
  .match .score{padding:5px 0}
  .profile-name{font-size:22px}
  .rings,.ring-row{font-size:17px}
  .tablewrap{overflow-x:auto;-webkit-overflow-scrolling:touch}
  footer{font-size:11px;line-height:1.5;padding:24px 8px}
}

@media(max-width:390px){
  main{padding-left:10px;padding-right:10px}
  .mobile-page-select-wrap{padding-left:10px;padding-right:10px}
  .page-hero .title{font-size:22px}
  .card .big{font-size:20px}
  .trade-network-svg{height:290px}
  .trade-network-wrap{min-height:315px}
}

/* ===== MOBILE FIX: PLAYER JOURNEYS + BUY/SELL SIGNALS ===== */
@media(max-width:700px){
  /* Player trade journeys become a vertical timeline */
  #playerJourneyView{overflow:visible}
  #playerJourneyView .player-journey{
    display:block;
    overflow:visible;
    padding:6px 0 0 18px;
    position:relative;
  }
  #playerJourneyView .player-journey::before{
    content:"";
    position:absolute;
    left:7px;
    top:10px;
    bottom:10px;
    width:2px;
    background:var(--line);
  }
  #playerJourneyView .journey-stop{
    min-width:0;
    width:100%;
    margin:0 0 14px;
    padding:14px 14px 14px 16px;
    box-sizing:border-box;
    position:relative;
  }
  #playerJourneyView .journey-stop::before{
    content:"";
    position:absolute;
    left:-18px;
    top:20px;
    width:10px;
    height:10px;
    border-radius:50%;
    background:var(--accent);
    box-shadow:0 0 0 4px rgba(255,176,46,.13);
  }
  #playerJourneyView .journey-stop:not(:last-child)::after{
    display:none;
  }
  #playerJourneyView .journey-stop .date{
    font-size:11px;
    line-height:1.35;
  }
  #playerJourneyView .journey-stop .mgr{
    font-size:17px;
    line-height:1.28;
    overflow-wrap:anywhere;
  }
  #playerJourneyView .journey-stop .deal{
    font-size:13px;
    line-height:1.52;
    overflow-wrap:anywhere;
  }

  /* Prevent section descriptions from running off-screen */
  .trade-section-grid .panel .small,
  .trade-method,
  .signal-card .small{
    white-space:normal;
    overflow-wrap:anywhere;
    word-break:normal;
    max-width:100%;
    line-height:1.5;
  }

  /* Buy-low / sell-high signals become compact vertical cards */
  #tradeSignals{
    display:grid!important;
    grid-template-columns:1fr!important;
    gap:10px!important;
  }
  #tradeSignals .signal-card{
    width:100%;
    box-sizing:border-box;
    padding:14px;
    min-width:0;
    overflow:hidden;
  }
  #tradeSignals .signal-card .label{
    font-size:10px;
    line-height:1.25;
    letter-spacing:.45px;
  }
  #tradeSignals .signal-card .name{
    font-size:18px;
    line-height:1.25;
    margin-top:5px;
    overflow-wrap:anywhere;
  }
  #tradeSignals .signal-card .score{
    font-size:31px;
    line-height:1;
    margin:8px 0 6px;
  }
  #tradeSignals .signal-card .small{
    font-size:12px;
    line-height:1.45;
    color:var(--dim);
  }

  /* Ensure the two-column parent does not preserve desktop widths */
  .trade-section-grid{
    display:block!important;
  }
  .trade-section-grid > .panel{
    width:100%;
    max-width:100%;
    box-sizing:border-box;
    margin-bottom:14px;
    overflow:hidden;
  }

  /* Better mobile selects in these sections */
  #playerJourney,
  #gmManager,
  #networkManager{
    width:100%;
    min-width:0;
    box-sizing:border-box;
    font-size:15px;
    min-height:44px;
  }
}

@media(max-width:390px){
  #playerJourneyView .journey-stop{
    padding:12px 12px 12px 14px;
  }
  #playerJourneyView .journey-stop .mgr{
    font-size:16px;
  }
  #tradeSignals .signal-card .name{
    font-size:17px;
  }
  #tradeSignals .signal-card .score{
    font-size:28px;
  }
}

/* ===== BEST TRADER COMPARISON ===== */
.best-trader-panel{overflow:hidden}
.best-trader-leader{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  margin:12px 0 18px;
  padding:16px;
  border:1px solid var(--line);
  border-radius:12px;
  background:var(--panel2);
}
.best-trader-kicker{
  color:var(--accent);
  font-size:10px;
  font-weight:800;
  letter-spacing:.55px;
  text-transform:uppercase;
}
.best-trader-name{
  margin-top:4px;
  font-size:21px;
  font-weight:900;
  line-height:1.2;
}
.best-trader-score{
  flex:0 0 auto;
  color:var(--accent);
  font-size:34px;
  font-weight:900;
  line-height:1;
}
.best-trader-chart{
  display:grid;
  gap:10px;
}
.trader-rank-row{
  display:grid;
  grid-template-columns:30px minmax(0,1fr) 64px;
  gap:10px;
  align-items:center;
  padding:10px 0;
  border-top:1px solid var(--line);
}
.trader-rank-number{
  color:var(--dim);
  font-size:13px;
  font-weight:800;
  text-align:center;
}
.trader-rank-name{
  font-size:14px;
  font-weight:850;
}
.trader-rank-meta{
  margin-top:2px;
  color:var(--dim);
  font-size:10.5px;
  line-height:1.35;
  overflow-wrap:anywhere;
}
.trader-rank-track{
  height:10px;
  margin-top:7px;
  overflow:hidden;
  border-radius:999px;
  background:rgba(255,255,255,.055);
}
.trader-rank-fill{
  height:100%;
  min-width:4px;
  border-radius:999px;
  transition:width .28s ease;
}
.trader-rank-value{
  font-size:14px;
  font-weight:900;
  text-align:right;
}
@media(max-width:700px){
  .best-trader-leader{
    align-items:flex-start;
    padding:14px;
  }
  .best-trader-name{font-size:18px}
  .best-trader-score{font-size:28px}
  .trader-rank-row{
    grid-template-columns:24px minmax(0,1fr) 52px;
    gap:7px;
  }
  .trader-rank-name{font-size:13px}
  .trader-rank-meta{font-size:10px}
  .trader-rank-value{font-size:12px}
}
@media(max-width:390px){
  .best-trader-leader{
    display:block;
  }
  .best-trader-score{
    margin-top:10px;
  }
}
