import {DeskToolStructureContext, StructureResolver} from 'sanity/desk'

export const customDeskStructure: StructureResolver = (S, context: DeskToolStructureContext) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .schemaType('homePage')
        .child(S.documentTypeList('homePage').title('Home Page')),
      S.listItem()
        .title('Recruiting')
        .schemaType('recruiting')
        .child(S.documentTypeList('recruiting').title('Recruiting')),
      S.listItem()
        .title('Solutions')
        .schemaType('solutions')
        .child(S.documentTypeList('solutions').title('Solutions')),
      S.listItem()
        .title('Service Page')
        .schemaType('servicePage')
        .child(S.documentTypeList('servicePage').title('Service Page')),
      S.listItem()
        .title('References Page')
        .schemaType('referencesPage')
        .child(S.documentTypeList('referencesPage').title('References Page')),
      S.listItem()
        .title('About Page')
        .schemaType('aboutPage')
        .child(S.documentTypeList('aboutPage').title('About Page')),
      S.divider(),
    ])
