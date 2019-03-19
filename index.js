function enableNodelist() {
  return  NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
}

enableNodelist()

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector( '#nested .target')
}

// function deepestChild() {
//   debugger
//   let grandNode = document.querySelector("#grand-node")
//   let arr = []
//   for (let e of grandNode) {
//     if (e.innerText === "boo!") {
//       arr.push(e.innerText)
//     }
//   }
//   return arr[0]
// }

function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}

function increaseRankBy(n) {
  NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]
  let list = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + 1).toString()
  }
}

//
