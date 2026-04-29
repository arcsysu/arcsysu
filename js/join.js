/* ===== Join Page FAQ Script ===== */
/* Interaction logic only — content is pre-rendered in _pages/join.md */

/* ===== State ===== */
let lang = "zh";
let expanded = false;

/* ===== Lang Toggle ===== */
function toggleLang() {
  const el = document.getElementById("joinid");
  lang = lang === "zh" ? "en" : "zh";
  el.classList.toggle("lang-zh", lang === "zh");
  el.classList.toggle("lang-en", lang === "en");
  updateButtons();
  buildTOC();
}

/* ===== Toggle Answer ===== */
function toggle(i) {
  const a = document.getElementById("a" + i);
  const p = a.parentElement;

  if (a.style.display === "block") {
    a.style.display = "none";
    p.classList.remove("open");
  } else {
    a.style.display = "block";
    p.classList.add("open");
  }
}

/* ===== Expand / Collapse All ===== */
function toggleExpand() {
  expanded = !expanded;

  document.querySelectorAll("#joinid .answer").forEach(a => {
    a.style.display = expanded ? "block" : "none";
    a.parentElement.classList.toggle("open", expanded);
  });

  updateButtons();
}

/* ===== Update Button Labels ===== */
function updateButtons() {
  document.getElementById("langBtn").innerText =
    lang === "zh" ? "English" : "中文";

  document.getElementById("expandBtn").innerText =
    expanded ? "折叠全部 / Collapse All" : "展开全部 / Expand All";
}

/* ===== Search ===== */
function searchFAQ() {
  const k = document.getElementById("searchBox").value.toLowerCase();
  const items = document.querySelectorAll("#joinid .faq-item");

  items.forEach(item => {
    // Get visible text based on current language
    const textEl = lang === "zh"
      ? item.querySelector(".zh-text")
      : item.querySelector(".en-text");

    // For questions, there may be multiple .zh-text/.en-text spans
    // Collect all visible text in the item
    const visibleTexts = item.querySelectorAll(lang === "zh" ? ".zh-text" : ".en-text");
    let fullText = "";
    visibleTexts.forEach(t => { fullText += t.innerText.toLowerCase() + " "; });

    if (k === "" || fullText.includes(k)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

/* ===== Build TOC from DOM ===== */
function buildTOC() {
  const toc = document.getElementById("toc");
  if (!toc) return;
  toc.innerHTML = "";

  const items = document.querySelectorAll("#joinid .faq-item");
  items.forEach((item, i) => {
    // Get the visible question text, excluding qtag
    const qDiv = item.querySelector(".question div");
    let qText = "";
    if (qDiv) {
      // Clone node and remove qtag to get pure question text
      const clone = qDiv.cloneNode(true);
      const qtag = clone.querySelector(".qtag");
      if (qtag) qtag.remove();
      // Only get question text for current language
      const langSpans = clone.querySelectorAll(lang === "zh" ? ".zh-text" : ".en-text");
      langSpans.forEach(s => { qText += s.innerText; });
    }

    const link = document.createElement("a");
    link.href = "#q" + i;
    link.innerText = "Q" + i + " " + getShortTitle(qText);
    toc.appendChild(link);
  });
}

/* ===== Short Title ===== */
function getShortTitle(text) {
  let t = text.replace(/\n/g, " ").trim();
  t = t.replace(/吗|？|\?/g, "")
       .replace(/^你|^能|^如何|^怎么|^对/g, "")
       .trim();
  return t.length > 24 ? t.slice(0, 24) + "..." : t;
}

/* ===== Scroll Spy ===== */
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("#joinid .faq-item").forEach(el => {
    if (window.scrollY >= el.offsetTop - 120) {
      current = el.id;
    }
  });

  document.querySelectorAll("#joinid #toc a").forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

/* ===== TOC Click - Center Target ===== */
document.addEventListener("click", (e) => {
  const toc = document.getElementById("toc");
  if (!toc) return;

  const link = e.target.closest("#toc a");
  if (!link) return;

  e.preventDefault();
  const targetId = link.getAttribute("href").slice(1);
  const target = document.getElementById(targetId);
  if (!target) return;

  // Calculate center position for target element
  const elementRect = target.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const middlePosition = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

  window.scrollTo({
    top: middlePosition,
    behavior: "smooth"
  });

  // Update URL hash without triggering default jump
  history.pushState(null, null, "#" + targetId);
});

/* ===== Init (wait for DOM) ===== */
document.addEventListener("DOMContentLoaded", () => {
  updateButtons();
  buildTOC();
});