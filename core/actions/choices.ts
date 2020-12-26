import { ChoiceInitType, ChoicePickType, ChoicesType, INIT_CHOICE, PICK_CHOICE, Tag } from 'core/types'


export const pickChoice = (tag: Tag, choices: ChoicesType, index: number, player?: number): ChoicePickType => {
    return {
        type: PICK_CHOICE,
        choices,
        index,
        tag,
        player,
    }
}

export const initChoice = (tag: Tag, choices: ChoicesType): ChoiceInitType => {
    return {
        type: INIT_CHOICE,
        choices,
        tag,
    }
}

