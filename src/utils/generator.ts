/**
 * 
 * @description Generate random ID
 * @returns string
 */
export const generateRandomID: () => string = () => (Math.random() * 10000000000).toString();