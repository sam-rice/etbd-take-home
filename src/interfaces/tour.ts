export default interface Tour {
  id: string
  status: "Active" | "Inactive"
  name: string
  days: number
  startDate: string
  endDate: string
  startCity: string
  endCity: string
  seatsAvailable: number
  seatsBooked: number
  seatsMaximum: number
}