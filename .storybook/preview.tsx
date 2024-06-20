import "../src/app/globals.css"
import type { Preview } from "@storybook/react";
import { Montserrat } from "next/font/google"
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

const preview: Preview = {
  decorators: [(Story) => (
    <main className={montserrat.className}>
      <Story />
    </main>
  )],
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
