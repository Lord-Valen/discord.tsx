import { MessageEmbed } from "discord.js";
import { MessageEmbedComponent } from "../components/MessageEmbed/MessageEmbed.js";

export default function handleData(component: MessageEmbedComponent) {
  const props = component.props;
  const embed = new MessageEmbed();

  if (props.color) embed.setColor(props.color);
  if (props.timestamp) embed.setTimestamp(props.timestamp);
  if (props.description) embed.setDescription(props.description);
  if (props.title) embed.setTitle(props.title);
  if (props.url) embed.setURL(props.url);

  component.children?.forEach((child) => {
    switch (child.type) {
      case "MessageEmbedFields":
        {
          if (!child.children) {
            break;
          }
          const fieldData = child.children.flat().map((f) => f.props);
          void embed.addFields(fieldData);
        }
        break;
      case "MessageEmbedAuthor":
        {
          embed.setAuthor(child.props);
        }
        break;
      case "MessageEmbedFooter":
        {
          embed.setFooter(child.props);
        }
        break;
      case "MessageEmbedImage":
        {
          embed.setImage(child.props.url);
        }
        break;
      case "MessageEmbedThumbnail":
        {
          embed.setThumbnail(child.props.url);
        }
        break;
      default:
        throw new TypeError(`Unexpected child value "${child}"!`);
    }
  });

  return embed;
}
