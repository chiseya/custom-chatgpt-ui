import { atom } from 'jotai';
import { nanoid } from 'nanoid';

export const newChatKeyAtom = atom(nanoid());
