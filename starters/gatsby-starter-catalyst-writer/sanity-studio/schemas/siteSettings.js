export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description:
        "Describe your portfolio for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your portfolio.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "twitter",
      type: "string",
      title: "Twitter",
      description: "Just the @ handle, e.g. @erchwy. Not the full link.",
    },
    {
      name: "siteUrl",
      type: "string",
      title: "Site Url",
      description:
        "Not necessary in development but used in production for a variety of reasons",
    },
    {
      name: "menuLinks",
      type: "menu",
      title: "Menu Links",
    },
  ],
}
