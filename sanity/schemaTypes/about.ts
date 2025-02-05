import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content1',
      title: 'Content 1',
      type: 'text',
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: 'content2',
      title: 'Content 2',
      type: 'text',
    }),
  ],
  // Add a hidden field to ensure only one document
  initialValue: {
    _id: 'about',
  },
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});