import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
  title: "Componentes/Separador",
  component: Separator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <div className="w-min border p-4 rounded-md shadow">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Siscorp UI</h4>
        <p className="text-sm text-muted-foreground">
          Biblioteca de componentes UI.
        </p>
      </div>
      <Separator className="my-4 w-full" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Início</div>
        <Separator orientation="vertical" />
        <div>Testes</div>
        <Separator orientation="vertical" />
        <div>Componentes</div>
      </div>
    </div>
  ),
};
