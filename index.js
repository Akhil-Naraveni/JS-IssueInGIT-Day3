let resultSection = document.getElementById("results")
let page = 1
let pageNumberEle = document.getElementById("pageNumber")

//Taken issue names as title from the fetched Data..
fetch("https://api.github.com/repositories/1296269/issues?page=1&per_page=5")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((ele) => {
            resultSection.innerHTML += `<li> ${ele["title"]}</li>`
        })
        pageNumberEle.innerText = `PageNumber : ${page}`
    })

const loadPrev = () => {
    
    if (page >1) {
        resultSection.innerHTML = ""
        page--
        fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((ele) => {
                    resultSection.innerHTML += `<li>  ${ele["title"]}</li>`
                })
            })
            pageNumberEle.innerText = `PageNumber : ${page}`
    }
    
}
const loadNext = () =>{
    resultSection.innerHTML = ""
    page++
    fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((ele) => {
                    resultSection.innerHTML += `<li>  ${ele["title"]}</li>`
                })
            })
            pageNumberEle.innerText = `PageNumber : ${page}`
}
