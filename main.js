import express from "express";
import { createClient } from "jsr:@supabase/supabase-js@2";

const app = express();
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_KEY = Deno.env.get("SUPABASE_KEY");

const supabase = createClient( SUPABASE_URL, SUPABASE_KEY);
const { data, error } = await supabase.from("test").select();


app.get("/", (req, res) => {
  res.send(data);
});

app.listen(8000);
console.log("SERVER ON ..");
