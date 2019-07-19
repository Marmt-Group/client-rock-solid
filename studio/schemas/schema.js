// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import author from './author'
import beforeAfter from './beforeAfter'
import blockContent from './blockContent'
import blockText from './blockText'
import category from './category'
import companyInfo from './companyInfo'
import cta from './cta'
import faq from './faq'
import figure from './figure'
import mainImage from './mainImage'
import page from './page'
import project from './project'
import siteSettings from './siteSettings'
import slideshow from './slideshow'
import testimonials from './testimonials'
import video from './video'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    author,
    beforeAfter,
    blockContent,
    blockText,
    companyInfo,
    cta,
    category,
    faq,
    figure,
    mainImage,
    page,
    project,
    siteSettings,
    slideshow,
    testimonials,
    video
  ])
})
