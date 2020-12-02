import { NodeId } from './NodeId';
import { Sex } from './Sex';
import { DataLocationPath } from './DataLocationPath';

export interface FamilyMember {
    /**
     * Id for this node. Unique in scope of a request
     */
    id: NodeId;
    /**
     * If we have it, we can set it
     */
    name?: string;
    /**
     * We can generate a label if needed, e.g., cousin 2
     */
    label?: string;
    /**
     * Set if this person can be managed by current operator
     */
    userGuid?: string;
    /**
     * If this node represents a participant managed by operator
     */
    isParticipant: boolean;
    /**
     * If unknown or top of tree value will be null
     */
    father: NodeId | null;
    /**
     * If unknown or top of tree value will be null
     */
    mother: NodeId | null;
    sex?: Sex;
    /**
     * Should include here the relation name as used in the activities
     */
    relation: string;
    /**
     * Provide info to client on how to get to the medical history for this person
     */
    medicalHistory?: DataLocationPath;
    /**
     * Whether there is data that needs to be entered or not
     */
    medicalHistoryCompleted: boolean;
}
