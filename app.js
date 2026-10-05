const lessons = [
  {id:"math-place-value",subject:"Mathematics",level:"Primary / SHS foundation",title:"Place Value & Whole Numbers",summary:"Read, compare and work with whole numbers.",content:`<h3>Place Value & Whole Numbers</h3><p>A digit gets its value from its position in a number. From right to left, the common places are ones, tens, hundreds, thousands and ten-thousands.</p><div class="example"><strong>Example:</strong> In 4,582, the 4 means 4 thousands, the 5 means 5 hundreds, the 8 means 8 tens and the 2 means 2 ones.</div><h4>Expanded form</h4><p><span class="formula">4,582 = 4,000 + 500 + 80 + 2</span></p><h4>Remember</h4><ul><li>10 ones = 1 ten.</li><li>10 tens = 1 hundred.</li><li>10 hundreds = 1 thousand.</li></ul>`},
  {id:"math-fractions",subject:"Mathematics",level:"Primary / SHS foundation",title:"Fractions",summary:"Understand fractions, equivalent fractions and simple operations.",content:`<h3>Fractions</h3><p>A fraction shows part of a whole. The top number is the numerator and the bottom number is the denominator.</p><div class="example"><strong>Example:</strong> In 3/4, 3 is the numerator and 4 is the denominator. It means 3 out of 4 equal parts.</div><h4>Equivalent fractions</h4><p>Fractions can have different numbers but the same value. For example, 1/2 = 2/4 = 3/6.</p><h4>Adding like fractions</h4><p>When denominators are the same, add the numerators and keep the denominator.</p><p><span class="formula">2/7 + 3/7 = 5/7</span></p>`},
  {id:"math-percentages",subject:"Mathematics",level:"Primary / SHS foundation",title:"Percentages",summary:"Convert percentages and solve everyday percentage problems.",content:`<h3>Percentages</h3><p>Percent means “per hundred”. A percentage can be written as a fraction over 100 or as a decimal.</p><div class="example"><strong>Example:</strong> 25% = 25/100 = 0.25 = 1/4.</div><h4>Finding a percentage of a number</h4><p>Convert the percentage to a decimal, then multiply.</p><p><span class="formula">20% of 150 = 0.20 × 150 = 30</span></p><h4>Everyday use</h4><p>Percentages are useful for discounts, examination scores, profit, tax and data.</p>`},
  {id:"math-algebra",subject:"Mathematics",level:"SHS foundation",title:"Introduction to Algebra",summary:"Use letters for unknown values and solve simple equations.",content:`<h3>Introduction to Algebra</h3><p>Algebra uses letters to represent numbers we do not yet know. A letter such as x is called a variable.</p><div class="example"><strong>Example:</strong> If x + 5 = 12, subtract 5 from both sides: x = 7.</div><h4>Balancing an equation</h4><p>Whatever you do to one side of an equation should also be done to the other side.</p><p><span class="formula">3x = 18 → x = 6</span></p>`},
  {id:"math-area",subject:"Mathematics",level:"Primary / SHS foundation",title:"Area & Perimeter",summary:"Calculate perimeter and area of common shapes.",content:`<h3>Area & Perimeter</h3><p>Perimeter is the total distance around a shape. Area is the amount of surface inside it.</p><h4>Rectangle</h4><p><span class="formula">Perimeter = 2(l + w)<br>Area = l × w</span></p><div class="example"><strong>Example:</strong> A rectangle 8 cm long and 3 cm wide has area 8 × 3 = 24 cm² and perimeter 2(8 + 3) = 22 cm.</div>`},
  {id:"english-parts",subject:"English",level:"Primary / SHS foundation",title:"Parts of Speech",summary:"Identify nouns, pronouns, verbs, adjectives and adverbs.",content:`<h3>Parts of Speech</h3><p>Parts of speech describe the job a word does in a sentence.</p><ul><li><strong>Noun:</strong> names a person, place, thing or idea.</li><li><strong>Pronoun:</strong> replaces a noun, such as he, she or they.</li><li><strong>Verb:</strong> shows an action or state.</li><li><strong>Adjective:</strong> describes a noun.</li><li><strong>Adverb:</strong> describes a verb, adjective or another adverb.</li></ul><div class="example"><strong>Example:</strong> “The clever boy ran quickly.” <em>Clever</em> is an adjective and <em>quickly</em> is an adverb.</div>`},
  {id:"english-tenses",subject:"English",level:"Primary / SHS foundation",title:"English Tenses",summary:"Use present, past and future forms correctly.",content:`<h3>English Tenses</h3><p>Tense helps show when an action happens.</p><ul><li><strong>Present:</strong> I walk to school.</li><li><strong>Past:</strong> I walked to school yesterday.</li><li><strong>Future:</strong> I will walk to school tomorrow.</li></ul><h4>Common mistake</h4><p>Do not use a present verb with a clear past-time marker. Say “I went yesterday”, not “I go yesterday”.</p>`},
  {id:"english-comprehension",subject:"English",level:"Primary / SHS foundation",title:"Reading Comprehension",summary:"Find main ideas, details and meanings from context.",content:`<h3>Reading Comprehension</h3><p>Read the passage carefully before answering questions. Look for the main idea, supporting details, sequence and clues about unfamiliar words.</p><h4>A simple method</h4><ol><li>Read the title and first sentence.</li><li>Read the full passage once.</li><li>Underline important names, numbers and ideas.</li><li>Answer from the passage, not from guesses.</li></ol>`},
  {id:"english-writing",subject:"English",level:"SHS foundation",title:"Paragraph Writing",summary:"Build clear paragraphs with a topic sentence and supporting ideas.",content:`<h3>Paragraph Writing</h3><p>A good paragraph usually has a topic sentence, supporting sentences and a concluding sentence.</p><div class="example"><strong>Topic:</strong> The benefits of reading.<br><br><strong>Topic sentence:</strong> Reading regularly can improve a student's knowledge and language skills.</div><h4>Good practice</h4><p>Keep related ideas together, use linking words such as “however”, “therefore” and “also”, and check spelling and punctuation before submitting your work.</p>`}
];

