import type {
  MessageEmbedAuthor,
  MessageEmbedFooter,
  EmbedFieldData,
  MessageEmbedImage,
  MessageEmbedThumbnail,
  MessageButtonOptions,
  MessageSelectOptionData,
} from "discord.js";
import {
  EmbedProps,
  MessageActionRowComponent,
  MessageEmbedComponent,
} from "..";

export type ComponentPropTypes =
  | MessageEmbedAuthor
  | MessageEmbedFooter
  | MessageEmbedImage
  | MessageEmbedThumbnail
  | EmbedFieldData
  | EmbedProps
  | MessageButtonOptions
  | MessageSelectOptionData
  | {}
  | undefined
  | null;

export type ElementType =
  | "Root"
  | "MessageActionRow"
  | "MessageButton"
  | "MessageSelectMenu"
  | "MessageSelectOption"
  | "MessageEmbed"
  | "MessageEmbedAuthor"
  | "MessageEmbedFooter"
  | "MessageEmbedFields"
  | "MessageEmbedField"
  | "MessageEmbedThumbnail"
  | "MessageEmbedImage";

export type Atom =
  | Component
  | object
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined;

export type ComponentFactory<P = {}, C = Atom[]> = (
  props?: P,
  children?: C,
) => Component<P, C>;

export interface Component<P = {}, C = Atom[]> {
  type: ElementType;
  props: P;
  children?: C;
}

export type FragmentResolvable =
  | MessageActionRowComponent
  | MessageEmbedComponent;
