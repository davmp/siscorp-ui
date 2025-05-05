import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

const meta: Meta<typeof Table> = {
  title: "Componentes/Tabela",
  component: Table,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Table>;

const columns = [
  { key: "invoice", label: "Fatura", className: "w-[100px]" },
  { key: "status", label: "Status" },
  { key: "method", label: "Método" },
  { key: "amount", label: "Quantidade", className: "text-right" },
];

const data = [
  {
    invoice: "FAT001",
    status: "Paga",
    method: "Cartão de Crédito",
    amount: "R$ 250,00",
  },
  {
    invoice: "FAT002",
    status: "Pendente",
    method: "Boleto",
    amount: "R$ 450,00",
  },
  { invoice: "FAT003", status: "Paga", method: "PIX", amount: "R$ 120,00" },
  {
    invoice: "FAT004",
    status: "Cancelada",
    method: "Cartão de Débito",
    amount: "R$ 330,00",
  },
  {
    invoice: "FAT005",
    status: "Paga",
    method: "Transferência",
    amount: "R$ 510,00",
  },
  {
    invoice: "FAT006",
    status: "Pendente",
    method: "Boleto",
    amount: "R$ 75,00",
  },
  { invoice: "FAT007", status: "Paga", method: "PIX", amount: "R$ 890,00" },
  {
    invoice: "FAT008",
    status: "Em Processamento",
    method: "Cartão de Crédito",
    amount: "R$ 200,00",
  },
  {
    invoice: "FAT009",
    status: "Paga",
    method: "Transferência",
    amount: "R$ 640,00",
  },
  {
    invoice: "FAT010",
    status: "Cancelada",
    method: "Cartão de Débito",
    amount: "R$ 95,00",
  },
];

export const Default: Story = {
  name: "Padrão",
  args: {
    children: (
      <>
        <TableCaption>Lista de faturas recentes.</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className={column.className}>
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.invoice}>
              <TableCell className="text-left font-medium">
                {item.invoice}
              </TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.method}</TableCell>
              <TableCell className="text-right">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};
