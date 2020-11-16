const fs = require('fs');
const fetch = require("node-fetch");
const API_URL = 'https://www.infoxication.net/graphql/';
const prettier = require('prettier');

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}


async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data.posts
}

(async () => {

  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const allPosts = await getAllPostsWithSlug();

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${`https://www.infoxicator.com/about`}</loc>
      </url>
      <url>
        <loc>${`https://www.infoxicator.com/blog`}</loc>
      </url>
          ${allPosts.edges
            .map(({ node }) => {
              return `
                      <url>
                          <loc>${`https://www.infoxicator.com/${node.slug}`}</loc>
                      </url>
                  `
            })
            .join('')}
      </urlset>
  `
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
});

fs.writeFileSync('public/sitemap.xml', formatted);
})();
