// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    stylistic: true,
    typescript: true,
  },
})
  .append
// custom flat config here...
  ()
