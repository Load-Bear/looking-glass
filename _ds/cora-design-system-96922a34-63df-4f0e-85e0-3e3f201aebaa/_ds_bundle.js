/* @ds-bundle: {"format":3,"namespace":"CoraDesignSystem_96922a","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DeviceTile","sourcePath":"components/core/DeviceTile.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Metric","sourcePath":"components/core/Metric.jsx"},{"name":"Orb","sourcePath":"components/core/Orb.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"Slider","sourcePath":"components/core/Slider.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"c194bd61a076","components/core/DeviceTile.jsx":"2e779ba1d737","components/core/IconButton.jsx":"2067a7dfec6e","components/core/Input.jsx":"bcb3bcac5d2e","components/core/Metric.jsx":"5725b5f2f2be","components/core/Orb.jsx":"65d2b36a583c","components/core/Panel.jsx":"c70055627dbe","components/core/Slider.jsx":"00987c1bc540","components/core/StatusPill.jsx":"71d7ec0b78a6","components/core/Switch.jsx":"8032a841e00b","components/core/Tabs.jsx":"48faabcf46f7","ui_kits/command/AssistantOverlay.jsx":"024dd8e453c3","ui_kits/command/HomeView.jsx":"d94521ac4b2d","ui_kits/command/MoreViews.jsx":"a109af2a63f0","ui_kits/command/RoomsView.jsx":"b3de8005f69c","ui_kits/command/Sidebar.jsx":"1914a4729005","ui_kits/command/StandbyView.jsx":"bc64e08a1aeb","ui_kits/phone/AssistantScreen.jsx":"51235d475c0a","ui_kits/phone/HomeScreen.jsx":"f1fe4bd8f431","ui_kits/phone/RoomScreen.jsx":"f1979a053376","ui_kits/phone/TabBar.jsx":"8cff801b3f29"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoraDesignSystem_96922a = window.CoraDesignSystem_96922a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Cora Button — the primary action primitive.
 * Variants: signal (filled glow), outline, ghost, danger.
 * The "signal" variant carries Cora's luminous accent and a soft glow.
 */
