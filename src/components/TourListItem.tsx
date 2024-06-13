import { FC } from "react"
import Tour from "../interfaces/tour"
import moment from "moment"
import { AvailabilityStatus } from "../types/tour"
import AvailabilityStatusChip from "./AvailabilityStatusChip"

interface TourListItemProps extends Tour {
  selectTour: (id: string) => void
}

const TourListItem: FC<TourListItemProps> = ({
  id,
  name,
  days,
  startDate,
  endDate,
  startCity,
  endCity,
  seatsAvailable,
  selectTour,
}) => {
  const availabilityStatus: AvailabilityStatus =
    seatsAvailable > 5
      ? "Available"
      : seatsAvailable < 1
      ? "Sold Out"
      : "Limited"

  return (
    <li
      className="bg-theme-blue-100 rounded-lg mb-3 flex justify-between p-6 hover:cursor-pointer hover:bg-theme-blue-200"
      onClick={() => selectTour(id)}
    >
      <div>
        <h2 className="text-2xl mb-4">{name}</h2>
        <div className="flex items-center text-theme-blue-500 space-x-5">
          <span>
            <div className=" font-medium text-xl">{startCity}</div>
            <div>{moment(startDate).calendar()}</div>
          </span>
          <span>to</span>
          <span>
            <div className=" font-medium text-xl">{endCity}</div>
            <div>{moment(endDate).calendar()}</div>
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <AvailabilityStatusChip status={availabilityStatus} />
        <span className="flex items-center justify-center flex-col text-theme-blue-500 ml-4">
          <div className="font-bold text-3xl -mb-1">{days}</div>
          <div>days</div>
        </span>
      </div>
    </li>
  )
}

export default TourListItem
