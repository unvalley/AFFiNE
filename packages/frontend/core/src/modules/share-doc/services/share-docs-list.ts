import type { WorkspaceService } from '@toeverything/infra';
import { Service } from '@toeverything/infra';

import { ShareDocsList } from '../entities/share-docs-list';

export class ShareDocsListService extends Service {
  constructor(private readonly workspaceService: WorkspaceService) {
    super();
  }

  shareDocs =
    this.workspaceService.workspace.flavour !== 'local'
      ? this.framework.createEntity(ShareDocsList)
      : null;

  override dispose(): void {
    this.shareDocs?.dispose();
  }
}
