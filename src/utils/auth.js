import { supabase } from "../supabase/supabaseConfig.js";

export const isUserLoggedIn = () => {
    const user = supabase.auth.user();
    console.log(user);
    if (user) return true;
    return false;
};
