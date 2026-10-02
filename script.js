// 1. YOUR CONTENT: edit names, links, skills, projects and text here
const D={
email:"muhammadqais865@gmail.com",gh:"https://github.com/qais242004",li:"https://www.linkedin.com/in/muhammad-qais-38410b326",
resume:"Muhammad_Qais_CV.pdf", /* set to your PDF path, e.g. "Muhammad_Qais_CV.pdf" */
nav:[["Home","home"],["About","about"],["Skills","skills"],["Experience","experience"],["Projects","projects"],["Education","education"],["Contact","contact"]],
hl:[["Data Driven","Decisions backed by evidence.","chart"],["Problem Solver","Breaking complex data into clear steps.","bulb"],["Continuous Learner","Always adding new tools and methods.","spark"]],
levels:["Learning","Working Knowledge","Intermediate"],
skills:[
{t:"Data Analysis",c:"#00C2FF",i:[["SQL",2],["Excel",2],["Python",1],["Pandas",1],["NumPy",1],["Data Cleaning",2],["EDA",1],["Statistical Analysis",0]]},
{t:"Data Visualization",c:"#5B8CFF",i:[["Power BI",2],["Interactive Dashboards",2],["KPI Reporting",2],["Data Visualization",2]]},
{t:"Data Engineering Fundamentals",c:"#22C55E",i:[["ETL",1],["Data Pipelines",1],["Data Warehousing",1],["Lakehouse Architecture",0],["Bronze / Silver / Gold",1],["OneLake / Azure Data Lake",0]]},
{t:"Development & Tools",c:"#8B7CFF",i:[["Git",1],["GitHub",1],["VS Code",2],["Jupyter Notebook",1],["SQL Server",1]]}],
flow:[["Raw Data","Collect and understand structured and unstructured datasets.","db"],["Data Cleaning","Handle missing values, duplicates, inconsistent formats, and invalid records.","spark"],["Transformation","Prepare data for reliable analysis.","shuf"],["Analysis","Identify patterns, trends, relationships, and anomalies.","search"],["Visualization","Turn analytical findings into understandable dashboards.","chart"],["Insights","Translate results into actionable business information.","bulb"]],
exp:[
{r:"Data Analyst Intern",o:"Andersen",d:"Sep 2026 \u2013 Present",b:["Working with business data to produce analysis and reports.","Using SQL, Python and Power BI to clean, analyze and visualize data."]},
{r:"Data Analytics Intern",o:"Systems Limited, Rawalpindi",d:"May 4 \u2013 June 28, 2026",b:["Built ETL workflows in Microsoft Fabric to automate data ingestion and transformation.","Extracted, cleaned and analyzed multi-source data with SQL and Python to produce reporting-ready datasets.","Designed Power BI dashboards that gave stakeholders visibility into KPIs."]}],
edu:[{r:"BS Computer Science",o:"PMAS-Arid Agriculture University, Rawalpindi",d:"Oct 2022 \u2013 May 2026",b:["Coursework: Data Structures and Algorithms, Databases, Software Engineering, Operating Systems, Networking."]}],
projects:[
{t:"Electricity Theft Detection & Smart Monitoring System",cat:"AI + IoT + Smart Monitoring",v:"nodes",d:"An AI and IoT-based system designed to monitor electricity consumption, estimate expected bills, detect unusual consumption patterns, and provide theft-related alerts.",p:"Unusual electricity usage is hard to notice without continuous monitoring.",s:"Monitor consumption, estimate bills and flag anomalies with AI so alerts reach an admin dashboard.",f:["Real-time consumption monitoring","Expected bill calculation","AI-based anomaly detection","Theft alerts","Admin dashboard","Monitoring interface"],t2:["Flutter","Python","AI/ML","IoT","Dashboard"]},
{t:"Sales Data Analysis Dashboard",cat:"Data Analytics / Business Intelligence",v:"bars",d:"An analytics project focused on transforming sales data into meaningful business insights through data cleaning, analysis, KPIs, and interactive visualization.",p:"Raw sales data does not show trends or performance on its own.",s:"Clean the data, define KPIs and present revenue, regions and products in an interactive dashboard.",f:["Revenue analysis","Sales trends","Regional analysis","Product performance","KPI tracking","Interactive dashboard"],t2:["SQL","Excel","Power BI"]},
{t:"Customer Data Analysis",cat:"Data Analytics",v:"line",d:"An analytical project focused on cleaning customer data, exploring patterns, and generating insights that can support data-driven decision making.",p:"Customer data is often messy and incomplete, which hides useful patterns.",s:"Clean and explore the data to surface customer behavior patterns that support decisions.",f:["Data cleaning","Missing-value handling","Exploratory Data Analysis","Customer behavior analysis","Data visualization"],t2:["Python","Pandas","NumPy","SQL","Jupyter Notebook"]},
{t:"Enterprise Data Warehouse & ETL/ELT Pipeline",cat:"Data Engineering / Warehousing",v:"layers",d:"A metadata-driven ETL/ELT pipeline that ingests multi-source structured data into a Microsoft Fabric Lakehouse and models it as a star schema for reporting.",p:"Data from several sources needs one reliable, well-modeled home for reporting.",s:"Ingest sources into a Lakehouse and model them as a star schema through a medallion pipeline.",f:["Metadata-driven ingestion","Star schema with fact and dimension tables","Bronze / Silver / Gold architecture","Automated validation in Data Factory"],t2:["Microsoft Fabric","Lakehouse","Data Factory","SQL","Python"]}],
qa:[["What do you do?","I am a Computer Science graduate focused on data analytics. I clean and analyze data with SQL and Python and present it in Power BI dashboards."],["Which tools do you use?","SQL, Excel, Python (Pandas, NumPy), Power BI, Microsoft Fabric, Git and GitHub."],["What experience do you have?","I am a Data Analyst Intern at Andersen, and I completed a Data Analytics internship at Systems Limited (May 4 \u2013 June 28, 2026)."],["Are you open to work?","Yes. I am open to Data Analyst, BI Analyst and Junior Data Analyst opportunities."],["How can I reach you?","Email muhammadqais865@gmail.com or message me on LinkedIn. Both links are in the contact section."]]};

