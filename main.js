import express from "express";
import { createClient } from "jsr:@supabase/supabase-js@2";

const app = express();
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_KEY = Deno.env.get("SUPABASE_KEY");

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
/*
const { data, error } = await supabase.from("test")
    .insert(
        {
            name : "ปองสิทธิ์",
            surname : "โพธิคุณ"
        }
    )
*/

app.get("/", (req, res) => {
  const { data, error } = supabase.from("test")
    .insert(
      {
        name: "ปองสิทธิ์",
        surname: "โพธิคุณ",
      },
    );
  res.send(data);
});

app.post("/", (req, res) => {
  const payload = req.body;
  const { data, error } = supabase.from("test")
    .insert(
      {
        name: payload,
        surname: payload,
      },
    );
  res.send(data);
});

app.listen(8000);
console.log("SERVER ON ..");
