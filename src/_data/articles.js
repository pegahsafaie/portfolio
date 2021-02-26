const client = require('../utils/sanityClient.js')
const groq = require('groq')

module.exports = getArticles
async function getArticles() {
  const query = `*[_type == "article"]{title, slug, description, url}`
  const docs = await client.fetch(query).catch(err => console.error(err));
  return docs;
}