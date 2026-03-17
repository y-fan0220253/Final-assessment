import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://pvefycyksufurcledlkd.supabase.co"

const supabaseKey = "sb_publishable_9F1THevePghBFQ1HysAxOA_PMJI5YFz"

const supabase = createClient(supabaseUrl, supabaseKey)

const button = document.getElementById("load")
const results = document.getElementById("results")

button.onclick = async () => {
  results.innerHTML = ""

  const { data, error } = await supabase
    .from("demo_table")
    .select("*")

  if (error) {
    console.error(error)
    const li = document.createElement("li")
    li.textContent = `Error: ${error.message}`
    results.appendChild(li)
    return
  }

  data.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = `${item.id}: ${item.title} — ${item.description}`
    results.appendChild(li)
  })
}