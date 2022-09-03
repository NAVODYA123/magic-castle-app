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

export {SPELLS_QUERY}
