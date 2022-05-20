const accordionHeaders = Array.from(
  document.querySelectorAll(".accordion-toggle")
)
const accordionContents = Array.from(
  document.querySelectorAll(".accordion-content-container")
)
// const accordionIcon = Array.from(document.querySelectorAll("#x-icon"))

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

    const xIcon = header.querySelector("#x-icon")
    xIcon.classList.toggle("x-icon-active")
  })
})

document.addEventListener("click", () => {})
