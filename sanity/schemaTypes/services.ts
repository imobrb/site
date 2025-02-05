import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Serviços',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ 
        type: 'image',
        options: {
          hotspot: true,
        },
      }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media: media && media[0],
      };
    },
  }
});