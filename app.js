/* ============================================================
   DAYBREAK — App Engine
   Theme system · Task manager · Timeline · Focus timer · Particles
   ============================================================ */

// ─── Theme Definitions ──────────────────────────────────────
const THEMES = [
  {
    name: 'Sunrise Gold',
    icon: '☀️',
    accent: '#f59e0b',
    accentSecondary: '#fb923c',
    bgPrimary: '#1a1207',
    gradientBg: 'linear-gradient(160deg, #1a1207 0%, #2d1a04 40%, #1a1207 100%)',
    gradientHero: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 50%, #f97316 100%)',
    particleColor: [245, 158, 11],
    quote: '"Every sunrise brings a new page. Make it a good one."'
  },
  {
    name: 'Ocean Depths',
    icon: '🌊',
    accent: '#06b6d4',
    accentSecondary: '#3b82f6',
    bgPrimary: '#0a1628',
    gradientBg: 'linear-gradient(160deg, #0a1628 0%, #0c2340 40%, #0a1628 100%)',
    gradientHero: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
    particleColor: [6, 182, 212],
    quote: '"The sea, once it casts its spell, holds one in its net of wonder forever."'
  },
  {
    name: 'Forest Canopy',
    icon: '🌿',
    accent: '#22c55e',
    accentSecondary: '#10b981',
    bgPrimary: '#0a1a0e',
    gradientBg: 'linear-gradient(160deg, #0a1a0e 0%, #0d2818 40%, #0a1a0e 100%)',
    gradientHero: 'linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)',
    particleColor: [34, 197, 94],
    quote: '"In every walk with nature, one receives far more than they seek."'
  },
  {
    name: 'Lavender Dreams',
    icon: '💜',
    accent: '#a78bfa',
    accentSecondary: '#c084fc',
    bgPrimary: '#14101f',
    gradientBg: 'linear-gradient(160deg, #14101f 0%, #1e1535 40%, #14101f 100%)',
    gradientHero: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #e879f9 100%)',
    particleColor: [167, 139, 250],
    quote: '"Rest is not idleness; it is the sweetness of life."'
  },
  {
    name: 'Cherry Blossom',
    icon: '🌸',
    accent: '#f472b6',
    accentSecondary: '#fb7185',
    bgPrimary: '#1a0f14',
    gradientBg: 'linear-gradient(160deg, #1a0f14 0%, #2d1520 40%, #1a0f14 100%)',
    gradientHero: 'linear-gradient(135deg, #f472b6 0%, #fb7185 50%, #f43f5e 100%)',
    particleColor: [244, 114, 182],
    quote: '"Like cherry blossoms, let each moment bloom with grace."'
  },
  {
    name: 'Aurora Borealis',
    icon: '🌌',
    accent: '#34d399',
    accentSecondary: '#818cf8',
    bgPrimary: '#050d14',
    gradientBg: 'linear-gradient(160deg, #050d14 0%, #0a1a2a 30%, #0d1520 70%, #050d14 100%)',
    gradientHero: 'linear-gradient(135deg, #34d399 0%, #60a5fa 40%, #818cf8 70%, #a78bfa 100%)',
    particleColor: [52, 211, 153],
    quote: '"The sky broke like an egg into full sunset, and the water caught fire."'
  },
  {
    name: 'Desert Dusk',
    icon: '🏜️',
    accent: '#f97316',
    accentSecondary: '#ef4444',
    bgPrimary: '#1a120a',
    gradientBg: 'linear-gradient(160deg, #1a120a 0%, #2d1a0a 40%, #1a120a 100%)',
    gradientHero: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)',
    particleColor: [249, 115, 22],
    quote: '"The desert tells you everything if you listen with your eyes."'
  },
  {
    name: 'Midnight Indigo',
    icon: '🌙',
    accent: '#6366f1',
    accentSecondary: '#8b5cf6',
    bgPrimary: '#0a0a1a',
    gradientBg: 'linear-gradient(160deg, #0a0a1a 0%, #12103a 40%, #0a0a1a 100%)',
    gradientHero: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
    particleColor: [99, 102, 241],
    quote: '"Stars can\'t shine without darkness."'
  },
  {
    name: 'Tropical Lagoon',
    icon: '🌴',
    accent: '#14b8a6',
    accentSecondary: '#06b6d4',
    bgPrimary: '#071515',
    gradientBg: 'linear-gradient(160deg, #071515 0%, #0a2626 40%, #071515 100%)',
    gradientHero: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 50%, #06b6d4 100%)',
    particleColor: [20, 184, 166],
    quote: '"Life is better in flip-flops, with sand between your toes."'
  },
  {
    name: 'Autumn Ember',
    icon: '🍂',
    accent: '#ea580c',
    accentSecondary: '#dc2626',
    bgPrimary: '#1a0e08',
    gradientBg: 'linear-gradient(160deg, #1a0e08 0%, #2a1408 40%, #1a0e08 100%)',
    gradientHero: 'linear-gradient(135deg, #fbbf24 0%, #ea580c 50%, #dc2626 100%)',
    particleColor: [234, 88, 12],
    quote: '"Autumn shows us how beautiful it is to let things go."'
  },
  {
    name: 'Frost Crystal',
    icon: '❄️',
    accent: '#93c5fd',
    accentSecondary: '#c7d2fe',
    bgPrimary: '#0c1220',
    gradientBg: 'linear-gradient(160deg, #0c1220 0%, #121e3a 40%, #0c1220 100%)',
    gradientHero: 'linear-gradient(135deg, #e0f2fe 0%, #93c5fd 50%, #60a5fa 100%)',
    particleColor: [147, 197, 253],
    quote: '"In the depth of winter, I found there was, within me, an invincible summer."'
  },
  {
    name: 'Volcanic Night',
    icon: '🌋',
    accent: '#ef4444',
    accentSecondary: '#f97316',
    bgPrimary: '#1a0808',
    gradientBg: 'linear-gradient(160deg, #1a0808 0%, #2d0a0a 40%, #1a0808 100%)',
    gradientHero: 'linear-gradient(135deg, #fbbf24 0%, #ef4444 50%, #dc2626 100%)',
    particleColor: [239, 68, 68],
    quote: '"From the ashes, a fire shall be woken."'
  },
  {
    name: 'Moss Garden',
    icon: '🪴',
    accent: '#84cc16',
    accentSecondary: '#22c55e',
    bgPrimary: '#0e1a08',
    gradientBg: 'linear-gradient(160deg, #0e1a08 0%, #162a0c 40%, #0e1a08 100%)',
    gradientHero: 'linear-gradient(135deg, #a3e635 0%, #84cc16 50%, #22c55e 100%)',
    particleColor: [132, 204, 22],
    quote: '"Simplicity is the ultimate sophistication."'
  },
  {
    name: 'Rose Quartz',
    icon: '💎',
    accent: '#ec4899',
    accentSecondary: '#f472b6',
    bgPrimary: '#1a0c16',
    gradientBg: 'linear-gradient(160deg, #1a0c16 0%, #2a1224 40%, #1a0c16 100%)',
    gradientHero: 'linear-gradient(135deg, #f9a8d4 0%, #ec4899 50%, #db2777 100%)',
    particleColor: [236, 72, 153],
    quote: '"She remembered who she was, and the game changed."'
  },
  {
    name: 'Northern Sky',
    icon: '🏔️',
    accent: '#38bdf8',
    accentSecondary: '#22d3ee',
    bgPrimary: '#0a1420',
    gradientBg: 'linear-gradient(160deg, #0a1420 0%, #0e2030 40%, #0a1420 100%)',
    gradientHero: 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 50%, #0ea5e9 100%)',
    particleColor: [56, 189, 248],
    quote: '"The mountains are calling and I must go."'
  },
  {
    name: 'Golden Hour',
    icon: '🌅',
    accent: '#eab308',
    accentSecondary: '#f59e0b',
    bgPrimary: '#1a1508',
    gradientBg: 'linear-gradient(160deg, #1a1508 0%, #2d2208 40%, #1a1508 100%)',
    gradientHero: 'linear-gradient(135deg, #fef08a 0%, #eab308 50%, #f59e0b 100%)',
    particleColor: [234, 179, 8],
    quote: '"Light tomorrow with today."'
  }
];

