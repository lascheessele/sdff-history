'use strict';
const D=DATA; const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const MANAGER_COLORS=["#ffb02e","#69a7ff","#36c275","#d68cff","#ff7f7f","#49d6c7","#ffd866","#8aa4ff","#f78fb3","#7ed6df","#b8e986","#f8a5c2","#c7ecee","#e056fd","#95afc0"];
const managerColorMap={};
function managerColor(name){
 if(!Object.keys(managerColorMap).length){
  const names=[...new Set(D.teams.map(t=>t.manager))].sort();
  names.forEach((n,i)=>managerColorMap[n]=MANAGER_COLORS[i%MANAGER_COLORS.length]);
 }
 return managerColorMap[name]||"#ffb02e";
}
function managerChip(name){
 return `<span class="manager-chip"><span class="manager-dot" style="background:${managerColor(name)}"></span>${name}</span>`;
}
function pageHero(eyebrow,title,dek,stats=[]){
 return `<div class="page-hero fade-card"><div class="eyebrow">${eyebrow}</div><div class="title">${title}</div><div class="dek">${dek}</div>${stats.length?`<div class="hero-stats">${stats.map(s=>`<div class="hero-stat"><div class="k">${s.k}</div><div class="v">${s.v}</div></div>`).join('')}</div>`:''}</div>`;
}
function sparkline(values,w=420,h=130){
 if(!values.length)return '';
 const min=Math.min(...values),max=Math.max(...values),pad=12,span=max-min||1;
 const pts=values.map((v,i)=>`${pad+i*(w-pad*2)/Math.max(values.length-1,1)},${h-pad-(v-min)*(h-pad*2)/span}`).join(' ');
 return `<svg class="mini-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><polyline points="${pts}" fill="none" stroke="var(--accent)" stroke-width="3"/><line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" stroke="var(--line)"/></svg>`;
}
function animateCounts(){
 document.querySelectorAll('[data-count]').forEach(el=>{
  const target=+el.dataset.count,dec=+(el.dataset.dec||0),start=performance.now(),dur=650;
  const run=now=>{const p=Math.min(1,(now-start)/dur),v=target*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec);if(p<1)requestAnimationFrame(run)};
  requestAnimationFrame(run);
 });
}

