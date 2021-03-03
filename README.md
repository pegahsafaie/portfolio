this repo consists of two different project
Eleventy -> src
Sanity -> sanity-stuido
vercel serverless functions api --> it is not a different project with its package json. but it is backend of our project 

each of them can be build and deployed separately.
To Deploy Sanity -> currently it is not host anywhere. So anytime you want to change the content you
run it locally and update the content and then let the Eleventy build the website using its values.

To deploy Eleventy project ->
0. go to src folder
1. execute Eleventy -> it creates the output(for now one single file index.html) in the _site
2. npm run deploy -> deploys the content of _site folder to pegahsafaie.dev

to run Eleventy locally ->
0. go to src folder
1. Eleventy --serve


