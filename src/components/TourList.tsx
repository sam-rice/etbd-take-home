import { FC, useState } from "react"
import toursJson from "../departures.json"
import TourListItem from "./TourListItem"
import Tour from "../interfaces/tour"

const TourSearch: FC = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)

  const allTours: Tour[] = toursJson.flatMap(tourJson =>
    Object.entries(tourJson).map(([id, tour]) => ({
      id,
      ...tour,
      startDate: tour.start_date,
      endDate: tour.end_date,
      startCity: tour.start_city,
      endCity: tour.end_city,
      seatsAvailable: tour.seats_available,
      seatsBooked: tour.seats_booked,
      seatsMaximum: tour.seats_maximum,
    }))
  )

  const displayedTours = allTours.map((tour: Tour) => (
    <TourListItem
      key={tour.id}
      {...tour}
      selectTour={setSelectedTour}
    />
  ))

  return (
    <div>
      <h1 className="text-center text-5xl text-theme-blue-500 font-bold my-10 tracking-wider">
        Tour Search
      </h1>
      <ul>{displayedTours}</ul>
    </div>
  )
}

export default TourSearch
