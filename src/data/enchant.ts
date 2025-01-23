interface Enchant {
    level: number; // 賦予難度級別
    id: string; // 賦予的唯一 ID
    type: "prefix" | "suffix"; // 賦予類型（接头/接尾）
    name: string; // 賦予名稱
    description: string; // 原始詳細描述
    details: EnchantDetails; // 賦予詳細結構化內容
}

interface EnchantDetails {
    restrictions: string[]; // 賦予限制，例如 ["头部", "脚部"]
    effects: EnchantEffect[]; // 賦予的能力效果
    penalties?: string[]; // 負面效果
}

interface EnchantEffect {
    stat: string; // 能力名稱，例如 "双枪伤害"
    value: string; // 數值，例如 "+75" 或 "23~87"
}

export const searchEnchants = (
    enchants: Enchant[],
    criteria: {
        name?: string;
        stat?: string;
        restriction?: string;
        penalty?: string;
    }
): Enchant[] => {
    return enchants.filter((enchant) => {
        if (criteria.name && !enchant.name.includes(criteria.name)) {
            return false;
        }
        if (
            criteria.stat &&
            !enchant.details.effects.some(
                (effect) => criteria.stat && effect.stat.includes(criteria.stat)
            )
        ) {
            return false;
        }
        if (
            criteria.restriction &&
            !enchant.details.restrictions.includes(criteria.restriction)
        ) {
            return false;
        }
        if (
            criteria.penalty &&
            (!enchant.details.penalties ||
                !enchant.details.penalties.includes(criteria.penalty))
        ) {
            return false;
        }
        return true;
    });
};