// 2. HELPERS: short names for common tasks, plus small SVG icons
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const P={db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',spark:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',shuf:'<path d="M3 7h4l8 10h6M3 17h4l3-4M15 7h6M18 4l3 3-3 3M18 14l3 3-3 3"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',chart:'<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',bulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>'};
const ic=n=>`<span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg></span>`;
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const dots=(n,c)=>`<span class="lv" style="--c:${c}">${[0,1,2].map(i=>`<i class="${i<=n?"f":""}"></i>`).join("")}</span>`;

// 3. BUILD THE PAGE: turn the data above into HTML (template strings)
$("#links").innerHTML=D.nav.map(([l,id])=>`<a href="#${id}">${l}</a>`).join("");
$$("[data-gh]").forEach(a=>a.href=D.gh);$$("[data-li]").forEach(a=>a.href=D.li);$$("[data-mail]").forEach(a=>a.href="mailto:"+D.email);
$$("[data-resume]").forEach(a=>{if(D.resume){a.href=D.resume;a.setAttribute("download","")}else{a.href=`mailto:${D.email}?subject=${encodeURIComponent("Resume request")}`;a.textContent="Request Resume"}});
$("#hl").innerHTML=D.hl.map(([t,d,i])=>`<div class="card rv">${ic(i)}<h3>${t}</h3><p>${d}</p></div>`).join("");
$("#skg").innerHTML=D.skills.map(k=>`<div class="card sk rv" style="--c:${k.c}"><h3>${esc(k.t)}</h3><div class="chips">${k.i.map(([n,l])=>`<span class="chip" title="${D.levels[l]}" style="--c:${k.c}">${n}${dots(l,k.c)}</span>`).join("")}</div></div>`).join("");
$("#leg").innerHTML=D.levels.map((l,i)=>`<span>${dots(i,"#00C2FF")} ${l}</span>`).join("");
$("#wf").innerHTML=D.flow.map(([t,d,i])=>`<div class="card st rv">${ic(i)}<h3>${t}</h3><p>${d}</p></div>`).join("");
const tl=a=>a.map(x=>`<div class="it rv card"><div class="meta">${x.d}</div><h3>${x.r}</h3><p style="margin:0 0 10px;color:#D6DEEA">${x.o}</p><ul>${x.b.map(b=>`<li>${b}</li>`).join("")}</ul></div>`).join("");
$("#exp").innerHTML=tl(D.exp);$("#edu").innerHTML=tl(D.edu);
$("#cl").innerHTML=[["Email",D.email,"mailto:"+D.email],["GitHub","qais242004",D.gh],["LinkedIn","linkedin.com/in/muhammad-qais-38410b326",D.li]].map(([l,t,h])=>`<a href="${h}" ${h[0]=="h"?'target="_blank" rel="noopener"':""}><span><small style="color:var(--mu);display:block">${l}</small>${t}</span></a>`).join("");

// 4. PROJECT CARDS: abstract visuals, cards, and the details popup
const art={nodes:'<g stroke="#00C2FF" stroke-opacity=".5" stroke-width="2"><path d="M70 95H160L230 50M160 95L230 140M230 50H330M230 140H330"/></g><g fill="#0B2236" stroke="#00C2FF" stroke-width="3"><circle cx="70" cy="95" r="20"/><circle cx="160" cy="95" r="16"/><circle cx="230" cy="50" r="16"/><circle cx="230" cy="140" r="16"/><circle cx="330" cy="50" r="20"/><circle cx="330" cy="140" r="20" stroke="#22C55E"/></g>',
bars:'<g fill="#00C2FF">'+[50,84,64,112,92,138,118].map((h,i)=>`<rect x="${46+i*46}" y="${172-h}" width="28" height="${h}" rx="7" opacity="${.35+i%4*.18}"/>`).join("")+'</g>',
line:'<path d="M20 140C70 120 90 60 140 80S220 150 270 70 350 40 385 28V190H20Z" fill="url(#a)" opacity=".6"/><path d="M20 140C70 120 90 60 140 80S220 150 270 70 350 40 385 28" fill="none" stroke="#00C2FF" stroke-width="4" stroke-linecap="round"/>',
layers:'<g font-family="Manrope,sans-serif" font-size="14" font-weight="700" fill="#041018"><rect x="70" y="112" width="260" height="38" rx="10" fill="#5B8CFF" opacity=".55"/><rect x="95" y="68" width="210" height="38" rx="10" fill="#5B8CFF"/><rect x="120" y="24" width="160" height="38" rx="10" fill="#00C2FF"/><text x="200" y="49" text-anchor="middle">Gold</text><text x="200" y="93" text-anchor="middle">Silver</text><text x="200" y="137" text-anchor="middle">Bronze</text></g>'};
const vis=k=>`<svg viewBox="0 0 400 190" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract ${k} illustration for the project"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0E2D4D"/><stop offset="1" stop-color="#121B36"/></linearGradient><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#00C2FF" stop-opacity=".55"/><stop offset="1" stop-color="#00C2FF" stop-opacity="0"/></linearGradient></defs><rect width="400" height="190" fill="url(#g)"/>${art[k]}</svg>`;
const chips=a=>`<div class="chips">${a.map(t=>`<span class="chip">${t}</span>`).join("")}</div>`;
$("#pg").innerHTML=D.projects.map((p,i)=>`<article class="card pc rv"><div class="vis">${vis(p.v)}</div><div class="pb"><div class="cat">${p.cat}</div><h3>${esc(p.t)}</h3><p>${p.d}</p><p class="ps"><b>Problem:</b> ${p.p}</p><p class="ps"><b>Solution:</b> ${p.s}</p>${chips(p.t2)}<div class="row"><button class="btn p" data-i="${i}">View details</button><a class="btn" href="${D.gh}" target="_blank" rel="noopener">GitHub</a></div></div></article>`).join("");
const hole=t=>`<div class="ph8">${t} Edit this in <code>D.projects</code>.</div>`;
$$("[data-i]").forEach(b=>b.onclick=()=>{const p=D.projects[b.dataset.i],d=$("#dlg");
d.innerHTML=`<button class="x" aria-label="Close" onclick="this.closest('dialog').close()">&#10005;</button><div class="cat">${p.cat}</div><h3 id="dt">${esc(p.t)}</h3><h4>Overview</h4><p>${p.d}</p><h4>Problem</h4><p>${p.p}</p><h4>Approach</h4>${p.a?`<p>${p.a}</p>`:hole("Describe how you approached this project.")}<h4>Technologies</h4>${chips(p.t2)}<h4>Process and key features</h4><ul>${p.f.map(x=>`<li>${x}</li>`).join("")}</ul><h4>Results</h4>${hole("Add real results here once you have them.")}<h4>Screenshots</h4>${hole("Add dashboard or app screenshots here.")}<div class="row" style="margin-top:22px"><a class="btn p" href="${D.gh}" target="_blank" rel="noopener">GitHub</a>${p.demo?`<a class="btn" href="${p.demo}" target="_blank" rel="noopener">Live Demo</a>`:""}</div>`;d.showModal()});
$("#dlg").addEventListener("click",e=>{if(e.target.id==="dlg")e.target.close()});

// 5. ASK ME ANYTHING: typing effect for the answers
let tm;const ans=$("#ans");
$("#q").innerHTML=D.qa.map((x,i)=>`<button data-k="${i}">${x[0]}</button>`).join("");
function say(i){clearInterval(tm);$$("#q button").forEach((b,j)=>b.classList.toggle("on",i==j));const t=D.qa[i][1];let n=0;
if(matchMedia("(prefers-reduced-motion: reduce)").matches){ans.textContent=t;return}
ans.textContent="";tm=setInterval(()=>{ans.textContent=t.slice(0,++n);if(n>=t.length)clearInterval(tm)},16)}
$$("#q button").forEach(b=>b.onclick=()=>say(+b.dataset.k));say(0);

// 6. NAVBAR, scroll progress, reveal on scroll, card glow
const nav=$("#nav"),bar=$("#bar");
addEventListener("scroll",()=>{nav.classList.toggle("s",scrollY>20);const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+"%"},{passive:true});
$("#burger").onclick=e=>{const o=$("#links").classList.toggle("open");e.currentTarget.setAttribute("aria-expanded",o)};
$$("#links a").forEach(a=>a.onclick=()=>{$("#links").classList.remove("open");$("#burger").setAttribute("aria-expanded","false")});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(el=>io.observe(el));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$("#links a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section").forEach(s=>so.observe(s));
document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--x",e.clientX-r.left+"px");c.style.setProperty("--y",e.clientY-r.top+"px")}});

// 7. CONTACT FORM: validation, then opens your email app
const F={n:v=>v.trim()?"":"Enter your name.",e:v=>/^\S+@\S+\.\S+$/.test(v.trim())?"":"Enter a valid email address.",s:v=>v.trim()?"":"Enter a subject.",m:v=>v.trim().length>=10?"":"Write a message of at least 10 characters."};
$("#f").addEventListener("submit",ev=>{ev.preventDefault();let ok=true;
for(const k in F){const m=F[k]($("#"+k).value);$("#e"+k).textContent=m;$("#"+k).setAttribute("aria-invalid",!!m);if(m)ok=false}
if(!ok){$("#st").textContent="Please fix the highlighted fields.";return}
const body=`${$("#m").value}\n\nFrom: ${$("#n").value} (${$("#e").value})`;
location.href=`mailto:${D.email}?subject=${encodeURIComponent($("#s").value)}&body=${encodeURIComponent(body)}`;
$("#st").textContent="Your email app should open with the message ready to send. If it does not, write to "+D.email+"."});