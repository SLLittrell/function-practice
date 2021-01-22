
export const orderMeal = (sandwich, side, ...rest) => {
    return {
        sandwich: `${sandwich}`,
        side: `${side}`,
        drink: `${rest[0]}`,
        dessert:`${rest[1]}`
    }
}