/* tweaks.jsx — shared Tweaks panel for index.html + project.html.
   State persists across both pages (same defaults key). */
const { useEffect: useTweakEffect } = React;

const PORTFOLIO_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ffd166",
  "ambient": true
}/*EDITMODE-END*/;

const PORTFOLIO_ACCENTS = ["#ffd166", "#6ff0c8", "#7cb8ff", "#c79bff", "#ff8da8"];

function PortfolioTweaks() {
  const [t, setTweak] = useTweaks(PORTFOLIO_TWEAK_DEFAULTS);
  useTweakEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--accent', t.accent);
    r.setProperty('--ambient', t.ambient ? '1' : '0');
  }, [t.accent, t.ambient]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent" />
      <TweakColor label="Neon" value={t.accent} options={PORTFOLIO_ACCENTS}
        onChange={(v) => setTweak('accent', v)} />
      <TweakSection label="Atmosphere" />
      <TweakToggle label="Ambient glow" value={t.ambient}
        onChange={(v) => setTweak('ambient', v)} />
    </TweaksPanel>
  );
}

(function mountPortfolioTweaks() {
  const host = document.createElement('div');
  document.body.appendChild(host);
  ReactDOM.createRoot(host).render(<PortfolioTweaks />);
})();
