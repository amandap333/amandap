import { graphql } from 'gatsby'

export const familyImages = graphql`
  fragment familyImages on File {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`