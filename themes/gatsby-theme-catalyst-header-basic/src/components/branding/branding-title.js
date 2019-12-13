/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useContext } from "react"
import { animateScroll as scroll } from "react-scroll"
import { HomeContext } from "gatsby-theme-catalyst-core"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useSiteMetadata } from "gatsby-theme-catalyst-core"
import { useSanityMetadata } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteTitle = () => {
  const { useSanity } = useCatalystConfig()
  const { title } = useSiteMetadata()
  const { title: sanityTitle } = useSanityMetadata()
  const [isNavOpen] = useContext(NavContext)
  const [isHome] = useContext(HomeContext)

  const TitleLinkWrapper = props => {
    if (isHome) {
      return (
        <div
          sx={{
            cursor: "pointer",
          }}
          onClick={scroll.scrollToTop}
        >
          {props.children}
        </div>
      )
    } else {
      return (
        <Link
          sx={{
            color: isNavOpen ? "header.textOpen" : "header.text",
            textDecoration: "none",
          }}
          to="/"
        >
          {props.children}
        </Link>
      )
    }
  }

  return (
    <TitleLinkWrapper>
      <h1
        sx={{
          fontFamily: "siteTitle",
          fontSize: [4, 5, 6],
          flex: "0 0 auto",
          color: isNavOpen ? "header.textOpen" : "header.text",
          m: 0,
        }}
      >
        {useSanity ? sanityTitle : title}
      </h1>
    </TitleLinkWrapper>
  )
}

export default SiteTitle
