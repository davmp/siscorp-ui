import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Componentes/Avatar",
  component: Avatar,
  argTypes: {
    className: {
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
    <Avatar>
      <AvatarImage
        src="https://images.pexels.com/photos/16299765/pexels-photo-16299765/free-photo-of-businessman-wearing-suit-and-necktie.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        alt="foto-perfil"
      />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  name: "Fallback",
  render: () => (
    <Avatar>
      <AvatarImage />
      <AvatarFallback>IN</AvatarFallback>
    </Avatar>
  ),
};
