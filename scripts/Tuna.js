







const chance = Math.random() * 10
export const svenChances =(chance) => {
    if(chance >= 3) {
        return "Sven hooked a tuna!"
    }
    else {
        return "Sven came up empty-handed."
    }
}

