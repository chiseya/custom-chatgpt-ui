import { atom } from 'jotai';
import { nanoid } from 'nanoid';

export const messengerPaneRefreshKeyAtom = atom(nanoid());
