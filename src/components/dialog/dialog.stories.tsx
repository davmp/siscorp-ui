import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./dialog";
import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";

const meta: Meta<typeof Dialog> = {
  title: "Componentes/Diálogo",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  name: "Padrão",
  render: () => (
    <Dialog>
      <DialogTrigger>Abrir Diálogo</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tem certeza?</DialogTitle>
          <DialogDescription>
            Essa ação não pode ser desfeita. Isso vai permanentemente deletar
            sua conta e removar seus dados de nossos servidores.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

export const WithFooter: Story = {
  name: "Com Rodapé",
  render: () => (
    <Dialog>
      <DialogTrigger>Abrir Diálogo</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tem certeza?</DialogTitle>
          <DialogDescription>
            Essa ação não pode ser desfeita. Isso vai permanentemente deletar
            sua conta e removar seus dados de nossos servidores.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  name: "Com Formulário",
  args: {
    children: (
      <>
        <DialogTrigger asChild>
          <Button variant="outline">Editar Perfil</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar perfil</DialogTitle>
            <DialogDescription>
              Faça alterações no seu perfil aqui. Clique salvar e pronto.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <DialogClose>
              <Button type="submit">Salvar</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </>
    ),
  },
};