function Button({
  children,
  variant = 'signal',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  full = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: '0 14px',
      font: 'var(--text-caption)',
      gap: 6,
      radius: 'var(--radius-sm)'
    },
    md: {
      height: 40,
      padding: '0 18px',
      font: 'var(--text-body-m)',
      gap: 8,
      radius: 'var(--radius-sm)'
    },
    lg: {
      height: 48,
      padding: '0 24px',
      font: 'var(--text-body-l)',
      gap: 10,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: full ? '100%' : 'auto',
    borderRadius: s.radius,
    fontFamily: 'var(--font-ui)',
    fontSize: s.font,
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: '0.01em',
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.4 : 1,
    userSelect: 'none'
  };
  const variants = {
    signal: {
      background: 'var(--cora-signal)',
      color: 'var(--text-on-signal)',
      boxShadow: disabled ? 'none' : 'var(--glow-signal-soft)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--cora-signal)',
      borderColor: 'var(--accent-border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    danger: {
      background: 'var(--cora-alert-soft)',
      color: 'var(--cora-alert)',
      borderColor: 'rgba(255,107,107,0.4)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.signal),
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/DeviceTile.jsx
try { (() => {
/**
 * DeviceTile — the workhorse of the Command hub and phone: a controllable
 * device (light, lock, thermostat, camera). Shows an icon, name, sub-state,
 * and an inline control (toggle by default). Active tiles glow with signal.
 */
function DeviceTile({
  icon = null,
  name = 'Device',
  meta = '',
  on = false,
  onToggle,
  accent = 'var(--cora-signal)',
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onToggle && onToggle(!on),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 132,
      padding: 18,
      borderRadius: 'var(--radius-md)',
      cursor: onToggle ? 'pointer' : 'default',
      background: on ? 'var(--accent-fill)' : 'var(--surface-card)',
      border: '1px solid',
      borderColor: on ? 'var(--accent-border)' : 'var(--border-subtle)',
      boxShadow: on ? 'var(--glow-signal-soft), var(--edge-light)' : 'var(--edge-light)',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-sm)',
      background: on ? accent : 'var(--surface-hover)',
      color: on ? 'var(--text-on-signal)' : 'var(--text-secondary)',
      fontSize: 20,
      boxShadow: on ? 'var(--glow-signal-soft)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, icon), children), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-body-l)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: on ? 'var(--cora-signal)' : 'var(--text-muted)',
      marginTop: 3
    }
  }, meta)));
}
Object.assign(__ds_scope, { DeviceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/DeviceTile.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/circular icon-only control. Used across Command
 * and phone chrome (back, close, mic, more). Circular by default.
 */
function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  active = false,
  round = true,
  disabled = false,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size] || 40;
  const variants = {
    ghost: {
      background: active ? 'var(--accent-fill)' : 'transparent',
      color: active ? 'var(--cora-signal)' : 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    solid: {
      background: 'var(--surface-raised)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-subtle)'
    },
    signal: {
      background: 'var(--cora-signal)',
      color: 'var(--text-on-signal)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-signal-soft)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontSize: dims * 0.42,
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...(variants[variant] || variants.ghost),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field for search, naming, credentials. Dark well with a
 * hairline that lifts to signal on focus. Optional leading icon.
 */
function Input({
  icon = null,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 44,
      padding: '0 14px',
      background: 'var(--surface-raised)',
      border: '1px solid',
      borderColor: focus ? 'var(--accent-border)' : 'var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--glow-signal-soft)' : 'inset 0 1px 2px rgba(0,0,0,0.3)',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: focus ? 'var(--cora-signal)' : 'var(--text-muted)',
      display: 'inline-flex',
      fontSize: 18
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-body-m)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Metric.jsx
try { (() => {
/**
 * Metric — a telemetry readout. Big mono value + unit with a label and
 * optional trend. The core of Cora's data language (energy, climate, air).
 */
function Metric({
  label = '',
  value = '',
  unit = '',
  trend = null,
  tone = 'signal',
  style = {}
}) {
  const toneColor = {
    signal: 'var(--cora-signal)',
    online: 'var(--cora-online)',
    warn: 'var(--cora-warn)',
    alert: 'var(--cora-alert)',
    ember: 'var(--cora-ember)',
    neutral: 'var(--text-primary)'
  }[tone] || 'var(--cora-signal)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-display-m)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-title-s)',
      color: 'var(--text-muted)'
    }
  }, unit)), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: toneColor
    }
  }, trend));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Metric.jsx", error: String((e && e.message) || e) }); }

// components/core/Orb.jsx
try { (() => {
/**
 * Orb — Cora's ambient presence. A breathing luminous core wrapped in
 * concentric rings. This is the brand's signature motif: it represents
 * the assistant listening/thinking on both the Command hub and phone.
 *
 * states: 'idle' (slow breathe) | 'listening' (voice bars) | 'thinking' (spin)
 */
function Orb({
  size = 160,
  state = 'idle',
  label = null,
  style = {}
}) {
  const listening = state === 'listening';
  const thinking = state === 'thinking';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -size * 0.25,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(79,227,193,0.28) 0%, rgba(79,227,193,0) 68%)',
      animation: 'cora-breathe var(--dur-breathe) var(--ease-in-out) infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: size * 0.06,
      borderRadius: '50%',
      border: '1.5px solid rgba(79,227,193,0.35)',
      borderTopColor: 'var(--cora-signal)',
      animation: thinking ? 'cora-orbit 1.6s linear infinite' : 'cora-orbit 9s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: size * 0.16,
      borderRadius: '50%',
      border: '1px solid rgba(79,227,193,0.18)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: size * 0.28,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 38% 34%, #B9FFF0 0%, var(--cora-signal) 42%, var(--cora-signal-dim) 100%)',
      boxShadow: 'var(--glow-signal-lg), inset 0 0 20px rgba(255,255,255,0.35)',
      animation: 'cora-breathe var(--dur-breathe) var(--ease-in-out) infinite',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, listening && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: size * 0.03,
      height: '38%'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: Math.max(2, size * 0.022),
      height: '100%',
      borderRadius: 999,
      background: 'var(--text-on-signal)',
      opacity: 0.85,
      transformOrigin: 'center',
      animation: `cora-listen ${640 + i * 90}ms var(--ease-in-out) ${i * 80}ms infinite`
    }
  }))))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-micro)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--cora-signal)'
    }
  }, label));
}
Object.assign(__ds_scope, { Orb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Orb.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Panel — the fundamental Cora surface. A layered near-black card with
 * a hairline border and top-light edge. `glow` adds signal ambiance for
 * active/attention panels; `inset` for nested wells.
 */
function Panel({
  children,
  glow = false,
  inset = false,
  pad = 20,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: inset ? 'var(--surface-raised)' : 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      padding: pad,
      boxShadow: glow ? 'var(--edge-light), var(--glow-signal-soft), var(--shadow-card)' : 'var(--edge-light), var(--shadow-card)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/core/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Slider — continuous control for dimming, temperature, volume.
 * The filled track carries the signal accent; the value can be shown
 * in mono. Pure-visual (uses a native range under a styled track).
 */
function Slider({
  value = 50,
  min = 0,
  max = 100,
  onChange,
  disabled = false,
  accent = 'var(--cora-signal)',
  showValue = false,
  unit = '',
  style = {},
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, (value - min) / (max - min) * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-hover)',
      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: pct + '%',
      borderRadius: 'var(--radius-pill)',
      background: accent,
      boxShadow: disabled ? 'none' : '0 0 12px ' + accent.replace(')', ',0.5)').replace('var(--cora-signal)', 'rgba(79,227,193,0.5)')
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: pct + '%',
      width: 16,
      height: 16,
      marginLeft: -8,
      marginTop: -8,
      borderRadius: '50%',
      background: '#EAF2FF',
      border: '2px solid ' + accent,
      boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    min: min,
    max: max,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      opacity: 0,
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest))), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-secondary)',
      minWidth: 40,
      textAlign: 'right'
    }
  }, Math.round(value), unit));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Slider.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  online: {
    c: 'var(--cora-online)',
    b: 'var(--cora-online-soft)'
  },
  signal: {
    c: 'var(--cora-signal)',
    b: 'var(--cora-signal-soft)'
  },
  warn: {
    c: 'var(--cora-warn)',
    b: 'var(--cora-warn-soft)'
  },
  alert: {
    c: 'var(--cora-alert)',
    b: 'var(--cora-alert-soft)'
  },
  info: {
    c: 'var(--cora-info)',
    b: 'var(--cora-info-soft)'
  },
  ember: {
    c: 'var(--cora-ember)',
    b: 'var(--cora-ember-soft)'
  },
  neutral: {
    c: 'var(--text-secondary)',
    b: 'var(--surface-hover)'
  }
};

