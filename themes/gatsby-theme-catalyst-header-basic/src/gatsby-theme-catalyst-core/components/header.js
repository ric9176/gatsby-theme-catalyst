/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import HeaderLayout from "../../components/header-layout"
import HeaderHero from "../../components/header-hero"
import Branding from "../../components/branding/branding"
import Nav from "../../components/navbar/nav"
import { NavContext } from "gatsby-theme-catalyst-core"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"

const SiteHeader = () => {
  const [isNavOpen] = useContext(NavContext)
  const { headerPosition } = useCatalystConfig()

  return (
    <header
      sx={{
        display: "grid",
        position: headerPosition,
        top: 0,
        width: "100%",
        color: isNavOpen ? "header.textOpen" : "header.text",
        backgroundColor: isNavOpen
          ? "header.backgroundOpen"
          : "header.background",
      }}
      id="header"
    >
      <HeaderLayout>
        <Branding />
        <Nav />
      </HeaderLayout>
      <HeaderHero />
    </header>
  )
}

export default SiteHeader