const fmt=(n,d=2)=>Number(n||0).toLocaleString(undefined,{minimumFractionDigits:d,maximumFractionDigits:d});
const pct=n=>(100*n).toFixed(1)+'%';
function table(el,cols,rows){el.innerHTML=`<table><thead><tr>${cols.map(c=>`<th>${c[0]}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${cols.map(c=>`<td>${c[1](r)}</td>`).join('')}</tr>`).join('')}</tbody></table>`}
function escAttr(v){return String(v??'').replaceAll('&','&amp;').replaceAll('\"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')}
function award(i,t,w,d,more=''){return `<div class="award ${more?'clickable':''}" ${more?`data-icon="${escAttr(i)}" data-title="${escAttr(t)}" data-who="${escAttr(w)}" data-detail="${escAttr(d)}" data-more="${escAttr(more)}"`:''}><div class="icon">${i}</div><div class="lbl">${t}</div><div class="who">${w}</div><div class="det">${d}</div>${more?'<div class="more">View details</div>':''}</div>`}
function initAwardModal(){const m=$('#awardModal');document.addEventListener('click',e=>{const a=e.target.closest('.award.clickable');if(a){$('#modalBody').innerHTML=`<div class="modal-icon">${a.dataset.icon}</div><h2>${a.dataset.title}</h2><div class="modal-who">${a.dataset.who}</div><div class="modal-detail"><b>${a.dataset.detail}</b><br><br>${a.dataset.more}</div>`;m.classList.add('on')}if(e.target===m||e.target.closest('.modal-close'))m.classList.remove('on')});document.addEventListener('keydown',e=>{if(e.key==='Escape')m.classList.remove('on')})}
function bars(el,rows,name,val){let max=Math.max(...rows.map(r=>Math.abs(r[val])),1);el.innerHTML=rows.map(r=>`<div class="barrow"><div>${r[name]}</div><div class="track"><div class="fill" style="width:${100*Math.abs(r[val])/max}%"></div></div><div>${fmt(r[val],1)}</div></div>`).join('')}
function initNav(){const tabs=[['overview','Overview'],['managers','Managers'],['standings','All-Time'],['seasons','Seasons'],['h2h','Head-to-Head'],['trades','Trades'],['records','Records'],['luck','Luck & Efficiency'],['superlatives','Superlatives'],['wacky','Wacky Stats'],['matchups','Matchups']];$('#nav').innerHTML=tabs.map((x,i)=>`<button data-id="${x[0]}" class="${i?'':'on'}">${x[1]}</button>`).join('');$('#app').innerHTML=tabs.map((x,i)=>`<section id="${x[0]}" class="section ${i?'':'on'}"></section>`).join('');$('#nav').onclick=e=>{if(!e.target.dataset.id)return;$$('nav button,.section').forEach(x=>x.classList.remove('on'));e.target.classList.add('on');$('#'+e.target.dataset.id).classList.add('on');history.replaceState(null,'','#'+e.target.dataset.id);window.scrollTo({top:0,behavior:'smooth'})};const requested=location.hash.slice(1);if(requested&&$('#'+requested)){const b=document.querySelector('nav button[data-id="'+requested+'"]');if(b)b.click()}}
function overview(){const done=D.seasons,goat=D.managers[0],titleKing=[...D.managers].sort((a,b)=>b.titles-a.titles||b.legacy-a.legacy)[0];$('#overview').innerHTML=`<div class="hero-intro panel"><div><div class="kicker">WELCOME TO THE ARCHIVE</div><div class="hero-title">Five completed seasons of SDFF history.</div><div class="hero-copy">Championships, rivalries, records, luck and the moments the league still talks about.</div></div><div class="hero-stamp">2021<br>—<br>2025</div></div><div class="cards"><div class="card fade-card"><div class="lbl">Completed Seasons</div><div class="big">${done.length}</div><div class="note">2021–2025 only</div></div><div class="card fade-card"><div class="lbl">Managers Recorded</div><div class="big">${D.managers.length}</div><div class="note">Across the full league archive</div></div><div class="card fade-card"><div class="lbl">Current GOAT</div><div class="big">${goat.manager}</div><div class="note">Legacy Score ${goat.legacy}</div></div><div class="card fade-card"><div class="lbl">Most Championships</div><div class="big">${titleKing.titles}</div><div class="note">${titleKing.manager}</div></div></div><h3>Championship Timeline</h3><div class="timeline">${done.map(s=>{const cs=s.coChampions||[s.champion];return `<div class="panel champ-card"><div class="year">${s.year}</div><div class="who">🏆 ${cs.map(c=>c.manager).join(' & ')}</div><div class="team">${cs.map(c=>c.team).join(' / ')}${s.championshipNote?'<br><span class="small">Shared championship</span>':''}</div></div>`}).join('')}</div><h3>League Lore</h3><div class="lore-list"><div class="lore-item"><div class="yr">2021</div><div class="ttl">The First Champion</div><div class="copy">Alex Sabol and Angry Donuts won the inaugural recorded SDFF championship.</div></div><div class="lore-item"><div class="yr">2022</div><div class="ttl">The Shared Title</div><div class="copy">Luke Scheessele and Brad Freiburger were recognized as co-champions following the canceled Bills–Bengals game after Damar Hamlin’s medical emergency.</div></div><div class="lore-item"><div class="yr">2023</div><div class="ttl">Luke Breaks Through</div><div class="copy">Campbell's Crackheads captured Luke’s second credited title and first outright championship.</div></div><div class="lore-item"><div class="yr">2024–2025</div><div class="ttl">Repeat Champions Return</div><div class="copy">Brad won again in 2024, followed by Alex’s second championship in 2025.</div></div></div><h3>League Leaders</h3><div class="award-grid">${award('👑','Legacy Leader',goat.manager,'Score '+goat.legacy)}${award('🔥','Best Career Win %',[...D.managers].sort((a,b)=>b.winPct-a.winPct)[0].manager,pct([...D.managers].sort((a,b)=>b.winPct-a.winPct)[0].winPct))}${award('🍀','Most Wins Above Expected',[...D.managers].sort((a,b)=>b.luck-a.luck)[0].manager,'+'+fmt([...D.managers].sort((a,b)=>b.luck-a.luck)[0].luck,1))}${award('😭','Most Wins Below Expected',[...D.managers].sort((a,b)=>a.luck-b.luck)[0].manager,fmt([...D.managers].sort((a,b)=>a.luck-b.luck)[0].luck,1))}</div><h3>Legacy Rankings</h3><div id="legacyBars" class="panel"></div>`;bars($('#legacyBars'),D.managers.slice(0,10),'manager','legacy')}
function managers(){let names=D.managers.map(x=>x.manager).sort();$('#managers').innerHTML=`<div class="ctrls"><select class="profile-select" id="profileSel">${names.map(n=>`<option>${n}</option>`).join('')}</select></div><div id="profile"></div>`;$('#profileSel').onchange=renderProfile;renderProfile()}
function renderProfile(){let m=D.managers.find(x=>x.manager==$('#profileSel').value),ss=D.teams.filter(x=>x.manager==m.manager).sort((a,b)=>a.year-b.year),best=[...ss].sort((a,b)=>a.finish-b.finish||b.pf-a.pf)[0],worst=[...ss].sort((a,b)=>b.finish-a.finish||a.pf-b.pf)[0],mg=D.games.filter(g=>g.homeMgr==m.manager||g.awayMgr==m.manager).filter(g=>g.winner!='UNDECIDED'),playoff=mg.filter(g=>!g.regular),pw=0,pl=0;playoff.forEach(g=>{let w=g.winner=='HOME'?g.homeMgr:g.awayMgr;if(w==m.manager)pw++;else pl++});let scores=[];mg.forEach(g=>scores.push({year:g.year,week:g.week,score:g.homeMgr==m.manager?g.homeScore:g.awayScore,opp:g.homeMgr==m.manager?g.awayMgr:g.homeMgr}));let hi=[...scores].sort((a,b)=>b.score-a.score)[0],lo=[...scores].sort((a,b)=>a.score-b.score)[0],rivals=D.managers.filter(x=>x.manager!=m.manager).map(x=>{let gs=pairGames(m.manager,x.manager),w=0,l=0;gs.forEach(g=>{let win=g.winner=='HOME'?g.homeMgr:g.awayMgr;if(win==m.manager)w++;else if(win==x.manager)l++});return {name:x.manager,games:gs.length,w,l}}).sort((a,b)=>b.games-a.games||Math.abs(a.w-a.l)-Math.abs(b.w-b.l)),rival=rivals[0],teamNames=[...new Set([
 ...ss.map(x=>x.team),
 ...TRADES.flatMap(t=>{
   const names=[];
   if(t.managerA===m.manager) names.push(t.teamA);
   if(t.managerB===m.manager) names.push(t.teamB);
   return names;
 })
])];$('#profile').innerHTML=`<div class="panel"><div class="profile-head"><div><div class="profile-name" style="color:${managerColor(m.manager)}">${m.manager}</div><div class="ring-row">${'💍'.repeat(m.titles)||'<span class="small">No championships</span>'}</div></div></div><div class="profile-grid"><div class="profile-metric"><div class="k">Career Record</div><div class="v">${m.wins}-${m.losses}-${m.ties}</div><div class="d">${pct(m.winPct)} win rate</div></div><div class="profile-metric"><div class="k">Playoff Record</div><div class="v">${pw}-${pl}</div><div class="d">${playoff.length} postseason games</div></div><div class="profile-metric"><div class="k">Best Season</div><div class="v">${best.year}</div><div class="d">Finished #${best.finish} · ${best.wins}-${best.losses}</div></div><div class="profile-metric"><div class="k">Primary Rival</div><div class="v">${rival?rival.name:'—'}</div><div class="d">${rival?`${rival.games} meetings · ${rival.w}-${rival.l}`:'No meetings'}</div></div><div class="profile-metric"><div class="k">Highest Score</div><div class="v">${hi?fmt(hi.score,2):'—'}</div><div class="d">${hi?`${hi.year} Week ${hi.week} vs ${hi.opp}`:''}</div></div><div class="profile-metric"><div class="k">Lowest Score</div><div class="v">${lo?fmt(lo.score,2):'—'}</div><div class="d">${lo?`${lo.year} Week ${lo.week} vs ${lo.opp}`:''}</div></div><div class="profile-metric"><div class="k">Average Finish</div><div class="v">${fmt(m.avgFinish,1)}</div><div class="d">${m.playoffs} playoff appearances</div></div><div class="profile-metric"><div class="k">Luck Index</div><div class="v ${m.luck>=0?'pos':'neg'}">${m.luck>0?'+':''}${fmt(m.luck,1)}</div><div class="d">wins vs expected</div></div></div><div class="small"><b>Team names:</b> ${teamNames.join(' · ')}</div>
${m.manager==='Mike O.'?'<div class="small" style="margin-top:8px"><b>Verified 2024 rename:</b> The Hill Has Eyez later appeared in ESPN season data as Tony\'s Little (AR) Friend.</div>':''}</div><h3>Season-by-Season Résumé</h3><div id="profileTable"></div>`;table($('#profileTable'),[['Year',r=>r.year],['Team',r=>r.team],['Record',r=>`${r.wins}-${r.losses}`],['PF',r=>fmt(r.pf,1)],['Finish',r=>r.finish],['All-Play',r=>pct(r.allPlayPct)],['Luck',r=>`<span class="${r.luck>=0?'pos':'neg'}">${r.luck>0?'+':''}${fmt(r.luck,1)}</span>`]],ss)}
function standings(){let rows=[...D.managers];$('#standings').innerHTML=`<h2>All-Time Table</h2><div class="subtitle">The official answer to arguments nobody will ever concede.</div><div id="alltime"></div>`;table($('#alltime'),[['Rank',r=>`<span class="rank">#${rows.indexOf(r)+1}</span>`],['Manager',r=>`<b>${r.manager}</b>`],['Record',r=>`${r.wins}-${r.losses}-${r.ties}`],['Win %',r=>pct(r.winPct)],['Titles',r=>`<span class="gold">${'🏆'.repeat(r.titles)||'—'}</span>`],['Runner-Up',r=>r.runnerUps],['Playoffs',r=>r.playoffs],['Avg Finish',r=>fmt(r.avgFinish,1)],['Legacy',r=>`<b>${fmt(r.legacy,1)}</b>`]],rows)}
function seasons(){const years=D.seasons.map(s=>s.year);$('#seasons').innerHTML=`<div class="ctrls"><select id="seasonSel">${years.map(y=>`<option>${y}</option>`).join('')}</select></div><div id="seasonHead"></div><div id="seasonTable"></div>`;$('#seasonSel').onchange=renderSeason;renderSeason()}
function renderSeason(){let y=+$('#seasonSel').value,s=D.seasons.find(x=>x.year==y),rows=D.teams.filter(x=>x.year==y).sort((a,b)=>a.finish-b.finish),pf=[...rows].sort((a,b)=>b.pf-a.pf)[0],luckiest=[...rows].sort((a,b)=>b.luck-a.luck)[0],unluckiest=[...rows].sort((a,b)=>a.luck-b.luck)[0],sg=D.games.filter(g=>g.year==y&&g.winner!='UNDECIDED'),reg=sg.filter(g=>g.regular),allScores=[];reg.forEach(g=>{allScores.push({manager:g.homeMgr,score:g.homeScore,week:g.week,opp:g.awayMgr});allScores.push({manager:g.awayMgr,score:g.awayScore,week:g.week,opp:g.homeMgr})});let high=[...allScores].sort((a,b)=>b.score-a.score)[0],low=[...allScores].sort((a,b)=>a.score-b.score)[0],close=[...reg].sort((a,b)=>Math.abs(a.homeScore-a.awayScore)-Math.abs(b.homeScore-b.awayScore))[0],blow=[...reg].sort((a,b)=>Math.abs(b.homeScore-b.awayScore)-Math.abs(a.homeScore-a.awayScore))[0];$('#seasonHead').innerHTML=`<div class="cards"><div class="card fade-card"><div class="lbl">Season</div><div class="big">${s.name}</div><div class="note">${s.teams} teams · ${s.regWeeks} regular-season weeks</div></div><div class="card fade-card"><div class="lbl">${s.coChampions?'Co-Champions':'Champion'}</div><div class="big">${(s.coChampions||[s.champion]).map(c=>c.manager).join(' & ')}</div><div class="note">${(s.coChampions||[s.champion]).map(c=>c.team).join(' / ')}${s.championshipNote?'<br>Shared after the canceled Bills–Bengals game.':''}</div></div><div class="card fade-card"><div class="lbl">Points Leader</div><div class="big">${pf.manager}</div><div class="note">${fmt(pf.pf,1)} PF</div></div></div><h3>Season Snapshot</h3><div class="season-awards"><div class="profile-metric"><div class="k">Highest Week</div><div class="v">${high?fmt(high.score,2):'—'}</div><div class="d">${high?`${high.manager} · Week ${high.week}`:''}</div></div><div class="profile-metric"><div class="k">Lowest Week</div><div class="v">${low?fmt(low.score,2):'—'}</div><div class="d">${low?`${low.manager} · Week ${low.week}`:''}</div></div><div class="profile-metric"><div class="k">Luckiest Record</div><div class="v">${luckiest.manager}</div><div class="d">${luckiest.luck>0?'+':''}${fmt(luckiest.luck,1)} wins vs expected</div></div><div class="profile-metric"><div class="k">Unluckiest Record</div><div class="v">${unluckiest.manager}</div><div class="d">${fmt(unluckiest.luck,1)} wins vs expected</div></div><div class="profile-metric"><div class="k">Closest Game</div><div class="v">${close?fmt(Math.abs(close.homeScore-close.awayScore),2):'—'}</div><div class="d">${close?`Week ${close.week}: ${close.homeMgr} vs ${close.awayMgr}`:''}</div></div><div class="profile-metric"><div class="k">Biggest Blowout</div><div class="v">${blow?fmt(Math.abs(blow.homeScore-blow.awayScore),2):'—'}</div><div class="d">${blow?`Week ${blow.week}: ${blow.homeMgr} vs ${blow.awayMgr}`:''}</div></div><div class="profile-metric"><div class="k">Best All-Play Team</div><div class="v">${[...rows].sort((a,b)=>b.allPlayPct-a.allPlayPct)[0].manager}</div><div class="d">${pct([...rows].sort((a,b)=>b.allPlayPct-a.allPlayPct)[0].allPlayPct)}</div></div><div class="profile-metric"><div class="k">Regular-Season Leader</div><div class="v">${[...rows].sort((a,b)=>b.wins-a.wins||b.pf-a.pf)[0].manager}</div><div class="d">${[...rows].sort((a,b)=>b.wins-a.wins||b.pf-a.pf)[0].wins}-${[...rows].sort((a,b)=>b.wins-a.wins||b.pf-a.pf)[0].losses}</div></div></div><h3>Final Standings</h3>`;table($('#seasonTable'),[['Finish',r=>r.finish],['Manager',r=>r.manager],['Team',r=>r.team],['Record',r=>`${r.wins}-${r.losses}`],['PF',r=>fmt(r.pf)],['PA',r=>fmt(r.pa)],['All-Play',r=>pct(r.allPlayPct)],['Expected W',r=>fmt(r.expectedWins,1)],['Luck',r=>`<span class="${r.luck>=0?'pos':'neg'}">${r.luck>0?'+':''}${fmt(r.luck,1)}</span>`]],rows)}
function h2h(){let names=D.managers.map(x=>x.manager).sort();$('#h2h').innerHTML=`<div class="ctrls"><select id="h2hA">${names.map(n=>`<option>${n}</option>`).join('')}</select><select id="h2hB">${names.map(n=>`<option>${n}</option>`).join('')}</select></div><div id="h2hCards"></div><h3>All-Time Rivalry Matrix</h3><div id="matrix" class="h2h-grid"></div>`;$('#h2hB').selectedIndex=1;$('#h2hA').onchange=$('#h2hB').onchange=renderH2H;renderH2H();renderMatrix()}
function pairGames(a,b){return D.games.filter(g=>(g.homeMgr==a&&g.awayMgr==b)||(g.homeMgr==b&&g.awayMgr==a)).filter(g=>g.winner!='UNDECIDED')}
function renderH2H(){let a=$('#h2hA').value,b=$('#h2hB').value,gs=pairGames(a,b),aw=0,bw=0,ap=0,bp=0;gs.forEach(g=>{let ah=g.homeMgr==a;ap+=ah?g.homeScore:g.awayScore;bp+=ah?g.awayScore:g.homeScore;let win=g.winner=='HOME'?g.homeMgr:g.awayMgr;if(win==a)aw++;if(win==b)bw++});$('#h2hCards').innerHTML=a==b?'<div class="panel">Select two different managers.</div>':`<div class="cards"><div class="card fade-card"><div class="lbl">Series Leader</div><div class="big">${aw==bw?'Dead Even':aw>bw?a:b}</div><div class="note">${aw}-${bw}</div></div><div class="card fade-card"><div class="lbl">Meetings</div><div class="big">${gs.length}</div><div class="note">Documented grudges</div></div><div class="card fade-card"><div class="lbl">Total Points</div><div class="big">${fmt(ap,1)}–${fmt(bp,1)}</div><div class="note">${a} vs ${b}</div></div><div class="card fade-card"><div class="lbl">Avg Margin</div><div class="big">${gs.length?fmt(Math.abs(ap-bp)/gs.length,1):'0.0'}</div><div class="note">points per meeting</div></div></div>`}
function renderMatrix(){let ns=D.managers.map(x=>x.manager).sort(),html='<table><thead><tr><th>Manager</th>'+ns.map(n=>`<th>${n.split(' ')[0]}</th>`).join('')+'</tr></thead><tbody>';for(let a of ns){html+=`<tr><td><b>${a}</b></td>`;for(let b of ns){if(a==b){html+='<td>—</td>';continue}let gs=pairGames(a,b),w=0,l=0;gs.forEach(g=>{let win=g.winner=='HOME'?g.homeMgr:g.awayMgr;if(win==a)w++;if(win==b)l++});html+=`<td>${w}-${l}</td>`}html+='</tr>'}html+='</tbody></table>';$('#matrix').innerHTML=html}

