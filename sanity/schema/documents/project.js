export default {
    name: "Project",
    title: "Project",
    type: "document",
    fields: [
      {
        name: "projectName",
        title: "Project Name",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
          {
        name: "slug",
        title: "Slug",
        type: "slug",
        validation: (Rule) => Rule.required(),
        options: {
          source: "title",
          maxLength: 96,
        },
      },
      {
        name: "projectDescription",
        title: "Project Description",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "dateStarted",
        title: "Date Started ",
        type: "date",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "dateFinished",
        title: "Date Finished ",
        type: "date",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "projectImage",
        title: "Project Image",
        type: "image",
        validation: (Rule) => Rule.required(),
        options: {
          hotspot: true,
        },
      },

    ],
  };