import { Component } from "../../typings/types.js";
import { MessageButtonComponent } from "./MessageButton.js";
import { MessageSelectMenuComponent } from "./MessageSelectMenu.js";

export type MessageActionRowResolvable =
  | MessageButtonComponent
  | MessageSelectMenuComponent;

export type MessageActionRowComponent = Component<
  {},
  MessageActionRowResolvable[] | MessageActionRowResolvable[][]
> & { type: "MessageActionRow" };
export function MessageActionRow(
  _props: {},
  children: MessageActionRowResolvable[],
): MessageActionRowComponent {
  return {
    type: "MessageActionRow",
    props: {},
    children,
  };
}