/**
 * StatusPill — compact state indicator. A live dot + label used for
 * device state (Online / Armed / Offline), automations, and telemetry.
 */
function StatusPill({
  children,
  tone = 'neutral',
  dot = true,
  mono = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: t.b,
      color: t.c,
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
      fontSize: 'var(--text-micro)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: mono ? '0.04em' : '0.06em',
      textTransform: mono ? 'none' : 'uppercase',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.c,
      boxShadow: '0 0 6px ' + t.c
    }
  }), children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — the device on/off primitive. When ON it fills with Cora's
 * signal and emits a soft glow; the thumb glides. This is the single
 * most-used control in the Command hub (lights, locks, scenes).
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const dims = size === 'sm' ? {
    w: 40,
    h: 24,
    k: 18
  } : {
    w: 52,
    h: 30,
    k: 24
  };
  const pad = (dims.h - dims.k) / 2;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: dims.w,
      height: dims.h,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid',
      borderColor: checked ? 'transparent' : 'var(--border-strong)',
      background: checked ? 'var(--cora-signal)' : 'var(--surface-hover)',
      boxShadow: checked ? 'var(--glow-signal-soft)' : 'inset 0 1px 2px rgba(0,0,0,0.4)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      padding: 0,
      transition: 'background var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: pad,
      left: checked ? dims.w - dims.k - pad : pad,
      width: dims.k,
      height: dims.k,
      borderRadius: '50%',
      background: checked ? 'var(--text-on-signal)' : '#C6D2E0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
      transition: 'left var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — segmented view switcher. Underline style for panel headers,
 * pill style for compact filters (rooms, day ranges).
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style = {}
}) {
  const isPill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: isPill ? 4 : 20,
      padding: isPill ? 4 : 0,
      background: isPill ? 'var(--surface-raised)' : 'transparent',
      borderRadius: isPill ? 'var(--radius-pill)' : 0,
      borderBottom: isPill ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const key = typeof it === 'string' ? it : it.value;
    const label = typeof it === 'string' ? it : it.label;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      onClick: () => onChange && onChange(key),
      style: {
        position: 'relative',
        background: isPill && active ? 'var(--cora-signal)' : 'transparent',
        color: active ? isPill ? 'var(--text-on-signal)' : 'var(--text-primary)' : 'var(--text-muted)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-body-m)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
        height: isPill ? 30 : 38,
        padding: isPill ? '0 16px' : '0 0 12px',
        borderRadius: isPill ? 'var(--radius-pill)' : 0,
        transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)'
      }
    }, label, !isPill && active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--cora-signal)',
        borderRadius: 2,
        boxShadow: 'var(--glow-signal-soft)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/command/AssistantOverlay.jsx
