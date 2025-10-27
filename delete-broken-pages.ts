/**
 * Delete all existing pages to start fresh
 */

import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config'

async function deletePages() {
  console.log('Deleting all pages...')

  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    limit: 1000,
  })

  console.log(`Found ${pages.docs.length} pages to delete`)

  for (const page of pages.docs) {
    console.log(`Deleting page: ${page.title} (ID: ${page.id})`)
    await payload.delete({
      collection: 'pages',
      id: page.id,
    })
  }

  console.log('Done! All pages deleted.')
  process.exit(0)
}

deletePages().catch(console.error)
