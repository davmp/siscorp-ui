import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Label } from "../label";
import { Button } from "../button";
import { Input } from "../input";

const meta: Meta<typeof Sheet> = {
  title: "Componentes/Folha",
  component: Sheet,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <Sheet>
      <SheetTrigger>Abrir Diálogo</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tem certeza?</SheetTitle>
          <SheetDescription>
            Essa ação não pode ser desfeita. Isso vai permanentemente deletar
            sua conta e removar seus dados de nossos servidores.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

export const WithFooter: Story = {
  name: "Com Rodapé",
  render: () => (
    <Sheet>
      <SheetTrigger>Abrir Diálogo</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tem certeza?</SheetTitle>
          <SheetDescription>
            Essa ação não pode ser desfeita. Isso vai permanentemente deletar
            sua conta e removar seus dados de nossos servidores.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const WithForm: Story = {
  name: "Com Formulário",
  args: {
    children: (
      <>
        <SheetTrigger asChild>
          <Button variant="outline">Editar Perfil</Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-[425px]">
          <SheetHeader>
            <SheetTitle>Editar perfil</SheetTitle>
            <SheetDescription>
              Faça alterações no seu perfil aqui. Clique salvar e pronto.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Nome de usuário
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose>
              <Button type="submit">Salvar</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </>
    ),
  },
};
