export const getFormattedDate = (dateString?: string) => {
  // const date = new Date(dateString)
  // const year = date.getFullYear()
  // const month = String(date.getMonth() + 1).padStart(2, "0")
  // const day = String(date.getDate()).padStart(2, "0")
  // return `${year}-${month}-${day}`

  const date = dateString ? new Date(dateString  + 'T00:00:00') : new Date()
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit" }
  return date.toLocaleDateString("en-CA", options)
}