const quizzes = {
  Mathematics:[
    {q:"What is the place value of 7 in 7,245?",options:["7 ones","7 tens","7 hundreds","7 thousands"],a:3,e:"The 7 is in the thousands place."},
    {q:"What is 2/5 + 1/5?",options:["3/5","3/10","2/10","1/5"],a:0,e:"The denominators are the same, so add 2 + 1."},
    {q:"What is 20% of 150?",options:["20","25","30","35"],a:2,e:"0.20 × 150 = 30."},
    {q:"Solve: x + 8 = 15.",options:["5","6","7","8"],a:2,e:"Subtract 8 from both sides: x = 7."},
    {q:"A rectangle is 5 cm long and 4 cm wide. What is its area?",options:["9 cm²","18 cm²","20 cm²","25 cm²"],a:2,e:"Area = length × width = 5 × 4 = 20 cm²."}
  ],
  English:[
    {q:"Which word is a verb in “Ama sings beautifully”?",options:["Ama","sings","beautifully","the"],a:1,e:"“Sings” shows the action."},
    {q:"Which sentence is in the past tense?",options:["I eat rice.","I am eating rice.","I ate rice.","I will eat rice."],a:2,e:"“Ate” is the past form of “eat”."},
    {q:"Which word is an adjective?",options:["quickly","beauty","bright","run"],a:2,e:"“Bright” describes a noun."},
    {q:"What should a topic sentence usually do?",options:["Introduce the main idea","List every detail","End every paragraph","Give a dictionary definition"],a:0,e:"A topic sentence introduces the main idea of a paragraph."},
    {q:"Which is the best comprehension strategy?",options:["Guess every answer","Read only the last line","Use information from the passage","Ignore unfamiliar words"],a:2,e:"Answers should be supported by the passage."}
  ]
};

const state={view:"homeView",currentLesson:null,currentQuizSubject:"Mathematics",quizIndex:0,score:0,answered:false,quizSource:"home"};
const $=id=>document.getElementById(id);
const views=["homeView","topicsView","lessonView","quizView","resultsView","aboutView"];

