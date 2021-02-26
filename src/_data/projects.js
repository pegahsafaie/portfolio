const client = require('../utils/sanityClient.js')
const groq = require('groq')

module.exports = getProjects
async function getProjects() {
  const query = `*[_type == "project"]{title, slug, description, url}`
  const docs = await client.fetch(query).catch(err => console.error(err));
  return docs;
  /*
  If you return sth like this in this folder _data>owner>projects
  you have to get it by owner.projects in your template
  return [
    { title: 'project1', description: 'project1 description', slug: 'slug'}
  ]*/
}