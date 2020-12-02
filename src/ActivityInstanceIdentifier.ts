import { DataLocationIdentifier } from './DataLocationIdentifier';

export interface ActivityInstanceIdentifier extends DataLocationIdentifier {
    type: 'ActivityInstance';
    instanceGuid: string;
}
