import Randomstring from "randomstring";

export const randomString = (length: number) => {
    return Randomstring.generate({
        length: length,
        charset: "alphanumeric",
        capitalization: "uppercase",
    })
}

export const randomNumber = (length: number) => {
    return Randomstring.generate({
        length: length,
        charset: "numeric",
    })
}