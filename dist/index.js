const accordionHeaders = Array.from(
  document.querySelectorAll(".accordion-toggle")
)
const accordionContents = Array.from(
  document.querySelectorAll(".accordion-content-container")
)

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
