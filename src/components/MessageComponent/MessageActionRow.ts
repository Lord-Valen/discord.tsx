import { MessageActionRowOptions } from "discord.js";
import { MessageElement } from "../../typings/types.js";

export function MessageActionRow(props: {}, children: MessageElement[]) {
  return {
    type: "MessageActionRow",
    props,
    children,
  } as MessageElement<MessageActionRowOptions>;
}
