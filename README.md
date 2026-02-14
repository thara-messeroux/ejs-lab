# EJS Lab

## What This Lab Is About

This lab teaches how to create dynamic webpages using Express and EJS.

Instead of sending static text to the browser, we will learn how to send data from the server into an HTML template. EJS allows us to mix JavaScript with HTML so pages can change based on information.

For example, instead of hardcoding “Hello Thara” in HTML, we can send different names from the server and reuse the same template.

This is an important step toward building real web applications that display user data, lists, and dynamic content.

## What I did so far (Sanity Check)
I set up a very small Express server to make sure my project works before adding EJS.

### Why this step matters (super simple)
Before building anything “fancy”, we do a quick test to confirm:
- Express is installed correctly
- My server can run
- My browser can talk to my server

This is like turning on a new phone to make sure it powers on before downloading apps.

## How to run the server
1. In the terminal (inside this folder), run:
   ```bash
   node server.js
   ```
## Connecting EJS to Express

In this step, I connected EJS to Express and rendered my first template.

Instead of using `res.send()` to send plain text, I used `res.render("index")` to render an EJS template file located inside the `views` folder.

EJS files allow me to combine HTML and JavaScript. Even though the template currently contains only static HTML, this sets up the structure for dynamic rendering in the next steps.

### What changed
- Added: `app.set("view engine", "ejs")`
- Created: `views/index.ejs`
- Replaced: `res.send()` with `res.render("index")`

### Why this matters
Now my server can:
- Render full HTML pages
- Use template files
- Prepare for dynamic data

This is how real web applications send structured pages to users.