// ─── Utility ─────────────────────────────────────────────────
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

function dateFromKey(key) {
  const [year, month, day] = key.split('-').map(Number);
  return new Date(year, month, day);
}

function formatDateKey(key) {
  return dateFromKey(key).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatTime12(h24) {
  const h = h24 % 12 || 12;
  const ampm = h24 < 12 ? 'AM' : 'PM';
  return `${h}:00 ${ampm}`;
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function normalizeTask(task) {
  return {
    id: task.id || uid(),
    text: task.text || 'Untitled task',
    priority: task.priority || 'medium',
    time: task.time || '',
    done: Boolean(task.done),
    createdAt: task.createdAt || Date.now(),
    completedAt: task.completedAt || null
  };
}

// ─── State ───────────────────────────────────────────────────
let currentThemeIndex = getDayOfYear() % THEMES.length;
let tasks = [];
let focusInterval = null;
let focusSeconds = 25 * 60;
let focusRunning = false;
let totalFocusMinutes = 0;
let historyFilter = 'all';

// ─── DOM refs ────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const root = document.documentElement;

// ─── Theme Engine ────────────────────────────────────────────
function applyTheme(index) {
  const theme = THEMES[index];
  const r = root.style;

  r.setProperty('--accent', theme.accent);
  r.setProperty('--accent-secondary', theme.accentSecondary);
  r.setProperty('--accent-glow', theme.accent + '40');
  r.setProperty('--bg-primary', theme.bgPrimary);
  r.setProperty('--gradient-bg', theme.gradientBg);
  r.setProperty('--gradient-hero', theme.gradientHero);
  r.setProperty('--border-accent', theme.accent + '4D');

  document.body.style.background = theme.gradientBg;
  $('#theme-label').textContent = `${theme.icon} ${theme.name}`;
  $('#brand-icon').textContent = theme.icon;
  $('#hero-quote').textContent = theme.quote;

  currentThemeIndex = index;
  initParticles(theme.particleColor);
}

function shuffleTheme() {
  let next;
  do { next = Math.floor(Math.random() * THEMES.length); } while (next === currentThemeIndex);
  applyTheme(next);
}

// ─── Greeting & Date ─────────────────────────────────────────
function updateGreeting() {
  const h = new Date().getHours();
  let greeting;
  if (h < 5) greeting = 'Quiet Night';
  else if (h < 12) greeting = 'Good Morning';
  else if (h < 17) greeting = 'Good Afternoon';
  else if (h < 21) greeting = 'Good Evening';
  else greeting = 'Night Owl Mode';
  $('#greeting-text').textContent = greeting;
}

function updateDate() {
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  $('#hero-date').textContent = now.toLocaleDateString('en-US', opts);
}

function updateClock() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  const s = now.getSeconds().toString().padStart(2, '0');
  $('#hero-clock').textContent = `${h} : ${m} : ${s}`;
}

// ─── Timeline ────────────────────────────────────────────────
function renderTimeline() {
  const container = $('#timeline-container');
  const currentHour = new Date().getHours();
  let html = '';

  for (let h = 6; h <= 23; h++) {
    const isCurrent = h === currentHour;
    const scheduledTasks = tasks.filter(t => {
      if (!t.time) return false;
      const taskH = parseInt(t.time.split(':')[0], 10);
      return taskH === h;
    });

    const content = scheduledTasks.length > 0
      ? scheduledTasks.map(t =>
          `<span class="timeline-slot__task ${t.done ? 'timeline-slot__task--done' : ''}">${escapeHtml(t.text)}</span>`
        ).join(', ')
      : '';

    html += `
      <div class="timeline-slot ${isCurrent ? 'timeline-slot--current' : ''}" data-hour="${h}">
        <div class="timeline-slot__time">${formatTime12(h)}</div>
        <div class="timeline-slot__content">${content}</div>
      </div>
    `;
  }

  container.innerHTML = html;

  // Scroll to current hour
  const currentSlot = container.querySelector('.timeline-slot--current');
  if (currentSlot) {
    currentSlot.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}

// ─── Tasks ───────────────────────────────────────────────────
function loadTasks() {
  try {
    const saved = localStorage.getItem('daybreak_tasks_' + todayKey());
    tasks = saved ? JSON.parse(saved).map(normalizeTask) : [];
  } catch { tasks = []; }
}

function saveTasks() {
  localStorage.setItem('daybreak_tasks_' + todayKey(), JSON.stringify(tasks));
}

function loadNotes() {
  const saved = localStorage.getItem('daybreak_notes_' + todayKey());
  if (saved) $('#notes-area').value = saved;
}

function saveNotes() {
  localStorage.setItem('daybreak_notes_' + todayKey(), $('#notes-area').value);
}

function addTask(text, priority, time) {
  tasks.push(normalizeTask({ id: uid(), text, priority, time, done: false, createdAt: Date.now() }));
  saveTasks();
  renderTasks();
  renderTimeline();
  updateStats();
  renderHistory();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    task.completedAt = task.done ? Date.now() : null;
    saveTasks();
    renderTasks();
    renderTimeline();
    updateStats();
    renderHistory();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  renderTasks();
  renderTimeline();
  updateStats();
  renderHistory();
}

function renderTasks() {
  const list = $('#task-list');
  const empty = $('#task-empty');

  if (tasks.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');

  // Sort: undone first, then by priority
  const priOrder = { high: 0, medium: 1, low: 2 };
  const sorted = [...tasks].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    return priOrder[a.priority] - priOrder[b.priority];
  });

  list.innerHTML = sorted.map(t => `
    <li class="task-item ${t.done ? 'task-item--done' : ''}" data-id="${t.id}">
      <button class="task-item__check ${t.done ? 'task-item__check--checked' : ''}" onclick="toggleTask('${t.id}')">
        ${t.done ? '✓' : ''}
      </button>
      <div class="task-item__body">
        <div class="task-item__text">${escapeHtml(t.text)}</div>
        <div class="task-item__meta">
          <span class="task-item__tag task-item__tag--${t.priority}">${t.priority}</span>
          ${t.time ? `<span class="task-item__time-tag">⏰ ${t.time}</span>` : ''}
        </div>
      </div>
      <button class="task-item__delete" onclick="deleteTask('${t.id}')">×</button>
    </li>
  `).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function updateStats() {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const progress = total > 0 ? Math.round((done / total) * 100) : 0;
  const history = getTaskHistory();
  const pastDone = history.reduce((sum, day) => sum + day.tasks.filter(t => t.done).length, 0);

  $('#stat-total .stat-card__value').textContent = total;
  $('#stat-done .stat-card__value').textContent = done;
  $('#stat-progress .stat-card__value').textContent = progress + '%';
  $('#stat-focus .stat-card__value').textContent = totalFocusMinutes > 0 ? Math.round(totalFocusMinutes) + 'm' : '0m';
  $('#stat-history .stat-card__value').textContent = pastDone;
}

function getTaskHistory() {
  const today = todayKey();
  const days = [];

  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith('daybreak_tasks_')) continue;

    const dateKey = key.replace('daybreak_tasks_', '');
    if (dateKey === today) continue;

    const date = dateFromKey(dateKey);
    if (Number.isNaN(date.getTime())) continue;

    try {
      const dayTasks = JSON.parse(localStorage.getItem(key) || '[]').map(normalizeTask);
      if (dayTasks.length) days.push({ key: dateKey, date, tasks: dayTasks });
    } catch {}
  }

  return days.sort((a, b) => b.date - a.date);
}

