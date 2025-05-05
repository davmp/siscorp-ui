import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

import { useState } from "react";
import { Label } from "../label/label";

const meta: Meta<typeof Textarea> = {
  title: "Componentes/Texto",
  component: Textarea,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    onChange: {},
    value: {
      control: { type: "text" },
    },
    required: {
      control: { type: "boolean" },
    },
    id: {
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  args: {
    type: "text",
    placeholder: "Digite aqui",
    className: "w-[300px]",
  },
};

export const Disabled: Story = {
  name: "Desabilitado",
  args: {
    type: "text",
    placeholder: "Digite aqui",
    disabled: true,
    className: "w-[300px]",
  },
};

export const Controlled: Story = {
  name: "Controlado",
  render: () => {
    const [value, setValue] = useState("");

    return (
      <>
        <p className="text-sm text-slate-500 mb-4">Descrição: {value}</p>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nome">Descrição</Label>
          <Textarea
            id="nome"
            placeholder="Digite seu nome..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-[300px]"
          />
        </div>
      </>
    );
  },
};
