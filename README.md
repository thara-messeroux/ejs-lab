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

## Chunk 1: Nav Partial + Full Menu Page

I created a reusable navigation partial at `views/partials/nav.ejs` and included it on multiple pages using:
`<%- include("partials/nav") %>`.

I also added a `/menu` route that renders `menu.ejs` and sends the menu data from the server:
`res.render("menu", { menu: RESTAURANT.menu })`.

In `menu.ejs`, I used a loop (`forEach`) to display each menu item (name, price, rating, category, details) without manually repeating HTML.


## Chunk 2: Category Menu Pages (Dynamic Route)

I added category links in the nav that point to routes like `/menu/mains` and `/menu/desserts`.

In `server.js`, I created one dynamic route: `/menu/:category`.  
This route reads the category from the URL using `req.params.category`, filters the menu items, and renders `category.ejs` with only matching items.

This avoids writing separate routes for each category.

## Understanding EJS Tags

EJS lets us mix JavaScript inside HTML using special tags.

## What `<%= %>` Means in EJS

In EJS, `<%= %>` is used to display (output) a value inside HTML.

It tells EJS:
“Take this JavaScript value and print it on the page.”

Example:

`<%= restaurant.name %>`

If the server sends:

`{ restaurant: { name: "The Green Byte Bistro" } }`

The browser will show:

The Green Byte Bistro

### Simple Explanation
- `<% %>` → Run JavaScript code
- `<%= %>` → Run JavaScript AND show the result on the page

Think of it like:
- `<% %>` = thinking
- `<%= %>` = thinking + speaking

### Difference Between EJS Tags
- `<% %>` → Runs JavaScript but does NOT display anything.
- `<%= %>` → Runs JavaScript and displays the result.
- `<%- %>` → Displays unescaped HTML (used for includes like nav).

## Chunk 3: Level Up (⭐ Rating Badge)

I added conditional rendering in EJS to show a ⭐ when a menu item has a rating of 5.

Example logic:

- If `item.rating === 5` → show ⭐
- Otherwise → show nothing

This demonstrates using EJS conditionals inside a loop.

