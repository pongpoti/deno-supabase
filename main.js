import express from "express";
import { createClient } from 'jsr:@supabase/supabase-js@2'

const app = express();
//const SUPABASE_URL = 'https://zlfahkhcsxxmqswnpgfs.supabase.co';
//const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsZmFoa2hjc3h4bXFzd25wZ2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0OTAyNDIsImV4cCI6MjA2NDA2NjI0Mn0.2sG581agOPFxKdMJM4sALND3cvtoqdoVLpgo5aYwHMY';
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_KEY = Deno.env.get("SUPABASE_KEY");

const supabase = createClient( SUPABASE_URL, SUPABASE_KEY);

app.get("/", (req, res) => {
  res.send(SUPABASE_URL + " : " + SUPABASE_KEY);
});

app.listen(8000);
console.log("SERVER ON ..");