try { (() => {
// Command hub — voice assistant overlay.
const {
  Orb,
  Button
} = window.CoraDesignSystem_96922a;
function AssistantOverlay({
  open,
  onClose
}) {
  const [phase, setPhase] = React.useState('listening');
  React.useEffect(() => {
    if (!open) return;
    setPhase('listening');
    const a = setTimeout(() => setPhase('thinking'), 2200);
    const b = setTimeout(() => setPhase('answer'), 3600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [open]);
  if (!open) return null;
  const suggestions = ['Set Movie scene', 'Lock all doors', 'Lower temp to 70°'];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 40,
      background: 'radial-gradient(120% 100% at 50% 100%, rgba(10,20,26,0.86) 0%, rgba(5,7,10,0.94) 60%)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    size: 200,
    state: phase === 'thinking' ? 'thinking' : 'listening'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 560
    }
  }, phase === 'listening' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u201C"), "Dim the living room and start the movie scene", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u201D")), phase === 'thinking' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--cora-signal)'
    }
  }, "Working on it\u2026"), phase === 'answer' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, "Done \u2014 lights dimmed to 20% and Movie scene is on."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      marginTop: 10
    }
  }, "TV, soundbar and ambient lighting adjusted."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    onClick: e => e.stopPropagation()
  }, suggestions.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    style: {
      height: 40,
      padding: '0 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 500
    }
  }, s))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'absolute',
      bottom: 34,
      width: 52,
      height: 52,
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'var(--cora-alert-soft)',
      border: '1px solid rgba(255,107,107,0.4)',
      color: 'var(--cora-alert)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 22,
      height: 22
    }
  })));
}
window.AssistantOverlay = AssistantOverlay;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/command/AssistantOverlay.jsx", error: String((e && e.message) || e) }); }

