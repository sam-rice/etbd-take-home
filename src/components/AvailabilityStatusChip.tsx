import { FC } from "react"
import { AvailabilityStatus } from "../types/tour"
import classNames from "classnames"

interface AvailabilityStatusChipProps {
  status: AvailabilityStatus
}

const AvailabilityStatusChip: FC<AvailabilityStatusChipProps> = ({
  status,
}) => {
  const classes = classNames(
    { "bg-green-300": status === "Available" },
    { "bg-yellow-300": status === "Limited" },
    { "bg-red-300": status === "Sold Out" },
    "rounded-lg px-2"
  )

  return <span className={classes}>{status}</span>
}

export default AvailabilityStatusChip
