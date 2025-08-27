// app/actions/setLocale.ts
"use server";
import { cookies } from "next/headers";

export async function setLocaleCookie(locale: string) {
  const store = await cookies();
  store.set({
    name: "locale",
    value: locale,
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });
}
