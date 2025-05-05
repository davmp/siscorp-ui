import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { CalendarIcon } from "lucide-react";

const meta: Meta<typeof Calendar> = {
  title: "Componentes/Calendário",
  component: Calendar,
  argTypes: {
    mode: {
      options: ["single", "multiple", "range"],
      control: { type: "select" },
    },
    showOutsideDays: {
      control: { type: "boolean" },
    },
    classNames: {
      control: { type: "object" },
    },
    className: {
      control: { type: "text" },
    },
    defaultMonth: {
      control: { type: "date" },
    },
    fromMonth: {
      control: { type: "date" },
    },
    toMonth: {
      control: { type: "date" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Padrão",
  //@ts-ignore
  args: {
    mode: "single",
    className: "rounded-md border",
  },
};

//@ts-ignore
export const Single: Story = {
  name: "Dia",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => setDate(e)}
          className="rounded-md border"
        />
        <div className="mt-8">
          <p>Data selecionada: {date?.toLocaleDateString()}</p>
          <Button onClick={() => setDate(new Date())}>Resetar Data</Button>
        </div>
      </>
    );
  },
};

//@ts-ignore
export const Range: Story = {
  name: "Intervalo",
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
    });

    return (
      <>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          className="rounded-md border"
        />
        <div className="mt-8">
          <p>
            Intervalo selecionado: {range?.from?.toLocaleDateString()} -{" "}
            {range?.to?.toLocaleDateString()}
          </p>
          <Button onClick={() => setRange({ from: new Date() })}>
            Resetar Intervalo
          </Button>
        </div>
      </>
    );
  },
};

//@ts-ignore
export const Multiple: Story = {
  name: "Múltiplo",
  render: () => {
    const [dates, setDates] = useState<Date[]>([new Date()]);

    return (
      <>
        <Calendar
          mode="multiple"
          selected={dates}
          onSelect={(e) => setDates(e as Date[])}
          className="rounded-md border"
        />
        <div className="mt-8">
          <p>
            Datas selecionadas:{" "}
            {dates.map((date) => date.toLocaleDateString()).join(", ")}
          </p>
          <Button onClick={() => setDates([new Date()])}>Resetar Datas</Button>
        </div>
      </>
    );
  },
};

//@ts-ignore
export const Input: Story = {
  name: "Input",
  render: () => {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="min-w-[240px]">
            {date ? date.toLocaleDateString() : "Selecione uma data"}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          {/* Apenas datas anteriores a hoje */}
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(date) => date > new Date()}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  },
};
