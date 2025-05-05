import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

import { Input } from "../input/input";

const meta: Meta<typeof Label> = {
  title: "Componentes/Rótulo",
  component: Label,
  argTypes: {
    className: {
      control: { type: "text" },
    },
    htmlFor: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    required: {
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
    children: "Label padrão",
  },
};

export const Normal: Story = {
  name: "Uso normal",
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="Digite seu email..."
        className="w-[300px] border border-gray-300 rounded-md p-2"
      />
    </div>
  ),
};
