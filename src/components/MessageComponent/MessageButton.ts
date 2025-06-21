import { MessageButtonOptions } from "discord.js";
import { Component } from "../../typings/types.js";

export type MessageButtonComponent = Component<
  MessageButtonOptions & { customId?: string; url?: string },
  undefined
> & { type: "MessageButton" };
export function MessageButton(
  props: MessageButtonOptions & {
    customId?: string;
    url?: string;
  },
  _children: undefined,
): MessageButtonComponent {
  return {
    type: "MessageButton",
    props,
    children: undefined,
  };
}