function renderHistory() {
  const list = $('#history-list');
  const empty = $('#history-empty');
  if (!list || !empty) return;

  const days = getTaskHistory()
    .map(day => ({
      ...day,
      visibleTasks: day.tasks.filter(task => {
        if (historyFilter === 'completed') return task.done;
        if (historyFilter === 'missed') return !task.done;
        return true;
      })
    }))
    .filter(day => day.visibleTasks.length);

  if (!days.length) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  list.innerHTML = days.map(day => {
    const done = day.tasks.filter(task => task.done).length;
    const total = day.tasks.length;

    return `
      <article class="history-day">
        <div class="history-day__header">
          <div>
            <h3 class="history-day__title">${formatDateKey(day.key)}</h3>
            <p class="history-day__summary">${done} of ${total} tasks completed</p>
          </div>
          <span class="history-day__score">${done}/${total}</span>
        </div>
        <ul class="history-day__tasks">
          ${day.visibleTasks.map(task => `
            <li class="history-task ${task.done ? 'history-task--done' : 'history-task--missed'}">
              <span class="history-task__text">${escapeHtml(task.text)}</span>
              <span class="history-task__meta">${task.time || 'Anytime'} - ${task.priority}</span>
            </li>
          `).join('')}
        </ul>
      </article>
    `;
  }).join('');
}

