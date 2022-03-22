// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'mg6me5hd', 
  dataset: 'production', 
  useCdn: true 
})