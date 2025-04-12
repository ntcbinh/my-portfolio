import { goto } from "$app/navigation";
import { ROUTES } from "$lib/constants/routes.constant";
import { auth, googleProvider } from "$lib/firebase/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import type { DocumentData } from "firebase/firestore";
import { writable } from "svelte/store";

interface AuthStore {
  user: User | null;
  loading: boolean;
  data: DocumentData | unknown;
}

const initialAuthData = {
  user: null,
  loading: true,
  data: {},
};

export const authStore = writable<AuthStore>(initialAuthData);

export const authHandlers = {
  login: async () => {
    await signInWithPopup(auth, googleProvider)
      .then((userCredential) =>
        authStore.update((prev) => ({ ...prev, user: userCredential.user }))
      )
      .finally(() => goto(ROUTES.DASHBOARD));
  },
  logout: async () => {
    await signOut(auth).finally(() => authStore.set(initialAuthData));
  },
};