// ─── Focus Timer ─────────────────────────────────────────────
function updateFocusDisplay() {
  const m = Math.floor(focusSeconds / 60).toString().padStart(2, '0');
  const s = (focusSeconds % 60).toString().padStart(2, '0');
  $('#focus-display').textContent = `${m}:${s}`;
}

function startFocus() {
  if (focusRunning) {
    clearInterval(focusInterval);
    focusRunning = false;
    $('#focus-start').textContent = 'Resume';
    return;
  }

  focusRunning = true;
  $('#focus-start').textContent = 'Pause';

  focusInterval = setInterval(() => {
    focusSeconds--;
    totalFocusMinutes += 1 / 60;
    updateFocusDisplay();
    updateStats();

    if (focusSeconds <= 0) {
      clearInterval(focusInterval);
      focusRunning = false;
      focusSeconds = 25 * 60;
      updateFocusDisplay();
      $('#focus-start').textContent = 'Start';
      // Notification
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Daybreak', { body: 'Focus session complete! Take a break 🎉' });
      }
    }
  }, 1000);
}

function resetFocus() {
  clearInterval(focusInterval);
  focusRunning = false;
  focusSeconds = 25 * 60;
  updateFocusDisplay();
  $('#focus-start').textContent = 'Start';
}

// ─── Particle System ─────────────────────────────────────────
let particles = [];
let animFrameId = null;

