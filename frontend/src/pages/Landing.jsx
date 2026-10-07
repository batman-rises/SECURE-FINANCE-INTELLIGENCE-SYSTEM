import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F5FC] text-[#211A2D]">
      {/* ================= NAVBAR ================= */}
      <nav className="border-b border-purple-100 bg-white">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-5">
            <img
              src="/sfis_logo.jpg"
              alt="SFIS Logo"
              className="h-24 w-24 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold leading-none">SFIS</h1>

              <p className="mt-2 text-[11px] font-medium tracking-wide text-gray-400">
                SECURE FINANCE INTELLIGENCE SYSTEM
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-10 text-sm font-medium text-gray-600 md:flex">
            <a href="#features" className="transition hover:text-purple-600">
              Features
            </a>

            <a href="#about" className="transition hover:text-purple-600">
              About
            </a>

            <a href="#security" className="transition hover:text-purple-600">
              Security
            </a>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:text-purple-600"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-200 transition hover:bg-purple-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="overflow-hidden px-6 py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* -------- LEFT -------- */}
          <div className="pt-6 lg:pt-14">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Intelligent Financial Security
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Smarter Finance.
              <br />
              <span className="text-purple-600">Safer Decisions.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              SFIS is a secure finance intelligence platform designed to analyse
              financial risk, detect suspicious transactions and support
              data-driven banking decisions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700"
              >
                Get Started →
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-purple-200 bg-white px-7 py-3.5 font-semibold text-purple-700 transition hover:bg-purple-50"
              >
                Sign In
              </Link>
            </div>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-500">
              <span>✓ Fraud Detection</span>

              <span>✓ Risk Analysis</span>

              <span>✓ AI Powered</span>
            </div>
          </div>

          {/* -------- RIGHT: DASHBOARD PREVIEW -------- */}
          <div className="relative lg:mt-4">
            {/* Background glow */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-200 opacity-40 blur-3xl"></div>

            <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-300 opacity-30 blur-3xl"></div>

            {/* Dashboard window */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-purple-100 bg-white p-5 shadow-2xl shadow-purple-100">
              {/* Browser header */}
              <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>

                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>

                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>

                <span className="text-xs text-gray-400">SFIS Dashboard</span>
              </div>

              {/* Dashboard content */}
              <div className="grid grid-cols-2 gap-4">
                {/* Fraud Cases */}
                <div className="rounded-xl bg-purple-50 p-4">
                  <p className="text-xs text-gray-500">Fraud Cases</p>

                  <p className="mt-2 text-2xl font-bold text-purple-700">127</p>

                  <p className="mt-1 text-xs text-green-600">
                    ↓ 12.4% this month
                  </p>
                </div>

                {/* Risk Score */}
                <div className="rounded-xl bg-purple-50 p-4">
                  <p className="text-xs text-gray-500">Risk Score</p>

                  <p className="mt-2 text-2xl font-bold text-purple-700">
                    68/100
                  </p>

                  <p className="mt-1 text-xs text-yellow-600">Medium Risk</p>
                </div>

                {/* Chart */}
                <div className="col-span-2 rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Financial Risk Trend</p>

                      <p className="text-xs text-gray-400">Last 6 months</p>
                    </div>

                    <span className="rounded-lg bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                      2026
                    </span>
                  </div>

                  {/* Chart bars */}
                  <div className="mt-6 flex h-36 items-end gap-3">
                    {[45, 65, 52, 80, 60, 90, 72, 95].map((height, index) => (
                      <div key={index} className="flex h-full flex-1 items-end">
                        <div
                          style={{ height: `${height}%` }}
                          className="w-full rounded-t-md bg-purple-500 opacity-80"
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Status */}
                <div className="col-span-2 rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">System Status</p>

                    <span className="flex items-center gap-2 text-xs font-medium text-green-600">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Secure
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    {/* Fraud Detection */}
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-gray-500">Fraud Detection</span>

                        <span className="font-medium">Active</span>
                      </div>

                      <div className="h-2 rounded-full bg-gray-100">
                        <div className="h-2 w-[92%] rounded-full bg-purple-500"></div>
                      </div>
                    </div>

                    {/* Risk Analysis */}
                    <div>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-gray-500">Risk Analysis</span>

                        <span className="font-medium">Active</span>
                      </div>

                      <div className="h-2 rounded-full bg-gray-100">
                        <div className="h-2 w-[84%] rounded-full bg-purple-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="border-y border-purple-100 bg-white px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold text-purple-600">PLATFORM FEATURES</p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Everything you need for
              <span className="text-purple-600"> financial intelligence</span>
            </h2>

            <p className="mt-4 text-gray-500">
              SFIS combines financial analysis, risk assessment and intelligent
              security tools into one platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon="🛡️"
              title="Fraud Detection"
              description="Identify suspicious transactions and potential fraudulent activities."
            />

            <FeatureCard
              icon="📊"
              title="Risk Analysis"
              description="Analyse financial risk and identify high-risk accounts and loans."
            />

            <FeatureCard
              icon="🤖"
              title="AI Models"
              description="Use machine learning models to support intelligent financial decisions."
            />

            <FeatureCard
              icon="🔐"
              title="Secure System"
              description="Protect financial information through authentication and access control."
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold text-purple-600">ABOUT SFIS</p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Built for modern financial security
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Financial institutions deal with large amounts of data every day.
              SFIS provides a centralized platform to analyse this data, detect
              potential threats and generate useful financial insights.
            </p>

            <p className="mt-4 leading-7 text-gray-500">
              The system brings together fraud detection, credit analysis,
              financial risk assessment and machine learning into a single
              interface.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InfoCard
              number="01"
              title="Analyse"
              text="Process financial data and identify important patterns."
            />

            <InfoCard
              number="02"
              title="Detect"
              text="Identify suspicious activities and potential risks."
            />

            <InfoCard
              number="03"
              title="Predict"
              text="Use intelligent models to estimate future risk."
            />

            <InfoCard
              number="04"
              title="Protect"
              text="Provide secure access to sensitive financial information."
            />
          </div>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section id="security" className="bg-purple-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
            🔒
          </div>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Security is at the core of SFIS
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-purple-100">
            Role-based access, secure authentication and intelligent monitoring
            help keep financial information protected.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-purple-700 transition hover:bg-purple-50"
          >
            Start Using SFIS →
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <div>© 2026 SFIS — Secure Financial Intelligence System</div>

          <div className="flex gap-6">
            <Link to="/login" className="hover:text-purple-600">
              Login
            </Link>

            <Link to="/register" className="hover:text-purple-600">
              Register
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================= FEATURE CARD ================= */

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-[#FDFCFF] p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
    </div>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
      <span className="text-sm font-bold text-purple-600">{number}</span>

      <h3 className="mt-3 font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{text}</p>
    </div>
  );
}

export default Landing;
