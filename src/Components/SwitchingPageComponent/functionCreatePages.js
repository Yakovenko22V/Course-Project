export function createPages(pagesCount, numberPage, arr) {
    if (pagesCount > 10) {
        if (numberPage > 5) {
            for (let i = +numberPage - 4; i <= +numberPage + 5; i++) {
                arr.push(i)
                if (i === pagesCount) break 
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                arr.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            arr.push(i)
        }
    }
}