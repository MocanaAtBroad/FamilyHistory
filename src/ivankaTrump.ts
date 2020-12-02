import { FamilyMember } from './FamilyMember';

const ivanka: FamilyMember = {
    id: 1,
    name: 'Ivanka',
    userGuid: 'ABC123',
    sex: 'F',
    father: 2,
    mother: 3,
    isParticipant: true,
    medicalHistoryCompleted: true,
    medicalHistory: [{ type: 'ActivityInstance', instanceGuid: '3K24' }],
    relation: 'self'
};
const donald: FamilyMember = {
    id: 2,
    name: 'Donald',
    sex: 'M',
    father: 4,
    mother: 5,
    isParticipant: false,
    medicalHistoryCompleted: true,
    medicalHistory: [{ type: 'ActivityInstance', instanceGuid: 'UY234' }],
    relation: 'father'
};

const ivana: FamilyMember = {
    id: 3,
    name: 'Ivana',
    sex: 'F',
    father: 6,
    mother: 7,
    isParticipant: false,
    medicalHistoryCompleted: true,
    medicalHistory: [{ type: 'ActivityInstance', instanceGuid: 'U8DJ' }],
    relation: 'mother'
};
const fred: FamilyMember = {
    id: 4,
    name: 'Fred',
    sex: 'M',
    father: null,
    mother: null,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'ActivityInstance', instanceGuid: 'UX234' }],
    relation: 'paternal grandfather'
};
const maryanne: FamilyMember = {
    id: 5,
    name: 'Maryanne',
    sex: 'F',
    father: null,
    mother: null,
    isParticipant: false,
    medicalHistoryCompleted: true,
    medicalHistory: [{ type: 'Activity', activityCode: 'PAGRANMA' }],
    relation: 'paternal grandmother'
};

const milosz: FamilyMember = {
    id: 6,
    sex: 'M',
    father: null,
    mother: null,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'MAGRANPA' }],
    relation: 'maternal grandfather'
};

const marie: FamilyMember = {
    id: 7,
    sex: 'F',
    father: null,
    mother: null,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'MAGRANMA' }],
    relation: 'maternal grandmother'
};

const donjr: FamilyMember = {
    id: 8,
    sex: 'M',
    father: 2,
    mother: 3,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'ActivityInstance', instanceGuid: '93838J' }],
    relation: 'brother'
};

const eric: FamilyMember = {
    id: 9,
    sex: 'M',
    father: 2,
    mother: 3,
    isParticipant: false,
    medicalHistoryCompleted: true,
    medicalHistory: [{ type: 'ActivityInstance', instanceGuid: 'PPJDJD' }],
    relation: 'brother'
};

const tiffany: FamilyMember = {
    id: 10,
    sex: 'F',
    father: 2,
    mother: null,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'SIBLING' }],
    relation: 'half-sister (father\'s side)'
};

const arabella: FamilyMember = {
    id: 11,
    sex: 'F',
    father: null,
    mother: 1,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'CHILDREN' }],
    relation: 'daughter'
};

const joseph: FamilyMember = {
    id: 12,
    sex: 'M',
    father: null,
    mother: 1,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'CHILDREN' }],
    relation: 'son'
};

const theodore: FamilyMember = {
    id: 13,
    sex: 'M',
    father: null,
    mother: 1,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'CHILDREN' }],
    relation: 'son'
};

const fredjr: FamilyMember = {
    id: 14,
    sex: 'M',
    father: 4,
    mother: 5,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'AUNTUNCLE' }],
    relation: 'uncle (father\'s side)'
};

const maryannejr: FamilyMember = {
    id: 15,
    sex: 'F',
    father: 4,
    mother: 5,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'AUNTUNCLE' }],
    relation: 'aunt (father\'s side)'
};

const elizabeth: FamilyMember = {
    id: 16,
    sex: 'F',
    father: 4,
    mother: 5,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'AUNTUNCLE' }],
    relation: 'aunt (father\'s side)'
};

const robert: FamilyMember = {
    id: 17,
    sex: 'M',
    father: 4,
    mother: 5,
    isParticipant: false,
    medicalHistoryCompleted: false,
    medicalHistory: [{ type: 'Activity', activityCode: 'FAMHIST' }, { type: 'Activity', activityCode: 'AUNTUNCLE' }],
    relation: 'uncle (father\'s side)'
};
const history = [ivanka, donald, ivana, fred, maryanne,milosz,marie,donjr,eric,tiffany,arabella,joseph,theodore,fredjr,maryannejr,elizabeth,
robert];
export {history};
console.log(JSON.stringify(history));


