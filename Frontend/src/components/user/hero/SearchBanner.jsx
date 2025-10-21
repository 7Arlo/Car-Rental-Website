import { useState } from "react";
import { Calendar, Search, MapPin, Loader2 } from "lucide-react";
import carImage from "../../../assets/banner_car_image-B9uXTQkB.png";

export default function SearchBanner() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  // --- Get Current Location ---
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // Reverse geocoding using OpenStreetMap API
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          setPickupLocation(data.address?.city || data.address?.town || data.address?.village || "Unknown location");
        } catch (error) {
          alert("Unable to fetch location details.");
        } finally {
          setLoadingLocation(false);
        }
      },
      () => {
        alert("Unable to retrieve your location.");
        setLoadingLocation(false);
      }
    );
  };

  const handleSearch = () => {
    if (!pickupLocation || !pickupDate || !returnDate) {
      alert("Please fill all fields before searching.");
      return;
    }
    console.log({ pickupLocation, pickupDate, returnDate });
  };

  return (
    <section className="bg-gradient-to-r from-sky-200 to-blue-100 py-16 relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          Luxury Cars on Rent
        </h1>

        {/* Search Box */}
        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative">
          {/* Pickup Location */}
          <div className="flex flex-col w-full md:w-auto relative">
            <label className="text-sm font-semibold mb-1">Pickup Location</label>
            <div
              className="flex items-center border rounded-md px-2 cursor-pointer"
              onClick={handleGetLocation}
            >
              <MapPin className="text-gray-500 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Click to detect location"
                value={
                  loadingLocation
                    ? "Detecting..."
                    : pickupLocation || ""
                }
                readOnly
                className="w-full p-2 outline-none cursor-pointer"
              />
              {loadingLocation && <Loader2 className="w-4 h-4 text-teal-500 animate-spin ml-2" />}
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Pickup Date</label>
            <div className="flex items-center border rounded-md px-2">
              <Calendar className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="p-2 outline-none w-full"
              />
            </div>
          </div>

          {/* Return Date */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Return Date</label>
            <div className="flex items-center border rounded-md px-2">
              <Calendar className="text-gray-500 w-5 h-5 mr-2" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="p-2 outline-none w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-teal-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-teal-600 transition"
          >
            <Search className="w-5 h-5" />
            Search cars
          </button>
        </div>

        {/* Car Image */}
        <div className="mt-10 flex justify-center">
          <img
            src={carImage}
            alt="Luxury Car"
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
