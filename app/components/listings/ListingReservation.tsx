"use client";

interface ListingReservation {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = () => {
  return <div>LR</div>;
};

export default ListingReservation;
