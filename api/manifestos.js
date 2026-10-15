export default async function handler(req, res) {
  // Substitua pela URL da sua implantação do Apps Script
  const APPS_SCRIPT_URL = 'https://script.google.com/a/macros/magazineluiza.com.br/s/AKfycbzmgJLDauO9WCrOc3eB5Q1FaQhFHVNoGIYwKVIy9U16EAkw2c1VlXvJJIOEHBcx_PZlnw/exec';

  try {
    const response = await fetch(APPS_SCRIPT_URL, { redirect: 'follow' });
    const data = await response.json();
    
    // Libera o CORS para a sua própria aplicação Vercel
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store, max-age=0'); // Sem cache! Dados ao vivo
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar dados do Google Sheets' });
  }
}
