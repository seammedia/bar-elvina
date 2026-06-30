"use client";

import { useState } from "react";
import { MENUS } from "@/lib/config";

export function MenuViewer() {
  const [active, setActive] = useState(0);
  const current = MENUS[active];

  return (
    <div className="menu-viewer">
      <div className="menu-tabs" role="tablist">
        {MENUS.map((m, i) => (
          <button
            key={m.name}
            role="tab"
            aria-selected={i === active}
            className={`menu-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {m.name}
          </button>
        ))}
      </div>
      <div className="menu-embed">
        <iframe
          key={current.file}
          src={`${current.file}#view=FitH&toolbar=0`}
          title={`${current.name} menu`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
