import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';
import { type IOpeaStore } from '@/src/@types';

export const opeaStore = createStore<IOpeaStore>()(
  persist(
    set => ({
      dark: false,
      locale: 'pt',
      setDark: updater => set(state => ({ dark: updater(state.dark) })),
      setLanguage: locale => set(() => ({ locale }))
    }),
    {
      name: 'opea-store'
    }
  )
);

export const useOpeaStore = () => useStore(opeaStore);
