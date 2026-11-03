import { useState } from "react";

import {
  ArrowRight,
  Car,
  MapPin,
  CalendarDays,
  Clock3,
  UserRound,
  Mail,
  Phone,
  Users,
  Sparkles,
  Navigation,
  RotateCcw,
} from "lucide-react";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passengers: "1",
    pickup: "",
    dropoff: "",
    tripType: "One Way",
    vehicle: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    message: "",
    sendTo: "marhabatran03@gmail.com",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending booking...");

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      setStatus("Booking sent successfully ✓");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        passengers: "1",
        pickup: "",
        dropoff: "",
        tripType: "One Way",
        vehicle: "",
        pickupDate: "",
        pickupTime: "",
        returnDate: "",
        message: "",
        sendTo: "marhabatran03@gmail.com",
      });
    } catch (error) {
      console.error("Booking Error:", error);

      setStatus(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen lg:h-screen bg-[#03000a] text-white overflow-hidden relative">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Purple glow */}
        <div className="absolute -left-40 top-[20%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />

        {/* Cyan glow */}
        <div className="absolute right-[-150px] bottom-[-150px] w-[500px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[150px]" />

        {/* Center glow */}
        <div className="absolute left-[45%] top-[10%] w-[350px] h-[350px] bg-purple-500/[0.04] rounded-full blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="relative z-20 px-6 md:px-10 lg:px-12 py-5">

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full border border-cyan-400/40 bg-black/20 backdrop-blur-md flex items-center justify-center">
              <span className="text-cyan-400 font-bold text-lg">
                L
              </span>
            </div>

            <div>
              <h1 className="text-xs sm:text-sm font-bold tracking-[4px]">
                LUXE DRIVE
              </h1>

              <p className="text-[7px] text-white/40 tracking-[3px] mt-1">
                FUTURE MOBILITY
              </p>
            </div>

          </div>

          {/* STATUS */}

          <div className="flex items-center gap-3">

            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />

            <span className="text-[8px] uppercase tracking-[3px] text-white/40">
              Booking System Online
            </span>

          </div>

        </div>

      </nav>

      {/* ================= MAIN ================= */}

      <div className="relative z-10 lg:h-[calc(100vh-85px)] flex items-center">

        <div className="w-full max-w-[1450px] mx-auto px-6 md:px-10 lg:px-12 py-5">

          <div className="grid lg:grid-cols-[0.75fr_1.5fr] xl:grid-cols-[0.7fr_1.55fr] gap-8 xl:gap-14 items-center">

            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <section className="hidden lg:block">

              {/* LABEL */}

              <div className="flex items-center gap-3 mb-4">

                <Sparkles
                  size={14}
                  className="text-cyan-400"
                />

                <p className="text-cyan-400 text-[10px] uppercase tracking-[5px]">
                  Premium Car Service
                </p>

              </div>

              {/* HEADING */}

              <h2 className="text-[48px] xl:text-[58px] font-black uppercase leading-[0.9] tracking-[-3px]">

                Your

                <br />

                <span className="text-white/95">
                  Journey.
                </span>

                <br />

                <span className="neon-text">
                  Your Way.
                </span>

              </h2>

              {/* DESCRIPTION */}

              <p className="text-white/40 text-xs xl:text-sm max-w-[360px] leading-6 mt-6">
                Create a premium reservation with our luxury
                vehicle service. Enter your journey details
                and we'll take care of the rest.
              </p>

              {/* PREMIUM FLEET */}

              <div className="mt-8 flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-purple-600/10 border border-purple-400/20 flex items-center justify-center">

                  <Car
                    size={18}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[2px] text-white/35">
                    Premium Fleet
                  </p>

                  <p className="text-xs text-white/70 mt-1">
                    Luxury • Comfort • Performance
                  </p>

                </div>

              </div>

              {/* MINI STATS */}

              <div className="flex items-center gap-5 mt-8">

                <div>

                  <h3 className="text-lg font-bold">
                    150+
                  </h3>

                  <p className="text-[7px] text-white/30 uppercase tracking-[2px]">
                    Vehicles
                  </p>

                </div>

                <div className="h-7 w-px bg-white/10" />

                <div>

                  <h3 className="text-lg font-bold">
                    24/7
                  </h3>

                  <p className="text-[7px] text-white/30 uppercase tracking-[2px]">
                    Support
                  </p>

                </div>

                <div className="h-7 w-px bg-white/10" />

                <div>

                  <h3 className="text-lg font-bold">
                    VIP
                  </h3>

                  <p className="text-[7px] text-white/30 uppercase tracking-[2px]">
                    Service
                  </p>

                </div>

              </div>

            </section>

            {/* ================================================= */}
            {/* BOOKING FORM */}
            {/* ================================================= */}

            <section className="relative">

              {/* GLOW */}

              <div className="absolute -inset-8 bg-purple-600/[0.08] blur-[90px] rounded-full pointer-events-none" />

              {/* CARD */}

              <div className="relative bg-[#070510]/85 backdrop-blur-xl border border-white/10 rounded-[26px] p-5 md:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">

                {/* TOP LINE */}

                <div className="absolute top-0 left-16 right-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />

                {/* HEADER */}

                <div className="flex items-center justify-between mb-5">

                  <div>

                    <p className="text-cyan-400 text-[8px] uppercase tracking-[3px] mb-1">
                      Reservation
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold">
                      Book Your Car
                    </h2>

                  </div>

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-400/10 border border-purple-400/20 flex items-center justify-center">

                    <Car
                      size={17}
                      className="text-cyan-400"
                    />

                  </div>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* CUSTOMER INFORMATION */}

                  <div>

                    <div className="flex items-center gap-2 mb-2">

                      <span className="text-[8px] text-cyan-400 font-bold">
                        01
                      </span>

                      <span className="text-[8px] uppercase tracking-[2px] text-white/40">
                        Customer Information
                      </span>

                    </div>

                    <div className="grid md:grid-cols-2 gap-2.5">

                      <InputField
                        icon={<UserRound size={14} />}
                        name="fullName"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />

                      <InputField
                        icon={<Mail size={14} />}
                        name="email"
                        type="email"
                        placeholder="Customer email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />

                      <InputField
                        icon={<Phone size={14} />}
                        name="phone"
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />

                      <div className="relative group">

                        <Users
                          size={14}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 group-focus-within:text-cyan-400 transition"
                        />

                        <select
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="booking-input appearance-none pl-10"
                        >

                          <option value="1">
                            1 Passenger
                          </option>

                          <option value="2">
                            2 Passengers
                          </option>

                          <option value="3">
                            3 Passengers
                          </option>

                          <option value="4">
                            4 Passengers
                          </option>

                          <option value="5">
                            5 Passengers
                          </option>

                          <option value="6">
                            6 Passengers
                          </option>

                          <option value="7">
                            7 Passengers
                          </option>

                          <option value="8">
                            8 Passengers
                          </option>

                        </select>

                      </div>

                    </div>

                  </div>

                  {/* JOURNEY */}

                  <div>

                    <div className="flex items-center gap-2 mb-2">

                      <span className="text-[8px] text-cyan-400 font-bold">
                        02
                      </span>

                      <span className="text-[8px] uppercase tracking-[2px] text-white/40">
                        Journey Information
                      </span>

                    </div>

                    <div className="grid md:grid-cols-2 gap-2.5">

                      <InputField
                        icon={<MapPin size={14} />}
                        name="pickup"
                        placeholder="Pickup location"
                        value={formData.pickup}
                        onChange={handleChange}
                        required
                      />

                      <InputField
                        icon={<Navigation size={14} />}
                        name="dropoff"
                        placeholder="Drop-off location"
                        value={formData.dropoff}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    <div className="grid grid-cols-2 gap-2.5 mt-2.5">

                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            tripType: "One Way",
                            returnDate: "",
                          }))
                        }
                        className={`h-10 rounded-xl border text-[9px] uppercase tracking-[1.5px] transition flex items-center justify-center gap-2 ${
                          formData.tripType === "One Way"
                            ? "border-cyan-400/40 bg-cyan-400/[0.06] text-cyan-400"
                            : "border-white/10 bg-black/20 text-white/35"
                        }`}
                      >

                        <Navigation size={12} />

                        One Way

                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            tripType: "Round Trip",
                          }))
                        }
                        className={`h-10 rounded-xl border text-[9px] uppercase tracking-[1.5px] transition flex items-center justify-center gap-2 ${
                          formData.tripType === "Round Trip"
                            ? "border-purple-400/40 bg-purple-500/[0.06] text-purple-400"
                            : "border-white/10 bg-black/20 text-white/35"
                        }`}
                      >

                        <RotateCcw size={12} />

                        Round Trip

                      </button>

                    </div>

                  </div>

                  {/* VEHICLE & SCHEDULE */}

                  <div>

                    <div className="flex items-center gap-2 mb-2">

                      <span className="text-[8px] text-cyan-400 font-bold">
                        03
                      </span>

                      <span className="text-[8px] uppercase tracking-[2px] text-white/40">
                        Vehicle & Schedule
                      </span>

                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-2.5">

                      <div className="relative group xl:col-span-2">

                        <Car
                          size={14}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 group-focus-within:text-cyan-400 transition"
                        />

                        <select
                          name="vehicle"
                          value={formData.vehicle}
                          onChange={handleChange}
                          required
                          className="booking-input appearance-none pl-10"
                        >

                          <option value="">
                            Select vehicle
                          </option>

                          <option value="Luxury Sedan">
                            Luxury Sedan
                          </option>

                          <option value="Premium SUV">
                            Premium SUV
                          </option>

                          <option value="Executive Car">
                            Executive Car
                          </option>

                          <option value="Sports Car">
                            Sports Car
                          </option>

                          <option value="Luxury Van">
                            Luxury Van
                          </option>

                        </select>

                      </div>

                      <InputField
                        icon={<CalendarDays size={14} />}
                        name="pickupDate"
                        type="date"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        required
                      />

                      <InputField
                        icon={<Clock3 size={14} />}
                        name="pickupTime"
                        type="time"
                        value={formData.pickupTime}
                        onChange={handleChange}
                        required
                      />

                    </div>

                    {formData.tripType === "Round Trip" && (

                      <div className="mt-2.5">

                        <InputField
                          icon={<CalendarDays size={14} />}
                          name="returnDate"
                          type="date"
                          value={formData.returnDate}
                          onChange={handleChange}
                          required
                        />

                      </div>

                    )}

                  </div>

                  {/* ADDITIONAL */}

                  <div>

                    <div className="flex items-center gap-2 mb-2">

                      <span className="text-[8px] text-cyan-400 font-bold">
                        04
                      </span>

                      <span className="text-[8px] uppercase tracking-[2px] text-white/40">
                        Additional Information
                      </span>

                    </div>

                    <div className="grid md:grid-cols-2 gap-2.5">

                      {/* SEND TO */}

                      <input
                        type="email"
                        name="sendTo"
                        value={formData.sendTo}
                        onChange={handleChange}
                        placeholder="Send booking to"
                        required
                        className="booking-input px-4"
                      />

                      {/* SPECIAL REQUEST */}

                      <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Special request (optional)"
                        className="booking-input px-4"
                      />

                    </div>

                  </div>

                  {/* SEND BUTTON */}

                  <button
                    type="submit"
                    className="group relative overflow-hidden w-full h-11 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[10px] font-semibold uppercase tracking-[1.5px] flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.005] shadow-[0_0_25px_rgba(124,58,237,0.25)]"
                  >

                    <span className="relative z-10">
                      Confirm & Send Booking
                    </span>

                    <span className="relative z-10 w-6 h-6 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">

                      <ArrowRight size={13} />

                    </span>

                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  </button>

                  {/* STATUS */}

                  {status && (

                    <p
                      className={`text-center text-[9px] ${
                        status.includes("successfully")
                          ? "text-cyan-400"
                          : status.includes("wrong") ||
                            status.includes("failed") ||
                            status.includes("Error")
                          ? "text-red-400"
                          : "text-white/40"
                      }`}
                    >
                      {status}
                    </p>

                  )}

                  {/* FOOTER */}

                  <div className="pt-3 border-t border-white/[0.07] flex items-center justify-between">

                    <span className="text-[7px] text-white/25 uppercase tracking-[1.5px]">
                      Secure Booking
                    </span>

                    <span className="text-[7px] text-white/25">
                      Your information is securely processed
                    </span>

                  </div>

                </form>

              </div>

            </section>

          </div>

        </div>

      </div>

      {/* ================= CUSTOM STYLES ================= */}

      <style>{`

        .booking-input {
          width: 100%;
          height: 40px;
          border-radius: 11px;
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.09);
          color: white;
          font-size: 10px;
          outline: none;
          transition: all 0.3s ease;
        }

        .booking-input:focus {
          border-color: rgba(34,211,238,0.45);
          background: rgba(34,211,238,0.035);
          box-shadow: 0 0 18px rgba(34,211,238,0.05);
        }

        .booking-input::placeholder {
          color: rgba(255,255,255,0.23);
        }

        .booking-input[type="date"],
        .booking-input[type="time"] {
          padding-left: 40px;
          color-scheme: dark;
        }

        select.booking-input {
          color: rgba(255,255,255,0.65);
        }

        select.booking-input option {
          background: #070510;
          color: white;
        }

        .neon-text {
          background: linear-gradient(
            90deg,
            #a855f7,
            #22d3ee
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 1023px) {

          body {
            overflow-y: auto;
          }

        }

      `}</style>

    </main>
  );
}

/* ========================================================= */
/* INPUT COMPONENT */
/* ========================================================= */

function InputField({
  icon,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div className="relative group">

      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 group-focus-within:text-cyan-400 transition pointer-events-none">

        {icon}

      </span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="booking-input pl-10 pr-3"
      />

    </div>
  );
}

export default Booking;