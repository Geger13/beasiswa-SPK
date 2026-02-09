// Masukkan URL dan Anon Key dari Dashboard Supabase (Menu Settings -> API)
const SUPABASE_URL = 'https://idnvhjcxfynnwepmadmq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkbnZoamN4ZnlubndlcG1hZG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NjU0NTIsImV4cCI6MjA4NjE0MTQ1Mn0.x7eqFewOiB7VsmS2TbUEwdmy4aTiIIZbVNEOU2u3rZU';

// Inisialisasi Client (Pastikan script supabase-js sudah dimuat di HTML)
window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
