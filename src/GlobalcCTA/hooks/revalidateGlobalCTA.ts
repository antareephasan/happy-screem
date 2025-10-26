// src/GlobalCTA/hooks/revalidateGlobalCTA.ts

import type { GlobalAfterChangeHook } from 'payload'
import { revalidateTag } from 'next/cache'

export const revalidateGlobalCTA: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating global CTA`)
    revalidateTag('global_global-cta')
  }

  return doc
}
