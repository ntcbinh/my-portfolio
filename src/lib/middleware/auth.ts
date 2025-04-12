import { auth } from '$lib/firebase/firebase';
import { authStore } from '$lib/stores/auth';
import { ROUTES, ROUTES_WITHOUT_AUTH } from '$lib/constants/routes.constant';
import { goto } from '$app/navigation';

export async function authMiddleware(currentPath: string) {
    const user = auth.currentUser;

    if (ROUTES_WITHOUT_AUTH.includes(currentPath)) return;

    if (!user) {
        if (currentPath === ROUTES.DASHBOARD) {
            return goto(ROUTES.HOME);
        }
        return;
    }

    if (currentPath === ROUTES.HOME) {
        return goto(ROUTES.DASHBOARD);
    }

    authStore.update((curr) => ({
        ...curr,
        user,
        loading: false
    }));
}