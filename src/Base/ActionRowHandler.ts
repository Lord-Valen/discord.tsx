import {
  MessageActionRow as DiscordMessageActionRow,
  MessageButton as DiscordMessageButton,
  MessageSelectMenu as DiscordMessageSelectMenu,
} from "discord.js";
import {
  MessageActionRowComponent,
  MessageActionRowResolvable,
} from "../components/MessageComponent/MessageActionRow.js";
import { MessageSelectOptionComponent } from "../components/MessageComponent/MessageSelectMenu.js";

export default function handleData(
  component: MessageActionRowComponent | MessageActionRowResolvable[],
): DiscordMessageActionRow {
  const actionRow = new DiscordMessageActionRow();

  for (const child of Array.isArray(component)
    ? component
    : (component.children ?? [])) {
    child;
    if (Array.isArray(child)) {
      if (child.length === 0) continue;
      return handleData(child);
    }
    switch (child.type) {
      case "MessageButton":
        {
          const buttonComponent = new DiscordMessageButton(child.props);
          // const prop = child.props;

          // if (prop.customId) buttonComponent.setCustomId(prop.customId);
          // if (prop.disabled) buttonComponent.setDisabled(prop.disabled);
          // if (prop.emoji) buttonComponent.setEmoji(prop.emoji);
          // if (prop.label) buttonComponent.setLabel(prop.label);
          // if (prop.style) buttonComponent.setStyle(prop.style);
          // if (prop.url) buttonComponent.setURL(prop.url);

          actionRow.addComponents(buttonComponent);
        }
        break;
      case "MessageSelectMenu":
        {
          const selectMenu = new DiscordMessageSelectMenu(child.props);
          // const prop = child.props;

          // if (prop.customId) selectMenu.setCustomId(prop.customId);
          // if (prop.disabled) selectMenu.setDisabled(prop.disabled);
          // if (prop.maxValues) selectMenu.setMaxValues(prop.maxValues);
          // if (prop.minValues) selectMenu.setMinValues(prop.minValues);
          // if (prop.placeholder) selectMenu.setPlaceholder(prop.placeholder);

          // add options
          const applyOptions = (
            comp:
              | MessageSelectOptionComponent[]
              | MessageSelectOptionComponent[][],
          ): void => {
            for (const selectMenuChild of comp) {
              if (Array.isArray(selectMenuChild)) {
                return applyOptions(selectMenuChild);
              }

              return void selectMenu.addOptions(selectMenuChild.props);
            }
          };

          applyOptions(child.children ?? []);

          actionRow.addComponents(selectMenu);
        }
        break;
      default:
        throw new Error(`Invalid child component: "${child}"!`);
    }
  }

  return actionRow;
}
