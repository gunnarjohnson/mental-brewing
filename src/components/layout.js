import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

const SiteContentWrapper = styled.div`
  min-height: 100vh;
  background-color: #e9ecf2;
`

const SiteContent = styled.div`
  max-width: ${rhythm(24)};
  margin-left: auto;
  margin-right: auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const HomeTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  // padding-bottom: 5px;
`

const HomeDescription = styled.p`
  margin-top: 9px;
  margin-bottom: ${rhythm(1.5)};
`

const HeaderLink = styled(props => <Link {...props} />)`
  margin-bottom: 6px;
  color: inherit;
  text-decoration: none;
  box-shadow: none;
`

const HeaderTitle = styled.h3`
  margin-top: 0;
  font-family: 'Rosario', sans-serif;
`

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <React.Fragment>
          <HomeTitle style={{ ...scale(1.3) }}>
            <HeaderLink css="padding-bottom: 5px;" to={`/`} >{title}</HeaderLink>
          </HomeTitle>
          <HomeDescription>{description}</HomeDescription>
        </React.Fragment>
      )
    } else {
      header = (
        <HeaderTitle>
          <HeaderLink to={`/`}>{title}</HeaderLink>
        </HeaderTitle>
      )
    }
    return (
      <SiteContentWrapper>
        <SiteContent>
          <header>{header}</header>
          <main>{children}</main>
          <footer>© {new Date().getFullYear()}</footer>
        </SiteContent>
      </SiteContentWrapper>
    )
  }
}

export default Layout
