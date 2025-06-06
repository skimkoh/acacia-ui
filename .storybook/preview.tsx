import type { Preview } from '@storybook/react-webpack5'
import { ConfigProvider } from '../src/index'
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;