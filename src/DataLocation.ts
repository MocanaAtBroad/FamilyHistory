import { ActivityIdentifier } from './ActivityIdentifier';
import { ActivityInstanceIdentifier } from './ActivityInstanceIdentifier';
import { QuestionIdentifier } from './QuestionIdentifier';

/**
 * Identifies the entity with the data of interest
 */
export type DataLocation = ActivityIdentifier | ActivityInstanceIdentifier | QuestionIdentifier;
