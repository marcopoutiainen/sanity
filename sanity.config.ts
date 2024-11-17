import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {deskTool} from 'sanity/desk'
import {customDeskStructure} from './deskStructure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: 'sodigital-website',

  projectId: 'i7vlnhqq',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    colorInput(),
    markdownSchema(),
    deskTool({
      structure: customDeskStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
