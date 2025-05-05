import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

import { useState } from "react";
import { Label } from "../label/label";

const meta: Meta<typeof Input> = {
  title: "Componentes/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
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

export const Email: Story = {
  name: "Email",
  args: {
    type: "email",
    placeholder: "Digite aqui",
    className: "w-[300px]",
  },
};

export const Password: Story = {
  name: "Senha",
  args: {
    type: "password",
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
        <p className="text-sm text-slate-500 mb-4">Nome: {value}</p>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            type="text"
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