function initParticles(color) {
  const canvas = $('#particle-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Cancel prev animation
  if (animFrameId) cancelAnimationFrame(animFrameId);

  const count = Math.min(80, Math.floor(window.innerWidth / 18));
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.3 - 0.15,
      opacity: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      p.pulse += 0.015;

      const osc = Math.sin(p.pulse) * 0.2 + 0.8;

      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${p.opacity * osc})`;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${p.opacity * osc * 0.12})`;
      ctx.fill();
    }

    // Draw faint connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${0.04 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animFrameId = requestAnimationFrame(animate);
  }

  animate();
}

// ─── Event Wiring ────────────────────────────────────────────
function init() {
  // Apply today's theme
  applyTheme(currentThemeIndex);
  updateGreeting();
  updateDate();
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(() => {
    updateGreeting();
    renderTimeline(); // update current-hour highlight
  }, 60000);

  // Load data
  loadTasks();
  loadNotes();
  renderTasks();
  renderTimeline();
  updateStats();
  updateFocusDisplay();
  renderHistory();

  // Shuffle
  $('#btn-shuffle').addEventListener('click', shuffleTheme);

  $('#history-filters').addEventListener('click', (e) => {
    const button = e.target.closest('[data-history-filter]');
    if (!button) return;
    historyFilter = button.dataset.historyFilter;
    document.querySelectorAll('.history-filter').forEach(item => {
      item.classList.toggle('history-filter--active', item === button);
    });
    renderHistory();
  });

  // Task form toggle
  $('#btn-add-task').addEventListener('click', () => {
    const form = $('#task-form');
    form.classList.toggle('hidden');
    if (!form.classList.contains('hidden')) {
      $('#task-input').focus();
    }
  });

  // Task submit
  $('#task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = $('#task-input').value.trim();
    if (!text) return;
    const priority = $('#task-priority').value;
    const time = $('#task-time').value || '';
    addTask(text, priority, time);
    $('#task-input').value = '';
    $('#task-time').value = '';
    $('#task-input').focus();
  });

  // Notes auto-save
  let noteTimer;
  $('#notes-area').addEventListener('input', () => {
    clearTimeout(noteTimer);
    noteTimer = setTimeout(saveNotes, 500);
  });

  // Focus timer
  $('#btn-focus').addEventListener('click', () => {
    $('#focus-modal').classList.remove('hidden');
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  });
  $('#focus-start').addEventListener('click', startFocus);
  $('#focus-reset').addEventListener('click', resetFocus);
  $('#focus-close').addEventListener('click', () => {
    $('#focus-modal').classList.add('hidden');
  });

  // Close modal on backdrop click
  $('#focus-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      $('#focus-modal').classList.add('hidden');
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $('#focus-modal').classList.add('hidden');
    }
    // Ctrl+N => new task
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
      e.preventDefault();
      const form = $('#task-form');
      form.classList.remove('hidden');
      $('#task-input').focus();
    }
  });

  // Load focus minutes from storage
  try {
    const savedFocus = localStorage.getItem('daybreak_focus_' + todayKey());
    if (savedFocus) totalFocusMinutes = parseFloat(savedFocus);
  } catch {}

  // Save focus periodically
  setInterval(() => {
    localStorage.setItem('daybreak_focus_' + todayKey(), totalFocusMinutes.toString());
  }, 10000);
}

// ─── Boot ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
