/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const BioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(2.5)};
`

const BioImage = styled(props => <Image {...props} />)`
  min-width: 50px;
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 1.5rem;
  border-radius: 100%;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <BioContainer>
      <BioImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{ borderRadius: `50%` }}
      />
      <p>Written by <strong>{author}</strong>, a professional brewer turned programmer who enjoys brainy banter, groovy guitars, and clean code.</p>
    </BioContainer>
  )
}

export default Bio
