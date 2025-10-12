import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('author').title('Authors'), //list all author documents in the studio
      S.documentTypeListItem('startup').title('Startup'), //list all startup documents in the studio
    ])
