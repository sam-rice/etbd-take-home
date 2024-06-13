import { FC, useState } from "react"
import toursJson from "../departures.json"
import TourListItem from "./TourListItem"
import Tour from "../interfaces/tour"
import { formatDate } from "../utilities/dates"

const TourSearch: FC = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)
  const [destinationFilter, setDestinationFilter] = useState<
    string | undefined
  >(undefined)
  const [dateFilter, setDateFilter] = useState<string>(
    formatDate(new Date().toString())
  )
  const [maxLength, setMaxLength] = useState(30)
  const [minLength, setMinLength] = useState(5)
  const [availableChecked, setAvailableChecked] = useState(true)
  const [limitedChecked, setLimitedChecked] = useState(true)
  const [soldOutChecked, setSoldOutChecked] = useState(true)

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

  const filterTours = (): Tour[] => {
    return allTours
  }

  const displayedTours = filterTours().map((tour: Tour) => (
    <TourListItem
      key={tour.id}
      {...tour}
      isSelected={tour.id === selectedTour}
      selectTour={setSelectedTour}
    />
  ))

  const destinationOptions = [
    ...new Set(allTours.map((tour: Tour) => tour.endCity)),
  ].map((destination: string) => (
    <option
      key={destination}
      value={destination}
      aria-selected={destinationFilter === destination}
    >
      {destination}
    </option>
  ))

  return (
    <div>
      <h1 className="text-center text-5xl text-theme-blue-500 font-bold my-10 tracking-wider">
        Tour Search
      </h1>
      <fieldset className="flex bg-theme-gray-300 mb-5 rounded-lg min-h-32 border px-4 pt-2 pb-4 justify-between">
        <legend className="text-xl font-light">Filter By:</legend>
        <div className="flex flex-col justify-center">
          <label className="mb-2">
            Destination:
            <select
              className="border border-theme-gray-400 rounded min-w-40 min-h-8 pl-2 ml-3"
              id="destination-filter"
              name="destination-filter"
              value={destinationFilter}
              onChange={e => setDestinationFilter(e.target.value)}
            >
              <option>---</option>
              {destinationOptions}
            </select>
          </label>
          <label>
            Show tours after:
            <input
              className="border border-theme-gray-400 rounded min-w-40 min-h-8 ml-3"
              type="date"
              id="date-filter"
              name="date-filter"
              value={dateFilter}
              min={formatDate(new Date().toDateString())}
              onChange={e => setDateFilter(formatDate(e.target.value))}
            />
          </label>
        </div>
        <fieldset className="flex flex-col bg-white px-4 py-2 rounded max-w-fit border">
          <legend>Tour Length:</legend>
          <label>
            Min:
            <input
              className="mx-3"
              type="range"
              id="min-length-filter"
              name="min-length-filter"
              min="5"
              max="30"
              value={minLength}
              step="1"
              onChange={e => setMinLength(parseInt(e.target.value))}
            />
            {minLength} days
          </label>
          <label>
            Max:
            <input
              className="mx-3"
              type="range"
              id="max-length-filter"
              name="max-length-filter"
              min="5"
              max="30"
              value={maxLength}
              step="1"
              onChange={e => setMaxLength(parseInt(e.target.value))}
            />
            {maxLength} days
          </label>
        </fieldset>
        <fieldset className="flex flex-col bg-white px-4 py-2 rounded max-w-fit border">
          <legend>Ticket Availability:</legend>
          <div className="space-x-6">
            <label>
              <input
                className="mr-2"
                type="checkbox"
                id="available-filter"
                name="available-filter"
                checked={availableChecked}
                onChange={() => setAvailableChecked(!availableChecked)}
              />
              Available
            </label>
            <label>
              <input
                className="mr-2"
                type="checkbox"
                id="limited-filter"
                name="limited-filter"
                checked={limitedChecked}
                onChange={() => setLimitedChecked(!limitedChecked)}
              />
              Limited
            </label>
            <label>
              <input
                className="mr-2"
                type="checkbox"
                id="sold-out-filter"
                name="sold-out-filter"
                checked={soldOutChecked}
                onChange={() => setSoldOutChecked(!soldOutChecked)}
              />
              Sold Out
            </label>
          </div>
        </fieldset>
      </fieldset>
      <ul>{displayedTours}</ul>
    </div>
  )
}

export default TourSearch
