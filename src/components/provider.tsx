"use client";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  )
}