function tradeCard(t){
 const e=t.evaluation||{};
 const sideA=e.sideA||{};
 const sideB=e.sideB||{};
 const gradeClass=g=>String(g||'').startsWith('A')?'good':(['D','F'].includes(String(g||'').charAt(0))?'bad':'');
 const assetList=assets=>assets.map(a=>`<li><b>${a.name}</b>${a.position?` <span class="small">· ${a.position}${a.proTeam?` · ${a.proTeam}`:''}</span>`:''}</li>`).join('');
 const winner=e.advantage>=0?t.managerA:t.managerB;
 return `<div class="trade-card fade-card" style="border-left:4px solid ${managerColor(t.managerA)}">
  <div class="trade-date"><b>${t.date}</b><span>${t.season} · Week ${t.tradeWeek||'—'}</span></div>
  <div class="trade-sides">
   <div class="trade-side"><div style="display:flex;justify-content:space-between;gap:10px"><div><div class="mgr">${managerChip(t.managerA)}</div><div class="team">${t.teamA||''}</div></div><span class="trade-grade ${gradeClass(e.gradeA)}">${e.gradeA||'—'}</span></div><ul>${assetList(t.assetsA||[])}</ul><div class="trade-evidence"><b>Est. value:</b> ${Number(sideA.estimatedPlayerValue||0).toFixed(1)} · <b>Post-trade:</b> ${(sideA.postTrade||{}).wins||0}-${(sideA.postTrade||{}).losses||0} · <b>Outcome:</b> ${sideA.outcomeLabel||'—'}</div></div>
   <div class="trade-arrow">⇄</div>
   <div class="trade-side"><div style="display:flex;justify-content:space-between;gap:10px"><div><div class="mgr">${managerChip(t.managerB)}</div><div class="team">${t.teamB||''}</div></div><span class="trade-grade ${gradeClass(e.gradeB)}">${e.gradeB||'—'}</span></div><ul>${assetList(t.assetsB||[])}</ul><div class="trade-evidence"><b>Est. value:</b> ${Number(sideB.estimatedPlayerValue||0).toFixed(1)} · <b>Post-trade:</b> ${(sideB.postTrade||{}).wins||0}-${(sideB.postTrade||{}).losses||0} · <b>Outcome:</b> ${sideB.outcomeLabel||'—'}</div></div>
  </div>
  <div class="trade-eval"><b>Retrospective edge:</b> ${winner} +${Math.abs(Number(e.advantage||0)).toFixed(1)} <span class="trade-confidence">${e.confidence||'Low'} confidence</span></div>
 </div>`;
}
function trades(){
 const all=TRADES;
 const seasons=[...new Set(all.map(t=>t.season))].sort((a,b)=>a-b);
 const mgrs=[...new Set(all.flatMap(t=>[t.managerA,t.managerB]))].sort();
 const activity={},pairs={},players={},seasonCounts={},posAcquired={};
 all.forEach(t=>{
  [t.managerA,t.managerB].forEach(m=>activity[m]=(activity[m]||0)+1);
  const pair=[t.managerA,t.managerB].sort().join('|||');pairs[pair]=(pairs[pair]||0)+1;
  [...t.assetsA,...t.assetsB].forEach(a=>players[a.name]=(players[a.name]||0)+1);
  seasonCounts[t.season]=(seasonCounts[t.season]||0)+1;
  for(const [m,assets] of [[t.managerA,t.assetsA],[t.managerB,t.assetsB]]){
   posAcquired[m]??={};assets.forEach(a=>posAcquired[m][a.position||'Other']=(posAcquired[m][a.position||'Other']||0)+1);
  }
 });
 const activityRows=Object.entries(activity).sort((a,b)=>b[1]-a[1]);
 const pairRows=Object.entries(pairs).sort((a,b)=>b[1]-a[1]);
 const playerRows=Object.entries(players).sort((a,b)=>b[1]-a[1]);
 const busiestSeason=Object.entries(seasonCounts).sort((a,b)=>b[1]-a[1])[0];
 const biggest=[...all].sort((a,b)=>(b.assetsA.length+b.assetsB.length)-(a.assetsA.length+a.assetsB.length))[0];
 const avgAssets=all.reduce((n,t)=>n+t.assetsA.length+t.assetsB.length,0)/all.length;
 const graded=[...all].sort((a,b)=>Math.abs(b.evaluation.advantage)-Math.abs(a.evaluation.advantage));
 const best=graded.slice(0,10);
 const sideAdv=(t,m)=>m===t.managerA?t.evaluation.advantage:-t.evaluation.advantage;
 const sideObj=(t,m)=>m===t.managerA?t.evaluation.sideA:t.evaluation.sideB;
 const sideGrade=(t,m)=>m===t.managerA?t.evaluation.gradeA:t.evaluation.gradeB;
 const received=(t,m)=>m===t.managerA?t.assetsA:t.assetsB;
 const sent=(t,m)=>m===t.managerA?t.assetsB:t.assetsA;
 const other=(t,m)=>m===t.managerA?t.managerB:t.managerA;
 const managerTrades=m=>all.filter(t=>t.managerA===m||t.managerB===m);
 const tradeResult=(t,m)=>{const a=sideAdv(t,m);return a>15?'Win':a<-15?'Loss':'Push'};
 const gmStats=m=>{
  const ts=managerTrades(m),advs=ts.map(t=>sideAdv(t,m)),wins=ts.filter(t=>tradeResult(t,m)==='Win').length,losses=ts.filter(t=>tradeResult(t,m)==='Loss').length,pushes=ts.length-wins-losses;
  const partners={};ts.forEach(t=>partners[other(t,m)]=(partners[other(t,m)]||0)+1);
  const fav=Object.entries(partners).sort((a,b)=>b[1]-a[1])[0]||['—',0];
  const bestT=[...ts].sort((a,b)=>sideAdv(b,m)-sideAdv(a,m))[0],worstT=[...ts].sort((a,b)=>sideAdv(a,m)-sideAdv(b,m))[0];
  const avg=advs.length?advs.reduce((a,b)=>a+b,0)/advs.length:0;
  const winRate=ts.length?wins/ts.length:0;
  const deadline=ts.filter(t=>t.tradeWeek>=10).length;
  const gmScore=Math.max(0,Math.min(100,50+avg*.12+(winRate-.5)*35+Math.min(ts.length,20)*.7));
  const topPos=Object.entries(posAcquired[m]||{}).sort((a,b)=>b[1]-a[1])[0]||['—',0];
  const buySignal=ts.length?100*ts.filter(t=>sideAdv(t,m)>15&&sideObj(t,m).estimatedPlayerValue<(m===t.managerA?t.evaluation.sideB.estimatedPlayerValue:t.evaluation.sideA.estimatedPlayerValue)).length/ts.length:0;
  const sellSignal=ts.length?100*ts.filter(t=>sideAdv(t,m)>15&&sent(t,m).reduce((n,a)=>n+(a.estimatedRemainingPoints||0),0)<received(t,m).reduce((n,a)=>n+(a.estimatedRemainingPoints||0),0)).length/ts.length:0;
  return {ts,wins,losses,pushes,fav,bestT,worstT,avg,winRate,deadline,gmScore,topPos,buySignal,sellSignal};
 };
 const networkW=720,networkH=470,cx=networkW/2,cy=networkH/2,r=180;
 const nodes=mgrs.map((m,i)=>({m,x:cx+r*Math.cos((2*Math.PI*i/mgrs.length)-Math.PI/2),y:cy+r*Math.sin((2*Math.PI*i/mgrs.length)-Math.PI/2),n:activity[m]}));
 const nodeMap=Object.fromEntries(nodes.map(n=>[n.m,n]));
 const edges=pairRows.map(([p,n])=>{const [a,b]=p.split('|||');return {a,b,n}});
 const networkSvg=`<svg class="trade-network-svg" viewBox="0 0 ${networkW} ${networkH}" role="img" aria-label="Trade network">${edges.map(e=>{const a=nodeMap[e.a],b=nodeMap[e.b];return `<line class="trade-network-edge" data-a="${e.a}" data-b="${e.b}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke-width="${1.5+e.n*1.5}"><title>${e.a} and ${e.b}: ${e.n} trades</title></line>`}).join('')}${nodes.map(n=>`<g class="trade-network-node" data-manager="${n.m}" transform="translate(${n.x},${n.y})"><circle r="${18+Math.min(n.n,25)*.55}" style="fill:${managerColor(n.m)}22;stroke:${managerColor(n.m)}"></circle><text y="4">${n.m.split(' ')[0]}</text><title>${n.m}: ${n.n} trades</title></g>`).join('')}</svg>`;
 const champTrades=all.filter(t=>{
  const a=t.evaluation.sideA.outcomeLabel,b=t.evaluation.sideB.outcomeLabel;
  return a==='Champion'||b==='Champion'||a==='Runner-up'||b==='Runner-up';
 }).sort((a,b)=>Math.max(b.evaluation.sideA.outcomeBonus,b.evaluation.sideB.outcomeBonus)-Math.max(a.evaluation.sideA.outcomeBonus,a.evaluation.sideB.outcomeBonus)||Math.abs(b.evaluation.advantage)-Math.abs(a.evaluation.advantage)).slice(0,6);
 $('#trades').innerHTML=`${pageHero('Front Office','Trade Center','Every confirmed trade, retrospective outcome grade, GM profile and player journey in SDFF history.',[{k:'Confirmed Trades',v:all.length},{k:'Most Active',v:activityRows[0][0]},{k:'Most Traded Player',v:playerRows[0][0]},{k:'Busiest Season',v:busiestSeason[0]}])}<h2 style="display:none">Trades</h2><div class="subtitle">Every confirmed SDFF / Dlime Sickers trade, with searchable history, retrospective grades and front-office analytics.</div>
 <div class="trade-summary">
  <div class="trade-card fade-card"><div class="k">Completed Trades</div><div class="v">${all.length}</div><div class="d">2021–2025</div></div>
  <div class="trade-card fade-card"><div class="k">Most Active Trader</div><div class="v">${activityRows[0][0]}</div><div class="d">${activityRows[0][1]} trades</div></div>
  <div class="trade-card fade-card"><div class="k">Favorite Trade Pair</div><div class="v">${pairRows[0][1]}</div><div class="d">${pairRows[0][0].split('|||').join(' ↔ ')}</div></div>
  <div class="trade-card fade-card"><div class="k">Busiest Season</div><div class="v">${busiestSeason[0]}</div><div class="d">${busiestSeason[1]} trades</div></div>
  <div class="trade-card fade-card"><div class="k">Average Deal Size</div><div class="v">${avgAssets.toFixed(1)}</div><div class="d">players exchanged</div></div>
  <div class="trade-card fade-card"><div class="k">Most Traded Player</div><div class="v">${playerRows[0][0]}</div><div class="d">${playerRows[0][1]} appearances</div></div>
 </div>
 <div class="trade-grid2">
  <div class="panel"><h3>Most Active Traders</h3><div class="trade-bars">${activityRows.map(([m,n])=>`<div class="trade-bar"><div>${m}</div><div class="trade-track"><div class="trade-fill" style="width:${100*n/activityRows[0][1]}%"></div></div><b>${n}</b></div>`).join('')}</div></div>
  <div class="panel"><h3>Most Frequent Trade Partners</h3><div class="trade-bars">${pairRows.slice(0,10).map(([p,n])=>`<div class="trade-bar"><div>${p.split('|||').join(' ↔ ')}</div><div class="trade-track"><div class="trade-fill" style="width:${100*n/pairRows[0][1]}%"></div></div><b>${n}</b></div>`).join('')}</div></div>
 </div>
 <h3 class="trade-hof">Trade Hall of Fame</h3>
 <div class="award-grid">
  ${award('📦','Biggest Blockbuster',`${biggest.managerA} ↔ ${biggest.managerB}`,`${biggest.assetsA.length+biggest.assetsB.length} players · ${biggest.date}`,`${biggest.assetsA.map(a=>a.name).join(', ')} for ${biggest.assetsB.map(a=>a.name).join(', ')}.`)}
  ${award('🔁','Most Traded Player',playerRows[0][0],`${playerRows[0][1]} appearances`,`The player appearing most often across confirmed SDFF trades.`)}
  ${award('☎️','Most Active Trader',activityRows[0][0],`${activityRows[0][1]} completed trades`,`No manager appeared in more accepted trade confirmations.`)}
  ${award('🤝','Favorite Trade Partners',pairRows[0][0].split('|||').join(' & '),`${pairRows[0][1]} trades together`,`The most frequently repeated trading relationship in league history.`)}
 </div>
 <div class="trade-section-grid">
  <div class="panel trade-network-wrap"><div class="gm-profile-head"><div><h3>Interactive Trade Network</h3><div class="small">Larger circles indicate more trades. Thicker lines indicate more trades between two managers.</div></div><select id="networkManager"><option value="">All managers</option>${mgrs.map(m=>`<option>${m}</option>`).join('')}</select></div>${networkSvg}<div class="network-legend">Select or click a manager to isolate their trade relationships.</div></div>
  <div class="panel"><div class="gm-profile-head"><div><h3>GM Profile</h3><div class="small">Front-office results based on documented trade outcomes.</div></div><select id="gmManager">${mgrs.map(m=>`<option>${m}</option>`).join('')}</select></div><div id="gmProfile"></div></div>
 </div>
 <div class="trade-section-grid">
  <div class="panel best-trader-panel"><div class="gm-profile-head"><div><h3>Best Trader Comparison</h3><div class="small">Compare managers using retrospective trade outcomes, win rate, average advantage and trade volume.</div></div><select id="traderMetric"><option value="gmScore">Overall GM Rating</option><option value="winRate">Trade Win Rate</option><option value="avg">Average Outcome Advantage</option><option value="volume">Trade Volume</option></select></div><div id="bestTraderSummary"></div><div id="bestTraderChart" class="best-trader-chart"></div></div>
  <div class="panel"><h3>Buy-Low / Sell-High Signals</h3><div class="trade-method">These are retrospective signals, not reconstructed market values. A signal counts when a manager won the outcome grade despite acquiring the lower estimated incoming player value, or converted outgoing value into a stronger incoming result.</div><div id="tradeSignals" class="signal-grid"></div></div>
 </div>
 <div class="panel"><h3>Championship Butterfly Effects</h3><div class="small">Trades involving a manager who later won, shared, or reached the championship in that season. This shows sequence and outcome, not proof of causation.</div><div class="butterfly-list">${champTrades.map(t=>{const aChamp=t.evaluation.sideA.outcomeLabel,bChamp=t.evaluation.sideB.outcomeLabel,focus=aChamp==='Champion'||aChamp==='Runner-up'?t.managerA:t.managerB,side=sideObj(t,focus),assets=received(t,focus).map(a=>a.name).join(', ');return `<div class="butterfly-card"><div class="butterfly-flow"><div class="butterfly-step"><b>${t.date}</b><br><span class="small">${focus} acquired ${assets}</span></div><div class="butterfly-arrow">→</div><div class="butterfly-step"><b>${side.postTrade.wins}-${side.postTrade.losses}</b><br><span class="small">post-trade record</span></div><div class="butterfly-arrow">→</div><div class="butterfly-step"><b>${side.outcomeLabel}</b><br><span class="small">${t.season} outcome · grade ${sideGrade(t,focus)}</span></div></div></div>`}).join('')}</div></div>
 <div class="panel"><h3>How the Grades Work</h3><div class="trade-method">Each side receives an outcome score built from three documented inputs: <b>estimated remaining-season player value</b> using ESPN season points and the share of the schedule remaining when the trade occurred; <b>the acquiring manager’s post-trade team performance</b>; and <b>playoff/championship outcome</b>. These are evidence-based retrospective grades, not claims about market value on the date of the trade. Historical team names are mapped to verified managers, including The Hill Has Eyez → Mike O. in 2024. Missing ESPN player records reduce the confidence level shown for that deal.</div></div>
 <h3>Best and Worst Trade Outcomes <span class="rank-detail-hint">Click any trade to see the evidence</span></h3><div class="tablewrap"><table class="trade-rank-table"><thead><tr><th>#</th><th>Date</th><th>Trade</th><th>Grades</th><th>Advantage</th><th>Confidence</th></tr></thead><tbody>${best.map((t,i)=>{
  const e=t.evaluation,winner=e.advantage>=0?t.managerA:t.managerB,winnerSide=e.advantage>=0?'A':'B';
  const assetLine=a=>`${a.name}${a.position?` · ${a.position}`:''}${a.proTeam?` (${a.proTeam})`:''}${a.seasonPoints!=null?` · ${Number(a.seasonPoints).toFixed(1)} season pts`:' · scoring unavailable'}`;
  const detailSide=(side,mgr,team,assets,grade)=>`<div class="rank-detail-side ${winnerSide===side?'winner':'loser'}"><div class="rank-detail-manager"><div><div class="name">${mgr}</div><div class="small">${team}</div></div><div class="rank-detail-grade">${grade}</div></div><ul class="rank-detail-assets">${assets.map(a=>`<li>${assetLine(a)}</li>`).join('')}</ul></div>`;
  return `<tr class="trade-rank-row" data-rank="${i}" tabindex="0" role="button" aria-expanded="false"><td>${i+1}</td><td>${t.date}</td><td>${t.managerA} ↔ ${t.managerB}</td><td>${e.gradeA} / ${e.gradeB}</td><td>${winner} +${Math.abs(e.advantage).toFixed(1)}</td><td>${e.confidence}</td></tr><tr class="trade-rank-detail" data-rank-detail="${i}"><td colspan="6"><div class="rank-detail-wrap"><div class="rank-detail-top">${detailSide('A',t.managerA,t.teamA,t.assetsA,e.gradeA)}<div class="rank-detail-arrow">⇄</div>${detailSide('B',t.managerB,t.teamB,t.assetsB,e.gradeB)}</div><div class="rank-detail-metrics"><div class="rank-detail-metric"><div class="k">${t.managerA} est. player value</div><div class="v">${e.sideA.estimatedPlayerValue.toFixed(1)}</div></div><div class="rank-detail-metric"><div class="k">${t.managerB} est. player value</div><div class="v">${e.sideB.estimatedPlayerValue.toFixed(1)}</div></div><div class="rank-detail-metric"><div class="k">Post-trade records</div><div class="v">${t.managerA} ${e.sideA.postTrade.wins}-${e.sideA.postTrade.losses} · ${t.managerB} ${e.sideB.postTrade.wins}-${e.sideB.postTrade.losses}</div></div><div class="rank-detail-metric"><div class="k">Season outcomes</div><div class="v">${t.managerA}: ${e.sideA.outcomeLabel}<br>${t.managerB}: ${e.sideB.outcomeLabel}</div></div><div class="rank-detail-metric"><div class="k">Outcome advantage</div><div class="v">${winner} +${Math.abs(e.advantage).toFixed(1)}</div></div><div class="rank-detail-metric"><div class="k">Confidence</div><div class="v">${e.confidence}</div></div><div class="rank-detail-metric"><div class="k">Player-data coverage</div><div class="v">${t.managerA}: ${e.sideA.knownAssets}/${e.sideA.totalAssets}<br>${t.managerB}: ${e.sideB.knownAssets}/${e.sideB.totalAssets}</div></div><div class="rank-detail-metric"><div class="k">Trade timing</div><div class="v">${t.season} · Week ${t.tradeWeek}</div></div></div><div class="rank-detail-note"><b>How to read this:</b> the grades combine estimated remaining-season player production, the acquiring manager’s post-trade performance, and playoff or championship outcome. Lower data coverage reduces confidence.</div></div></td></tr>`;
 }).join('')}</tbody></table></div>
 <h3>Trade Timeline</h3>
 <div class="ctrls"><select id="tradeYear"><option value="">All seasons</option>${seasons.map(y=>`<option>${y}</option>`).join('')}</select><select id="tradeManager"><option value="">All managers</option>${mgrs.map(m=>`<option>${m}</option>`).join('')}</select><input id="tradeSearch" type="text" placeholder="Search player or team"></div><div id="tradeList"></div>`;
 const renderGM=()=>{
  const m=$('#gmManager').value,s=gmStats(m),best=s.bestT,worst=s.worstT;
  $('#gmProfile').innerHTML=`<div class="gm-profile-head"><div><div class="profile-name" style="color:${managerColor(m)}">${m}</div><div class="small">${s.ts.length} completed trades</div></div><div><div class="small">GM Rating</div><div class="gm-score">${s.gmScore.toFixed(0)}</div></div></div><div class="gm-metrics"><div class="gm-metric"><div class="k">Trade Record</div><div class="v">${s.wins}-${s.losses}-${s.pushes}</div></div><div class="gm-metric"><div class="k">Avg Outcome Advantage</div><div class="v ${s.avg>=0?'pos':'neg'}">${s.avg>0?'+':''}${s.avg.toFixed(1)}</div></div><div class="gm-metric"><div class="k">Favorite Partner</div><div class="v">${s.fav[0]}</div><div class="small">${s.fav[1]} trades</div></div><div class="gm-metric"><div class="k">Most Acquired Position</div><div class="v">${s.topPos[0]}</div><div class="small">${s.topPos[1]} players</div></div><div class="gm-metric"><div class="k">Deadline Deals</div><div class="v">${s.deadline}</div></div><div class="gm-metric"><div class="k">Win Rate</div><div class="v">${pct(s.winRate)}</div></div></div><div class="gm-list"><b>Best outcome:</b> ${best?`${best.date} vs ${other(best,m)} · ${sideGrade(best,m)} · ${sideAdv(best,m)>0?'+':''}${sideAdv(best,m).toFixed(1)}`:'—'}<br><b>Biggest regret:</b> ${worst?`${worst.date} vs ${other(worst,m)} · ${sideGrade(worst,m)} · ${sideAdv(worst,m).toFixed(1)}`:'—'}</div>`;
 };
 const renderSignals=()=>{
  const stats=mgrs.map(m=>({m,...gmStats(m)}));
  const buy=[...stats].sort((a,b)=>b.buySignal-a.buySignal)[0],sell=[...stats].sort((a,b)=>b.sellSignal-a.sellSignal)[0],value=[...stats].sort((a,b)=>b.avg-a.avg)[0],deadline=[...stats].sort((a,b)=>b.deadline-a.deadline)[0];
  $('#tradeSignals').innerHTML=`<div class="signal-card"><div class="label">Strongest Buy-Low Signal</div><div class="name">${buy.m}</div><div class="score">${buy.buySignal.toFixed(0)}%</div><div class="small">Share of trades won after receiving the lower estimated incoming value.</div></div><div class="signal-card"><div class="label">Strongest Sell-High Signal</div><div class="name">${sell.m}</div><div class="score">${sell.sellSignal.toFixed(0)}%</div><div class="small">Share of trades converting outgoing estimated value into a stronger incoming result.</div></div><div class="signal-card"><div class="label">Best Avg Trade Outcome</div><div class="name">${value.m}</div><div class="score">${value.avg>0?'+':''}${value.avg.toFixed(1)}</div><div class="small">Average retrospective advantage across all completed trades.</div></div><div class="signal-card"><div class="label">Deadline Dealer</div><div class="name">${deadline.m}</div><div class="score">${deadline.deadline}</div><div class="small">Trades completed in Week 10 or later.</div></div>`;
 };
 const renderBestTrader=()=>{
  const metric=$('#traderMetric').value;
  const rows=mgrs.map(m=>{
    const s=gmStats(m);
    return {
      manager:m,
      gmScore:s.gmScore,
      winRate:s.winRate*100,
      avg:s.avg,
      volume:s.ts.length,
      wins:s.wins,
      losses:s.losses,
      pushes:s.pushes,
      favorite:s.fav[0]
    };
  });

  const config={
    gmScore:{label:'GM Rating',suffix:'',decimals:0,positive:true},
    winRate:{label:'Trade Win Rate',suffix:'%',decimals:0,positive:true},
    avg:{label:'Average Outcome Advantage',suffix:'',decimals:1,positive:true},
    volume:{label:'Completed Trades',suffix:'',decimals:0,positive:true}
  }[metric];

  rows.sort((a,b)=>b[metric]-a[metric]);
  const max=Math.max(...rows.map(r=>Math.abs(r[metric])),1);
  const leader=rows[0];

  $('#bestTraderSummary').innerHTML=`
    <div class="best-trader-leader">
      <div>
        <div class="best-trader-kicker">Current Leader</div>
        <div class="best-trader-name">${leader.manager}</div>
        <div class="small">${leader.wins}-${leader.losses}-${leader.pushes} trade record · ${leader.volume} completed trades</div>
      </div>
      <div class="best-trader-score">${leader[metric].toFixed(config.decimals)}${config.suffix}</div>
    </div>`;

  $('#bestTraderChart').innerHTML=rows.map((r,i)=>{
    const raw=r[metric];
    const width=Math.max(4,Math.abs(raw)/max*100);
    const value=`${raw>0&&metric==='avg'?'+':''}${raw.toFixed(config.decimals)}${config.suffix}`;
    return `<div class="trader-rank-row">
      <div class="trader-rank-number">${i+1}</div>
      <div class="trader-rank-info">
        <div class="trader-rank-name">${r.manager}</div>
        <div class="trader-rank-meta">${r.wins}-${r.losses}-${r.pushes} · ${r.volume} trades · favorite partner: ${r.favorite}</div>
        <div class="trader-rank-track">
          <div class="trader-rank-fill" style="width:${width}%;background:${managerColor(r.manager)}"></div>
        </div>
      </div>
      <div class="trader-rank-value">${value}</div>
    </div>`;
  }).join('');
};
 const setNetwork=m=>{
  document.querySelectorAll('.trade-network-node').forEach(n=>n.classList.toggle('active',!m||n.dataset.manager===m));
  document.querySelectorAll('.trade-network-edge').forEach(e=>e.classList.toggle('active',!m||e.dataset.a===m||e.dataset.b===m));
 };
 $('#networkManager').onchange=e=>setNetwork(e.target.value);
 document.querySelectorAll('.trade-network-node').forEach(n=>n.addEventListener('click',()=>{$('#networkManager').value=n.dataset.manager;setNetwork(n.dataset.manager)}));
 $('#gmManager').onchange=renderGM;$('#traderMetric').onchange=renderBestTrader;
 renderGM();renderSignals();renderBestTrader();setNetwork('');
 const render=()=>{let y=$('#tradeYear').value,m=$('#tradeManager').value,q=$('#tradeSearch').value.toLowerCase().trim();let rows=all.filter(t=>(!y||String(t.season)===y)&&(!m||t.managerA===m||t.managerB===m)&&(!q||JSON.stringify(t).toLowerCase().includes(q)));$('#tradeList').innerHTML=rows.length?rows.slice().reverse().map(t=>tradeCard(t)).join(''):'<div class="panel">No matching trades.</div>'};
 $('#tradeYear').onchange=render;$('#tradeManager').onchange=render;$('#tradeSearch').oninput=render;render();
 document.querySelectorAll('.trade-rank-row').forEach(row=>{const toggle=()=>{const id=row.dataset.rank,detail=document.querySelector(`[data-rank-detail="${id}"]`),open=!row.classList.contains('open');row.classList.toggle('open',open);detail.classList.toggle('open',open);row.setAttribute('aria-expanded',String(open))};row.addEventListener('click',toggle);row.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();toggle()}})});
}
function records(){let r=D.records,b=r.blowout,c=r.closest;$('#records').innerHTML=`<div class="award-grid">${award('🚀','Highest Weekly Score',r.high.manager,`${fmt(r.high.score,2)} · ${r.high.year} Week ${r.high.week}`)}${award('🧊','Lowest Weekly Score',r.low.manager,`${fmt(r.low.score,2)} · ${r.low.year} Week ${r.low.week}`)}${award('💥','Biggest Beatdown',b.homeScore>b.awayScore?b.homeMgr:b.awayMgr,`${fmt(Math.abs(b.homeScore-b.awayScore),2)}-point margin · ${b.year} Week ${b.week}`)}${award('📏','Photo Finish',c.homeScore>c.awayScore?c.homeMgr:c.awayMgr,`${fmt(Math.abs(c.homeScore-c.awayScore),2)}-point margin · ${c.year} Week ${c.week}`)}</div><h3>Top Single-Season Performances</h3><div id="seasonRecords"></div>`;let rows=[...D.teams].sort((a,b)=>b.pf-a.pf).slice(0,15);table($('#seasonRecords'),[['Manager',r=>r.manager],['Season',r=>r.year],['Team',r=>r.team],['Record',r=>`${r.wins}-${r.losses}`],['Points For',r=>fmt(r.pf,1)],['Finish',r=>r.finish]],rows)}
function luck(){let rows=[...D.managers].sort((a,b)=>b.luck-a.luck),allplay=[...D.teams].sort((a,b)=>b.allPlayPct-a.allPlayPct).slice(0,15);$('#luck').innerHTML=`<div class="grid2"><div><h2>Career Luck Index</h2><div class="panel" id="luckBars"></div></div><div><h2>Translation for Normal People</h2><div class="panel"><p><b>Expected wins</b> measure how often your weekly score would have beaten the rest of the league.</p><p><b>Positive luck</b> means your schedule helped. Your schedule was more favorable than your weekly scoring would suggest.</p><p><b>Negative luck</b> means you scored well and still lost. Your schedule was less favorable than your weekly scoring would suggest.</p></div></div></div><h3>Best All-Play Seasons</h3><div id="allplayTable"></div>`;let max=Math.max(...rows.map(x=>Math.abs(x.luck)),1);$('#luckBars').innerHTML=rows.map(r=>`<div class="barrow"><div>${r.manager}</div><div class="track"><div class="fill" style="width:${100*Math.abs(r.luck)/max}%"></div></div><div class="${r.luck>=0?'pos':'neg'}">${r.luck>0?'+':''}${fmt(r.luck,1)}</div></div>`).join('');table($('#allplayTable'),[['Manager',r=>r.manager],['Season',r=>r.year],['Record',r=>`${r.wins}-${r.losses}`],['All-Play %',r=>pct(r.allPlayPct)],['Expected Wins',r=>fmt(r.expectedWins,1)],['Actual Wins',r=>r.wins],['Luck',r=>`<span class="${r.luck>=0?'pos':'neg'}">${r.luck>0?'+':''}${fmt(r.luck,1)}</span>`]],allplay)}
function superlatives(){
 const ts=D.teams, ms=D.managers, rg=D.games.filter(g=>g.regular&&g.winner!='UNDECIDED');
 const best=[...ts].sort((a,b)=>b.wins-a.wins||b.pf-a.pf)[0], worst=[...ts].sort((a,b)=>a.wins-b.wins||a.pf-b.pf)[0];
 const choke=[...ts].filter(x=>x.seed<=2&&x.finish>1).sort((a,b)=>(b.finish-b.seed)-(a.finish-a.seed))[0];
 const cinderella=[...ts].filter(x=>x.finish==1).sort((a,b)=>b.seed-a.seed)[0];
 const pfKing=[...ms].sort((a,b)=>b.pf-a.pf)[0], runner=[...ms].sort((a,b)=>b.runnerUps-a.runnerUps)[0];
 const luckiest=[...ms].sort((a,b)=>b.luck-a.luck)[0], unluckiest=[...ms].sort((a,b)=>a.luck-b.luck)[0];
 const goat=[...ms].sort((a,b)=>b.legacy-a.legacy)[0], dynasty=[...ms].sort((a,b)=>b.titles-a.titles||b.runnerUps-a.runnerUps)[0];
 const winKing=[...ms].sort((a,b)=>b.winPct-a.winPct)[0];
 const playoff={};ts.forEach(t=>{if(t.finish<=6)playoff[t.manager]=(playoff[t.manager]||0)+1});const playoffKing=Object.entries(playoff).sort((a,b)=>b[1]-a[1])[0];
 const margin=[...ts].map(t=>({...t,margin:(t.pf-t.pa)/(t.wins+t.losses+t.ties||1)})).sort((a,b)=>b.margin-a.margin)[0];
 const wall=[...ts].sort((a,b)=>a.pa-b.pa)[0];
 const yoy=[];for(const m of new Set(ts.map(t=>t.manager))){const a=ts.filter(t=>t.manager==m).sort((x,y)=>x.year-y.year);for(let i=1;i<a.length;i++)yoy.push({m,year:a[i].year,delta:a[i-1].finish-a[i].finish,from:a[i-1].finish,to:a[i].finish})}const improve=[...yoy].sort((a,b)=>b.delta-a.delta)[0], fall=[...yoy].sort((a,b)=>a.delta-b.delta)[0];
 const byMgr={};rg.forEach(g=>{for(const [m,s] of [[g.homeMgr,g.homeScore],[g.awayMgr,g.awayScore]])(byMgr[m]??=[]).push(s)});
 const sd=a=>{const x=a.reduce((q,v)=>q+v,0)/a.length;return Math.sqrt(a.reduce((q,v)=>q+(v-x)**2,0)/a.length)};
 const variance=Object.entries(byMgr).map(([m,a])=>({m,sd:sd(a)}));const steady=[...variance].sort((a,b)=>a.sd-b.sd)[0], boom=[...variance].sort((a,b)=>b.sd-a.sd)[0];
 const stretches=[];for(const [m,a0] of Object.entries(byMgr)){const a=rg.flatMap(g=>[[g.homeMgr,g.homeScore,g.year,g.week],[g.awayMgr,g.awayScore,g.year,g.week]]).filter(x=>x[0]==m).sort((x,y)=>x[2]-y[2]||x[3]-y[3]);for(let i=0;i<=a.length-4;i++){if(a[i][2]==a[i+3][2])stretches.push({m,year:a[i][2],start:a[i][3],avg:a.slice(i,i+4).reduce((q,x)=>q+x[1],0)/4})}}const hot=[...stretches].sort((a,b)=>b.avg-a.avg)[0], cold=[...stretches].sort((a,b)=>a.avg-b.avg)[0];
 const champByYear={};D.seasons.forEach(s=>(s.coChampions||[s.champion]).forEach(c=>(champByYear[s.year]??=[]).push(c.manager)));const giant={};rg.forEach(g=>{const win=g.winner=='HOME'?g.homeMgr:g.awayMgr;if((champByYear[g.year]||[]).includes(g.homeMgr)||(champByYear[g.year]||[]).includes(g.awayMgr)){if(!(champByYear[g.year]||[]).includes(win))giant[win]=(giant[win]||0)+1}});const killer=Object.entries(giant).sort((a,b)=>b[1]-a[1])[0]||['—',0];
 const allplay=[...ts].sort((a,b)=>b.allPlayPct-a.allPlayPct)[0];
 const finishes={};ts.forEach(t=>(finishes[t.manager]??=[]).push(t.finish));const consistent=Object.entries(finishes).map(([m,a])=>({m,sd:sd(a),avg:a.reduce((q,v)=>q+v,0)/a.length})).sort((a,b)=>a.sd-b.sd)[0];
 const onehit=Object.entries(finishes).filter(x=>x[1].length>=3).map(([m,a])=>({m,best:Math.min(...a),other:(a.reduce((q,v)=>q+v,0)-Math.min(...a))/(a.length-1)})).sort((a,b)=>(b.other-b.best)-(a.other-a.best))[0];
 const cards=[
 ['🧠','Best Regular Season',best.manager,`${best.year} · ${best.wins}-${best.losses}`,`Scored ${fmt(best.pf,1)} points and entered the postseason as the No. ${best.seed} seed.`],
 ['🗑️','Season from Hell',worst.manager,`${worst.year} · ${worst.wins}-${worst.losses}`,`Finished ${worst.finish}th with ${fmt(worst.pf,1)} points for.`],
 ['🤢','Biggest Choke',choke.manager,`${choke.year}: Seed ${choke.seed}, finished ${choke.finish}`,`A top-two regular-season seed that fell ${choke.finish-choke.seed} places by the final standings.`],
 ['🧚','Cinderella Run',cinderella.manager,`${cinderella.year}: Seed ${cinderella.seed} to champion`,`Won the title from the lowest championship seed in league history.`],
 ['🏭','Career Point Factory',pfKing.manager,`${fmt(pfKing.pf,0)} career PF`,`The highest cumulative regular-season scoring total in the dataset.`],
 ['🥈','Always the Bridesmaid',runner.manager,`${runner.runnerUps} runner-up finish${runner.runnerUps==1?'':'es'}`,`The most second-place finishes across completed seasons.`],
 ['🎰','Schedule Merchant',luckiest.manager,`${luckiest.luck>0?'+':''}${fmt(luckiest.luck,1)} career wins vs expected`,`Actual wins exceeded all-play expected wins by the largest margin.`],
 ['🧂','Fantasy Football Victim',unluckiest.manager,`${fmt(unluckiest.luck,1)} career wins vs expected`,`No manager finished further below the wins suggested by weekly all-play results.`],
 ['🐐','League GOAT',goat.manager,`${fmt(goat.legacy,1)} Legacy Score`,`Highest combined score for titles, runner-up finishes, winning percentage, points and average finish.`],
 ['👑','Dynasty Leader',dynasty.manager,`${dynasty.titles} title${dynasty.titles==1?'':'s'} · ${dynasty.runnerUps} runner-up${dynasty.runnerUps==1?'':'s'}`,`The strongest championship résumé in league history.`],
 ['📈','Career Win % Leader',winKing.manager,pct(winKing.winPct),`${winKing.wins}-${winKing.losses}-${winKing.ties} across all completed regular seasons.`],
 ['🚪','Playoff Regular',playoffKing[0],`${playoffKing[1]} top-six finishes`,`The most seasons finishing in the league's top half.`],
 ['🚂','Steamroller',margin.manager,`${margin.year} · +${fmt(margin.margin,1)} points/game`,`The largest season-long average scoring margin over opponents.`],
 ['🧱','Brick Wall',wall.manager,`${wall.year} · ${fmt(wall.pa,1)} PA`,`The fewest regular-season points allowed in any team-season.`],
 ['📈','Late Bloomer',improve.m,`${improve.year}: ${improve.from}th to ${improve.to}th`,`The largest year-over-year improvement in final finish.`],
 ['📉','Free Fall',fall.m,`${fall.year}: ${fall.from}th to ${fall.to}th`,`The largest year-over-year decline in final finish.`],
 ['🎯','Mr. Consistent',steady.m,`${fmt(steady.sd,1)} weekly-point SD`,`The lowest week-to-week scoring volatility among managers with full histories.`],
 ['🎲','Boom or Bust',boom.m,`${fmt(boom.sd,1)} weekly-point SD`,`The widest week-to-week scoring swings in league history.`],
 ['🔥','Hottest Four Weeks',hot.m,`${hot.year} Weeks ${hot.start}-${hot.start+3} · ${fmt(hot.avg,1)} avg`,`The highest four-week scoring average by one manager in a single season.`],
 ['❄️','Coldest Four Weeks',cold.m,`${cold.year} Weeks ${cold.start}-${cold.start+3} · ${fmt(cold.avg,1)} avg`,`The lowest four-week scoring average by one manager in a single season.`],
 ['⚡','Giant Killer',killer[0],`${killer[1]} win${killer[1]==1?'':'s'} over eventual champs`,`Most regular-season wins against a manager who later won or shared that season's title.`],
 ['💯','All-Play Apex',allplay.manager,`${allplay.year} · ${pct(allplay.allPlayPct)}`,`Would have beaten ${pct(allplay.allPlayPct)} of all possible weekly opponents.`],
 ['🪨','Steadiest Finisher',consistent.m,`${fmt(consistent.sd,1)} finish-position SD`,`The smallest variation in year-end finishing position.`],
 ['👻','One-Hit Wonder',onehit.m,`Best: ${onehit.best} · Other-year avg: ${fmt(onehit.other,1)}`,`The largest gap between one standout finish and the manager's remaining seasons.`]
 ];
 $('#superlatives').innerHTML=`<h2>League Superlatives</h2><div class="subtitle">Notable performances, résumés and statistical extremes.</div><div class="section-note">Select any card for the underlying context. All awards use completed 2021–2025 data.</div><div class="award-grid">${cards.map(x=>award(...x)).join('')}</div>`
}
function renderDraft(){let y=+$('#draftYear').value,m=$('#draftMgr').value,rows=D.drafts.filter(x=>x.year==y&&(!m||x.manager==m)).sort((a,b)=>a.overall-b.overall);$('#draftGrid').innerHTML=rows.map(p=>`<div class="pick"><div class="pk">#${p.overall} · Round ${p.round}.${p.roundPick}</div><div class="pl">${p.player}</div><div class="mg">${p.manager}${p.keeper?' · Keeper':''}</div></div>`).join('')}
function wacky(){
 const games=D.games.filter(g=>g.winner!='UNDECIDED'), rg=games.filter(g=>g.regular), scores=[];
 games.forEach(g=>{scores.push({m:g.homeMgr,s:g.homeScore,y:g.year,w:g.week,opp:g.awayMgr,os:g.awayScore,regular:g.regular,tier:g.tier});scores.push({m:g.awayMgr,s:g.awayScore,y:g.year,w:g.week,opp:g.homeMgr,os:g.homeScore,regular:g.regular,tier:g.tier})});
 const luckyWin=scores.filter(x=>x.s>x.os).sort((a,b)=>a.s-b.s)[0], brutalLoss=scores.filter(x=>x.s<x.os).sort((a,b)=>b.s-a.s)[0];
 const mostPA=[...D.teams].sort((a,b)=>b.pa-a.pa)[0], leastPA=[...D.teams].sort((a,b)=>a.pa-b.pa)[0];
 const names={};D.teams.forEach(t=>(names[t.manager]??=new Set()).add(t.team));const rename=Object.entries(names).sort((a,b)=>b[1].size-a[1].size)[0];
 const avg=D.managers.map(m=>({...m,ppg:m.pf/(m.wins+m.losses+m.ties||1)})).sort((a,b)=>b.ppg-a.ppg)[0];
 const lowAP=[...D.teams].sort((a,b)=>a.allPlayPct-b.allPlayPct)[0], gamesKing=[...D.managers].sort((a,b)=>(b.wins+b.losses+b.ties)-(a.wins+a.losses+a.ties))[0];
 const high=[...scores].sort((a,b)=>b.s-a.s)[0], low=[...scores].filter(x=>x.s>0).sort((a,b)=>a.s-b.s)[0];
 const margins=games.map(g=>({...g,margin:Math.abs(g.homeScore-g.awayScore)}));const blow=[...margins].sort((a,b)=>b.margin-a.margin)[0], close=[...margins].sort((a,b)=>a.margin-b.margin)[0];
 function streak(type){const arr=[];for(const m of D.managers.map(x=>x.manager)){let cur=0,best=0,start=null,bestStart=null,bestEnd=null;const gs=rg.filter(g=>g.homeMgr==m||g.awayMgr==m).sort((a,b)=>a.year-b.year||a.week-b.week);for(const g of gs){const win=(g.winner=='HOME'?g.homeMgr:g.awayMgr)==m,ok=type=='W'?win:!win;if(ok){if(!cur)start=g;cur++;if(cur>best){best=cur;bestStart=start;bestEnd=g}}else cur=0}arr.push({m,best,start:bestStart,end:bestEnd})}return arr.sort((a,b)=>b.best-a.best)[0]}
 const ws=streak('W'), ls=streak('L');
 const countBy=(pred)=>{const o={};scores.filter(x=>x.regular&&pred(x)).forEach(x=>o[x.m]=(o[x.m]||0)+1);return Object.entries(o).sort((a,b)=>b[1]-a[1])[0]||['—',0]};
 const twoHundred=countBy(x=>x.s>=200), under80=countBy(x=>x.s<80);
 const half={};D.teams.filter(t=>t.wins==t.losses).forEach(t=>half[t.manager]=(half[t.manager]||0)+1);const fiveHundred=Object.entries(half).sort((a,b)=>b[1]-a[1])[0]||['—',0];
 const playoffScores=scores.filter(x=>!x.regular);const playoffHigh=[...playoffScores].sort((a,b)=>b.s-a.s)[0], playoffLow=[...playoffScores].filter(x=>x.s>0).sort((a,b)=>a.s-b.s)[0];
 const weekly={};rg.forEach(g=>{const k=`${g.year}-${g.week}`;(weekly[k]??=[]).push([g.homeMgr,g.homeScore],[g.awayMgr,g.awayScore])});const tops={},bottoms={},onlyLoss={};Object.values(weekly).forEach(a=>{a.sort((x,y)=>y[1]-x[1]);tops[a[0][0]]=(tops[a[0][0]]||0)+1;bottoms[a.at(-1)[0]]=(bottoms[a.at(-1)[0]]||0)+1;if(a[0][1]>a[1][1])onlyLoss[a[1][0]]=(onlyLoss[a[1][0]]||0)+1});const topKing=Object.entries(tops).sort((a,b)=>b[1]-a[1])[0], bottomKing=Object.entries(bottoms).sort((a,b)=>b[1]-a[1])[0], secondBest=Object.entries(onlyLoss).sort((a,b)=>b[1]-a[1])[0];
 const lossPts={};scores.filter(x=>x.regular&&x.s<x.os).forEach(x=>lossPts[x.m]=(lossPts[x.m]||0)+x.s);const lossPointKing=Object.entries(lossPts).sort((a,b)=>b[1]-a[1])[0];
 const h2h=[];const ns=D.managers.map(x=>x.manager);for(let i=0;i<ns.length;i++)for(let j=i+1;j<ns.length;j++){const gs=pairGames(ns[i],ns[j]);let a=0,b=0;gs.forEach(g=>{const w=g.winner=='HOME'?g.homeMgr:g.awayMgr;if(w==ns[i])a++;if(w==ns[j])b++});if(gs.length)h2h.push({a:ns[i],b:ns[j],aw:a,bw:b,n:gs.length})}const domination=[...h2h].sort((x,y)=>Math.abs(y.aw-y.bw)-Math.abs(x.aw-x.bw))[0], rivalry=[...h2h].sort((x,y)=>Math.abs(x.aw-x.bw)-Math.abs(y.aw-y.bw)||y.n-x.n)[0];
 const consec=(above)=>{let best={m:'—',n:0};for(const m of ns){let cur=0;const entries=Object.entries(weekly).sort().map(([k,a])=>{const me=a.find(x=>x[0]==m),mean=a.reduce((q,x)=>q+x[1],0)/a.length;return me?[k,me[1]>=mean]:null}).filter(Boolean);for(const [,ok0] of entries){const ok=above?ok0:!ok0;cur=ok?cur+1:0;if(cur>best.n)best={m,n:cur}}}return best};const above=consec(true), below=consec(false);
 const cards=[
 ['🪙','Ugliest Win',luckyWin.m,`${fmt(luckyWin.s,2)}–${fmt(luckyWin.os,2)} vs ${luckyWin.opp}`,`${luckyWin.y} Week ${luckyWin.w}. The fewest points ever scored by a winning team.`],
 ['💔','Best Losing Score',brutalLoss.m,`${fmt(brutalLoss.s,2)} and still lost`,`${brutalLoss.y} Week ${brutalLoss.w} against ${brutalLoss.opp}, who scored ${fmt(brutalLoss.os,2)}.`],
 ['🎯','Human Target',mostPA.manager,`${mostPA.year} · ${fmt(mostPA.pa,1)} PA`,`The most points allowed during any regular season.`],
 ['🛡️','Softest Schedule',leastPA.manager,`${leastPA.year} · ${fmt(leastPA.pa,1)} PA`,`The fewest points allowed during any regular season.`],
 ['🎭','Identity Crisis',rename[0],`${rename[1].size} different team names`,`No manager changed team names more often across the five completed seasons.`],
 ['⚡','Career PPG Leader',avg.manager,`${fmt(avg.ppg,1)} points/game`,`Career points divided by regular-season games played.`],
 ['📉','Lowest All-Play Season',lowAP.manager,`${lowAP.year} · ${pct(lowAP.allPlayPct)}`,`This team would have beaten only ${pct(lowAP.allPlayPct)} of possible weekly opponents.`],
 ['🧾','Most Games Played',gamesKing.manager,`${gamesKing.wins+gamesKing.losses+gamesKing.ties} regular-season games`,`The largest number of documented regular-season matchups.`],
 ['🚀','Highest Weekly Score',high.m,`${fmt(high.s,2)} points`,`${high.y} Week ${high.w} against ${high.opp}.`],
 ['🫠','Lowest Weekly Score',low.m,`${fmt(low.s,2)} points`,`${low.y} Week ${low.w} against ${low.opp}.`],
 ['💥','Biggest Blowout',blow.homeScore>blow.awayScore?blow.homeMgr:blow.awayMgr,`${fmt(blow.margin,2)}-point margin`,`${blow.year} Week ${blow.week}: ${blow.homeMgr} ${fmt(blow.homeScore,2)}, ${blow.awayMgr} ${fmt(blow.awayScore,2)}.`],
 ['🧬','Closest Game',close.homeScore>close.awayScore?close.homeMgr:close.awayMgr,`${fmt(close.margin,2)}-point margin`,`${close.year} Week ${close.week}: ${fmt(close.homeScore,2)}–${fmt(close.awayScore,2)}.`],
 ['🔥','Longest Win Streak',ws.m,`${ws.best} straight wins`,`${ws.start.year} Week ${ws.start.week} through ${ws.end.year} Week ${ws.end.week}.`],
 ['🧊','Longest Losing Streak',ls.m,`${ls.best} straight losses`,`${ls.start.year} Week ${ls.start.week} through ${ls.end.year} Week ${ls.end.week}.`],
 ['💯','Most 200-Point Weeks',twoHundred[0],`${twoHundred[1]} week${twoHundred[1]==1?'':'s'}`,`Regular-season scores of at least 200 points.`],
 ['🪫','Most Sub-80 Weeks',under80[0],`${under80[1]} week${under80[1]==1?'':'s'}`,`Regular-season scores below 80 points.`],
 ['⚖️','King of .500',fiveHundred[0],`${fiveHundred[1]} perfectly even season${fiveHundred[1]==1?'':'s'}`,`Most seasons with an equal number of regular-season wins and losses.`],
 ['🏟️','Highest Playoff Score',playoffHigh.m,`${fmt(playoffHigh.s,2)} points`,`${playoffHigh.y} Week ${playoffHigh.w} against ${playoffHigh.opp}.`],
 ['🫥','Lowest Playoff Score',playoffLow.m,`${fmt(playoffLow.s,2)} points`,`${playoffLow.y} Week ${playoffLow.w} against ${playoffLow.opp}.`],
 ['🥇','Most Weekly High Scores',topKing[0],`${topKing[1]} weeks`,`Led the entire league in scoring more often than anyone else.`],
 ['🥄','Most Weekly Low Scores',bottomKing[0],`${bottomKing[1]} weeks`,`Finished last in weekly scoring more often than anyone else.`],
 ['😵','Second-Best Misfortune',secondBest[0],`${secondBest[1]} weeks`,`Finished second in league scoring but happened to face the week's top scorer.`],
 ['🧂','Most Points Scored in Losses',lossPointKing[0],`${fmt(lossPointKing[1],1)} points`,`The largest cumulative scoring total accumulated during regular-season losses.`],
 ['👊','Most Lopsided Rivalry',domination.aw>domination.bw?domination.a:domination.b,`${Math.max(domination.aw,domination.bw)}–${Math.min(domination.aw,domination.bw)} vs ${domination.aw>domination.bw?domination.b:domination.a}`,`${domination.n} total meetings produced the widest head-to-head gap.`],
 ['🤝','Most Even Rivalry',`${rivalry.a} / ${rivalry.b}`,`${rivalry.aw}–${rivalry.bw} in ${rivalry.n} meetings`,`The closest lifetime head-to-head series, with meeting volume used as the tiebreaker.`],
 ['📈','Longest Above-Average Run',above.m,`${above.n} consecutive weeks`,`Most consecutive regular-season weeks scoring at or above that week's league average.`],
 ['📉','Longest Below-Average Run',below.m,`${below.n} consecutive weeks`,`Most consecutive regular-season weeks scoring below that week's league average.`]
 ];
 $('#wacky').innerHTML=`${pageHero('Oddities & Extremes','Wacky Stats','The strange, unlucky and statistically ridiculous corners of league history.')}<h2 style="display:none">Wacky Stats</h2><div class="subtitle">Oddities, extremes and highly specific accomplishments.</div><div class="section-note">Select any card for the season, matchup or calculation behind the statistic.</div><div class="award-grid">${cards.map(x=>award(...x)).join('')}</div>`
}
function matchups(){let years=D.seasons.map(s=>s.year);$('#matchups').innerHTML=`<div class="ctrls"><select id="matchYear">${years.map(y=>`<option>${y}</option>`).join('')}</select><select id="matchWeek"></select></div><div id="matchList" class="panel"></div>`;$('#matchYear').onchange=()=>{let y=+$('#matchYear').value,w=[...new Set(D.games.filter(g=>g.year==y).map(g=>g.week))].sort((a,b)=>a-b);$('#matchWeek').innerHTML=w.map(x=>`<option>${x}</option>`).join('');renderMatches()};$('#matchWeek').onchange=renderMatches;$('#matchYear').onchange()}
function renderMatches(){let y=+$('#matchYear').value,w=+$('#matchWeek').value,gs=D.games.filter(g=>g.year==y&&g.week==w);$('#matchList').innerHTML=gs.map(g=>`<div class="match"><div><b>${g.homeMgr}</b><div class="note">${g.home}</div></div><div class="score">${fmt(g.homeScore,2)} – ${fmt(g.awayScore,2)}<div style="text-align:center"><span class="pill">${g.tier==='NONE'?'Regular Season':g.tier.replaceAll('_',' ')}</span></div></div><div class="r"><b>${g.awayMgr}</b><div class="note">${g.away}</div></div></div>`).join('')||'<div class="note">No matchups</div>'}

