"use client";

import { useSyncExternalStore } from "react";

export type Mode = "pro" | "space";
const KEY = "mode";

// Runs inline in <head> before paint so the saved mode applies without a flash.
export const modeInitScript = `(function(){try{var m=localStorage.getItem("${KEY}");if(m==="space"||m==="pro")document.documentElement.dataset.mode=m;}catch(e){}})();`;

function read(): Mode {
  return document.documentElement.dataset.mode === "space" ? "space" : "pro";
}

function subscribe(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-mode"] });
  return () => obs.disconnect();
}

export function setMode(mode: Mode) {
  document.documentElement.dataset.mode = mode;
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    /* storage blocked — mode still applies for this visit */
  }
}

export function useMode(): Mode {
  return useSyncExternalStore(subscribe, read, () => "pro");
}
