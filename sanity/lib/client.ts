//this is a sanity read client for fetching data through queries
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation- without need to refresh the browser cache
})

//  useCdn: false, means we always want fresh data and not the cached version. This is useful when we are frequently updating content and want to see the changes immediately. this is SSG
//  useCdn: true, means we want to use the cached version of the data. This is useful for public sites where content doesn't change frequently and we want to optimize for performance. this is not ISG because it serves cached data
// ISR - Incremental Static Regeneration means new data is fetched and updated at regular intervals combo of ISR and SSR
// SSG - Static Site Generation means data is fetched at build time and remains static until the next build

// 