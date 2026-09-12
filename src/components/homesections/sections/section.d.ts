import type { BaseItemDto } from '@jellyfin/sdk/lib/generated-client/models/base-item-dto';
import type { BaseItemDtoQueryResult } from '@jellyfin/sdk/lib/generated-client/models/base-item-dto-query-result';

export interface SectionOptions {
    enableOverflow: boolean;
    latestMediaLimit?: number;
}

export type SectionContainerElement = {
    fetchData: () => Promise<BaseItemDtoQueryResult | BaseItemDto[]>
    getItemsHtml: (items: BaseItemDto[]) => void
    parentContainer: HTMLElement
} & Element;
