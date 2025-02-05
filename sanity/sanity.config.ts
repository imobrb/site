import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { MyLogo } from './components/MyLogo';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  icon: MyLogo as any,
  title: 'Placeholder',
  projectId: process.env.SANITY_PROJECT_ID || 'isd7d0e4',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
