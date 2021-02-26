const client = require('../utils/sanityClient.js')
const groq = require('groq')

module.exports = getAbout
async function getAbout() {
  const query = `*[_type == "about"]{bio, image}`
  const docs = await client.fetch(query).catch(err => console.error(err));
  return docs.filter(doc => doc.bio)[0];
}