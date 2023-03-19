export default defineEventHandler(async (event) => {
  const id = [...event.node.req.url.split('/')].pop();
  const config = useRuntimeConfig();
  return $fetch(`${config.apiBaseUrl}/products/${id}`);

});
