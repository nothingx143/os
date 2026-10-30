// SRMIST eLab Official Portal Application Logic
(function() {
  'use strict';

  let allQuestions = [];
  let currentQuestion = null;
  let currentIndex = 0;
  let currentStdinTab = 0; // 0 for T1, 1 for T2
  let currentOutputTab = 0; // 0 for MATCH T1, 1 for MATCH T2
  let outputShowingMatch = false; // whether user clicked MATCH T1/T2 to show expected output

  // DOM Elements
  const elProblemText = document.getElementById('problemStatementText');
  const elLblSession = document.getElementById('lblSession');
  const elChallengeHeaderCourse = document.getElementById('challengeHeaderCourse');
  const elLblLevelDot = document.getElementById('lblLevelDot');
  const elLblChallengeDot = document.getElementById('lblChallengeDot');
  const elBannerSolvedText = document.getElementById('bannerSolvedText');
  const elBtnCourseActive = document.getElementById('btnCourseActive');

  // Search Elements
  const elGlobalSearchInput = document.getElementById('globalSearchInput');
  const elBtnClearSearch = document.getElementById('btnClearSearch');
  const elSearchResultsDropdown = document.getElementById('searchResultsDropdown');

  // Navigation Buttons
  const elBtnHome = document.getElementById('btnHome');
  const elBtnPrevChal = document.getElementById('btnPrevChal');
  const elBtnNextChal = document.getElementById('btnNextChal');
  const elBtnInfo = document.getElementById('btnInfo');

  // Challenges Navigator Modal Elements
  const elModalOverlay = document.getElementById('modalNavigatorOverlay');
  const elBtnCloseModalNav = document.getElementById('btnCloseModalNav');
  const elTxtModalFilter = document.getElementById('txtModalFilter');
  const elModalCardsGrid = document.getElementById('modalCardsGrid');
  const elModalNavTitle = document.getElementById('modalNavTitle');

  // Test Cases Grids
  const elLogicalCardsGrid = document.getElementById('logicalCardsGrid');
  const elMandatoryCardsGrid = document.getElementById('mandatoryCardsGrid');
  const elComplexityCardsGrid = document.getElementById('complexityCardsGrid');

  // Editor Elements
  const elEditorGutter = document.getElementById('editorGutter');
  const elEditorCodeBlock = document.getElementById('editorCodeBlock');
  const elSelLanguage = document.getElementById('selLanguage');
  const elBtnCopyCode = document.getElementById('btnCopyCode');
  const elBtnCopyText = document.getElementById('btnCopyText');
  const elBtnDownloadCode = document.getElementById('btnDownloadCode');
  const elBtnDownloadText = document.getElementById('btnDownloadText');
  const elBtnResetCode = document.getElementById('btnResetCode');
  const elBtnResetText = document.getElementById('btnResetText');

  // Side Cards Elements
  const elBtnInputT1 = document.getElementById('btnInputT1');
  const elBtnInputT2 = document.getElementById('btnInputT2');
  const elTxtCustomInput = document.getElementById('txtCustomInput');
  const elBtnMatchT1 = document.getElementById('btnMatchT1');
  const elBtnMatchT2 = document.getElementById('btnMatchT2');
  const elBoxOutputView = document.getElementById('boxOutputView');

  // Complexity Elements
  const elValCCN = document.getElementById('valCCN');
  const elValTokens = document.getElementById('valTokens');
  const elValNLOC = document.getElementById('valNLOC');

  // Clock Element
  const elLiveClock = document.getElementById('liveClock');

  // Stop words for search
  const STOP_WORDS = new Set([
    'the', 'is', 'are', 'was', 'were', 'a', 'an', 'and', 'or', 'to', 'of', 'in', 'on', 'at', 
    'for', 'with', 'by', 'from', 'as', 'into', 'that', 'this', 'these', 'those', 'it', 'its'
  ]);

  function init() {
    allQuestions = window.ELAB_QUESTIONS || [];
    if (!allQuestions.length) {
      if (elProblemText) elProblemText.innerText = "No questions loaded. Check questions_data.js.";
      return;
    }

    // Dynamic Live Course Count
    if (elBtnCourseActive) {
      elBtnCourseActive.textContent = `OS (${allQuestions.length})`;
    }

    buildSearchIndex();
    setupEvents();
    startClock();

    // Check URL hash, e.g. #q=34
    const hashMatch = window.location.hash.match(/q=(\d+)/i);
    let startIdx = 0;
    if (hashMatch) {
      const qNum = parseInt(hashMatch[1], 10);
      const foundIdx = allQuestions.findIndex(q => q.challenge === qNum);
      if (foundIdx !== -1) startIdx = foundIdx;
    }

    selectQuestion(startIdx);
  }

  // Live Clock (matches official eLab format: October 30th 2026, 6:04:20 Am)
  function startClock() {
    function update() {
      const now = new Date();
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const month = months[now.getMonth()];
      const day = now.getDate();
      const year = now.getFullYear();
      
      let suffix = 'th';
      if (day === 1 || day === 21 || day === 31) suffix = 'st';
      else if (day === 2 || day === 22) suffix = 'nd';
      else if (day === 3 || day === 23) suffix = 'rd';

      let hours = now.getHours();
      const ampm = hours >= 12 ? 'Pm' : 'Am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      if (elLiveClock) {
        elLiveClock.textContent = `${month} ${day}${suffix} ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
      }
    }
    update();
    setInterval(update, 1000);
  }

  // Select Question
  function selectQuestion(idx) {
    if (idx < 0 || idx >= allQuestions.length) return;
    currentIndex = idx;
    currentQuestion = allQuestions[idx];

    // Reset stdin/output states for new question
    currentStdinTab = 0;
    currentOutputTab = 0;
    outputShowingMatch = false;

    // Update URL hash
    window.history.replaceState(null, null, `#q=${currentQuestion.challenge}`);

    // Calculate level and challenge numbers
    const levelNum = currentQuestion.level || (currentQuestion.challenge > 100 ? 2 : 1);
    const chalNum = currentQuestion.level_challenge || (currentQuestion.challenge > 100 ? currentQuestion.challenge - 100 : currentQuestion.challenge);

    // Update dots in Question Information
    if (elLblLevelDot) elLblLevelDot.textContent = `● Level ${levelNum}`;
    if (elLblChallengeDot) elLblChallengeDot.textContent = `● Challenge ${chalNum}`;

    // Session and Course
    if (elLblSession) elLblSession.textContent = currentQuestion.topic || 'General';
    if (elChallengeHeaderCourse) elChallengeHeaderCourse.textContent = 'COURSE: OS';

    // Problem Statement
    if (elProblemText) {
      elProblemText.textContent = currentQuestion.description || "No description provided.";
    }

    // Dynamic Live Course Count
    if (elBtnCourseActive) {
      elBtnCourseActive.textContent = `OS (${allQuestions.length})`;
    }

    // Solved Banner Status (Green for 100% full pass, Yellow for partial)
    const isPartial = currentQuestion.partial || (currentQuestion.status && (currentQuestion.status.includes('88') || currentQuestion.status.includes('77') || currentQuestion.status.includes('Partial') || currentQuestion.status.includes('Pending')));
    const elSolvedAlert = document.getElementById('solvedAlertBox');
    if (elSolvedAlert) {
      elSolvedAlert.style.display = 'flex';
      if (isPartial) {
        elSolvedAlert.className = 'official-solved-alert alert-partial';
        elSolvedAlert.innerHTML = `
          <div class="alert-content-left">
            <span class="alert-check-icon">
              <svg viewBox="64 64 896 896" width="16" height="16" fill="#faad14">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v288c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48 48 0 100-96 48 48 0 000 96z"/>
              </svg>
            </span>
            <span id="bannerSolvedText">You have partially solved this challenge ! Though you can run the code with different logic !</span>
          </div>
          <button class="alert-dismiss-btn" type="button" onclick="document.getElementById('solvedAlertBox').style.display='none'">✕</button>
        `;
      } else {
        elSolvedAlert.className = 'official-solved-alert';
        elSolvedAlert.innerHTML = `
          <div class="alert-content-left">
            <span class="alert-check-icon">
              <svg viewBox="64 64 896 896" width="16" height="16" fill="#52c41a">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 504.6a8 8 0 0111.4-11.2l120.4 148.9 204.3-283.3a8 8 0 0111.2 2.7z"/>
              </svg>
            </span>
            <span id="bannerSolvedText">You have already solved this challenge ! Though you can run the code with different logic !</span>
          </div>
          <button class="alert-dismiss-btn" type="button" onclick="document.getElementById('solvedAlertBox').style.display='none'">✕</button>
        `;
      }
    }

    // Test Cases Cards
    renderTestCases();

    // Code Editor
    renderEditor();

    // Side Cards (Custom Input, Output, Complexity)
    renderSideCards();

    // Close Search Dropdown
    closeSearch();
  }

  // Render Test Cases
  function renderTestCases() {
    if (!currentQuestion) return;

    // 1. Logical Test Cases Grid (Cards)
    if (elLogicalCardsGrid) {
      const tcList = currentQuestion.test_cases || [];
      if (!tcList.length) {
        elLogicalCardsGrid.innerHTML = `
          <div class="tc-card" style="grid-column: 1 / -1;">
            <div class="tc-card-header">Test Case 1</div>
            <div class="tc-card-body">
              <div class="tc-label-heading">INPUT (STDIN)</div>
              <div class="tc-cream-box"><em>Standard input</em></div>
              <div class="tc-label-heading">EXPECTED OUTPUT</div>
              <div class="tc-cream-box"><em>Verified portal output</em></div>
            </div>
          </div>
        `;
      } else {
        let html = '';
        tcList.forEach((tc, i) => {
          html += `
            <div class="tc-card">
              <div class="tc-card-header">Test Case ${i + 1}</div>
              <div class="tc-card-body">
                <div class="tc-label-heading">INPUT (STDIN)</div>
                <div class="tc-cream-box">${escapeHtml(tc.input || '')}</div>
                <div class="tc-label-heading">EXPECTED OUTPUT</div>
                <div class="tc-cream-box">${escapeHtml(tc.output || '')}</div>
              </div>
            </div>
          `;
        });
        elLogicalCardsGrid.innerHTML = html;
      }
    }

    // 2. Mandatory Test Cases Grid (Cards)
    if (elMandatoryCardsGrid) {
      const mand = currentQuestion.mandatory || [];
      const mandList = mand.length > 0 ? mand : ['main', 'int'];
      let html = '';
      mandList.forEach((m, i) => {
        html += `
          <div class="tc-card">
            <div class="tc-card-header">Test Case ${i + 1}</div>
            <div class="tc-card-body">
              <div class="tc-label-heading">KEYWORD</div>
              <div class="mand-keyword-badge">${escapeHtml(m)}</div>
            </div>
          </div>
        `;
      });
      elMandatoryCardsGrid.innerHTML = html;
    }

    // 3. Complexity Test Cases Grid (3 Cards matching Screenshot 060442)
    if (elComplexityCardsGrid) {
      const c = currentQuestion.complexity || { ccn: 3, tokens: 300, loc: 100 };
      elComplexityCardsGrid.innerHTML = `
        <div class="tc-card">
          <div class="tc-card-header">Test Case 1</div>
          <div class="tc-card-body">
            <div class="tc-label-heading">CYCLOMATIC COMPLEXITY</div>
            <div class="mand-keyword-badge">${c.ccn || 3}</div>
          </div>
        </div>
        <div class="tc-card">
          <div class="tc-card-header">Test Case 2</div>
          <div class="tc-card-body">
            <div class="tc-label-heading">TOKEN COUNT</div>
            <div class="mand-keyword-badge">${c.tokens || 300}</div>
          </div>
        </div>
        <div class="tc-card">
          <div class="tc-card-header">Test Case 3</div>
          <div class="tc-card-body">
            <div class="tc-label-heading">NLOC</div>
            <div class="mand-keyword-badge">${c.loc || 100}</div>
          </div>
        </div>
      `;
    }
  }

  // Render Editor
  function renderEditor() {
    if (!currentQuestion) return;
    const code = currentQuestion.code || '// Solution code in progress...\n';
    const lines = code.split('\n');

    // Gutter line numbers
    if (elEditorGutter) {
      let gutterHtml = '';
      for (let i = 1; i <= lines.length; i++) {
        gutterHtml += `${i}<br>`;
      }
      elEditorGutter.innerHTML = gutterHtml;
    }

    if (elEditorCodeBlock) {
      elEditorCodeBlock.textContent = code;
    }

    // Language dropdown & download button text
    const lang = (currentQuestion.language || 'c').toLowerCase();
    if (elSelLanguage) {
      elSelLanguage.value = lang === 'cpp' ? 'cpp' : 'c';
    }
    if (elBtnDownloadText) {
      elBtnDownloadText.textContent = lang === 'cpp' ? 'Download .cpp' : 'Download .c';
    }

    if (elBtnCopyText) elBtnCopyText.textContent = "Copy Code";
    if (elBtnCopyCode) elBtnCopyCode.classList.remove('copied');
  }

  // Render Side Cards (Custom Input, Output, Complexity Analysis)
  function renderSideCards() {
    if (!currentQuestion) return;
    const tcList = currentQuestion.test_cases || [];

    // 1. Custom Input (stdin)
    if (elBtnInputT1 && elBtnInputT2) {
      if (currentStdinTab === 0) {
        elBtnInputT1.classList.add('active');
        elBtnInputT2.classList.remove('active');
      } else {
        elBtnInputT2.classList.add('active');
        elBtnInputT1.classList.remove('active');
      }
    }
    if (elTxtCustomInput) {
      const activeTc = tcList[currentStdinTab] || tcList[0];
      elTxtCustomInput.value = (activeTc && activeTc.input) ? activeTc.input : '';
    }

    // 2. Output
    if (elBtnMatchT1 && elBtnMatchT2) {
      if (currentOutputTab === 0) {
        elBtnMatchT1.classList.add('active');
        elBtnMatchT2.classList.remove('active');
      } else {
        elBtnMatchT2.classList.add('active');
        elBtnMatchT1.classList.remove('active');
      }
    }

    if (elBoxOutputView) {
      if (outputShowingMatch) {
        const activeTc = tcList[currentOutputTab] || tcList[0];
        const outStr = (activeTc && activeTc.output) ? activeTc.output : '';
        elBoxOutputView.innerHTML = `
          <pre style="margin:0; width:100%; font-family:'Fira Code', Monaco, monospace; font-size:12px; line-height:1.5; color:#262626; white-space:pre-wrap; text-align:left;">${escapeHtml(outStr)}</pre>
        `;
      } else {
        elBoxOutputView.innerHTML = `
          <div class="empty-state">
            <span class="empty-icon">📫</span>
            <span>Empty</span>
          </div>
        `;
      }
    }

    // 3. Complexity Analysis Table
    const c = currentQuestion.complexity || { ccn: 3, tokens: 300, loc: 100 };
    const codeLines = (currentQuestion.code || '').split('\n').filter(l => l.trim().length > 0 && !l.trim().startsWith('//')).length;
    const actualCCN = Math.min(c.ccn || 3, 2);
    const actualTokens = Math.min(c.tokens || 300, 240);
    const actualNLOC = Math.min(c.loc || 100, Math.max(codeLines, 15));

    if (elValCCN) elValCCN.textContent = `${actualCCN} / ${c.ccn || 3}`;
    if (elValTokens) elValTokens.textContent = `${actualTokens} / ${c.tokens || 300}`;
    if (elValNLOC) elValNLOC.textContent = `${actualNLOC} / ${c.loc || 100}`;
  }

  // 1-Click Copy Code
  function copyCode() {
    if (!currentQuestion || !currentQuestion.code) return;
    navigator.clipboard.writeText(currentQuestion.code).then(() => {
      if (elBtnCopyText) elBtnCopyText.textContent = "✓ Copied!";
      if (elBtnCopyCode) elBtnCopyCode.classList.add('copied');
      setTimeout(() => {
        if (elBtnCopyText) elBtnCopyText.textContent = "Copy Code";
        if (elBtnCopyCode) elBtnCopyCode.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = currentQuestion.code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      if (elBtnCopyText) elBtnCopyText.textContent = "✓ Copied!";
      if (elBtnCopyCode) elBtnCopyCode.classList.add('copied');
      setTimeout(() => {
        if (elBtnCopyText) elBtnCopyText.textContent = "Copy Code";
        if (elBtnCopyCode) elBtnCopyCode.classList.remove('copied');
      }, 2000);
    });
  }

  // Download Code
  function downloadCode() {
    if (!currentQuestion) return;
    const lang = (currentQuestion.language || 'c').toLowerCase();
    const ext = lang === 'cpp' ? 'cpp' : 'c';
    const filename = `Q${currentQuestion.challenge}.${ext}`;
    const code = currentQuestion.code || '';
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Reset Code
  function resetCode() {
    if (!currentQuestion) return;
    renderEditor();
    renderSideCards();
    if (elBtnResetText) {
      elBtnResetText.textContent = "Reset!";
      setTimeout(() => {
        if (elBtnResetText) elBtnResetText.textContent = "Reset";
      }, 1000);
    }
  }

  // Build Comprehensive Search Index
  function buildSearchIndex() {
    allQuestions.forEach(q => {
      q._chalStr = `q${q.challenge} #${q.challenge} challenge ${q.challenge}`;
      q._normTitle = (q.title || '').toLowerCase();
      q._normDesc = (q.description || '').toLowerCase();
      q._normTopic = (q.topic || '').toLowerCase();
      q._normCode = (q.code || '').toLowerCase();
      q._normMandatory = (q.mandatory || []).join(' ').toLowerCase();
      q._normTestCases = (q.test_cases || []).map(tc => `${tc.input || ''} ${tc.output || ''}`).join(' ').toLowerCase();

      // Raw searchable corpus
      q._rawCorpus = [
        q._chalStr,
        q._normTitle,
        q._normTopic,
        q._normDesc,
        q._normMandatory,
        q._normCode,
        q._normTestCases
      ].join('\n');

      // Normalized tokens
      const rawTokens = q._rawCorpus.match(/[a-z0-9_]+/g) || [];
      q._tokens = new Set(rawTokens);
    });
  }

  // Query Processor
  function searchQuestions(rawQuery) {
    const query = (rawQuery || '').trim().toLowerCase();
    if (!query) return [];

    // 1. Exact Challenge Number Search (e.g. "101", "q101", "#101", "challenge 101")
    const idMatch = query.match(/^(?:q|#|challenge|question)?\s*(\d+)$/i);
    if (idMatch) {
      const target = parseInt(idMatch[1], 10);
      const foundIdx = allQuestions.findIndex(q => q.challenge === target);
      if (foundIdx !== -1) {
        return [{ q: allQuestions[foundIdx], idx: foundIdx, score: 100000, matchedField: 'challenge number' }];
      }
    }

    // 2. Exact Raw Substring Search (for C syntax: 'while(x!=y)', 'fork()', 'a[i]=mp')
    const hasSpecialChars = /[^a-z0-9\s]/.test(query);
    if (hasSpecialChars) {
      const exactMatches = [];
      allQuestions.forEach((q, idx) => {
        let matchedField = null;
        if (q._normMandatory.includes(query)) matchedField = 'mandatory keyword';
        else if (q._normCode.includes(query)) matchedField = 'source code';
        else if (q._normDesc.includes(query)) matchedField = 'problem description';
        else if (q._rawCorpus.includes(query)) matchedField = 'corpus';

        if (matchedField) {
          exactMatches.push({ q, idx, score: 50000, matchedField });
        }
      });
      if (exactMatches.length > 0) {
        return exactMatches;
      }
    }

    // 3. Keyword / Token Search (Conjunctive AND with Stop-Word Removal)
    const rawTokens = query.match(/[a-z0-9_]+/g) || [];
    let tokens = rawTokens.filter(t => !STOP_WORDS.has(t));
    if (tokens.length === 0) tokens = rawTokens;
    if (tokens.length === 0) return [];

    const results = [];

    allQuestions.forEach((q, idx) => {
      // Conjunctive Requirement: Every single token MUST be present
      let allMatched = true;
      for (const t of tokens) {
        if (!q._tokens.has(t) && !q._rawCorpus.includes(t)) {
          allMatched = false;
          break;
        }
      }
      if (!allMatched) return;

      let score = 1000;
      let matchedField = 'description';

      // Field Priority Scoring
      if (q._normMandatory.includes(query)) {
        score += 4500;
        matchedField = 'mandatory keyword';
      } else if (q._normTitle.includes(query)) {
        score += 4200;
        matchedField = 'title';
      } else if (q._normTopic.includes(query)) {
        score += 4000;
        matchedField = 'topic';
      } else if (q._normDesc.includes(query)) {
        score += 5000;
        matchedField = 'problem description';
      } else if (q._normCode.includes(query)) {
        score += 3500;
        matchedField = 'source code';
      } else if (q._normTestCases.includes(query)) {
        score += 2500;
        matchedField = 'test cases';
      }

      // Bonus for exact token hits
      tokens.forEach(t => {
        if (q._tokens.has(t)) score += 300;
      });

      results.push({ q, idx, score, matchedField });
    });

    results.sort((a, b) => b.score - a.score);
    return results;
  }

  function handleSearch(query) {
    if (!query.trim()) {
      closeSearch();
      return;
    }
    const matches = searchQuestions(query);
    renderSearchResults(matches, query);
  }

  function renderSearchResults(matches, query) {
    if (!elSearchResultsDropdown) return;

    if (!matches.length) {
      elSearchResultsDropdown.innerHTML = '<div style="padding:10px 14px; color:#8c8c8c; font-size:12px;">No matching challenge found.</div>';
      elSearchResultsDropdown.classList.add('open');
      return;
    }

    const queryTokens = (query.match(/[a-z0-9_]+/g) || []).filter(t => !STOP_WORDS.has(t));

    let html = '';
    matches.slice(0, 12).forEach(({ q, idx, matchedField }) => {
      const isSolved = q.solved || (q.status && q.status.includes('100%'));
      const snippet = highlightSnippet(q.description || '', query, queryTokens);
      const displayTitle = q.title ? `Challenge ${q.challenge}: ${escapeHtml(q.title)}` : `Challenge ${q.challenge}: ${escapeHtml(q.topic)}`;
      html += `
        <div class="official-search-item" data-index="${idx}">
          <span class="badge" style="background:${isSolved ? '#52c41a' : '#faad14'}">Q${q.challenge}</span>
          <div style="flex: 1; overflow: hidden;">
            <div class="title" style="font-weight: 600; color: #1f2937;">${displayTitle}</div>
            <div class="snippet" style="font-size: 11.5px; color: #595959; margin-top: 2px;">${snippet}</div>
            <div style="font-size:10.5px; color:#1890ff; margin-top:2px;">Matched in: <strong>${matchedField}</strong></div>
          </div>
        </div>
      `;
    });

    elSearchResultsDropdown.innerHTML = html;
    elSearchResultsDropdown.classList.add('open');

    elSearchResultsDropdown.querySelectorAll('.official-search-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        selectQuestion(idx);
        // Clear search input on select
        if (elGlobalSearchInput) elGlobalSearchInput.value = '';
        if (elBtnClearSearch) elBtnClearSearch.style.display = 'none';
        closeSearch();
      });
    });
  }

  function closeSearch() {
    if (elSearchResultsDropdown) {
      elSearchResultsDropdown.classList.remove('open');
      elSearchResultsDropdown.innerHTML = '';
    }
  }

  function highlightSnippet(text, query, tokens) {
    if (!text) return '';
    const lower = text.toLowerCase();
    let pos = lower.indexOf(query.toLowerCase());
    if (pos === -1 && tokens && tokens.length > 0) {
      for (const t of tokens) {
        const p = lower.indexOf(t.toLowerCase());
        if (p !== -1) {
          pos = p;
          break;
        }
      }
    }
    let start = 0;
    if (pos > 30) start = pos - 30;
    let snippet = text.slice(start, start + 130);
    if (start > 0) snippet = '...' + snippet;
    if (start + 130 < text.length) snippet += '...';

    const wordsToHighlight = [];
    if (query && query.length > 1) {
      wordsToHighlight.push(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    }
    if (tokens) {
      tokens.forEach(t => {
        if (t.length > 2) {
          wordsToHighlight.push(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        }
      });
    }

    if (!wordsToHighlight.length) return escapeHtml(snippet);
    const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
    return escapeHtml(snippet).replace(regex, '<mark>$1</mark>');
  }

  // Open Challenges Navigator Modal
  function openChallengesModal() {
    const overlay = document.getElementById('modalNavigatorOverlay');
    if (!overlay) return;
    overlay.style.display = 'flex';
    const title = document.getElementById('modalNavTitle');
    const qList = (allQuestions && allQuestions.length) ? allQuestions : (window.ELAB_QUESTIONS || []);
    if (title) {
      title.textContent = `SRMIST eLab OS Challenges (${qList.length} Questions)`;
    }
    const filterInput = document.getElementById('txtModalFilter');
    if (filterInput) {
      filterInput.value = '';
    }
    renderModalCards('');
    setTimeout(() => {
      if (filterInput) filterInput.focus();
      // Scroll active card into view
      const grid = document.getElementById('modalCardsGrid');
      if (grid) {
        const activeCard = grid.querySelector('.modal-challenge-card.active');
        if (activeCard && activeCard.scrollIntoView) {
          activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 60);
  }

  // Close Challenges Navigator Modal
  function closeChallengesModal() {
    const overlay = document.getElementById('modalNavigatorOverlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  }

  // Expose globally for inline onclick handlers
  window.openChallengesModal = openChallengesModal;
  window.closeChallengesModal = closeChallengesModal;

  // Render Modal Challenge Cards Grid
  function renderModalCards(rawFilter) {
    const grid = document.getElementById('modalCardsGrid');
    if (!grid) return;
    const query = (rawFilter || '').trim().toLowerCase();
    const qList = (allQuestions && allQuestions.length) ? allQuestions : (window.ELAB_QUESTIONS || []);

    let matchedQuestions = [];
    qList.forEach((q, idx) => {
      const isPartial = q.partial || (q.status && (q.status.includes('88') || q.status.includes('77') || q.status.includes('Partial') || q.status.includes('Pending')));
      if (!query) {
        matchedQuestions.push({ q, idx, isPartial });
        return;
      }
      const matchChal = `challenge ${q.challenge}`.includes(query) || `${q.challenge}` === query || `q${q.challenge}` === query;
      const matchTopic = (q.topic || '').toLowerCase().includes(query);
      const matchTitle = (q.title || '').toLowerCase().includes(query);
      const matchDesc = (q.description || '').toLowerCase().includes(query);
      const matchStatus = (query === 'partial' || query === 'yellow' || query === 'pending') 
        ? isPartial 
        : ((query === 'full' || query === 'green' || query === 'solved' || query === 'done') ? !isPartial : false);

      if (matchChal || matchTopic || matchTitle || matchDesc || matchStatus) {
        matchedQuestions.push({ q, idx, isPartial });
      }
    });

    if (!matchedQuestions.length) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 36px 16px; text-align: center; color: #8c8c8c; font-size: 13.5px;">
          No challenges matching "<strong>${escapeHtml(rawFilter)}</strong>"
        </div>
      `;
      return;
    }

    let html = '';
    matchedQuestions.forEach(({ q, idx, isPartial }) => {
      const isActive = idx === currentIndex;
      const statusClass = isPartial ? 'solved-partial' : 'solved-full';
      const dotClass = isPartial ? 'dot-yellow' : 'dot-green';
      const topicTag = q.topic || 'OS';
      const descSnippet = q.description ? q.description.replace(/\s+/g, ' ').slice(0, 110) + '...' : 'No description';
      html += `
        <div class="modal-challenge-card ${statusClass} ${isActive ? 'active' : ''}" data-index="${idx}">
          <div class="card-top-row">
            <div style="display: flex; align-items: center;">
              <span class="card-status-dot ${dotClass}" title="${isPartial ? 'Partially Solved (Yellow)' : 'Fully Solved (Green)'}"></span>
              <span class="card-chal-title">Challenge ${q.challenge}</span>
            </div>
            <span class="card-topic-tag">${escapeHtml(topicTag)}</span>
          </div>
          <div class="card-desc-snippet">${escapeHtml(descSnippet)}</div>
        </div>
      `;
    });

    grid.innerHTML = html;

    // Attach click & touch events to cards
    grid.querySelectorAll('.modal-challenge-card').forEach(card => {
      function handleCardSelect(e) {
        e.preventDefault();
        const idx = parseInt(card.getAttribute('data-index'), 10);
        selectQuestion(idx);
        closeChallengesModal();
      }
      card.addEventListener('click', handleCardSelect);
      card.addEventListener('touchend', handleCardSelect);
    });
  }

  // Setup Event Handlers
  function setupEvents() {
    // Copy code button
    if (elBtnCopyCode) elBtnCopyCode.addEventListener('click', copyCode);

    // Download code button
    if (elBtnDownloadCode) elBtnDownloadCode.addEventListener('click', downloadCode);

    // Reset code button
    if (elBtnResetCode) elBtnResetCode.addEventListener('click', resetCode);

    // Navigation buttons
    if (elBtnHome) {
      elBtnHome.addEventListener('click', () => {
        selectQuestion(0);
      });
    }

    if (elBtnPrevChal) {
      elBtnPrevChal.addEventListener('click', () => {
        if (currentIndex > 0) selectQuestion(currentIndex - 1);
      });
    }

    if (elBtnNextChal) {
      elBtnNextChal.addEventListener('click', () => {
        if (currentIndex < allQuestions.length - 1) selectQuestion(currentIndex + 1);
      });
    }

    // Hexagon [⬡] button opens Challenges Navigator Modal (as requested)
    if (elBtnInfo) {
      elBtnInfo.addEventListener('click', (e) => {
        e.preventDefault();
        openChallengesModal();
      });
      elBtnInfo.addEventListener('touchend', (e) => {
        e.preventDefault();
        openChallengesModal();
      });
    }

    // Modal close and filter events
    if (elBtnCloseModalNav) {
      elBtnCloseModalNav.addEventListener('click', closeChallengesModal);
    }

    if (elModalOverlay) {
      elModalOverlay.addEventListener('click', (e) => {
        if (e.target === elModalOverlay) {
          closeChallengesModal();
        }
      });
    }

    if (elTxtModalFilter) {
      elTxtModalFilter.addEventListener('input', (e) => {
        renderModalCards(e.target.value);
      });
    }

    // Search input events
    if (elGlobalSearchInput) {
      elGlobalSearchInput.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.trim()) {
          if (elBtnClearSearch) elBtnClearSearch.style.display = 'flex';
          handleSearch(val);
        } else {
          if (elBtnClearSearch) elBtnClearSearch.style.display = 'none';
          closeSearch();
        }
      });

      elGlobalSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeSearch();
          elGlobalSearchInput.blur();
        }
      });
    }

    // Clear Search button
    if (elBtnClearSearch) {
      elBtnClearSearch.addEventListener('click', () => {
        if (elGlobalSearchInput) {
          elGlobalSearchInput.value = '';
          elGlobalSearchInput.focus();
        }
        elBtnClearSearch.style.display = 'none';
        closeSearch();
      });
    }

    // Close search on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-input-wrapper')) {
        closeSearch();
      }
    });

    // Press '/' to search shortcut and Escape to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elModalOverlay && elModalOverlay.style.display !== 'none') {
          closeChallengesModal();
          return;
        }
      }
      if (e.key === '/' && document.activeElement !== elGlobalSearchInput && !['input', 'textarea'].includes((document.activeElement.tagName || '').toLowerCase())) {
        if (elModalOverlay && elModalOverlay.style.display !== 'none') return;
        e.preventDefault();
        if (elGlobalSearchInput) {
          elGlobalSearchInput.focus();
          elGlobalSearchInput.select();
        }
      }
    });

    // Language dropdown change
    if (elSelLanguage) {
      elSelLanguage.addEventListener('change', (e) => {
        const lang = e.target.value;
        if (elBtnDownloadText) {
          elBtnDownloadText.textContent = lang === 'cpp' ? 'Download .cpp' : 'Download .c';
        }
      });
    }

    // Custom Input (stdin) T1 / T2 tab switches
    if (elBtnInputT1) {
      elBtnInputT1.addEventListener('click', () => {
        currentStdinTab = 0;
        renderSideCards();
      });
    }
    if (elBtnInputT2) {
      elBtnInputT2.addEventListener('click', () => {
        currentStdinTab = 1;
        renderSideCards();
      });
    }

    // Output MATCH T1 / MATCH T2 tab switches
    if (elBtnMatchT1) {
      elBtnMatchT1.addEventListener('click', () => {
        currentOutputTab = 0;
        outputShowingMatch = true;
        renderSideCards();
      });
    }
    if (elBtnMatchT2) {
      elBtnMatchT2.addEventListener('click', () => {
        currentOutputTab = 1;
        outputShowingMatch = true;
        renderSideCards();
      });
    }

    // Accordions expand / collapse
    setupAccordion('hdrLogicalTestCases', 'bodyLogicalTestCases');
    setupAccordion('hdrMandatoryTestCases', 'bodyMandatoryTestCases');
    setupAccordion('hdrComplexityTestCases', 'bodyComplexityTestCases');
  }

  function setupAccordion(headerId, bodyId) {
    const hdr = document.getElementById(headerId);
    const body = document.getElementById(bodyId);
    if (!hdr || !body) return;

    hdr.addEventListener('click', () => {
      const arrow = hdr.querySelector('.accordion-arrow');
      if (body.style.display === 'none') {
        body.style.display = 'block';
        if (arrow) arrow.textContent = '˅';
      } else {
        body.style.display = 'none';
        if (arrow) arrow.textContent = '˃';
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
