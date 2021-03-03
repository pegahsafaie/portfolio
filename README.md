this repo consists of two different project
Eleventy -> src
Sanity -> sanity-stuido
vercel serverless functions api --> it is not a different project with its package json. but it is backend of our project 

each of them can be build and deployed separately.
To Deploy Sanity -> currently it is not host anywhere. So anytime you want to change the content you
run it locally and update the content and then let the Eleventy build the website using its values.

To deploy Eleventy project ->
either run vercel or push the changes to github. vercel will automatically build your project

to run Eleventy locally ->
0. go to src folder
1. Eleventy --serve



I use emailjs to send message but you can deploy your own mail-server and use it.
I had cors problem and could not deploy both on the same host(ui and api in one repo)
this project does that but I could not figure out how
https://github.com/ngduc/vercel-express
https://vercel.com/guides/upgrade-to-zero-configuration