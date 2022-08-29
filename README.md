# Digilab Code Challenge
Welcome, this is the bonprix Digilab Code Challenge.

You will be building a website that fetches data about some outfits
from a [GraphQL](https://graphql.org/) API and displays these outfits.

There will be two views: An outfit overview and an outfit detail page.


## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install all dependencies:
```bash
yarn
```
then run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


The API can be accessed at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql).
When accessed with a browser you will see the (very useful) GraphiQL user interface of the GraphQL-Server.
To fetch data from this API you can use whatever GraphQL-tooling you personally prefer. The easiest is
[graphql-request](https://github.com/prisma-labs/graphql-request).

If you have no experience with GraphQL and feel stuck on getting it to work, let us know and we will
help you out. Experience with GraphQL is not required.

If you have no experience with Next.js you won't need to learn about its internals too much.
What's important is the file-based routing (routes are defined as react components inside the `pages`-directory).

It fou have no experience with typescript feel free to just change `tsx`-files to `jsx`-files and write regular javascript.

Feel free to introduce whatever styling solutions and third party packages you feel most comfortable with.
Next.js has [styled-jsx](https://github.com/vercel/styled-jsx) and [css-modules](https://github.com/css-modules/css-modules) built
in but there are lots of documentation about adding [styled-components](https://styled-components.com/), 
[emotion](https://emotion.sh/docs/introduction) or [tailwindcss](https://tailwindcss.com/).

### The outfit overview page
The outfit overview will show a list of outfits, each with an image and a title.
Each outfit should link to its corresponding outfit detail page.
The outfit overview page should go in `pages/index.tsx`. You can start to edit this file right away.
The page auto-updates as you edit the file.

### The outfit detail page
The outfit detail page will show a single outfit with its title, image and a list of
products that are included in the outfit. The products will each again be shown with an image and title
and they will link to the official bonprix shop so the customer can comfortably shop all the included products.

It should go in `pages/outfits/[id].tsx`. An outfit with the ID `abc123` would then be available as `/outfits/abc123`.
You can access the id in your components as follows:
```jsx
import { useRouter } from "next/router"

function MyComponent() {
    const { query } = useRouter()
    const id = query.id
}
```

Usage of other Next.js APIs such as `getStaticProps` is, of course, allowed and welcome but
not necessary.

You will notice the the GraphQL-API sadly does not know the relation between products and outfits so
you cannot fetch an outfit with its corresponding products directly. Instead you will need to
fetch the products separately. You can assume that the products API would, in reality, return
a very large number of products when no filter is applied so we'd recommend not to fetch all products at once in "production".

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!