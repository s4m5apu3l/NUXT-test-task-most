export default defineEventHandler(async (event) => {
  // const {name} = useQuery(event);
  // const {age} = await useBody(event);
  const { data } = await $fetch('https://api.jikan.moe/v4/top/anime')

  return {
    data
  }
})