function setupMobileUI(){
  const navButtons=[...document.querySelectorAll('#nav button')];
  const sel=document.querySelector('#mobilePageSelect');
  if(sel){
    sel.innerHTML=navButtons.map((b,i)=>`<option value="${i}">${b.textContent}</option>`).join('');
    sel.addEventListener('change',()=>navButtons[+sel.value]?.click());
    navButtons.forEach((b,i)=>b.addEventListener('click',()=>{sel.value=String(i)}));
  }

  const wrapTables=()=>{
    document.querySelectorAll('section table').forEach(table=>{
      if(table.parentElement?.classList.contains('mobile-table-shell')) return;
      const shell=document.createElement('div');
      shell.className='mobile-table-shell';
      table.parentNode.insertBefore(shell,table);
      shell.appendChild(table);
      if(!shell.previousElementSibling?.classList.contains('mobile-scroll-hint')){
        const hint=document.createElement('div');
        hint.className='mobile-scroll-hint';
        hint.textContent='Swipe sideways to see more columns';
        shell.parentNode.insertBefore(hint,shell);
      }
    });
  };

  wrapTables();
  const observer=new MutationObserver(wrapTables);
  document.querySelectorAll('section').forEach(section=>{
    observer.observe(section,{childList:true,subtree:true});
  });
}

initNav();initAwardModal();overview();managers();standings();seasons();h2h();trades();records();luck();superlatives();wacky();matchups();setupMobileUI();
