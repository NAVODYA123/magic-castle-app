import { gql } from '@apollo/client';

const SPELLS_QUERY = gql`
    query Spells {
        spells {
            index
            name
            duration
            material
            range
            level
            higher_level
            damage {
                damage_at_slot_level {
                    level
                    damage
                }
                damage_at_character_level {
                    level
                    damage
                }
                damage_type {
                    index
                    name
                }
            }
            school {
                name
            }
        }
    }
`;


const GET_SPELL_LIST = gql `
    query getSpellList {
        spells {
            index
            name
        }
    }
`;


const GET_SPELL_DETAILS = gql `
    query getSpellDetails($index: String) {
        spell(index: $index) {
            index
            area_of_effect {
                type
                size
            }
            attack_type
            casting_time
            duration
            level
            material
            name
            range
            ritual
            school {
                index
                name
            }
            higher_level
            damage {
                damage_at_slot_level {
                    damage
                    level
                }
                damage_at_character_level {
                    level
                    damage
                }
                damage_type {
                    name
                    desc
                }
            }
            concentration
            desc
        }
    }
`;

export {SPELLS_QUERY,GET_SPELL_LIST,GET_SPELL_DETAILS}