function saveProgress(){localStorage.setItem("studymateProgress",JSON.stringify({lesson:state.currentLesson||null,completed:JSON.parse(localStorage.getItem("studymateCompleted")||"[]")}));}
function showView(id){
  views.forEach(v=>$(v).classList.toggle("active",v===id));
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===id || (id==="resultsView"&&b.dataset.view==="quizView")));
  state.view=id; window.scrollTo({top:0,behavior:"smooth"});
}
function renderTopics(filterSubject=""){
  const list=lessons.filter(l=>!filterSubject||l.subject===filterSubject);
  $("topicList").innerHTML=list.map(l=>`<button class="topic-item" data-lesson="${l.id}"><span><strong>${l.title}</strong><small>${l.subject} • ${l.level}</small></span><span class="topic-badge">Study →</span></button>`).join("");
  document.querySelectorAll("[data-lesson]").forEach(b=>b.addEventListener("click",()=>openLesson(b.dataset.lesson)));
}
function openLesson(id){
  const l=lessons.find(x=>x.id===id); if(!l)return;
  state.currentLesson=id;$("lessonSubject").textContent=l.subject.toUpperCase();$("lessonTitle").textContent=l.title;$("lessonContent").innerHTML=l.content;
  const done=JSON.parse(localStorage.getItem("studymateCompleted")||"[]").includes(id);
  $("markCompleteBtn").textContent=done?"Completed ✓":"Mark as completed";
  saveProgress();showView("lessonView");
}
function startQuiz(subject,source="home"){
  state.currentQuizSubject=subject;state.quizIndex=0;state.score=0;state.answered=false;state.quizSource=source;
  $("quizSubject").textContent=subject.toUpperCase();$("quizTitle").textContent=source==="lesson"?"Topic practice":"Quick practice";
  showView("quizView");renderQuestion();
}
function renderQuestion(){
  const qs=quizzes[state.currentQuizSubject],q=qs[state.quizIndex];
  $("quizCount").textContent=`Question ${state.quizIndex+1} of ${qs.length}`;$("scoreLabel").textContent=`Score: ${state.score}`;
  $("progressBar").style.width=`${(state.quizIndex/qs.length)*100}%`;
  $("questionCard").innerHTML=`<span class="q-number">QUESTION ${state.quizIndex+1}</span><h3>${q.q}</h3>`;
  $("quizOptions").innerHTML=q.options.map((o,i)=>`<button class="option" data-option="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
  $("feedback").textContent="";$("feedback").className="feedback";$("nextQuestionBtn").classList.add("hidden");state.answered=false;
  document.querySelectorAll(".option").forEach(b=>b.addEventListener("click",()=>answer(Number(b.dataset.option))));
}
function answer(choice){
  if(state.answered)return;state.answered=true;
  const q=quizzes[state.currentQuizSubject],buttons=[...document.querySelectorAll(".option")];
  buttons.forEach(b=>b.disabled=true);buttons[q.a].classList.add("correct");
  if(choice===q.a){state.score++;$("feedback").textContent="Correct! "+q.e;$("feedback").className="feedback good"}
  else{$("feedback").textContent="Not quite. "+q.e;$("feedback").className="feedback bad";buttons[choice].classList.add("wrong")}
  $("scoreLabel").textContent=`Score: ${state.score}`;$("nextQuestionBtn").textContent=state.quizIndex===q.length-1?"See result":"Next question";$("nextQuestionBtn").classList.remove("hidden");
}
function nextQuestion(){
  if(state.quizIndex<quizzes[state.currentQuizSubject].length-1){state.quizIndex++;renderQuestion()}
  else finishQuiz();
}
function finishQuiz(){
  const total=quizzes[state.currentQuizSubject].length,pct=Math.round(state.score/total*100);
  $("finalScore").textContent=`${state.score}/${total}`;$("finalPercent").textContent=`${pct}%`;
  $("resultMessage").textContent=pct===100?"Excellent work. Keep challenging yourself!":pct>=60?"Good effort. Review the lesson and try again.":"Keep practising. Start with the lesson, then retake the quiz.";
  $("progressBar").style.width="100%";showView("resultsView");
}
function searchLessons(term){
  const q=term.trim().toLowerCase(),box=$("searchResults");
  if(!q){box.classList.add("hidden");box.innerHTML="";return}
  const results=lessons.filter(l=>(l.title+" "+l.subject+" "+l.summary+" "+l.content.replace(/<[^>]+>/g," ")).toLowerCase().includes(q));
  box.classList.remove("hidden");
  box.innerHTML=results.length?results.slice(0,6).map(l=>`<button class="search-result" data-search-lesson="${l.id}"><strong>${l.title}</strong><small>${l.subject} • ${l.summary}</small></button>`).join(""):`<div class="search-result"><strong>No lesson found</strong><small>Try “fractions”, “grammar”, “algebra” or “percentages”.</small></div>`;
  document.querySelectorAll("[data-search-lesson]").forEach(b=>b.addEventListener("click",()=>{openLesson(b.dataset.searchLesson);box.classList.add("hidden")}));
}
function renderContinue(){
  const p=JSON.parse(localStorage.getItem("studymateProgress")||"null"),l=p?.lesson?lessons.find(x=>x.id===p.lesson):lessons[0];
  $("continueCard").innerHTML=`<h4>${l.title}</h4><p>${l.subject} • ${l.summary}</p><button class="primary-btn" data-continue="${l.id}">${p?.lesson?"Continue lesson":"Start your first lesson"}</button>`;
  document.querySelector("[data-continue]").addEventListener("click",()=>openLesson(l.id));
}
function setupVoice(){
  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SpeechRecognition){$("voiceBtn").title="Voice search is not supported by this browser";return}
  const recognition=new SpeechRecognition();recognition.lang="en-GH";recognition.interimResults=false;recognition.maxAlternatives=1;
  $("voiceBtn").addEventListener("click",()=>{
    $("voiceStatus").textContent="Listening… say a topic.";
    try{recognition.start()}catch(e){}
  });
  recognition.onresult=e=>{const text=e.results[0][0].transcript;$("searchInput").value=text;$("voiceStatus").textContent=`Heard: “${text}”`;searchLessons(text)};
  recognition.onerror=()=>{$("voiceStatus").textContent="Voice search could not start. You can type instead."};
  recognition.onend=()=>{if($("voiceStatus").textContent==="Listening… say a topic.")$("voiceStatus").textContent=""};
}
function setupInstall(){
  let deferredPrompt=null;
  window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("installBtn").classList.remove("hidden")});
  $("installBtn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("installBtn").classList.add("hidden")});
}
function registerSW(){
  if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
}
function init(){
  renderTopics();renderContinue();setupVoice();setupInstall();registerSW();
  $("searchInput").addEventListener("input",e=>searchLessons(e.target.value));
  $("seeAllBtn").addEventListener("click",()=>{renderTopics();showView("topicsView")});
  document.querySelectorAll(".subject-card").forEach(b=>b.addEventListener("click",()=>{renderTopics(b.dataset.subject);showView("topicsView")}));
  document.querySelectorAll(".quick-card").forEach(b=>b.addEventListener("click",()=>startQuiz(b.dataset.quizSubject)));
  document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.navQuiz)startQuiz(state.currentQuizSubject||"Mathematics");else showView(b.dataset.view)}));
  document.querySelectorAll("[data-back]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.back)));
  $("startLessonQuiz").addEventListener("click",()=>{const l=lessons.find(x=>x.id===state.currentLesson);startQuiz(l.subject,"lesson")});
  $("markCompleteBtn").addEventListener("click",()=>{let c=JSON.parse(localStorage.getItem("studymateCompleted")||"[]");if(!c.includes(state.currentLesson))c.push(state.currentLesson);localStorage.setItem("studymateCompleted",JSON.stringify(c));$("markCompleteBtn").textContent="Completed ✓";renderContinue()});
  $("nextQuestionBtn").addEventListener("click",nextQuestion);
  $("retryQuizBtn").addEventListener("click",()=>startQuiz(state.currentQuizSubject,state.quizSource));
  $("resultsHomeBtn").addEventListener("click",()=>showView("homeView"));
  window.addEventListener("online",()=>{$("connectionText").textContent="Online";});
  window.addEventListener("offline",()=>{$("connectionText").textContent="Offline-ready";});
}
document.addEventListener("DOMContentLoaded",init);