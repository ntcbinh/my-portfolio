import { onIdTokenChanged, type User } from 'firebase/auth';
import { auth } from './firebase';
import { token, user } from '$lib/stores/user-store';
import { goto } from '$app/navigation';
import { ROUTES } from '$lib/constants/routes.constant';
import { env } from '$env/dynamic/public';

const removeStoredUser = () => {
  user.set(null);
  token.set(null);
};

const handleUnauthorizedUser = async (email: string | null) => {
  await auth.signOut();
  removeStoredUser();
  console.error('Unauthorized user:', email);
};

const handleAuthorizedUser = async (firebaseUser: User) => {
  user.set(firebaseUser);
  const idToken = await firebaseUser.getIdToken();
  token.set(idToken);
  await goto(ROUTES.ADMIN_DASHBOARD);
};

onIdTokenChanged(auth, async (firebaseUser) => {
  if (!firebaseUser) {
    return removeStoredUser();
  }

  const email = firebaseUser.email ?? '';
  const allowedEmails = env.PUBLIC_ALLOWED_EMAILS.split(',').map((email) => email.trim());

  if (allowedEmails.includes(email)) {
    await handleAuthorizedUser(firebaseUser);
  } else {
    await handleUnauthorizedUser(email);
  }
});
