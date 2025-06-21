import { MessageSelectMenuOptions, MessageSelectOptionData } from "discord.js";
import { Component } from "../../typings/types.js";

export type MessageSelectMenuComponent = Component<
  MessageSelectMenuOptions,
  MessageSelectOptionComponent[] | MessageSelectOptionComponent[][]
> & { type: "MessageSelectMenu" };
export function MessageSelectMenu(
  props: MessageSelectMenuOptions,
  children: MessageSelectOptionComponent[] | MessageSelectOptionComponent[][],
): MessageSelectMenuComponent {
  return {
    type: "MessageSelectMenu",
    props,
    children,
  };
}

export type MessageSelectOptionComponent = Component<
  MessageSelectOptionData,
  undefined
> & { type: "MessageSelectOption" };
export function MessageSelectOption(
  props: MessageSelectOptionData,
  _children: undefined,
): MessageSelectOptionComponent {
  return {
    type: "MessageSelectOption",
    props,
    children: undefined,
  };
}
