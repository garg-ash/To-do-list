const list = document.getElementsByClassName("todo")
const btn = document.querySelector("button")
const ullist = document.querySelector("ul")
const input = document.querySelector("input")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    const li = document.createElement("li");
    li.innerHTML = input.value
    ullist.append(li)

    const editIcon = document.createElement("span")
    // const li = document.createElement("li")
    editIcon.innerHTML = input.value
    editIcon.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    ullist.append(editIcon)



    const deleteIcon = document.createElement("spans");
    deleteIcon.innerHTML = input.value
    deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>'
    ullist.append(deleteIcon)

})




