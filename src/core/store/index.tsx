import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';

interface IOpeaProps {
  dark: boolean;
  locale: string;
}

interface IOpeaStore extends IOpeaProps {
  setDark: (updater: (prev: boolean) => boolean) => void;
  setLanguage: (language: IOpeaProps['locale']) => void;
}

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
