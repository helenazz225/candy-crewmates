import { createClient } from "@supabase/supabase-js";
const URL = 'https://fgyvfthuzucepjywnslc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZneXZmdGh1enVjZXBqeXduc2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNDYzNzcsImV4cCI6MTk5NjcyMjM3N30.CaxYE9y5q_qewT7_iGhsN8vUt7LEflAPKEYD_QX0vqo'

export const supabase = createClient(URL, API_KEY)