import {
  BlockViewExtension,
  CommandExtension,
  type ExtensionType,
  FlavourExtension,
} from '@blocksuite/block-std';
import { literal } from 'lit/static-html.js';

import { ParagraphBlockAdapterExtensions } from './adapters/extension.js';
import { commands } from './commands/index.js';
import {
  ParagraphKeymapExtension,
  ParagraphTextKeymapExtension,
} from './paragraph-keymap.js';
import { ParagraphBlockService } from './paragraph-service.js';

export const ParagraphBlockSpec: ExtensionType[] = [
  FlavourExtension('affine:paragraph'),
  ParagraphBlockService,
  CommandExtension(commands),
  BlockViewExtension('affine:paragraph', literal`affine-paragraph`),
  ParagraphTextKeymapExtension,
  ParagraphKeymapExtension,
  ParagraphBlockAdapterExtensions,
].flat();
