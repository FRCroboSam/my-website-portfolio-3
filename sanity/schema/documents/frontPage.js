export default {
    name: "frontPage",
    title: "Front Page",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "aboutMe",
        title: "About Me",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "profileImage",
        title: "profileImage",
        type: "image",
        validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
        },
      },


    ],
  };