const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query: any, { variables = null } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(`
    {
      posts {
        edges {
          node {
            id,
            title
            excerpt
            slug,
            date
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `
    {
      post(id: "${slug}", idType: SLUG) {
        title
        content
      }
    }
  `
  );
  return data?.post;
}
