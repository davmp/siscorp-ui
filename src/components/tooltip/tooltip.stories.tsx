import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Componentes/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Passe o Mouse</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Adicionar</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
