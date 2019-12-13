import { useStaticQuery, graphql } from "gatsby"
export const useSanityMetadata = () => {
  const { sanitySiteSettings } = useStaticQuery(
    graphql`
      query SanityMetadata {
        sanitySiteSettings {
          title
        }
      }
    `
  )
  return sanitySiteSettings
}
