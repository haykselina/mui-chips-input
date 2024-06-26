import { jsx as g } from "react/jsx-runtime";
import m, { createElement as xt } from "react";
import et from "@mui/material/Chip";
import { styled as S } from "@mui/material/styles";
import gt from "@mui/icons-material/Close";
import yt from "@mui/material/ClickAwayListener";
import Et from "@mui/material/IconButton";
import Dt from "@mui/material/TextField";
const T = {
  enter: "Enter",
  backspace: "Backspace"
}, It = {
  ime: 229
}, At = S(et)(({ theme: e, size: n }) => `
    max-width: 100%;
    margin: 2px 4px;
    height: ${n === "small" ? "26px" : "32px"};


    &[aria-disabled="true"] > svg {
      color: ${e.palette.action.disabled};
      cursor: default;
    }

    &.MuiChipsInput-Chip-Editing {
      background-color: ${e.palette.primary.light};
      color: ${e.palette.primary.contrastText};
    }
  `), wt = {
  ChipStyled: At
}, v = ({
  className: e,
  index: n,
  onDelete: c,
  disabled: l,
  onEdit: C,
  isEditing: h,
  disableEdition: p,
  ...y
}) => {
  const I = (s) => {
    s.key === T.enter && c(n);
  }, E = (s) => {
    s?.preventDefault?.(), s?.stopPropagation?.(), c(n);
  }, A = (s) => {
    s.target.textContent === y.label && (l || C(n));
  };
  return /* @__PURE__ */ g(
    wt.ChipStyled,
    {
      className: `MuiChipsInput-Chip ${h ? "MuiChipsInput-Chip-Editing" : ""} ${e || ""}`,
      onKeyDown: I,
      disabled: l,
      onDoubleClick: p ? void 0 : A,
      tabIndex: l ? -1 : 0,
      "aria-disabled": l,
      onDelete: E,
      ...y
    }
  );
};
function $t(e) {
  return typeof e == "boolean";
}
function kt(e) {
  return typeof e == "object" && !Array.isArray(e) && e !== null;
}
function W(e, n) {
  typeof n == "function" ? n(e) : n && kt(n) && "current" in n && (n.current = e);
}
const bt = S("div")`
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  position: absolute;
`, Tt = S(Dt)((e) => `
    max-width: 100%;

    .MuiInputBase-root {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      row-gap: 5px;
      padding-top: ${e.size === "small" ? "5px" : "9px"};
      padding-right: ${e.InputProps?.endAdornment ? "30px" : "9px"};
      padding-bottom: ${e.size === "small" ? "5px" : "9px"};
      padding-left: 10px;

      input {
        min-width: 30px;
        width: auto;
        flex-grow: 1;
        text-overflow: ellipsis;
        padding: ${e.size === "small" ? "3.5px 4px" : "7.5px 4px"};
        align-self: center;
      }
    }
  `), St = S(et)(({ theme: e, size: n }) => `
    max-width: 100%;
    margin: 2px 4px;
    height: ${n === "small" ? "26px" : "32px"};

    &[aria-disabled="true"] > svg.MuiChip-deleteIcon {
      color: ${e.palette.action.disabled};
      cursor: default;
    }
  `), tt = {
  ChipStyled: St,
  TextFieldStyled: Tt,
  EndAdornmentClose: bt
}, Rt = m.forwardRef(
  ({
    chips: e,
    onAddChip: n,
    onEditChip: c,
    onDeleteChip: l,
    InputProps: C,
    onInputChange: h,
    disabled: p,
    clearInputOnBlur: y,
    addOnBlur: I,
    validate: E,
    error: A,
    helperText: s,
    hideClearAll: w,
    inputProps: k,
    size: b,
    disableDeleteOnBackspace: R,
    disableEdition: B,
    className: F,
    renderChip: K,
    addOnWhichKey: $,
    onFocus: z,
    onDeleteAllChips: j,
    inputRef: o,
    inputValue: a,
    ...M
  }, P) => {
    const [nt, rt] = m.useState(""), [_, L] = m.useState(""), N = m.useRef(null), V = m.useRef(!1), lt = m.useRef(
      typeof a == "string"
    ), [d, O] = m.useState(null), { onKeyDown: ot, ...it } = k || {}, { inputRef: Pt, ...st } = C || {}, U = () => {
      L("");
    }, G = lt.current, x = G ? a : nt, Y = (t) => {
      h?.(t), G || rt(t);
    }, at = (t) => {
      Y(e[t]), O(t), U();
    }, D = () => {
      O(null);
    }, f = () => {
      U(), Y("");
    }, ut = (t) => {
      Y(t.target.value);
    }, H = (t, r) => (u) => {
      if (typeof E == "function") {
        const i = E(t);
        if (i === !1) {
          r?.preventDefault();
          return;
        }
        if (!$t(i) && i.isError) {
          r?.preventDefault(), L(i.textError);
          return;
        }
      }
      u();
    }, q = (t, r, u) => {
      H(
        t,
        u
      )(() => {
        c?.(t, r), D(), f();
      });
    }, J = (t, r) => {
      H(
        t,
        r
      )(() => {
        n?.(x.trim()), f();
      });
    }, Q = () => {
      if (V.current) {
        if (d !== null)
          D(), f();
        else if (I) {
          if (x.length > 0) {
            const t = x.trim();
            t.length === 0 ? f() : d !== null ? q(t, d) : J(t);
          }
        } else
          y && f();
        V.current = !1;
      }
    }, ct = (t) => {
      N.current = t, o && W(t, o), P && W(t, P);
    }, pt = (t, r) => r === It.ime ? !1 : $ ? Array.isArray($) ? $.some((u) => u === t) : $ === t : t === T.enter, dt = (t) => {
      const r = pt(t.key, t.keyCode), u = t.key === T.backspace, i = x.trim();
      if (!r && t.code === "Tab") {
        Q();
        return;
      }
      if (r && t.preventDefault(), x.length > 0 && r)
        i.length === 0 ? f() : d !== null ? q(i, d, t) : J(i, t);
      else if (u && x.length === 0 && e.length > 0 && !R) {
        const Z = e.length - 1;
        l?.(Z), d === Z && D();
      }
      ot?.(t);
    }, ft = (t) => {
      t.preventDefault(), z?.(t), V.current = !0;
    }, ht = (t) => {
      t.preventDefault(), !w && !p && (j?.(), f(), D());
    }, mt = (t) => {
      t === d ? (f(), D()) : at(t), N.current?.focus();
    }, Ct = (t) => {
      p || (l?.(t), d !== null && (D(), f()));
    }, X = e.length > 0;
    return /* @__PURE__ */ g(yt, { onClickAway: Q, children: /* @__PURE__ */ g(
      tt.TextFieldStyled,
      {
        value: x,
        onChange: ut,
        ref: P,
        className: `MuiChipsInput-TextField ${F || ""}`,
        size: b,
        placeholder: "Type and press enter",
        onFocus: ft,
        inputProps: {
          onKeyDown: dt,
          enterKeyHint: "done",
          ...it
        },
        disabled: p,
        error: !!_ || A,
        helperText: _ || s,
        InputProps: {
          inputRef: ct,
          startAdornment: X ? e.map((t, r) => {
            const u = `chip-${r}`, i = {
              index: r,
              onEdit: mt,
              label: t,
              title: t,
              isEditing: r === d,
              size: b,
              disabled: p,
              disableEdition: B,
              onDelete: Ct
            };
            return K ? K(v, u, i) : /* @__PURE__ */ xt(v, { ...i, key: u });
          }) : null,
          endAdornment: w ? null : /* @__PURE__ */ g(
            tt.EndAdornmentClose,
            {
              style: { visibility: X ? "visible" : "hidden" },
              children: /* @__PURE__ */ g(
                Et,
                {
                  "aria-label": "Clear",
                  title: "Clear",
                  disabled: p,
                  size: "small",
                  onClick: ht,
                  children: /* @__PURE__ */ g(gt, { fontSize: "small" })
                }
              )
            }
          ),
          ...st
        },
        ...M
      }
    ) });
  }
);
function Bt(e, n) {
  return [...e, n];
}
function Ft(e, n) {
  return e.filter((c, l) => n !== l);
}
function Kt(e, n, c) {
  return e.map((l, C) => n === C ? c : l);
}
const Mt = [], Ut = m.forwardRef(
  ({
    value: e = Mt,
    onChange: n,
    onAddChip: c,
    onInputChange: l,
    onDeleteChip: C,
    disabled: h,
    validate: p,
    clearInputOnBlur: y,
    addOnBlur: I,
    hideClearAll: E,
    disableDeleteOnBackspace: A,
    onEditChip: s,
    renderChip: w,
    disableEdition: k,
    addOnWhichKey: b = T.enter,
    inputValue: R,
    ...B
  }, F) => /* @__PURE__ */ g(
    Rt,
    {
      chips: e,
      onAddChip: (o) => {
        if (h)
          return;
        const a = Bt(e, o), M = a.length - 1;
        c?.(o, M), n?.(a);
      },
      onInputChange: l,
      disableDeleteOnBackspace: A,
      onDeleteChip: (o) => {
        if (h)
          return;
        const a = e[o];
        n?.(Ft(e, o)), C?.(a, o);
      },
      onEditChip: (o, a) => {
        h || k || (n?.(Kt(e, a, o)), s?.(o, a));
      },
      renderChip: w,
      onDeleteAllChips: () => {
        n?.([]);
      },
      clearInputOnBlur: y,
      addOnBlur: I,
      disabled: h,
      disableEdition: k,
      validate: p,
      inputValue: R,
      hideClearAll: E,
      addOnWhichKey: b,
      ...B,
      ref: F
    }
  )
);
export {
  Ut as MuiChipsInput
};
