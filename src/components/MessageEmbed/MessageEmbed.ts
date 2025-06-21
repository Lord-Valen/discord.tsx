import {
  MessageEmbedAuthor as DiscordMessageEmbedAuthor,
  MessageEmbedFooter as DiscordMessageEmbedFooter,
  EmbedFieldData,
  MessageEmbedImage as DiscordMessageEmbedImage,
  MessageEmbedThumbnail as DiscordMessageEmbedThumbnail,
  ColorResolvable,
} from "discord.js";
import { Component } from "../../typings/types.js";

export type MessageEmbedResolvable =
  | MessageEmbedAuthorComponent
  | MessageEmbedFooterComponent
  | MessageEmbedFieldsComponent
  | MessageEmbedThumbnailComponent
  | MessageEmbedImageComponent;

export interface EmbedProps {
  color?: ColorResolvable;
  timestamp?: Date | number;
  description?: string;
  title?: string;
  url?: string;
}

export type MessageEmbedComponent = Component<
  EmbedProps,
  MessageEmbedResolvable[]
> & { type: "MessageEmbed" };
export function MessageEmbed(
  props: EmbedProps,
  children: MessageEmbedResolvable[],
): MessageEmbedComponent {
  return {
    type: "MessageEmbed",
    props,
    children,
  };
}

export type MessageEmbedAuthorComponent = Component<
  DiscordMessageEmbedAuthor,
  undefined
> & { type: "MessageEmbedAuthor" };
export function MessageEmbedAuthor(
  props: DiscordMessageEmbedAuthor,
  _children: any,
): MessageEmbedAuthorComponent {
  return {
    type: "MessageEmbedAuthor",
    props,
    children: undefined,
  };
}

export type MessageEmbedFooterComponent = Component<
  DiscordMessageEmbedFooter,
  undefined
> & { type: "MessageEmbedFooter" };
export function MessageEmbedFooter(
  props: DiscordMessageEmbedFooter,
  _children: undefined,
): MessageEmbedFooterComponent {
  return {
    type: "MessageEmbedFooter",
    props,
    children: undefined,
  };
}

export type MessageEmbedFieldsComponent = Component<
  {},
  MessageEmbedFieldComponent[] | MessageEmbedFieldComponent[][]
> & { type: "MessageEmbedFields" };
export function MessageEmbedFields(
  _props: any,
  children: MessageEmbedFieldComponent[] | MessageEmbedFieldComponent[][],
): MessageEmbedFieldsComponent {
  return {
    type: "MessageEmbedFields",
    props: {},
    children,
  };
}

export type MessageEmbedFieldComponent = Component<
  EmbedFieldData,
  undefined
> & { type: "MessageEmbedField" };
export function MessageEmbedField(
  props: EmbedFieldData,
  _children: undefined,
): MessageEmbedFieldComponent {
  return {
    type: "MessageEmbedField",
    props,
    children: undefined,
  };
}

export type MessageEmbedThumbnailComponent = Component<
  DiscordMessageEmbedThumbnail,
  undefined
> & { type: "MessageEmbedThumbnail" };
export function MessageEmbedThumbnail(
  props: DiscordMessageEmbedThumbnail,
  _children: undefined,
): MessageEmbedThumbnailComponent {
  return {
    type: "MessageEmbedThumbnail",
    props,
    children: undefined,
  };
}

export type MessageEmbedImageComponent = Component<
  DiscordMessageEmbedImage,
  undefined
> & { type: "MessageEmbedImage" };
export function MessageEmbedImage(
  props: DiscordMessageEmbedImage,
  _children: undefined,
): MessageEmbedImageComponent {
  return {
    type: "MessageEmbedImage",
    props,
    children: undefined,
  };
}
