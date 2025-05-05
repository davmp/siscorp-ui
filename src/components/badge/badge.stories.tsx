import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Componentes/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  args: {
    children: "Normal",
    variant: "default",
  },
};

export const Secondary: Story = {
  name: "Secundário",
  args: {
    children: "Novo",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  name: "Destrutivo",
  args: {
    children: "Atenção",
    variant: "destructive",
  },
};

export const Outlined: Story = {
  name: "Contornado",
  args: {
    children: "Atualizado",
    variant: "outline",
  },
};
