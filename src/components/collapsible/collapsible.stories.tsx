import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { Button } from "../button";

const meta: Meta<typeof Collapsible> = {
  title: "Componentes/Colapsável",
  component: Collapsible,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  name: "Padrão",
  args: {
    children: (
      <>
        <CollapsibleTrigger>Colapsável</CollapsibleTrigger>
        <CollapsibleContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </CollapsibleContent>
      </>
    ),
  },
};

export const ButtonTrigger: Story = {
  name: "Com Botão",
  args: {
    children: (
      <>
        <CollapsibleTrigger asChild>
          <Button>Clique aqui</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </CollapsibleContent>
      </>
    ),
  },
};
