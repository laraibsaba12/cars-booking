import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  CarFront,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { fullName, username, email, password, confirmPassword } =
      formData;

    if (!fullName.trim() || !username.trim() || !email.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: fullName.trim(),
            username: username.trim().toLowerCase(),
            email: email.trim().toLowerCase(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to create your account.");
      }

      setSuccess("Account created successfully!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setError(
        err.message === "Failed to fetch"
          ? "Server unavailable. Please start your backend."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full min-w-0 rounded-xl border border-white/10 bg-[#100c1c] py-2.5 pl-10 pr-10 text-sm text-white placeholder:text-white/30 outline-none transition duration-200 focus:border-purple-400 focus:bg-[#171027] focus:ring-2 focus:ring-purple-500/20";

  const labelClass =
    "mb-1.5 block text-xs font-semibold tracking-wide text-white/70";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-y-auto bg-[#05030b] p-3 font-sans text-white sm:p-4 lg:h-screen lg:min-h-0 lg:overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-purple-700/20 blur-[140px]" />

      <div className="pointer-events-none fixed -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[140px]" />

      {/* MAIN SPLIT CARD */}
      <div className="relative grid min-h-0 w-full max-w-5xl overflow-hidden rounded-3xl border border-purple-400/15 bg-[#0b0813] shadow-2xl shadow-purple-950/40 md:grid-cols-2">

        {/* LEFT BRAND SIDE */}
        <section className="relative hidden flex-col justify-between overflow-hidden border-r border-white/10 bg-gradient-to-br from-[#291346] via-[#160b29] to-[#090611] p-7 md:flex lg:p-9">

          {/* LEFT GLOW EFFECTS */}
          <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-600/15 blur-[100px]" />

          {/* BRAND LOGO */}
          <Link to="/login" className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-300/30 bg-purple-500/15 shadow-lg shadow-purple-950/30">
              <CarFront size={26} className="text-purple-300" />
            </div>

            <div>
              <h1 className="text-xl font-black tracking-[2.5px] text-white lg:text-2xl">
                LUXE DRIVE
              </h1>

              <p className="mt-1 text-[9px] font-semibold tracking-[3px] text-purple-300">
                PREMIUM CAR RENTALS
              </p>
            </div>
          </Link>

          {/* BRAND MESSAGE */}
          <div className="relative my-5">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-3 py-2 text-[10px] font-bold tracking-[1.5px] text-purple-200">
              <Sparkles size={14} />
              THE PREMIUM EXPERIENCE
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.15] tracking-tight lg:text-5xl">
              Create Your
              <br />

              <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Account.
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              Step into a better driving experience. Register
              today and make your next journey effortless.
            </p>

            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-400" />

            {/* FEATURES */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/75">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-300/15 bg-purple-500/10">
                  <ShieldCheck size={17} className="text-purple-300" />
                </span>

                Secure account registration
              </div>

              <div className="flex items-center gap-3 text-sm text-white/75">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-300/15 bg-purple-500/10">
                  <CarFront size={17} className="text-purple-300" />
                </span>

                Simple and convenient car booking
              </div>
            </div>
          </div>

          {/* BRAND FOOTER */}
          <div className="relative border-t border-white/10 pt-4">
            <p className="text-sm font-bold tracking-wide text-white/85">
              Drive Beyond Ordinary.
            </p>

            <p className="mt-1 text-xs text-white/40">
              Your journey. Your choice. Your freedom.
            </p>
          </div>
        </section>

        {/* RIGHT FORM SIDE */}
        <section className="relative flex flex-col justify-center p-4 sm:p-6 lg:p-7">

          {/* TOP ACCENT */}
          <div className="absolute left-8 right-8 top-0 h-[2px] rounded-full bg-gradient-to-r from-purple-600 via-violet-400 to-fuchsia-400" />

          {/* MOBILE LOGO */}
          <Link
            to="/login"
            className="mb-5 inline-flex items-center gap-2.5 md:hidden"
          >
            <CarFront size={25} className="text-purple-400" />

            <span className="text-lg font-black tracking-[2px]">
              LUXE DRIVE
            </span>
          </Link>

          {/* FORM TITLE */}
          <div className="mb-4">
            <p className="mb-2 text-[10px] font-bold tracking-[3px] text-purple-400">
              YOUR JOURNEY STARTS HERE
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get Started
            </h2>

            <p className="mt-2 text-sm leading-5 text-white/45">
              Fill in your details to create your account.
            </p>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div
              role="alert"
              className="mb-3 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-2.5 text-xs text-red-300"
            >
              {error}
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {success && (
            <div
              role="status"
              className="mb-3 rounded-xl border border-purple-400/30 bg-purple-500/10 px-4 py-2.5 text-xs text-purple-200"
            >
              {success} Redirecting to login...
            </div>
          )}

          {/* SIGNUP FORM */}
          <form onSubmit={handleSubmit} className="space-y-3">

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {/* FULL NAME */}
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>

                <div className="relative">
                  <UserRound
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/70"
                  />

                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* USERNAME */}
              <div>
                <label htmlFor="username" className={labelClass}>
                  Username
                </label>

                <div className="relative">
                  <UserRound
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/70"
                  />

                  <input
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="Choose username"
                    value={formData.username}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/70"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/70"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Minimum 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    className={inputClass}
                    required
                    minLength={8}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 transition hover:text-purple-300"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label htmlFor="confirmPassword" className={labelClass}>
                  Confirm Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/70"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Repeat password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={inputClass}
                    required
                    minLength={8}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 transition hover:text-purple-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CREATE ACCOUNT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading
                  ? "#6d28d9"
                  : "linear-gradient(90deg, #7c3aed 0%, #9333ea 55%, #a855f7 100%)",
                color: "#ffffff",
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold shadow-lg shadow-purple-700/25 transition duration-200 hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Creating Account..." : "Create Account"}

              {!loading && <ArrowRight size={17} />}
            </button>
          </form>

          {/* SIGN IN */}
          <div className="mt-4 border-t border-white/10 pt-4 text-center">
            <p className="text-sm text-white/50">
              Already have an account?{" "}

              <Link
                to="/login"
                className="font-bold text-purple-400 transition hover:text-purple-200"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* SECURITY FOOTER */}
          <p className="mt-3 text-center text-[10px] tracking-[1px] text-white/25">
            SECURE REGISTRATION · LUXE DRIVE
          </p>
        </section>
      </div>
    </main>
  );
}