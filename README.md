# Justin Malonson

Source for [justinmalonson.com](https://justinmalonson.com/), the canonical personal website of
Justin Malonson, Software Engineer.

The site is a server-rendered TanStack Start application deployed on Netlify. Its route metadata and
connected Schema.org graph are centralized in `src/lib/seo.ts` so every public page references the
same canonical Person entity:

`https://justinmalonson.com/#justin-malonson`
