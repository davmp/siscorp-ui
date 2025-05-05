import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { CalendarIcon, Home } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Componentes/Botão",
  component: Button,
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
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  args: {
    children: "Clique aqui",
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  name: "Destrutivo",
  args: {
    children: "Excluir",
    variant: "destructive",
    size: "default",
  },
};

export const Outlined: Story = {
  name: "Contornado",
  args: {
    children: "Clique aqui",
    variant: "outline",
    size: "default",
  },
};

export const Secondary: Story = {
  name: "Secundário",
  args: {
    children: "Clique aqui",
    variant: "secondary",
    size: "default",
  },
};

export const Ghost: Story = {
  name: "Fantasma",
  args: {
    children: "Clique aqui",
    variant: "ghost",
    size: "default",
  },
};

export const Link: Story = {
  args: {
    children: "Clique aqui",
    variant: "link",
    size: "default",
  },
};

export const Custom: Story = {
  name: "Personalizado",
  parameters: {
    children: [<CalendarIcon className="size-4" />, "Clique aqui"],
    className: "flex items-center gap-2",
    variant: "outline",
    onClick: () => {
      alert("Você clicou!");
    },
  },
};

export const Disabled: Story = {
  name: "Desabilitado",
  args: {
    children: "Clique aqui",
    disabled: true,
  },
};

export const IconButton: Story = {
  name: "Botão de Ícone",
  args: {
    children: <Home className="size-4" />,
    size: "icon",
  },
};
