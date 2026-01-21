import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZindex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        window.isOpen = true;
        window.zIndex = state.nextZindex;
        window.data = data ?? window.data;
        state.nextZindex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        window.isOpen = false;
        window.zIndex = INITIAL_Z_INDEX;
        window.data = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window || !window.isOpen) return;
        window.zIndex = state.nextZindex++;
      }),
  })),
);

export default useWindowStore;