// ui_kits/command/HomeView.jsx
try { (() => {
// Command hub — ambient Home view (the typical standby dashboard).
const {
  Panel,
  DeviceTile,
  Switch,
  StatusPill,
  Metric,
  Slider,
  Button,
  Orb
} = window.CoraDesignSystem_96922a;
function SceneChip({
  icon,
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      height: 44,
      padding: '0 18px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: active ? 'var(--cora-signal)' : 'var(--surface-card)',
      color: active ? 'var(--text-on-signal)' : 'var(--text-secondary)',
      border: '1px solid',
      borderColor: active ? 'transparent' : 'var(--border-subtle)',
      boxShadow: active ? 'var(--glow-signal-soft)' : 'none',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 600,
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 17,
      height: 17
    }
  }), label);
}
function HomeView({
  openVoice
}) {
  const [scene, setScene] = React.useState('evening');
  const [devices, setDevices] = React.useState({
    living: true,
    kitchen: true,
    lock: true,
    thermo: true,
    tv: false
  });
  const [dim, setDim] = React.useState(62);
  const set = k => v => setDevices(d => ({
    ...d,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      padding: '30px 34px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--cora-signal)',
      marginBottom: 8
    }
  }, "Tuesday \xB7 6:42 PM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      lineHeight: 1.05
    }
  }, "Good evening, Alex"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      marginTop: 8
    }
  }, "Everything's calm. 3 rooms active \xB7 doors secured.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'flex-end',
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "cloud-moon",
    style: {
      width: 26,
      height: 26,
      color: 'var(--text-secondary)'
    }
  }), "54\xB0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Clear \xB7 feels 51\xB0")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SceneChip, {
    icon: "sunrise",
    label: "Morning",
    active: scene === 'morning',
    onClick: () => setScene('morning')
  }), /*#__PURE__*/React.createElement(SceneChip, {
    icon: "sun",
    label: "Day",
    active: scene === 'day',
    onClick: () => setScene('day')
  }), /*#__PURE__*/React.createElement(SceneChip, {
    icon: "sunset",
    label: "Evening",
    active: scene === 'evening',
    onClick: () => setScene('evening')
  }), /*#__PURE__*/React.createElement(SceneChip, {
    icon: "moon",
    label: "Sleep",
    active: scene === 'sleep',
    onClick: () => setScene('sleep')
  }), /*#__PURE__*/React.createElement(SceneChip, {
    icon: "clapperboard",
    label: "Movie",
    active: scene === 'movie',
    onClick: () => setScene('movie')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1.15fr 1.15fr 1fr',
      gap: 18,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridAutoRows: 'min-content',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('sofa', 20),
    name: "Living Room",
    meta: devices.living ? dim + '% · Warm white' : 'Off',
    on: devices.living,
    onToggle: set('living')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: devices.living,
    onChange: set('living'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('cooking-pot', 20),
    name: "Kitchen",
    meta: devices.kitchen ? '80% · Daylight' : 'Off',
    on: devices.kitchen,
    onToggle: set('kitchen')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: devices.kitchen,
    onChange: set('kitchen'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('lock', 20),
    name: "Front Door",
    meta: devices.lock ? 'Locked · 2m ago' : 'Unlocked',
    on: devices.lock,
    onToggle: set('lock')
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: devices.lock ? 'online' : 'alert'
  }, devices.lock ? 'Secure' : 'Open')), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('thermometer', 20),
    name: "Thermostat",
    meta: devices.thermo ? '72°F · Cooling' : 'Idle',
    on: devices.thermo,
    onToggle: set('thermo')
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: "info",
    mono: true
  }, "72\xB0")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 'span 2'
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "sun-dim",
    style: {
      width: 18,
      height: 18,
      color: 'var(--cora-signal)'
    }
  }), " Living Room brightness"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--cora-signal)'
    }
  }, dim, "%")), /*#__PURE__*/React.createElement(Slider, {
    value: dim,
    onChange: setDim
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    glow: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      paddingTop: 22,
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    size: 124,
    state: "idle"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-primary)',
      fontWeight: 600
    }
  }, "Cora is standing by"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "\u201CDim the lights and lock up\u201D")), /*#__PURE__*/React.createElement(Button, {
    variant: "signal",
    full: true,
    icon: CmdIcon('mic', 17),
    onClick: openVoice
  }, "Talk to Cora")), /*#__PURE__*/React.createElement(Panel, {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Energy now",
    value: "3.1",
    unit: "kW",
    tone: "ember",
    trend: "\u25BC 8% today"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Air",
    value: "Good",
    tone: "online",
    trend: "CO\u2082 612ppm"
  })))));
}
window.HomeView = HomeView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/command/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/command/MoreViews.jsx
try { (() => {
// Command hub — Security & Energy views.
const {
  Panel,
  StatusPill,
  Metric,
  Button,
  Switch
} = window.CoraDesignSystem_96922a;
function CameraTile({
  name,
  status
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      position: 'relative',
      aspectRatio: '16/10',
      background: 'linear-gradient(160deg,#141b26,#0b1017)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--cora-alert)',
      boxShadow: '0 0 8px var(--cora-alert)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-secondary)',
      letterSpacing: '0.08em'
    }
  }, "REC")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "video",
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 26,
      height: 26,
      color: 'rgba(157,176,198,0.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 10,
      left: 12,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 11,
      right: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, status));
}
function SecurityView() {
  const [armed, setArmed] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '30px 34px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, "Security"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "All entry points secured \xB7 last event 41m ago")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: armed ? 'online' : 'warn'
  }, armed ? 'Armed — Away' : 'Disarmed'), /*#__PURE__*/React.createElement(Switch, {
    checked: armed,
    onChange: setArmed
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(CameraTile, {
    name: "Front Door",
    status: "1080p"
  }), /*#__PURE__*/React.createElement(CameraTile, {
    name: "Backyard",
    status: "1080p"
  }), /*#__PURE__*/React.createElement(CameraTile, {
    name: "Garage",
    status: "720p"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 16
    }
  }, [['Front Door', 'Locked', 'online'], ['Patio', 'Closed', 'online'], ['Windows', '3 secured', 'online'], ['Motion', 'Clear', 'neutral']].map(([n, s, t]) => /*#__PURE__*/React.createElement(Panel, {
    key: n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, n), /*#__PURE__*/React.createElement(StatusPill, {
    tone: t
  }, s)))));
}
function EnergyView() {
  const bars = [['Climate', 42, 'var(--cora-info)'], ['Lighting', 22, 'var(--cora-signal)'], ['Kitchen', 18, 'var(--cora-ember)'], ['EV Charger', 12, 'var(--cora-online)'], ['Other', 6, 'var(--text-muted)']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '30px 34px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, "Energy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "Home is running efficiently today")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Metric, {
    label: "Now",
    value: "3.1",
    unit: "kW",
    tone: "ember",
    trend: "\u25BC 8% vs avg"
  })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Metric, {
    label: "Today",
    value: "18.4",
    unit: "kWh",
    tone: "signal",
    trend: "$4.20 est."
  })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Metric, {
    label: "Solar",
    value: "+2.2",
    unit: "kW",
    tone: "online",
    trend: "Exporting"
  }))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)',
      marginBottom: 18
    }
  }, "Usage by category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, bars.map(([n, p, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 10,
      borderRadius: 99,
      background: 'var(--surface-hover)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p + '%',
      height: '100%',
      background: c,
      borderRadius: 99,
      boxShadow: '0 0 10px ' + c
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, p, "%"))))));
}
window.SecurityView = SecurityView;
window.EnergyView = EnergyView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/command/MoreViews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/command/RoomsView.jsx
try { (() => {
// Command hub — Rooms view: room rail + device grid + climate.
const {
  Panel,
  DeviceTile,
  Switch,
  StatusPill,
  Slider,
  Tabs,
  Metric
} = window.CoraDesignSystem_96922a;
function RoomsView() {
  const rooms = ['Living Room', 'Kitchen', 'Bedroom', 'Office', 'Garage'];
  const [room, setRoom] = React.useState('Living Room');
  const [temp, setTemp] = React.useState(72);
  const [d, setD] = React.useState({
    ceiling: true,
    lamp: true,
    tv: false,
    blinds: true,
    speaker: true
  });
  const set = k => v => setD(s => ({
    ...s,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210,
      flexShrink: 0,
      borderRight: '1px solid var(--border-subtle)',
      padding: '30px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      padding: '0 10px 12px'
    }
  }, "Rooms"), rooms.map(r => {
    const active = r === room;
    return /*#__PURE__*/React.createElement("button", {
      key: r,
      onClick: () => setRoom(r),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 46,
        padding: '0 14px',
        borderRadius: 12,
        border: 'none',
        cursor: 'pointer',
        background: active ? 'var(--accent-fill)' : 'transparent',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-ui)',
        fontSize: 15,
        fontWeight: active ? 600 : 500
      }
    }, r, active && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--cora-signal)',
        boxShadow: 'var(--glow-signal-soft)'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '30px 34px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, room), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "5 devices \xB7 4 active")), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "online"
  }, "Climate synced")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('lightbulb', 20),
    name: "Ceiling",
    meta: d.ceiling ? '74%' : 'Off',
    on: d.ceiling,
    onToggle: set('ceiling')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.ceiling,
    onChange: set('ceiling'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('lamp', 20),
    name: "Floor Lamp",
    meta: d.lamp ? '40% · Amber' : 'Off',
    on: d.lamp,
    onToggle: set('lamp')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.lamp,
    onChange: set('lamp'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('tv', 20),
    name: "TV",
    meta: d.tv ? 'Netflix' : 'Standby',
    on: d.tv,
    onToggle: set('tv')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.tv,
    onChange: set('tv'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('blinds', 20),
    name: "Blinds",
    meta: d.blinds ? 'Open 60%' : 'Closed',
    on: d.blinds,
    onToggle: set('blinds')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.blinds,
    onChange: set('blinds'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: CmdIcon('speaker', 20),
    name: "Speaker",
    meta: d.speaker ? 'Ambient · 24%' : 'Muted',
    on: d.speaker,
    onToggle: set('speaker')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.speaker,
    onChange: set('speaker'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Set to",
    value: temp,
    unit: "\xB0F",
    tone: "info"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "now 71\xB0")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    value: temp,
    min: 60,
    max: 82,
    onChange: setTemp,
    accent: "var(--cora-info)"
  }))))));
}
window.RoomsView = RoomsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/command/RoomsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/command/Sidebar.jsx
try { (() => {
// Command hub — left navigation rail. Reads Cora components from the bundle.
const {
  IconButton
} = window.CoraDesignSystem_96922a;
function CmdIcon(n, size) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size || 22,
      height: size || 22
    }
  });
}
function Sidebar({
  view,
  setView
}) {
  const nav = [{
    id: 'standby',
    icon: 'orbit',
    label: 'Standby'
  }, {
    id: 'home',
    icon: 'house',
    label: 'Home'
  }, {
    id: 'rooms',
    icon: 'layout-grid',
    label: 'Rooms'
  }, {
    id: 'security',
    icon: 'shield-check',
    label: 'Security'
  }, {
    id: 'energy',
    icon: 'zap',
    label: 'Energy'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      flexShrink: 0,
      height: '100%',
      background: 'rgba(8,12,20,0.6)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px 0',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setView('standby'),
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      marginBottom: 20,
      cursor: 'pointer',
      background: 'radial-gradient(circle at 38% 34%, #B9FFF0 0%, var(--cora-signal) 45%, var(--cora-signal-dim) 100%)',
      boxShadow: 'var(--glow-signal)'
    }
  }), nav.map(n => {
    const active = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setView(n.id),
      style: {
        width: 64,
        height: 60,
        borderRadius: 16,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        background: active ? 'var(--accent-fill)' : 'transparent',
        color: active ? 'var(--cora-signal)' : 'var(--text-muted)',
        transition: 'all var(--dur-base) var(--ease-out)'
      }
    }, CmdIcon(n.icon, 21), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.03em'
      }
    }, n.label));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid var(--border-strong)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg,#2b3a4f,#1a2330)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 600
    }
  }, "A")));
}
window.Sidebar = Sidebar;
window.CmdIcon = CmdIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/command/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/command/StandbyView.jsx
try { (() => {
// Command hub — Ambient standby ("screensaver") screen. The orb is the hero.
const {
  Orb,
  StatusPill
} = window.CoraDesignSystem_96922a;
function StandbyView({
  openVoice
}) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 10000);
    return () => clearInterval(t);
  }, []);
  const hh = now.getHours();
  const h12 = (hh + 11) % 12 + 1;
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ampm = hh < 12 ? 'AM' : 'PM';
  const day = now.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '32%',
      left: '50%',
      width: 620,
      height: 620,
      transform: 'translate(-50%,-50%)',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(79,227,193,0.10) 0%, rgba(79,227,193,0) 62%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 30,
      left: 34,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: "online"
  }, "Home \xB7 Secured"), /*#__PURE__*/React.createElement(StatusPill, {
    tone: "neutral",
    mono: true
  }, "4 rooms active")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 28,
      right: 34,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "cloud-moon",
    style: {
      width: 22,
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "54\xB0")), /*#__PURE__*/React.createElement(Orb, {
    size: 260,
    state: "idle"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 92,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      color: 'var(--text-primary)',
      lineHeight: 1
    }
  }, h12, ":", mm), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      color: 'var(--text-muted)'
    }
  }, ampm)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 17,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, day), /*#__PURE__*/React.createElement("button", {
    onClick: openVoice,
    style: {
      position: 'absolute',
      bottom: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: 46,
      padding: '0 22px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.06em'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mic",
    style: {
      width: 16,
      height: 16,
      color: 'var(--cora-signal)'
    }
  }), "\u201CHey Cora\u201D"));
}
window.StandbyView = StandbyView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/command/StandbyView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/phone/AssistantScreen.jsx
try { (() => {
// Phone — Cora assistant screen (voice).
const {
  Orb
} = window.CoraDesignSystem_96922a;
function PhoneAssistant() {
  const [phase, setPhase] = React.useState('listening');
  React.useEffect(() => {
    const a = setTimeout(() => setPhase('thinking'), 2400);
    const b = setTimeout(() => setPhase('answer'), 3800);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);
  const chips = ['Goodnight routine', 'Show me the front door', "What's the temperature?"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 24px 110px',
      background: 'radial-gradient(120% 90% at 50% 100%, rgba(14,26,32,0.6) 0%, transparent 60%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    size: 168,
    state: phase === 'thinking' ? 'thinking' : 'listening'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, phase === 'listening' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500,
      color: 'var(--text-primary)',
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u201C"), "Set the bedroom to sleep mode", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u201D")), phase === 'thinking' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--cora-signal)'
    }
  }, "Working on it\u2026"), phase === 'answer' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 500,
      color: 'var(--text-primary)',
      lineHeight: 1.35
    }
  }, "Sleep mode on. Lights out, doors locked, temp at 68\xB0.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: '100%'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    style: {
      width: '100%',
      height: 46,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 500
    }
  }, c))));
}
window.PhoneAssistant = PhoneAssistant;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/phone/AssistantScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/phone/HomeScreen.jsx
try { (() => {
// Phone — Home screen. Scrollable summary of the home.
const {
  DeviceTile,
  Switch,
  StatusPill,
  Panel,
  Metric,
  Orb
} = window.CoraDesignSystem_96922a;
function PhoneHome({
  setTab,
  openVoice
}) {
  const [d, setD] = React.useState({
    living: true,
    lock: true,
    ac: true,
    cam: true
  });
  const set = k => v => setD(s => ({
    ...s,
    [k]: v
  }));
  const scenes = [['sunset', 'Evening', true], ['moon', 'Sleep', false], ['clapperboard', 'Movie', false], ['plane', 'Away', false]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      padding: '8px 20px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--cora-signal)',
      marginBottom: 6
    }
  }, "Home \xB7 4 active"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, "Good evening")), /*#__PURE__*/React.createElement("button", {
    onClick: openVoice,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 16px',
      marginBottom: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--accent-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--glow-signal-soft)',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    size: 40,
    state: "idle"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Ask Cora"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\u201CGoodnight\u201D \xB7 \u201CLock up\u201D")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mic",
    style: {
      width: 20,
      height: 20,
      color: 'var(--cora-signal)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      marginBottom: 22,
      paddingBottom: 4
    }
  }, scenes.map(([ic, l, a]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: 82,
      height: 82,
      borderRadius: 'var(--radius-md)',
      background: a ? 'var(--cora-signal)' : 'var(--surface-card)',
      border: '1px solid',
      borderColor: a ? 'transparent' : 'var(--border-subtle)',
      color: a ? 'var(--text-on-signal)' : 'var(--text-secondary)',
      boxShadow: a ? 'var(--glow-signal-soft)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 20,
      height: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600
    }
  }, l)))), /*#__PURE__*/React.createElement(Panel, {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Indoor",
    value: "72",
    unit: "\xB0F",
    tone: "info"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Energy",
    value: "3.1",
    unit: "kW",
    tone: "ember"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Air",
    value: "Good",
    tone: "online"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Favorites"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "sofa",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "Living Room",
    meta: d.living ? '62% · Warm' : 'Off',
    on: d.living,
    onToggle: set('living')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.living,
    onChange: set('living'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "lock",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "Front Door",
    meta: d.lock ? 'Locked' : 'Open',
    on: d.lock,
    onToggle: set('lock')
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: d.lock ? 'online' : 'alert'
  }, d.lock ? 'Secure' : 'Open')), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "wind",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "AC",
    meta: d.ac ? 'Cooling · 72°' : 'Off',
    on: d.ac,
    onToggle: set('ac')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.ac,
    onChange: set('ac'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "video",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "Cameras",
    meta: d.cam ? '3 recording' : 'Paused',
    on: d.cam,
    onToggle: set('cam')
  }, /*#__PURE__*/React.createElement(StatusPill, {
    tone: d.cam ? 'online' : 'neutral'
  }, d.cam ? 'Live' : 'Off'))));
}
window.PhoneHome = PhoneHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/phone/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/phone/RoomScreen.jsx
try { (() => {
// Phone — Rooms screen: room pills + device list with a detail slider.
const {
  DeviceTile,
  Switch,
  Slider,
  Panel,
  Tabs,
  StatusPill
} = window.CoraDesignSystem_96922a;
function PhoneRooms() {
  const [room, setRoom] = React.useState('living');
  const [bright, setBright] = React.useState(62);
  const [d, setD] = React.useState({
    ceiling: true,
    lamp: true,
    tv: false,
    fan: false
  });
  const set = k => v => setD(s => ({
    ...s,
    [k]: v
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto',
      padding: '8px 20px 100px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      margin: '8px 0 16px'
    }
  }, "Rooms"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: room,
    onChange: setRoom,
    items: [{
      label: 'Living',
      value: 'living'
    }, {
      label: 'Kitchen',
      value: 'kitchen'
    }, {
      label: 'Bedroom',
      value: 'bedroom'
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    glow: true,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Ambient lighting"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, "4 lights \xB7 warm white")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      color: 'var(--cora-signal)'
    }
  }, bright, "%")), /*#__PURE__*/React.createElement(Slider, {
    value: bright,
    onChange: setBright
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "lightbulb",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "Ceiling",
    meta: d.ceiling ? '74%' : 'Off',
    on: d.ceiling,
    onToggle: set('ceiling')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.ceiling,
    onChange: set('ceiling'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "lamp",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "Floor Lamp",
    meta: d.lamp ? '40% · Amber' : 'Off',
    on: d.lamp,
    onToggle: set('lamp')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.lamp,
    onChange: set('lamp'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "tv",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "TV",
    meta: d.tv ? 'Netflix' : 'Standby',
    on: d.tv,
    onToggle: set('tv')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.tv,
    onChange: set('tv'),
    size: "sm"
  })), /*#__PURE__*/React.createElement(DeviceTile, {
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "fan",
      style: {
        width: 20,
        height: 20
      }
    }),
    name: "Ceiling Fan",
    meta: d.fan ? 'Medium' : 'Off',
    on: d.fan,
    onToggle: set('fan')
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: d.fan,
    onChange: set('fan'),
    size: "sm"
  }))));
}
window.PhoneRooms = PhoneRooms;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/phone/RoomScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/phone/TabBar.jsx
try { (() => {
// Phone — bottom tab bar.
function PhoneTabBar({
  tab,
  setTab
}) {
  const tabs = [{
    id: 'home',
    icon: 'house',
    label: 'Home'
  }, {
    id: 'rooms',
    icon: 'layout-grid',
    label: 'Rooms'
  }, {
    id: 'assistant',
    icon: 'sparkles',
    label: 'Cora'
  }, {
    id: 'settings',
    icon: 'settings',
    label: 'Settings'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 84,
      paddingBottom: 20,
      background: 'rgba(8,12,20,0.82)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: 10
    }
  }, tabs.map(t => {
    const active = tab === t.id;
    const cora = t.id === 'assistant';
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        flex: 1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        color: active ? 'var(--cora-signal)' : 'var(--text-muted)'
      }
    }, cora ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: active ? 'radial-gradient(circle at 38% 34%, #B9FFF0, var(--cora-signal) 55%, var(--cora-signal-dim))' : 'var(--surface-hover)',
        boxShadow: active ? 'var(--glow-signal-soft)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "sparkles",
      style: {
        width: 16,
        height: 16,
        color: active ? 'var(--text-on-signal)' : 'var(--text-muted)'
      }
    })) : /*#__PURE__*/React.createElement("i", {
      "data-lucide": t.icon,
      style: {
        width: 22,
        height: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 10.5,
        fontWeight: 600
      }
    }, t.label));
  }));
}
window.PhoneTabBar = PhoneTabBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/phone/TabBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DeviceTile = __ds_scope.DeviceTile;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Orb = __ds_scope.Orb;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
