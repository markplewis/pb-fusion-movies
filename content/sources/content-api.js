const resolve = (key) => {
  // const requestUri = `/content/v4/stories/?website_url=${ key.website_url || key }&website=demo`;
  const requestUri = `/content/v3/stories/?canonical_url=${key.canonical_url || key}`;

  return (key.hasOwnProperty('published')) ? `${requestUri}&published=${key.published}` : requestUri
}

export default {
  resolve,
  // schemaName: 'article',
  params: {
    canonical_url: 'text',
    published: 'text'
  }
}