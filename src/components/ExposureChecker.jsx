import { useState } from 'react';

import amazon from '../data/platforms/amazon.json';
import google from '../data/platforms/google.json';
import meta from '../data/platforms/meta.json';
import reddit from '../data/platforms/reddit.json';
import roku from '../data/platforms/roku.json';
import samsungTv from '../data/platforms/samsung-tv.json';
import snapchat from '../data/platforms/snapchat.json';
import tiktok from '../data/platforms/tiktok.json';
import vizio from '../data/platforms/vizio.json';
import x from '../data/platforms/x.json';
import youtube from '../data/platforms/youtube.json';

const SEV_ORDER = { critical: 0, high: 1, medium: 2 };
const SEV_COLOR = {
  critical: '#e53e3e',
  high: '#d69e2e',
  medium: '#b7791f',
};

const CATEGORIES = [
  {
    label: 'Social Media',
    platforms: [tiktok, x, meta, reddit, snapchat],
  },
  {
    label: 'Search & Advertising',
    platforms: [google],
  },
  {
    label: 'Streaming & Entertainment',
    platforms: [youtube],
  },
  {
    label: 'Retail & E-Commerce',
    platforms: [amazon],
  },
  {
    label: 'Smart TVs',
    platforms: [vizio, roku, samsungTv],
  },
];

function firstSentence(text) {
  const m = text.match(/^[^.!?]+[.!?]/);
  return m ? m[0].trim() : text;
}

