## A few words about the process

I started by reading the assignment carefully and tried to break the problem into smaller pieces. What technologies, libraries, code approach should I use etc. `React / Typescript`  is my weapon of choice along with `Next.js` and `Tailwind.css`.
I started constructing the base of the page and tried to create components that can be reusable / extendable. 
I built the page on index and did not use any next’s navigation system for simplicity since it is an assignment with a single (but important) page to implement. 

Started with the header and then moved on to the other parts. At first the context was hardcored but I always had in mind that I should fetch my data from a JSON file and make it look like a call request. 

I knew from the first glimpse that I had to use `chart.js/react-chart` to implement the hexagon graph, although I tried to use the minimum of external libraries !  I created a PoC and afterwards I styled it to match the wireframes. 

Later on, I created the reusable section part, to use it as a general wrapper for the major  hypothetical modules of the solution. 

The interesting part began on implementing the timeline. My first approach ( that I rejected later on but still have in comments inside the repo) was to create a draggable “needle” point on top of a static width thumbnail timeline. I had to use an external slider library and it would not work quite well on a big set of pictures . That’s why I concluded the current solution with a horizontal scrollable timeline that can show the position of the latest click and forward the video correspondingly. 


Here I would like to state that the figma wireframe intentionally was vague but also not symmetrical on some points with no behavioral explanation. 

In a real work situation as I already have done multiple times, I would pair with the designer/ stakeholder, discuss their vision and try to structure a user-friendly solution but also stable from an engineering perspective. 

After continuing with the video implementation,I finished the timing jump functionality and I had properly configured the fetching data mechanism. 

I won't dive into the explanation of structuring the data models since I think it is straightforward. 

For the finishing touches I made some small changes reagarding responsivness. It is not mobile friendly since it is a dashboard but I tried to include small tablets to large screens.   


It was a fun exercise and I look forward to discussing it with you, while the feedback is much more appreciated 🙏.







========================================================================

========================================================================






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
