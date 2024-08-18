import Loader from "@/components/common/Loader";
import MyBookingCard from "@/components/common/MyBookingCard";
import { AdminHeaders, backendURL } from "@/constants/bankendURL";
import { IconPlus } from "@tabler/icons-react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { toast } from "sonner";

const AllBookingsPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlPage = parseInt(searchParams?.get("page") || "0");
  const [currentPage, setCurrentPage] = useState(urlPage);
  useEffect(() => {
    setCurrentPage(urlPage);
  }, [urlPage]);
  const pageSize = 30;
  const fetchUsers = (currentPage: number) =>
    axios
      .get(
        backendURL +
          "/booking?page=" +
          currentPage +
          "&pageSize=" +
          pageSize +
          "&sortBy=date" +
          "&sortOrder=desc",
        {
          headers: AdminHeaders(),
        }
      )
      .then((res) => res.data)
      .catch((err) => err);
  const { isFetching, data, isFetched, isError } = useQuery({
    queryKey: ["users", currentPage],
    queryFn: () => fetchUsers(currentPage),

    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
  if (isFetched) {
    if (data?.response?.status === 401) {
      toast.message("Please Login First");
      router.push(`/login-admin?from=${pathname}`);
    }
  }
  if (isError) {
    toast.error("An Error Occured, Please Try Again Later");
  }

  const bookings = data?.data || [];
  return (
    <div className="p-8 container">
      <Loader isLoading={isFetching} />
      <div>
        <h1 className="text-4xl mb-4">My Bookings</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="flex flex-col p-8 h-96 w-72 shadow-xl items-center justify-center gap-8 cursor-pointer hover:bg-tertiary transition duration-500 ease-in-out"
            onClick={() => {
              router.push("/book");
            }}
          >
            <p className="text-3xl font-semibold text-primary">Add Booking</p>
            <div className="p-8 bg-primary rounded-full">
              <IconPlus size={40} color="white" />
            </div>
          </div>
          {bookings.map((booking: any, index: number) => (
            <MyBookingCard key={index} bookingDetails={booking} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBookingsPage;
