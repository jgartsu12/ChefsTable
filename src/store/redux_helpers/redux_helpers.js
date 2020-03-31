export const updateAuth = (pastAuths, newBehaviors) => {
    return {
        ...pastAuths,
        ...newBehaviors
    }
}