import { supabase } from "../supabase/supabaseConfig.js";

export const isUserLoggedIn = () => {
    const user = supabase.auth.user();
    if (user) return user.id;
    return false;
};
