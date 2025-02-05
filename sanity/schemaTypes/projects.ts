import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projetos',
  type: 'document',
  fields: [
    defineField({
      name: 'projectName',
      title: 'Nome do Projeto',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tipo de Projeto',
      placeholder: 'ex: Execução de UFV',
      type: 'string',
    }),
    defineField({
      name: 'highlight',
      title: 'Projeto destaque',
      type: 'boolean',
      description: 'Marque esta opção para o projeto aparecer na inicial do site.',
    }),
    defineField({
      name: 'local',
      title: 'Local do Projeto',
      placeholder: 'Cidade / UF',
      type: 'string',
    }),
    defineField({
      name: 'short_description',
      title: 'Descrição Curta',
      description: 'Descrição que aparece abaixo da miniatura do projeto.',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      description: 'Explique detalhadamente o objetivo, metodologia, resultados e impacto do projeto.',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Imagens',
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
      title: 'projectName',
      subtitle: 'local',
      media: 'images',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle,
        media: media && media[0],
      };
    },
  },
});