import { PRODUCT } from '@/lib/site'
import { vars } from '@/lib/utils'

/**
 * CSS-only opening sequence (~3.3s, first visit per session): a falling drop, ripples,
 * masked wordmark reveal, then a two-layer curved curtain lifts into the hero.
 * pointer-events: none throughout, so it never blocks input; hidden for reduced motion.
 */
export function Splash() {
  const chars = [...'Havah'].map((c) => ({ c, em: false })).concat([...'water'].map((c) => ({ c, em: true })))
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-layer splash-layer-back" />
      <div className="splash-layer splash-layer-front" />
      <div className="splash-stage">
        <span className="splash-drop" />
        {[0, 1].map((i) => (
          <span key={i} className="splash-ripple" style={vars({ '--i': i })} />
        ))}
        <p className="splash-word">
          {chars.map(({ c, em }, i) =>
            em ? (
              <em key={i} style={vars({ '--i': i })} className="font-light">
                {c}
              </em>
            ) : (
              <span key={i} style={vars({ '--i': i })}>
                {c}
              </span>
            ),
          )}
        </p>
        <div className="splash-rule" />
        <p className="splash-sub mt-4 text-[0.8rem] text-muted">{PRODUCT}</p>
      </div>
    </div>
  )
}

/** Runs before paint: enables motion hiding, skips the splash on repeat visits, and un-hides content if JS fails. */
export const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('hv-splash'))d.dataset.splash='off';else sessionStorage.setItem('hv-splash','1')}catch(e){d.dataset.splash='off'}setTimeout(function(){if(!window.__hvReveal)d.classList.remove('js')},4000)})()`
