const accordionHeaders = Array.from(
  document.querySelectorAll(".accordion-toggle")
)
const accordionContents = Array.from(
  document.querySelectorAll(".accordion-content-container")
)

const novegiugno = document.querySelector("#novegiugno")
const diecigiugno = document.querySelector("#diecigiugno")
const undicigiugno = document.querySelector("#undicigiugno")

novegiugno.addEventListener("click", () => {
  document.querySelector("#content-1").classList.toggle("active")
  document.querySelector("#header-1").classList.toggle("active")
})
diecigiugno.addEventListener("click", () => {
  document.querySelector("#content-2").classList.toggle("active")
  document.querySelector("#header-2").classList.toggle("active")
})
undicigiugno.addEventListener("click", () => {
  document.querySelector("#content-3").classList.toggle("active")
  document.querySelector("#header-3").classList.toggle("active")
})

accordionHeaders.forEach((header) => {
  header.addEventListener("click", (event) => {
    event.preventDefault()
    const accordionContent = document.querySelector(event.target.hash)

    accordionContents.forEach((contentEl) => {
      if (accordionContent === contentEl) return
      contentEl.classList.remove("active")
    })
    accordionHeaders.forEach((headerEl) => {
      if (header === headerEl) return
      headerEl.classList.remove("active")
    })

    header.classList.toggle("active")
    accordionContent.classList.toggle("active")
  })
})
