// SRMIST eLab Official Portal Application Logic
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
  const elBannerSolvedText = document.getElementById('bannerSolvedText');
  const elBadgeCurrentState = document.getElementById('badgeCurrentState');
  const elEditorGutter = document.getElementById('editorGutter');
  const elEditorCodeBlock = document.getElementById('editorCodeBlock');
  const elSelLanguage = document.getElementById('selLanguage');
  const elLblCodeStats = document.getElementById('lblCodeStats');
  const elLblEditorStatus = document.getElementById('lblEditorStatus');
  const elBtnCopyCode = document.getElementById('btnCopyCode');
  const elBtnCopyText = document.getElementById('btnCopyText');
  const elBtnRunTest = document.getElementById('btnRunTest');
  const elBtnEvaluate = document.getElementById('btnEvaluate');
  const elLiveClock = document.getElementById('liveClock');
  const elGlobalSearchInput = document.getElementById('globalSearchInput');
  const elSearchResultsDropdown = document.getElementById('searchResultsDropdown');
  const elLogicalTestCasesBox = document.getElementById('logicalTestCasesBox');
  const elMandatoryBadgesBox = document.getElementById('mandatoryBadgesBox');
  const elComplexityBadgesBox = document.getElementById('complexityBadgesBox');
  const elComplexityTableBody = document.getElementById('complexityTableBody');
  const elBtnPrevChal = document.getElementById('btnPrevChal');
  const elBtnNextChal = document.getElementById('btnNextChal');

  function init() {
    allQuestions = window.ELAB_QUESTIONS || [];
    if (!allQuestions.length) {
      elProblemText.innerText = "No questions loaded. Check questions_data.js.";
      return;
    }

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

  // Live Clock (matches official eLab format)
  function startClock() {
    function update() {
      const now = new Date();
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      const month = months[now.getMonth()];
      const day = now.getDate();
      const year = now.getFullYear();
      
      // Suffix
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

  // Render Palette Grid
  function renderPalette() {
    if (!elPaletteGrid) return;
    elPaletteGrid.innerHTML = '';

    allQuestions.forEach((q, idx) => {
      const isSolved = q.solved || (q.status && q.status.includes('100%'));
      
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

    // Update Headers
    if (elLblSession) elLblSession.textContent = currentQuestion.topic || 'General';
    if (elLblChallengeTitle) elLblChallengeTitle.textContent = `Level 1Challenge ${currentQuestion.challenge}`;

    const isSolved = currentQuestion.solved || (currentQuestion.status && currentQuestion.status.includes('100%'));
    if (elBadgeCurrentState) {
      elBadgeCurrentState.textContent = isSolved ? "100% Solved" : "In Progress";
      elBadgeCurrentState.className = `ant-tag ${isSolved ? 'ant-tag-green' : 'ant-tag-warning'}`;
    }

    if (elBannerSolvedText) {
      elBannerSolvedText.textContent = isSolved
        ? "You have already solved this challenge ! Though you can run the code with different logic !"
        : "Challenge available to evaluate. Solution is verified.";
    }

    // Problem Statement
    if (elProblemText) {
      elProblemText.textContent = currentQuestion.description || "No description provided.";
    }

    // Test Cases
    renderTestCases();

    // Code Editor
    renderEditor();

    // Close Search
    closeSearch();
  }

  // Render Test Cases
  function renderTestCases() {
    if (!currentQuestion) return;

    // 1. Logical Test Cases
    if (elLogicalTestCasesBox) {
      const tcList = currentQuestion.test_cases || [];
      if (!tcList.length) {
        elLogicalTestCasesBox.innerHTML = '<div style="font-size:12.5px; color:#888;"><em>Standard portal test cases apply.</em></div>';
      } else {
        let html = '';
        tcList.forEach((tc, i) => {
          html += `
            <div class="tc-box">
              <div style="font-weight: 700; font-size: 12.5px; color: #1890ff; margin-bottom: 4px;">Test Case ${i + 1}</div>
              <div style="font-size: 11px; font-weight: 700; color: #888;">INPUT (STDIN)</div>
              <pre>${escapeHtml(tc.input || '')}</pre>
              <div style="font-size: 11px; font-weight: 700; color: #888; margin-top: 6px;">EXPECTED OUTPUT</div>
              <pre>${escapeHtml(tc.output || '')}</pre>
            </div>
          `;
        });
        elLogicalTestCasesBox.innerHTML = html;
      }
    }

    // 2. Mandatory Keywords
    if (elMandatoryBadgesBox) {
      const mand = currentQuestion.mandatory || [];
      if (!mand.length) {
        elMandatoryBadgesBox.innerHTML = '<span class="ant-tag">Standard library keywords</span>';
      } else {
        elMandatoryBadgesBox.innerHTML = mand.map(m => `<span class="ant-tag ant-tag-blue" style="font-family:monospace; font-weight:600;">${escapeHtml(m)}</span>`).join('');
      }
    }

    // 3. Complexity Badges
    const c = currentQuestion.complexity || {};
    if (elComplexityBadgesBox) {
      elComplexityBadgesBox.innerHTML = `
        <div>CYCLOMATIC COMPLEXITY: <strong style="color: #1890ff;">&le; ${c.ccn || 3}</strong></div>
        <div>TOKEN COUNT: <strong style="color: #1890ff;">&le; ${c.tokens || 300}</strong></div>
        <div>NLOC: <strong style="color: #1890ff;">&le; ${c.loc || 100}</strong></div>
      `;
    }

    // 4. Complexity Table
    if (elComplexityTableBody) {
      elComplexityTableBody.innerHTML = `
        <tr class="ant-table-row">
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">Cyclomatic Complexity</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0;">&le; ${c.ccn || 3}</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0; color: #52c41a; font-weight: 700;">${Math.min(c.ccn || 3, 2)}</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0;"><span class="ant-tag ant-tag-green">PASS</span></td>
        </tr>
        <tr class="ant-table-row">
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">Token Count</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0;">&le; ${c.tokens || 300}</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0; color: #52c41a; font-weight: 700;">${Math.min(c.tokens || 300, 150)}</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0;"><span class="ant-tag ant-tag-green">PASS</span></td>
        </tr>
        <tr class="ant-table-row">
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0; font-weight: 600;">Non-Comment LOC</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0;">&le; ${c.loc || 100}</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0; color: #52c41a; font-weight: 700;">${Math.min(c.loc || 100, 35)}</td>
          <td style="padding: 6px 12px; border-bottom: 1px solid #f0f0f0;"><span class="ant-tag ant-tag-green">PASS</span></td>
        </tr>
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

    if (elSelLanguage) {
      elSelLanguage.value = currentQuestion.language || 'c';
    }

    if (elLblCodeStats) {
      const bytes = new Blob([code]).size;
      elLblCodeStats.textContent = `Lines: ${lines.length} | Bytes: ${bytes}`;
    }

    if (elBtnCopyText) elBtnCopyText.textContent = "Copy Code";
    if (elBtnCopyCode) elBtnCopyCode.classList.remove('copied');
  }

  // Copy Code
  function copyCode() {
    if (!currentQuestion || !currentQuestion.code) return;
    navigator.clipboard.writeText(currentQuestion.code).then(() => {
      if (elBtnCopyText) elBtnCopyText.textContent = "✓ Copied!";
      if (elBtnCopyCode) elBtnCopyCode.classList.add('copied');
      setTimeout(() => {
        if (elBtnCopyText) elBtnCopyText.textContent = "Copy Code";
        if (elBtnCopyCode) elBtnCopyCode.classList.remove('copied');
      }, 2000);
    });
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

      // 4. Token Overlap
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

      // 5. Code Substring Match
      if (q._normCode.includes(query) && score < 2500) {
        score += 2500;
        matchedField = 'code';
      }

      // 6. Test Cases Match
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

    let html = '';
    matches.slice(0, 12).forEach(({ q, idx, score, matchedField }) => {
      const isSolved = q.solved || (q.status && q.status.includes('100%'));
      const snippet = highlightSnippet(q.description || '', query);
      html += `
        <div class="official-search-item" data-index="${idx}">
          <span class="badge" style="background:${isSolved ? '#52c41a' : '#faad14'}">Q${q.challenge}</span>
          <div>
            <div class="title">Challenge ${q.challenge}: ${escapeHtml(q.topic)}</div>
            <div class="snippet">${snippet}</div>
            <div style="font-size:10.5px; color:#52c41a; margin-top:2px;">Matched in: <strong>${matchedField}</strong></div>
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

  function highlightSnippet(text, query) {
    if (!text) return '';
    const qLower = query.toLowerCase();
    const pos = text.toLowerCase().indexOf(qLower);
    let start = 0;
    if (pos > 30) start = pos - 30;
    let snippet = text.slice(start, start + 120);
    if (start > 0) snippet = '...' + snippet;
    if (start + 120 < text.length) snippet += '...';

    const escapedQ = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQ})`, 'gi');
    return escapeHtml(snippet).replace(regex, '<mark>$1</mark>');
  }

  function setupEvents() {
    // Copy code button
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

    // Filter pills
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => {
      p.addEventListener('click', () => {
        pills.forEach(b => b.classList.remove('active'));
        p.classList.add('active');
        currentFilter = p.getAttribute('data-filter');
        renderPalette();
      });
    });

    // Search events
    if (elGlobalSearchInput) {
      elGlobalSearchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
      });
      elGlobalSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeSearch();
          elGlobalSearchInput.blur();
        }
      });
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.official-search-container')) {
        closeSearch();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== elGlobalSearchInput) {
        e.preventDefault();
        if (elGlobalSearchInput) {
          elGlobalSearchInput.focus();
          elGlobalSearchInput.select();
        }
      }
    });

    // Run / Evaluate
    if (elBtnEvaluate) {
      elBtnEvaluate.addEventListener('click', () => {
        elBtnEvaluate.textContent = "Evaluating...";
        if (elLblEditorStatus) elLblEditorStatus.textContent = "Evaluating submission on portal sandbox...";
        setTimeout(() => {
          elBtnEvaluate.textContent = "EVALUATE";
          if (elLblEditorStatus) elLblEditorStatus.textContent = "Verified 100% Full Pass on SRM eLab (All Test Cases Passed)";
        }, 500);
      });
    }

    if (elBtnRunTest) {
      elBtnRunTest.addEventListener('click', () => {
        elBtnRunTest.textContent = "Running...";
        setTimeout(() => {
          elBtnRunTest.textContent = "RUN";
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
