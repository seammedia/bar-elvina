"use client";

import { useState } from "react";
import { MENUS } from "@/lib/config";

export function MenuViewer() {
  const [active, setActive] = useState(0);
  const current = MENUS[active];
  const isImage = /\.(?:gif|jpe?g|png|webp)$/i.test(current.file);

  return (
    <div className="menu-viewer">
      <div className="menu-tabs" role="tablist" aria-label="Menus">
        {MENUS.map((m, i) => (
          <button
            key={m.name}
            role="tab"
            id={`menu-tab-${i}`}
            aria-controls="menu-panel"
            aria-selected={i === active}
            className={`menu-tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {m.name}
          </button>
        ))}
      </div>
      <div className="menu-download-actions">
        <a href={current.file} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          Open {current.name}
        </a>
        <a href={current.file} download className="btn btn-tan">
          Download {current.name}
        </a>
      </div>
      <div id="menu-panel" role="tabpanel" aria-labelledby={`menu-tab-${active}`}>
        <div className="menu-embed menu-desktop-preview">
          {isImage ? (
            <img
              key={current.file}
              src={current.file}
              alt={`${current.name} menu`}
              className="menu-image"
              loading="lazy"
            />
          ) : (
            <iframe
              key={current.file}
              src={`${current.file}#view=Fit&toolbar=0&navpanes=0`}
              title={`${current.name} menu`}
              loading="lazy"
            />
          )}
        </div>
        <div key={current.file} className="menu-mobile-pages">
          {current.pages.map((page, i) => (
            <figure key={page}>
              <img src={page} alt={`${current.name}, page ${i + 1} of ${current.pages.length}`} loading={i === 0 ? "eager" : "lazy"} />
              <figcaption>Page {i + 1} of {current.pages.length}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
