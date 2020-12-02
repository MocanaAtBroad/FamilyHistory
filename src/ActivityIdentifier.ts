import { DataLocationIdentifier } from './DataLocationIdentifier';

export interface ActivityIdentifier extends DataLocationIdentifier{
    type: 'Activity';
    activityCode: string;
}
