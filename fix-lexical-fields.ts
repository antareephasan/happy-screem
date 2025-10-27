/**
 * Script to fix undefined/null richText fields in the database
 * Run with: tsx fix-lexical-fields.ts
 */

import 'dotenv/config'
import { getPayload } from 'payload'
import config from './src/payload.config'

const lexicalEmptyState = {
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    children: [],
    direction: 'ltr',
  },
}

async function fixLexicalFields() {
  console.log('Starting to fix lexical fields...')

  const payload = await getPayload({ config })

  // Fix Pages collection
  console.log('Fixing pages...')
  const pages = await payload.find({
    collection: 'pages',
    limit: 1000,
  })

  for (const page of pages.docs) {
    let needsUpdate = false
    const updates: any = {}

    // Check layout blocks
    if (page.layout) {
      const fixedLayout = page.layout.map((block: any) => {
        const fixedBlock = { ...block }

        // Fix richText fields that are null/undefined
        Object.keys(fixedBlock).forEach(key => {
          if (fixedBlock[key] === null || fixedBlock[key] === undefined) {
            const fieldType = typeof fixedBlock[key]
            // Check if this might be a richText field based on naming
            if (key.includes('description') || key.includes('Description') || key.includes('content')) {
              fixedBlock[key] = lexicalEmptyState
              needsUpdate = true
            }
          }
        })

        // Fix nested objects (like contactSection)
        Object.keys(fixedBlock).forEach(key => {
          if (fixedBlock[key] && typeof fixedBlock[key] === 'object' && !Array.isArray(fixedBlock[key])) {
            Object.keys(fixedBlock[key]).forEach(nestedKey => {
              if (fixedBlock[key][nestedKey] === null || fixedBlock[key][nestedKey] === undefined) {
                if (nestedKey.includes('description') || nestedKey.includes('Description') || nestedKey.includes('content')) {
                  fixedBlock[key][nestedKey] = lexicalEmptyState
                  needsUpdate = true
                }
              }
            })
          }
        })

        return fixedBlock
      })

      if (needsUpdate) {
        updates.layout = fixedLayout
      }
    }

    if (needsUpdate) {
      console.log(`Updating page: ${page.title}`)
      await payload.update({
        collection: 'pages',
        id: page.id,
        data: updates,
      })
    }
  }

  // Fix Posts collection
  console.log('Fixing posts...')
  const posts = await payload.find({
    collection: 'posts',
    limit: 1000,
  })

  for (const post of posts.docs) {
    let needsUpdate = false
    const updates: any = {}

    if (post.layout) {
      const fixedLayout = post.layout.map((block: any) => {
        const fixedBlock = { ...block }

        Object.keys(fixedBlock).forEach(key => {
          if (fixedBlock[key] === null || fixedBlock[key] === undefined) {
            if (key.includes('description') || key.includes('Description') || key.includes('content')) {
              fixedBlock[key] = lexicalEmptyState
              needsUpdate = true
            }
          }
        })

        Object.keys(fixedBlock).forEach(key => {
          if (fixedBlock[key] && typeof fixedBlock[key] === 'object' && !Array.isArray(fixedBlock[key])) {
            Object.keys(fixedBlock[key]).forEach(nestedKey => {
              if (fixedBlock[key][nestedKey] === null || fixedBlock[key][nestedKey] === undefined) {
                if (nestedKey.includes('description') || nestedKey.includes('Description') || nestedKey.includes('content')) {
                  fixedBlock[key][nestedKey] = lexicalEmptyState
                  needsUpdate = true
                }
              }
            })
          }
        })

        return fixedBlock
      })

      if (needsUpdate) {
        updates.layout = fixedLayout
      }
    }

    if (needsUpdate) {
      console.log(`Updating post: ${post.title}`)
      await payload.update({
        collection: 'posts',
        id: post.id,
        data: updates,
      })
    }
  }

  // Fix Courses collection
  console.log('Fixing courses...')
  const courses = await payload.find({
    collection: 'courses',
    limit: 1000,
  })

  for (const course of courses.docs) {
    let needsUpdate = false
    const updates: any = {}

    if (course.layout) {
      const fixedLayout = course.layout.map((block: any) => {
        const fixedBlock = { ...block }

        Object.keys(fixedBlock).forEach(key => {
          if (fixedBlock[key] === null || fixedBlock[key] === undefined) {
            if (key.includes('description') || key.includes('Description') || key.includes('content')) {
              fixedBlock[key] = lexicalEmptyState
              needsUpdate = true
            }
          }
        })

        Object.keys(fixedBlock).forEach(key => {
          if (fixedBlock[key] && typeof fixedBlock[key] === 'object' && !Array.isArray(fixedBlock[key])) {
            Object.keys(fixedBlock[key]).forEach(nestedKey => {
              if (fixedBlock[key][nestedKey] === null || fixedBlock[key][nestedKey] === undefined) {
                if (nestedKey.includes('description') || nestedKey.includes('Description') || nestedKey.includes('content')) {
                  fixedBlock[key][nestedKey] = lexicalEmptyState
                  needsUpdate = true
                }
              }
            })
          }
        })

        return fixedBlock
      })

      if (needsUpdate) {
        updates.layout = fixedLayout
      }
    }

    if (needsUpdate) {
      console.log(`Updating course: ${course.title}`)
      await payload.update({
        collection: 'courses',
        id: course.id,
        data: updates,
      })
    }
  }

  console.log('Done fixing lexical fields!')
  process.exit(0)
}

fixLexicalFields().catch(console.error)
