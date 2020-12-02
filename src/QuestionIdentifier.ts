import { DataLocationIdentifier } from './DataLocationIdentifier';

export interface QuestionIdentifier extends DataLocationIdentifier {
    type: 'Question';
    stableId: string;
}
