import {
  MessageActionRow as DiscordMessageActionRow,
  MessageEmbed,
} from "discord.js";
import {
  Atom,
  ComponentFactory,
  Component,
  ComponentPropTypes,
  FragmentResolvable,
} from "../typings/types";
import handleActionRow from "./ActionRowHandler";
import handleEmbed from "./MessageEmbedHandler";

export class DiscordComponents {
  static createComponent<P = ComponentPropTypes>(
    component: ComponentFactory<P>,
    props: P,
    ...children: Atom[]
  ): Component<P> {
    if (component === undefined) return void 0 as any;
    const element = component(props, children);
    return element;
  }

  static Fragment(
    props: null,
    children: FragmentResolvable[],
  ): { embeds: MessageEmbed[]; actionRows: DiscordMessageActionRow[] } {
    if (props !== null)
      throw new TypeError("Root fragments must not have props.");

    const actionRows: DiscordMessageActionRow[] = [];
    const embeds: MessageEmbed[] = [];

    if (!children || children.length === 0) return { actionRows, embeds }; // Nothing to process.

    children.forEach((atom) => {
      // Only process if atom is a Component
      if (typeof atom !== "object" || atom === null || !("type" in atom))
        return;

      switch (atom.type) {
        case "MessageActionRow":
          actionRows.push(handleActionRow(atom));
          break;
        case "MessageEmbed":
          embeds.push(handleEmbed(atom));
          break;
        default:
          throw new TypeError(`Unsupported parent component: "${atom}"!`);
      }
    });

    return {
      embeds,
      actionRows,
    };
  }
}
