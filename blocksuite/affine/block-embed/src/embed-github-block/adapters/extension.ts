import type { ExtensionType } from '@blocksuite/block-std';

import { EmbedGithubBlockHtmlAdapterExtension } from './html.js';
import { EmbedGithubMarkdownAdapterExtension } from './markdown.js';
import { EmbedGithubBlockNotionHtmlAdapterExtension } from './notion-html.js';
import { EmbedGithubBlockPlainTextAdapterExtension } from './plain-text.js';

export const EmbedGithubBlockAdapterExtensions: ExtensionType[] = [
  EmbedGithubBlockHtmlAdapterExtension,
  EmbedGithubMarkdownAdapterExtension,
  EmbedGithubBlockPlainTextAdapterExtension,
  EmbedGithubBlockNotionHtmlAdapterExtension,
];
