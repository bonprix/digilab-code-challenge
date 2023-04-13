# Digilab Code Challenge

![C1 - Public](https://badgen.net/badge/C1/Public/green) 

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

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


The API can be accessed at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql).
When accessed with a browser you will see the (very useful) GraphiQL user interface of the GraphQL-Server.
To fetch data from this API, you can use whatever GraphQL-tooling you personally prefer. The easiest is
[graphql-request](https://github.com/prisma-labs/graphql-request).

If you have no experience with GraphQL and feel stuck on getting it to work, let us know and we will
help you out. Experience with GraphQL is not required.

If you have no experience with Next.js you won't need to learn about its internals too much.
What's important is the file-based routing (routes are defined as react components inside the `pages`-directory).

If you have no experience with typescript feel free to change the `tsx`-files to `jsx`-files and write regular javascript.

Feel free to introduce whatever styling solutions and third party packages you feel most comfortable with.
Next.js has [styled-jsx](https://github.com/vercel/styled-jsx) and [css-modules](https://github.com/css-modules/css-modules) built
in but there is lots of documentation about adding [styled-components](https://styled-components.com/), 
[emotion](https://emotion.sh/docs/introduction) or [tailwindcss](https://tailwindcss.com/).

### The outfit overview page
The outfit overview should display a list of outfits, each with an image and a title.
Each outfit should link to its corresponding outfit detail page.
The outfit overview page should go in `pages/index.tsx`. You can start to edit this file right away.
The page auto-updates as you edit the file.

### The outfit detail page
The outfit detail page should display a single outfit with its title, image and a list of
products that are included in the outfit. The products should each again be shown with an image and title
and link to the official bonprix shop so the customer can comfortably shop all the included products.

The outfit detail page should go in `pages/outfits/[id].tsx`. An outfit with the ID `abc123` would then be available as `/outfits/abc123`.
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

You will notice that the GraphQL-API sadly does not know the relation between products and outfits so
you cannot fetch an outfit with its corresponding products directly. Instead you will need to
fetch the products separately. You can assume that the products API would, in reality, return
a very large number of products when no filter is applied so we'd recommend not to fetch all products at once in "production".

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---
## Contact
* Digilab
  * <a href="https://teams.microsoft.com/l/team/19%3ab3a585d7f7254a54bb4bcc03db5a378e%40thread.skype/conversations?groupId=efcccd96-4e15-48d4-98f7-99e5786ab08d&tenantId=8794e153-c3bd-4479-8bea-61aeaf167d5a">
      <img align="center" src="https://img.icons8.com/fluency/24/microsoft-teams-2019.png"> Teams Channel Digilab
    </a>
  * <a href="mailto:digilab@bonprix.net">
      <img align="center" src="https://img.icons8.com/fluency/24/mail.png"> digilab@bonprix.net
    </a> 
