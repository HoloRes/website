import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) return null;
  if (!loading) {
    if (session) router.push('/');
    else signIn();
  }
}
