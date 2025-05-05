import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "./select";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Componentes/Select",
  component: Select,
  argTypes: {
    value: {
      control: { type: "text" },
    },
    onValueChange: {
      action: "valueChange",
    },
    defaultValue: {
      control: { type: "text" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <Select>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Selecione uma opção" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Opções</SelectLabel>
          <SelectItem value="1">Opção 1</SelectItem>
          <SelectItem value="2">Opção 2</SelectItem>
          <SelectItem value="3">Opção 3</SelectItem>
          <SelectItem value="4">Opção 4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Controlled: Story = {
  name: "Controlado",
  render: () => {
    const values = [
      { value: "banana", label: "Banana" },
      { value: "apple", label: "Maçã" },
      { value: "orange", label: "Laranja" },
      { value: "grape", label: "Uva" },
    ];

    const [value, setValue] = useState("apple");

    return (
      <>
        <span className="text-gray-500 mb-10">
          Valor atual: {values.find((val) => val.value === value)?.label || ""}
        </span>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {values.map((val) => (
                <SelectItem key={val.value} value={val.value}>
                  {val.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </>
    );
  },
};
