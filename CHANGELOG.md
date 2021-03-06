# Change Log

All notable changes to this project will be documented in this file.

## v1.0.0

**Breaking changes:**

- Move your theme-ui file from `src/gatsby-theme-catalyst-core/theme.js` -> `src/gatsby-plugin-theme-ui/index.js`. No other change should be needed. This was done to be more in line with recommended best practice. There is now a 'base theme' for Theme-UI which is exported from `gatsby-theme-catalyst-core`. You can use this to write smaller and more condensed themes in the starters using the following syntax:

```
import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"

export default merge(BaseTheme, {
  // Modifications to the base theme go here. This is an example changing colors and using variants to change your navigation links. Uncomment the code below to see what happens.
})
```

- Depreciated `gatsby-theme-catalyst-writer` in favor of `gatsby-theme-catalyst-hydrogen`. If you were using the writer theme it will continue to work, and should work for a long time to come. If you want to migrate to hydrogen then it should be possible with a little effort as the expected data structures from SANITY were mainly unchanged.

**Other notable changes**

- This is technically not a breaking change but it could noticeably change your sites appearance. Base navigation styles were simplified in the structural themes and then added back in for the presentational themes using variants in the theme-ui file. You can see an example of this is `gatsby-theme-catalyst-hydrogen` if you would like to see how to do it on your site, look in `gatsby-theme-catalyst-hydrogen/src/gatsby-plugin-theme-ui/index.js`.

- Moved margin on from `contentContainer` to `<main>` to better reflect best practice. Spacing remains the same however is just on another element.

- Added `gatsby-theme-catalyst-sanity` which acts as a "core" theme for additional SANITY.io integrations. This is functioning, with some ongoing improvements needed. Additional documentation will be coming.

- Added `gatsby-theme-catalyst-hydrogen` this is almost identical to the old writer theme but optimized to make use of `gatsby-theme-catalyst-sanity` and better abstract complexity. The way it is set up now this has created a better seperation of data and presentation layers which will enable further improvements and better extendability.

## catalyst-core v0.25.0, header-top v0.4.0, header-side v0.4.0

Depreciated `isMobile` and `mobileMenuBreakpoint`. This is a non-breaking change now but will be fully removed come v1.0. The main problem was a flash of unstyled content due to javascript parsing after CSS and pageload. While it was a nice feature the performance hit was not worth it. Now the mobile menu shows on the second breakpoint, 768px by default. Docs were updated as well.

## catalyst-core v0.24.0

- Adds skip nav function based on [https://www.gatsbyjs.org/blog/2020-02-10-accessible-client-side-routing-improvements/#reach-skip-nav](https://www.gatsbyjs.org/blog/2020-02-10-accessible-client-side-routing-improvements/#reach-skip-nav)

## catalyst-core v0.23.0

Changes to allow support for sub-menus in `gatsby-node.js`

## catalyst-header-top v0.3.0

- Adds the ability to use sub-menus (dropdowns) on internal site links, see `gatsby-starter-catalyst` for an example. There is an example config in the docs and in this starter.

## catalyst-writer v0.8.0

- More robust queries for pages, should prevent an error that was occuring for pages in SANITY if multiples were created by accident

## catalyst-blog v0.8.0

- Revised posts-list query using `nodes` instead of `edges->node`
- Added in `timeToRead` as an available query field on posts to display reading time in a blog

## catalyst-core v0.22.0

- Added support for [gatsby-mdx-embed](https://www.gatsbyjs.org/packages/@pauliescanlon/gatsby-mdx-embed/)

## catalyst-writer v0.7.0

- Added in settings and metadata to SANITY.io schema, this allows all of those fields to be controlled via the SANITY studio instead of gatsby-config.js. For example fields like `title`, `description`, the site logo, default social media image, etc.
- Shadowed `use-site-metadata.js` from the core theme to implement this, so instead it now draws from SANITY, and not gatsby-config.js

## catalyst-footer v0.2.0

- Content is now justified based on `footerContentLocation` setting from `gatsby-theme-catalyst-core`, allows for more granular control of the content location in the footer. Default setting is "left", also works with "right" and "center".

## catalyst-core v0.21.0

- Removed `twitter` field from `gatsby-config.js`, this is now automatically retrieved from the `socialLinks` array

## catalyst-core v0.20.0

- Reworked layout components
- Layout is provided by gatsby-plugin-mdx now instead of wrapPageElemet
- Getting ready for theme-ui v0.3, removed `{ Layout }` import
- Added displaySiteTitleMobile, displaySiteLogoMobile, isHeaderSideLeft config options, see docs
- Removed `contentWidth` setting, this was a confusing double setting. Use `maxContentWidth` instead.

## catalyst-footer v0.1.0

- Renamed from `catalyst-footer-basic`, better naming
- Footer repositioned to center of page

## catalyst-header-top v0.1.0

- Renamed from `catalyst-header-basic`, better naming
- Removed some unecessary CSS

## catalyst-header-side v0.1.0

- New theme entirely, implements a sidebar style header, defaults to left
