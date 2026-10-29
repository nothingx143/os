// SRMIST eLab OS Master Solutions Portal App
(function() {
  let allQuestions = [];
  let currentQuestion = null;
  let currentIndex = 0;
  let currentFilter = 'all';

  // DOM Elements
  const elPaletteGrid = document.getElementById('paletteGrid');
  const elProblemText = document.getElementById('problemStatementText');
  const elLblSession = document.getElementById('lblSession');
  const elLblChallengeTitle = document.getElementById('lblChallengeTitle');
  const elChalStatusBadge = document.getElementById('chalStatusBadge');
  const elEditorGutter = document.getElementById('editorGutter');
  const elEditorCodeBlock = document.getElementById('editorCodeBlock');
  const elLblLanguage = document.getElementById('lblLanguage');
  const elLblCodeStats = document.getElementById('lblCodeStats');
  const elBtnCopyCode = document.getElementById('btnCopyCode');
  const elBtnCopyText = document.getElementById('btnCopyText');
  const elBtnRunTest = document.getElementById('btnRunTest');
  const elBtnEvaluate = document.getElementById('btnEvaluate');
  const elLiveClock = document.getElementById('liveClock');
  const elGlobalSearchInput = document.getElementById('globalSearchInput');
  const elSearchClearBtn = document.getElementById('searchClearBtn');
  const elSearchResultsDropdown = document.getElementById('searchResultsDropdown');
  const elTcTabContent = document.getElementById('tcTabContent');
  const elEvalMandatoryText = document.getElementById('evalMandatoryText');
  const elEvalComplexityText = document.getElementById('evalComplexityText');
  const elCountSolved = document.getElementById('countSolved');
  const elCountUnsolved = document.getElementById('countUnsolved');
  const elBtnPrevChal = document.getElementById('btnPrevChal');
  const elBtnNextChal = document.getElementById('btnNextChal');

  // Initialize
  function init() {
    allQuestions = window.ELAB_QUESTIONS || [];
    if (!allQuestions.length) {
      elProblemText.innerText = "No questions found. Make sure questions_data.js is loaded.";
      return;
    }

    // Counts
    const solvedCount = allQuestions.filter(q => q.solved || q.status.includes('100%')).length;
    if (elCountSolved) elCountSolved.textContent = solvedCount;
    if (elCountUnsolved) elCountUnsolved.textContent = allQuestions.length - solvedCount;

    buildSearchIndex();
    renderPalette();
    setupEvents();
    startClock();

    // Check URL hash, e.g. #q=39
    const hashMatch = window.location.hash.match(/q=(\d+)/i);
    let startIdx = 0;
    if (hashMatch) {
      const qNum = parseInt(hashMatch[1], 10);
      const foundIdx = allQuestions.findIndex(q => q.challenge === qNum);
      if (foundIdx !== -1) startIdx = foundIdx;
    }

    selectQuestion(startIdx);
  }

  // Live Digital Clock
  function startClock() {
    function update() {
      const now = new Date();
      const options = { month: 'long', day: 'numeric', year: 'numeric' };
      const datePart = now.toLocaleDateString('en-US', options);
      const timePart = now.toLocaleTimeString('en-US', { hour12: true });
      if (elLiveClock) {
        elLiveClock.textContent = `${datePart}, ${timePart}`;
      }
    }
    update();
    setInterval(update, 1000);
  }

  // Render Palette
  function renderPalette() {
    if (!elPaletteGrid) return;
    elPaletteGrid.innerHTML = '';

    allQuestions.forEach((q, idx) => {
      const isSolved = q.solved || (q.status && q.status.includes('100%'));
      
      // Filter check
      if (currentFilter === 'solved' && !isSolved) return;
      if (currentFilter === 'unsolved' && isSolved) return;

      const btn = document.createElement('button');
      btn.className = `palette-btn ${isSolved ? 'solved' : 'unsolved'}`;
      if (idx === currentIndex) btn.classList.add('active');
      btn.textContent = q.challenge;
      btn.title = `Challenge ${q.challenge}: ${q.topic} (${isSolved ? '100% Solved' : 'Pending'})`;
      btn.addEventListener('click', () => selectQuestion(idx));
      elPaletteGrid.appendChild(btn);
    });
  }

  // Select Question
  function selectQuestion(idx) {
    if (idx < 0 || idx >= allQuestions.length) return;
    currentIndex = idx;
    currentQuestion = allQuestions[idx];

    // Update URL hash
    window.history.replaceState(null, null, `#q=${currentQuestion.challenge}`);

    // Update Palette active state
    const allBtns = elPaletteGrid.querySelectorAll('.palette-btn');
    allBtns.forEach(b => {
      if (parseInt(b.textContent, 10) === currentQuestion.challenge) {
        b.classList.add('active');
        b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        b.classList.remove('active');
      }
    });

    // Update Header breadcrumbs & badges
    if (elLblSession) elLblSession.textContent = currentQuestion.topic || 'General';
    if (elLblChallengeTitle) elLblChallengeTitle.textContent = `Level 1 Challenge ${currentQuestion.challenge}`;
    
    const isSolved = currentQuestion.solved || (currentQuestion.status && currentQuestion.status.includes('100%'));
    if (elChalStatusBadge) {
      elChalStatusBadge.textContent = isSolved ? "100% Full Pass" : (currentQuestion.status || "Pending");
      elChalStatusBadge.style.color = isSolved ? "var(--accent-green-bright)" : "var(--accent-amber)";
    }

    // Update Problem Statement
    if (elProblemText) {
      elProblemText.textContent = currentQuestion.description || "No problem statement available.";
    }

    // Render Test Cases
    renderTestCasesTab('logical');

    // Update Code Editor
    renderCodeEditor();

    // Close search dropdown
    closeSearchDropdown();
  }

  // Render Test Cases Tab
  function renderTestCasesTab(tabName) {
    if (!elTcTabContent || !currentQuestion) return;

    if (tabName === 'logical') {
      const tcList = currentQuestion.test_cases || [];
      if (!tcList.length) {
        elTcTabContent.innerHTML = '<div class="tc-card"><em>No logical test cases specified.</em></div>';
        return;
      }
      let html = '';
      tcList.forEach((tc, i) => {
        html += `
          <div class="tc-card">
            <div class="tc-card-title">Test Case ${i + 1}</div>
            <div class="tc-block">
              <div class="tc-label">INPUT (STDIN)</div>
              <pre class="tc-pre">${escapeHtml(tc.input || '(empty)')}</pre>
            </div>
            <div class="tc-block">
              <div class="tc-label">EXPECTED OUTPUT</div>
              <pre class="tc-pre">${escapeHtml(tc.output || '(empty)')}</pre>
            </div>
          </div>
        `;
      });
      elTcTabContent.innerHTML = html;
    } else if (tabName === 'mandatory') {
      const mand = currentQuestion.mandatory || [];
      if (!mand.length) {
        elTcTabContent.innerHTML = '<div class="tc-card"><em>No mandatory keywords specified for this challenge.</em></div>';
        return;
      }
      let html = '<div class="tc-card"><div class="tc-card-title">Required Functions / Keywords</div><div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:6px;">';
      mand.forEach(m => {
        html += `<span class="lang-tag">${escapeHtml(m)}</span>`;
      });
      html += '</div></div>';
      elTcTabContent.innerHTML = html;
    } else if (tabName === 'complexity') {
      const c = currentQuestion.complexity || {};
      elTcTabContent.innerHTML = `
        <div class="tc-card">
          <div class="tc-card-title">Static Analysis Complexity Constraints</div>
          <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-top:8px;">
            <div class="tc-block"><div class="tc-label">CYCLOMATIC COMPLEXITY</div><div class="tc-pre">&le; ${c.ccn || 3}</div></div>
            <div class="tc-block"><div class="tc-label">TOKEN COUNT</div><div class="tc-pre">&le; ${c.tokens || 300}</div></div>
            <div class="tc-block"><div class="tc-label">NON-COMMENT LOC</div><div class="tc-pre">&le; ${c.loc || 100}</div></div>
          </div>
        </div>
      `;
    }
  }

  // Render Code Editor
  function renderCodeEditor() {
    if (!currentQuestion) return;
    const code = currentQuestion.code || '// Solution code not available.\n';
    const lines = code.split('\n');

    // Gutter line numbers
    if (elEditorGutter) {
      let gutterHtml = '';
      for (let i = 1; i <= lines.length; i++) {
        gutterHtml += `${i}<br>`;
      }
      elEditorGutter.innerHTML = gutterHtml;
    }

    // Code content
    if (elEditorCodeBlock) {
      elEditorCodeBlock.textContent = code;
    }

    // Meta stats
    if (elLblLanguage) {
      elLblLanguage.textContent = (currentQuestion.language === 'cpp' ? 'C++ (G++ 11.2)' : 'C (GCC 11.2)');
    }
    if (elLblCodeStats) {
      const byteLen = new Blob([code]).size;
      elLblCodeStats.textContent = `Lines: ${lines.length} | Bytes: ${byteLen}`;
    }

    // Reset copy button
    if (elBtnCopyText) elBtnCopyText.textContent = "Copy Code";
    if (elBtnCopyCode) elBtnCopyCode.classList.remove('copied');

    // Update bottom drawer
    if (elEvalMandatoryText) {
      const mand = currentQuestion.mandatory || [];
      elEvalMandatoryText.textContent = mand.length ? `✓ Verified (${mand.slice(0, 3).join(', ')})` : `✓ Mandatory checks passed`;
    }
    if (elEvalComplexityText) {
      const c = currentQuestion.complexity || {};
      elEvalComplexityText.textContent = `✓ CCN ≤ ${c.ccn || 3}, Tokens ≤ ${c.tokens || 300}, LOC ≤ ${c.loc || 100}`;
    }
  }

  // Search Engine
  function buildSearchIndex() {
    allQuestions.forEach(q => {
      q._chalStr = String(q.challenge);
      q._normDesc = (q.description || '').toLowerCase();
      q._normTopic = (q.topic || '').toLowerCase();
      q._normCode = (q.code || '').toLowerCase();
      
      const tokens = (q._normDesc + ' ' + q._normTopic).match(/[a-z0-9]+/g) || [];
      q._tokens = new Set(tokens);

      const tcStr = (q.test_cases || []).map(tc => `${tc.input || ''} ${tc.output || ''}`).join(' ').toLowerCase();
      q._tcStr = tcStr;
    });
  }

  function searchQuestions(rawQuery) {
    const query = (rawQuery || '').trim().toLowerCase();
    if (!query) return [];

    const numMatch = query.match(/^(?:q|#|challenge|question)?\s*(\d+)\b/i);
    const targetNum = numMatch ? parseInt(numMatch[1], 10) : null;
    const queryTokens = query.match(/[a-z0-9]+/g) || [];

    const results = [];

    allQuestions.forEach((q, idx) => {
      let score = 0;
      let matchedField = 'description';

      // 1. Direct Challenge Number Match (+10,000)
      if (targetNum !== null && q.challenge === targetNum) {
        score += 10000;
        matchedField = 'challenge';
      }

      // 2. Exact Phrase Match in problem description (+5,000)
      if (q._normDesc.includes(query)) {
        score += 5000;
        matchedField = 'description';
      }

      // 3. Topic Match (+4,000)
      if (q._normTopic.includes(query)) {
        score += 4000;
        matchedField = 'topic';
      }

      // 4. Token Overlap Score
      if (queryTokens.length > 0 && q._tokens) {
        let matched = 0;
        queryTokens.forEach(t => {
          if (q._tokens.has(t)) matched++;
        });
        if (matched === queryTokens.length) {
          score += 3000 + (matched * 50);
        } else if (matched > 0) {
          score += Math.floor(1500 * (matched / queryTokens.length));
        }
      }

      // 5. Code Substring Match (+2,500)
      if (q._normCode.includes(query) && score < 2500) {
        score += 2500;
        matchedField = 'code';
      }

      // 6. Test Cases Match (+2,000)
      if (q._tcStr && q._tcStr.includes(query) && score < 2000) {
        score += 2000;
        matchedField = 'test_cases';
      }

      if (score > 0) {
        results.push({ q, idx, score, matchedField });
      }
    });

    results.sort((a, b) => b.score - a.score);
    return results;
  }

  function handleSearch(query) {
    if (!query.trim()) {
      closeSearchDropdown();
      if (elSearchClearBtn) elSearchClearBtn.classList.remove('visible');
      return;
    }

    if (elSearchClearBtn) elSearchClearBtn.classList.add('visible');
    const matches = searchQuestions(query);
    renderSearchResults(matches, query);
  }

  function renderSearchResults(matches, query) {
    if (!elSearchResultsDropdown) return;

    if (!matches.length) {
      elSearchResultsDropdown.innerHTML = '<div style="padding:12px 16px; color:var(--text-secondary); font-size:0.85rem;">No matching questions found for "<em>' + escapeHtml(query) + '</em>"</div>';
      elSearchResultsDropdown.classList.add('open');
      return;
    }

    let html = '';
    matches.slice(0, 15).forEach(({ q, idx, score, matchedField }) => {
      const isSolved = q.solved || (q.status && q.status.includes('100%'));
      const snippet = highlightSnippet(q.description || '', query);
      html += `
        <div class="search-result-item" data-index="${idx}">
          <span class="res-chal-badge" style="background-color: ${isSolved ? '#238636' : '#d29922'};">Q${q.challenge}</span>
          <div class="res-content">
            <div class="res-title">Challenge ${q.challenge}: ${escapeHtml(q.topic)}</div>
            <div class="res-snippet">${snippet}</div>
            <div class="res-meta">Matched in: <strong>${matchedField}</strong> &bull; Score: ${score}</div>
          </div>
        </div>
      `;
    });

    elSearchResultsDropdown.innerHTML = html;
    elSearchResultsDropdown.classList.add('open');

    // Attach click events
    elSearchResultsDropdown.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        selectQuestion(idx);
        closeSearchDropdown();
      });
    });
  }

  function closeSearchDropdown() {
    if (elSearchResultsDropdown) {
      elSearchResultsDropdown.classList.remove('open');
      elSearchResultsDropdown.innerHTML = '';
    }
  }

  function highlightSnippet(text, query) {
    if (!text) return '';
    const qLower = query.toLowerCase();
    const pos = text.toLowerCase().indexOf(qLower);
    let start = 0;
    if (pos > 40) start = pos - 40;
    let snippet = text.slice(start, start + 140);
    if (start > 0) snippet = '...' + snippet;
    if (start + 140 < text.length) snippet += '...';

    // Highlight query occurrences
    const escapedQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQ})`, 'gi');
    return escapeHtml(snippet).replace(regex, '<mark>$1</mark>');
  }

  // Copy Code to Clipboard
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
      alert("Failed to copy code: " + err);
    });
  }

  // Setup Event Listeners
  function setupEvents() {
    // Copy button
    if (elBtnCopyCode) elBtnCopyCode.addEventListener('click', copyCode);

    // Prev / Next buttons
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

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderPalette();
      });
    });

    // Test case tabs
    const tcTabs = document.querySelectorAll('.tc-tab-btn');
    tcTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tcTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderTestCasesTab(tab.getAttribute('data-tab'));
      });
    });

    // Search events
    if (elGlobalSearchInput) {
      elGlobalSearchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
      });

      elGlobalSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeSearchDropdown();
          elGlobalSearchInput.blur();
        }
      });
    }

    if (elSearchClearBtn) {
      elSearchClearBtn.addEventListener('click', () => {
        if (elGlobalSearchInput) {
          elGlobalSearchInput.value = '';
          elGlobalSearchInput.focus();
        }
        closeSearchDropdown();
        elSearchClearBtn.classList.remove('visible');
      });
    }

    // Click outside to close dropdown
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search')) {
        closeSearchDropdown();
      }
    });

    // Hotkey: press '/' to focus search
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== elGlobalSearchInput) {
        e.preventDefault();
        if (elGlobalSearchInput) {
          elGlobalSearchInput.focus();
          elGlobalSearchInput.select();
        }
      }
    });

    // Run / Evaluate Simulation
    if (elBtnEvaluate) {
      elBtnEvaluate.addEventListener('click', () => {
        elBtnEvaluate.textContent = "Evaluating...";
        setTimeout(() => {
          elBtnEvaluate.textContent = "Evaluate (100%)";
          const drawer = document.getElementById('evalDrawer');
          if (drawer) {
            drawer.style.animation = 'none';
            drawer.offsetHeight; /* trigger reflow */
            drawer.style.animation = 'pulse 0.4s ease';
          }
        }, 400);
      });
    }

    if (elBtnRunTest) {
      elBtnRunTest.addEventListener('click', () => {
        elBtnRunTest.textContent = "Running...";
        setTimeout(() => {
          elBtnRunTest.textContent = "Run";
        }, 300);
      });
    }
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

  // Start app on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
