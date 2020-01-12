/** @jsx jsx */
import { jsx } from "theme-ui"
import { useCatalystConfig } from "gatsby-theme-catalyst-core"
import Logo from "./branding-logo"
import Title from "./branding-title"

const SiteBranding = () => {
  const { displaySiteLogo, displaySiteTitle } = useCatalystConfig()

  return (
    <div
      sx={{
        gridColumn: "1 / -1",
        gridRow: "1 / 2",
        bg: "blue",
      }}
    >
      {displaySiteLogo ? <Logo /> : null}
      {displaySiteTitle ? <Title /> : null}
    </div>
  )
}

export default SiteBranding
