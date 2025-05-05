"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "../button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { cn } from "@/utils";
import { useState } from "react";

const meta: Meta<typeof Command> = {
  title: "Componentes/Combobox",
  component: Command,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Default: Story = {
  name: "Padrão",
  render: () => {
    const values = [
      { value: "banana", label: "Banana" },
      { value: "apple", label: "Maçã" },
      { value: "orange", label: "Laranja" },
      { value: "grape", label: "Uva" },
    ];

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between border-input bg-card hover:bg-card hover:text-foreground"
          >
            {value || "Selecione uma opção"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Selecione uma opção" className="h-9" />
            <CommandList>
              <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
              <CommandGroup>
                {values.map((val) => (
                  <CommandItem
                    key={val.value}
                    value={val.label}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {val.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        val.label === value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  },
};

export const withPopover: Story = {
  name: "Popover",
  render: () => {
    type Status = {
      value: string;
      label: string;
    };

    const statuses: Status[] = [
      {
        value: "backlog",
        label: "Backlog",
      },
      {
        value: "todo",
        label: "A Fazer",
      },
      {
        value: "in progress",
        label: "Em Progresso",
      },
      {
        value: "done",
        label: "Feito",
      },
      {
        value: "canceled",
        label: "Cancelado",
      },
    ];

    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

    return (
      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">Status</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[150px] justify-start bg-card hover:bg-card hover:text-foreground"
            >
              {selectedStatus ? selectedStatus.label : "Mudar status"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="right" align="start">
            <Command>
              <CommandInput placeholder="Mudar status" />
              <CommandList>
                <CommandEmpty>Sem resultados.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      key={status.value}
                      value={status.label}
                      onSelect={(value) => {
                        setSelectedStatus(
                          statuses.find(
                            (priority) => priority.label === value
                          ) || null
                        );
                        setOpen(false);
                      }}
                    >
                      {status.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};
