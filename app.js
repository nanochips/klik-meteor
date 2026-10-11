const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const meteor = document.querySelector('#meteor');
const arena = document.querySelector('#arena');
const message = document.querySelector('#message');
const startButton = document.querySelector('#startButton');
const leaderboardEl = document.querySelector('#leaderboard');
const connectionStatus = document.querySelector('#connectionStatus');
let score = 0;
let timeLeft = 20;
let timer = null;
let playing = false;
const config = window.GAME_CONFIG || {};
const hasSupabase = Boolean(config.supabaseUrl && config.supabaseAnonKey);
if (hasSupabase) { connectionStatus.textContent = 'Supabase aktif'; connectionStatus.style.color = '#8ff0be'; }
function randomPosition() { const padding = 18; const maxX = arena.clientWidth - meteor.offsetWidth - padding; const maxY = arena.clientHeight - meteor.offsetHeight - padding; meteor.style.left = `${padding + Math.random() * Math.max(0, maxX - padding)}px`; meteor.style.top = `${padding + Math.random() * Math.max(0, maxY - padding)}px`; }
function renderScore() { scoreEl.textContent = score; timeEl.textContent = timeLeft; }
function startGame() { clearInterval(timer); score = 0; timeLeft = 20; playing = true; renderScore(); message.style.display = 'none'; meteor.style.display = 'grid'; startButton.textContent = 'Sedang bermain…'; startButton.disabled = true; randomPosition(); timer = setInterval(() => { timeLeft -= 1; renderScore(); if (timeLeft <= 0) endGame(); }, 1000); }
async function endGame() { clearInterval(timer); playing = false; meteor.style.display = 'none'; message.textContent = `Waktu habis — skor kamu ${score}!`; message.style.display = 'grid'; startButton.disabled = false; startButton.textContent = 'Main Lagi'; await saveScore(score); await loadLeaderboard(); }
function hitMeteor() { if (!playing) return; score += 1; renderScore(); randomPosition(); }
async function saveScore(value) { if (!hasSupabase || value <= 0) return; try { await fetch(`${config.supabaseUrl}/rest/v1/leaderboard`, { method: 'POST', headers: {'Content-Type':'application/json','apikey':config.supabaseAnonKey,'Authorization':`Bearer ${config.supabaseAnonKey}`,'Prefer':'return=minimal'}, body: JSON.stringify({ player: 'Alvin', score: value }) }); } catch (error) { console.warn('Skor belum tersimpan:', error); } }
async function loadLeaderboard() { if (!hasSupabase) return; try { const response = await fetch(`${config.supabaseUrl}/rest/v1/leaderboard?select=player,score,created_at&order=score.desc&limit=10`, {headers:{'apikey':config.supabaseAnonKey,'Authorization':`Bearer ${config.supabaseAnonKey}`}}); if (!response.ok) throw new Error(`HTTP ${response.status}`); const rows = await response.json(); leaderboardEl.innerHTML = rows.length ? rows.map(row => `<li><strong>${escapeHtml(row.player)}</strong> — ${row.score} poin</li>`).join('') : '<li>Belum ada skor.</li>'; } catch (error) { console.warn('Leaderboard belum tersedia:', error); } }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
startButton.addEventListener('click', startGame);
meteor.addEventListener('click', hitMeteor);
meteor.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') hitMeteor(); });
window.addEventListener('resize', () => { if (playing) randomPosition(); });
loadLeaderboard();