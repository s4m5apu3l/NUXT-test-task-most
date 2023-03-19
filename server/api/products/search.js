export default defineEventHandler(async (event) => {
  const { query } = getQuery(event);
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaseUrl}/products/search?q=${query}`);
  // return $fetch(`${config.apiBaseUrl}/products/search?q=${query}`), {
  //   method: 'GET',
  //   headers: {
      
  //   }
  // }
});
