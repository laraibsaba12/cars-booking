
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  LockKeyhole,
  UserRound,
  Sparkles,
} from "lucide-react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onLogin) {
      onLogin(username, password);
    }
  };

  return (
    <main className="min-h-screen min-h-screen bg-[#03000a] text-white overflow-x-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 pointer-events-none">

        <img
          src="https://videocdn.cdnpk.net/videos/250511a0-506e-55e8-9c9b-8de59d1aa0ea/horizontal/thumbnails/large.jpg"
          alt="Futuristic Luxury Car"
          className="absolute inset-0 w-full h-full object-cover futuristic-car"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03000a]/85 via-[#05000f]/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#03000a]/70 via-transparent to-transparent" />

        <div className="absolute right-[-120px] top-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]" />

        <div className="absolute right-[15%] bottom-[-200px] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px]" />

      </div>

      {/* NAVBAR */}

      <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 lg:px-12 py-5 login-nav">

        <div className="flex items-center justify-between">

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

          <div className="hidden sm:flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" />

            <span className="text-[8px] uppercase tracking-[3px] text-white/40">
              System Online
            </span>
          </div>

        </div>

      </nav>

      {/* MAIN CONTENT */}

      <div className="relative z-10 min-h-screen flex items-center">

        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-24 pb-10">

          <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">

            {/* LEFT CONTENT */}

            <section className="hidden lg:block hero-content">

              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={14} className="text-cyan-400" />

                <p className="text-cyan-400 text-[10px] uppercase tracking-[5px]">
                  The Future Is Here
                </p>
              </div>

              <h2 className="text-[58px] xl:text-[72px] font-black uppercase leading-[0.88] tracking-[-4px]">
                Drive
                <br />
                <span className="text-white/95">The</span>
                <br />
                <span className="neon-text">Future.</span>
              </h2>

              <p className="text-white/45 text-xs xl:text-sm max-w-[390px] leading-6 mt-6">
                Experience intelligent mobility with premium
                vehicles, seamless booking and a completely
                modern driving experience.
              </p>

              <div className="flex items-center gap-6 mt-7">

                <div>
                  <h3 className="text-xl font-bold">150+</h3>
                  <p className="text-[8px] text-white/35 uppercase tracking-[2px] mt-1">
                    Vehicles
                  </p>
                </div>

                <div className="h-8 w-px bg-white/15" />

                <div>
                  <h3 className="text-xl font-bold">24/7</h3>
                  <p className="text-[8px] text-white/35 uppercase tracking-[2px] mt-1">
                    Support
                  </p>
                </div>

                <div className="h-8 w-px bg-white/15" />

                <div>
                  <h3 className="text-xl font-bold">VIP</h3>
                  <p className="text-[8px] text-white/35 uppercase tracking-[2px] mt-1">
                    Service
                  </p>
                </div>

              </div>

            </section>

            {/* LOGIN CARD */}

            <section className="flex justify-center lg:justify-end login-wrapper">

              <div className="relative w-full max-w-[360px]">

                <div className="absolute -inset-10 bg-purple-600/12 blur-[90px] rounded-full pointer-events-none" />

                <div className="relative bg-[#070510]/85 backdrop-blur-xl border border-white/10 rounded-[26px] p-6 sm:p-7 shadow-[0_25px_80px_rgba(0,0,0,0.65)]">

                  {/* TOP LINE */}

                  <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]" />

                  {/* ICON */}

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-400/10 border border-purple-400/20 flex items-center justify-center mb-5">
                    <LockKeyhole size={18} className="text-cyan-400" />
                  </div>

                  {/* HEADING */}

                  <p className="text-cyan-400 text-[9px] uppercase tracking-[3px] mb-2">
                    Private Access
                  </p>

                  <h2 className="text-2xl font-bold">
                    Welcome Back
                  </h2>

                  <p className="text-xs text-white/40 mt-2 leading-5">
                    Enter your credentials to access your
                    premium booking dashboard.
                  </p>

                  {/* LOGIN FORM */}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                    {/* USERNAME */}

                    <div>
                      <label className="text-[9px] uppercase tracking-[2px] text-white/45 block mb-2">
                        Username
                      </label>

                      <div className="relative group">
                        <UserRound
                          size={15}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-cyan-400 transition"
                        />

                        <input
                          type="text"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          autoComplete="username"
                          className="w-full h-12 rounded-xl bg-black/25 border border-white/10 pl-11 pr-4 text-xs outline-none transition-all duration-300 focus:border-cyan-400/50 focus:bg-cyan-400/[0.04] placeholder:text-white/25"
                        />
                      </div>
                    </div>

                    {/* PASSWORD */}

                    <div>
                      <label className="text-[9px] uppercase tracking-[2px] text-white/45 block mb-2">
                        Password
                      </label>

                      <div className="relative group">
                        <LockKeyhole
                          size={15}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-400 transition"
                        />

                        <input
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          autoComplete="current-password"
                          className="w-full h-12 rounded-xl bg-black/25 border border-white/10 pl-11 pr-4 text-xs outline-none transition-all duration-300 focus:border-purple-400/50 focus:bg-purple-500/[0.04] placeholder:text-white/25"
                        />
                      </div>
                    </div>

                    {/* LOGIN BUTTON */}

                    <button
                      type="submit"
                      className="group relative overflow-hidden w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.01] shadow-[0_0_25px_rgba(124,58,237,0.25)]"
                    >
                      <span className="relative z-10">
                        Enter Dashboard
                      </span>

                      <span className="relative z-10 w-6 h-6 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={14} />
                      </span>

                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>

                  </form>

                  {/* CREATE ACCOUNT LINK */}

                  <div className="mt-6 pt-5 border-t border-white/10 text-center">

                    <p className="text-xs text-white/50">
                      Don't have an account?
                    </p>

                    <Link
                      to="/signup"
                      className="inline-flex items-center justify-center gap-2 mt-3 w-full h-11 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.05] text-cyan-400 text-xs font-semibold hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300"
                    >
                      <UserRound size={15} />
                      Create Account
                      <ArrowRight size={14} />
                    </Link>

                  </div>

                  {/* SECURITY FOOTER */}

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-[8px] text-white/30 uppercase tracking-[1px]">
                      Secure Login
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                      <span className="text-[8px] text-white/30">
                        Encrypted
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </section>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Login;
