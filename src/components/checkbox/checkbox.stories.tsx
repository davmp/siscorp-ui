import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

import { Label } from "../label/label";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Componentes/Checkbox",
  component: Checkbox,
  argTypes: {
    id: {
      control: { type: "text" },
    },
    defaultChecked: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
    onCheckedChange: {},
    disabled: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Uso normal",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">Perfil privado</Label>
    </div>
  ),
};

export const Disabled: Story = {
  name: "Desabilitado",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms0" checked disabled />
      <Label htmlFor="terms0">Desabilitado</Label>
    </div>
  ),
};

export const Required: Story = {
  name: "Obrigatório",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms1" />
      <Label htmlFor="terms1" required>
        Concordo com os termos e condições
      </Label>
    </div>
  ),
};

export const Controlled: Story = {
  name: "Controlado",
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <>
        <p className="text-sm text-slate-500 mb-4">
          Valor: {checked ? "Verdadeiro" : "Falso"}
        </p>
        <div className="flex items-center gap-2">
          <Checkbox
            id="terms2"
            checked={checked}
            onCheckedChange={(e) => setChecked(e as boolean)}
          />
          <Label htmlFor="terms2">
            {checked ? "Desabilitar" : "Habilitar"} checkbox
          </Label>
        </div>
      </>
    );
  },
};
