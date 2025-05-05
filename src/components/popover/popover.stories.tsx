import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";

const meta: Meta<typeof Popover> = {
  title: "Componentes/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  name: "Padrão",
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button variant="outline">Clique aqui</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatibus.
        </PopoverContent>
      </>
    ),
  },
};

export const WithInput: Story = {
  name: "Com Input",
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button variant="outline">Clique aqui</Button>
        </PopoverTrigger>
        <PopoverContent className="w-[350px]">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensões</h4>
              <p className="text-sm text-muted-foreground">
                Ajuste as dimensões da camada.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Largura</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">Largura Max.</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Altura</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">Altura Max.</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </>
    ),
  },
};
