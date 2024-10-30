import { create } from "zustand"

type Page = "home" | "cv"

export type PageStore = {
    page: Page
    setPage: (page: Page) => void
}

export const usePage = create<PageStore>((set) => ({
    page: "home",
    setPage: (page: Page) => set({ page }),
}))
