function getPalindrome(words:string) {
    return words.split("").reverse().join("")
}

let words: Array<string> = ["tacocat"]

test("for palindromes", () => {
    expect(getPalindrome(words[0])).toEqual(words[0])
    expect(getPalindrome(words[1])).toEqual(words[1])

    words.forEach((word) => {
        expect
    })
})