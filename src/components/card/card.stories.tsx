import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./card";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "../select";
import { Checkbox } from "../checkbox";
import { useState } from "react";
import { Collapsible, CollapsibleContent } from "../collapsible";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { CalendarIcon } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Componentes/Cartão",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: "Padrão",
  args: {
    className: "w-[200px]",
    children: (
      <CardHeader>
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição do Card</CardDescription>
      </CardHeader>
    ),
  },
};

export const WithAction: Story = {
  name: "Com ação",
  args: {
    className: "w-[350px]",
    children: (
      <CardHeader>
        <CardTitle>Título</CardTitle>
        <CardDescription>Descrição do Card</CardDescription>
        <CardAction>
          <Button variant="outline" onClick={() => alert("Ação")}>
            Fazer
          </Button>
        </CardAction>
      </CardHeader>
    ),
  },
};
export const WithForm: Story = {
  name: "Com formulário",
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | undefined>();
    const [date, setDate] = useState<Date | undefined>();

    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Criar projeto</CardTitle>
          <CardDescription>Crie o seu projeto com um clique.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Nome do projeto" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Empresa</Label>
                <Select value={value} onValueChange={setValue}>
                  <SelectTrigger id="framework" className="w-full">
                    <SelectValue placeholder="Selecione" defaultValue="meta" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="meta">Meta</SelectItem>
                    <SelectItem value="twitter">Twitter</SelectItem>
                    <SelectItem value="google">Google</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex my-2 space-x-1.5">
                <Checkbox
                  id="schedule"
                  checked={open}
                  onCheckedChange={(e) => setOpen(e as boolean)}
                />
                <Label htmlFor="schedule">Agendar criação</Label>
              </div>
              <Collapsible open={open}>
                <CollapsibleContent className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Data da criação</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-card border-input hover:bg-card hover:text-foreground"
                      >
                        {date
                          ? date.toLocaleDateString()
                          : "Selecione uma data"}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date: Date) => date <= new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center gap-2 justify-end">
          <Button variant="outline">Cancelar</Button>
          <Button type="submit">Criar</Button>
        </CardFooter>
      </Card>
    );
  },
};
