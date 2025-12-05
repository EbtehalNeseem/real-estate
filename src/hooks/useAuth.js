import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user || null);
      setChecking(false);
    });

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return { user, checking };
}
