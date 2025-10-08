import { Calendar, Search, MapPin } from "lucide-react";
import carImage from "../../../assets/banner_car_image-B9uXTQkB.png"


export default function Hero() {
    
  return (
    <section className="bg-gradient-to-r from-sky-200 to-blue-100 py-16 relative">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          Luxury cars on Rent
        </h1>

        {/* Search Box */}
        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          {/* Pickup Location */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Pickup Location</label>
            <div className="flex items-center border rounded-md px-2">
              <MapPin className="text-gray-500 w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Please select location"
                className="w-full p-2 outline-none"
              />
            </div>
          </div>

          {/* Pickup Date */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Pickup Date</label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="DD"
                className="w-14 p-2 border rounded-md text-center"
              />
              <input
                type="text"
                placeholder="MM"
                className="w-14 p-2 border rounded-md text-center"
              />
              <input
                type="text"
                placeholder="YYYY"
                className="w-20 p-2 border rounded-md text-center"
              />
              <Calendar className="text-gray-500 w-5 h-5" />
            </div>
          </div>

          {/* Return Date */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm font-semibold mb-1">Return Date</label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="DD"
                className="w-14 p-2 border rounded-md text-center"
              />
              <input
                type="text"
                placeholder="MM"
                className="w-14 p-2 border rounded-md text-center"
              />
              <input
                type="text"
                placeholder="YYYY"
                className="w-20 p-2 border rounded-md text-center"
              />
              <Calendar className="text-gray-500 w-5 h-5" />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-teal-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-teal-600 transition">
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
