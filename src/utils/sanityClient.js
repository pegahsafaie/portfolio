require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})
const sanityClient = require("@sanity/client");

const sanity = {
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  useCdn: true
}

module.exports = sanityClient(sanity);