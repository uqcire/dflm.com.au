// Temporary debug module for checking env vars in local dev
console.log('=== ENV DEBUG (TEMPORARY) ===');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY length:', (import.meta.env.VITE_SUPABASE_ANON_KEY || '').length);
console.log('VITE_SUPABASE_ANON_KEY exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
console.log('All VITE_ env vars:', Object.keys(import.meta.env).filter(k => k.startsWith('VITE_')));
console.log('===========================');

export default {
    url: import.meta.env.VITE_SUPABASE_URL,
    keyLength: (import.meta.env.VITE_SUPABASE_ANON_KEY || '').length,
    hasKey: !!import.meta.env.VITE_SUPABASE_ANON_KEY,
    allViteVars: Object.keys(import.meta.env).filter(k => k.startsWith('VITE_'))
};