export default function ExposureChecker() {
  const [selected, setSelected] = useState(new Set());
  const [quickWins, setQuickWins] = useState(false);
  const [expanded, setExpanded] = useState(new Set());

  function toggle(slug) {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function toggleExpand(key) {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const allSettings = [];
  for (const cat of CATEGORIES) {
    for (const p of cat.platforms) {
      if (selected.has(p.slug)) {
        for (const s of p.settings) {
          allSettings.push({
            ...s,
            platformName: p.name,
            platformSlug: p.slug,
          });
        }
      }
    }
  }

  const filtered = quickWins
    ? allSettings.filter(
        s => s.defaultState === 'On' && (s.path != null || s.webPath != null)
      )
    : allSettings;

  const sorted = [...filtered].sort(
    (a, b) => (SEV_ORDER[a.severity] ?? 3) - (SEV_ORDER[b.severity] ?? 3)
  );

  const criticalCount = sorted.filter(s => s.severity === 'critical').length;
  const hasResults = selected.size > 0;

  return (
    <>
      <style>{STYLES}</style>

      {/* Platform selection */}
      <div className="ec-grid">
        {CATEGORIES.map(cat => (
          <div key={cat.label} className="ec-cat">
            <div className="ec-cat-label">{cat.label}</div>
            <div className="ec-platform-list">
              {cat.platforms.map(p => (
                <label
                  key={p.slug}
                  className={`ec-item${selected.has(p.slug) ? ' ec-item--on' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(p.slug)}
                    onChange={() => toggle(p.slug)}
                    className="ec-cb"
                  />
                  <span className="ec-item-name">{p.name}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      {hasResults && (
        <div className="ec-results">
          <div className="ec-results-bar">
            <div className="ec-count">
              <span className="ec-count-bold">
                {selected.size} {selected.size === 1 ? 'platform' : 'platforms'} selected
              </span>
              <span className="ec-sep">·</span>
              <span>{allSettings.length} settings to change</span>
              {criticalCount > 0 && (
                <>
                  <span className="ec-sep">·</span>
                  <span className="ec-critical-count">{criticalCount} critical</span>
                </>
              )}
            </div>
            <label className="ec-qw-toggle">
              <input
                type="checkbox"
                checked={quickWins}
                onChange={e => setQuickWins(e.target.checked)}
              />
              <span>Quick wins only</span>
            </label>
          </div>

          {sorted.length === 0 && (
            <p className="ec-empty">
              No actionable settings match this filter. Uncheck "Quick wins only" to see all settings.
            </p>
          )}

          <div className="ec-list">
            {sorted.map((s, i) => {
              const key = `${s.platformSlug}::${s.name}::${i}`;
              const isOpen = expanded.has(key);
              const color = SEV_COLOR[s.severity] ?? '#888';
              const sevLabel = s.severity.charAt(0).toUpperCase() + s.severity.slice(1);
              const hasPath = s.webUrl || (s.webPath && s.webPath.length > 0) || (s.path && s.path.length > 0);

              return (
                <div
                  key={key}
                  className="ec-card"
                  style={{ '--sev': color }}
                >
                  <div className="ec-card-top">
                    <div className="ec-card-left">
                      <span className="ec-dot" />
                      <span className="ec-plat-pill">{s.platformName}</span>
                      <span className="ec-name">{s.name}</span>
                      <span className="ec-sev-pill">{sevLabel}</span>
                    </div>
                    <div className="ec-card-right">
                      <span className="ec-default">{s.defaultState}</span>
                      <button
                        className="ec-expand"
                        onClick={() => toggleExpand(key)}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? 'Collapse' : 'Expand'}
                      >
                        {isOpen ? '▾' : '▸'}
                      </button>
                    </div>
                  </div>

                  <div className="ec-card-body">
                    <p className="ec-desc">{firstSentence(s.description)}</p>

                    {hasPath && (
                      <div className="ec-path">
                        {s.webUrl && (
                          <a
                            href={s.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ec-web-link"
                          >
                            {s.webUrl.replace(/^https?:\/\//, '')}
                          </a>
                        )}
                        {s.webPath && s.webPath.length > 0 && (
                          <span className="ec-path-steps">
                            {s.webPath.map((step, j) => (
                              <span key={j}>
                                <span className="ec-arrow"> ›</span>
                                <span className="ec-step"> {step}</span>
                              </span>
                            ))}
                          </span>
                        )}
                        {!s.webPath && s.path && s.path.length > 0 && (
                          <span className="ec-path-steps">
                            {s.path.map((step, j) => (
                              <span key={j}>
                                {j > 0 && <span className="ec-arrow"> › </span>}
                                <span className="ec-step">{step}</span>
                              </span>
                            ))}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {isOpen && (
                    <div className="ec-expanded">
                      <p className="ec-full-desc">{s.description}</p>
                      {s.whatItDoesnt && (
                        <p className="ec-caveat">
                          <span className="ec-caveat-label">Note:</span>{' '}
                          {s.whatItDoesnt}
                        </p>
                      )}
                      <a
                        href={`/platforms/${s.platformSlug}`}
                        className="ec-plat-link"
                      >
                        View full {s.platformName} page →
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

const STYLES = `
  .ec-grid {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }

  .ec-cat-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.625rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #b8b8b8;
    padding-bottom: 0.375rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #2a2a2a;
  }

  .ec-platform-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .ec-item {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.75rem;
    border: 1px solid #2a2a2a;
    background: #111111;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.15s, background 0.15s;
  }

  .ec-item:hover {
    border-color: #3a3a3a;
    background: #1a1a1a;
  }

  .ec-item--on {
    border-color: #4299e1;
    background: rgba(66, 153, 225, 0.08);
  }

  .ec-cb {
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    accent-color: #4299e1;
    cursor: pointer;
  }

  .ec-item-name {
    font-size: 0.875rem;
    color: #e8e8e8;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
  }

  .ec-results {
    border-top: 1px solid #2a2a2a;
    padding-top: 1.5rem;
  }

  .ec-results-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .ec-count {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.8125rem;
    color: #c0c0c0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .ec-count-bold {
    font-weight: 500;
    color: #e8e8e8;
  }

  .ec-sep {
    color: #555;
  }

  .ec-critical-count {
    color: #e53e3e;
    font-weight: 500;
  }

  .ec-qw-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75rem;
    color: #c0c0c0;
    cursor: pointer;
    user-select: none;
  }

  .ec-qw-toggle input {
    accent-color: #4299e1;
    cursor: pointer;
  }

  .ec-empty {
    font-size: 0.875rem;
    color: #b8b8b8;
    padding: 1rem;
    border: 1px solid #2a2a2a;
    background: #111111;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
  }

  .ec-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .ec-card {
    border: 1px solid #2a2a2a;
    background: #111111;
  }

  .ec-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }

  .ec-card-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    min-width: 0;
    flex-wrap: wrap;
  }

  .ec-card-right {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
  }

  .ec-dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--sev);
    flex-shrink: 0;
  }

  .ec-plat-pill {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.5625rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #b8b8b8;
    border: 1px solid #2a2a2a;
    padding: 0.1em 0.45em;
    flex-shrink: 0;
    background: #1a1a1a;
  }

  .ec-name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: #e8e8e8;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
    line-height: 1.3;
  }

  .ec-sev-pill {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.5625rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--sev);
    border: 1px solid var(--sev);
    padding: 0.1em 0.45em;
    flex-shrink: 0;
  }

  .ec-default {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.625rem;
    color: #b8b8b8;
    border: 1px solid #2a2a2a;
    padding: 0.15rem 0.45rem;
    background: #1a1a1a;
    white-space: nowrap;
  }

  .ec-expand {
    background: none;
    border: none;
    color: #b8b8b8;
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.125rem 0.25rem;
    line-height: 1;
    transition: color 0.15s;
  }

  .ec-expand:hover {
    color: #e8e8e8;
  }

  .ec-card-body {
    padding: 0 1rem 0.75rem;
  }

  .ec-desc {
    font-size: 0.875rem;
    color: #c0c0c0;
    line-height: 1.6;
    margin: 0 0 0.5rem;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
  }

  .ec-path {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.6875rem;
    color: #b8b8b8;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.125rem;
    margin-top: 0.375rem;
  }

  .ec-web-link {
    color: #4299e1;
    text-decoration: none;
  }

  .ec-web-link:hover {
    text-decoration: underline;
  }

  .ec-path-steps {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .ec-arrow {
    color: #555;
  }

  .ec-step {
    color: #c0c0c0;
  }

  .ec-expanded {
    border-top: 1px solid #2a2a2a;
    border-left: 3px solid var(--sev);
    padding: 0.875rem 1rem 1rem;
  }

  .ec-full-desc {
    font-size: 0.9375rem;
    color: #c0c0c0;
    line-height: 1.65;
    margin: 0 0 0.75rem;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
  }

  .ec-caveat {
    font-size: 0.8125rem;
    color: #b8b8b8;
    font-style: italic;
    line-height: 1.6;
    padding-left: 0.75rem;
    border-left: 2px solid #2a2a2a;
    margin: 0 0 0.875rem;
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
  }

  .ec-caveat-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.5625rem;
    font-weight: 500;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #b8b8b8;
    font-style: normal;
    margin-right: 0.25rem;
  }

  .ec-plat-link {
    display: inline-block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75rem;
    color: #4299e1;
    text-decoration: none;
    margin-top: 0.25rem;
  }

  .ec-plat-link:hover {
    text-decoration: underline;
  }
`;
