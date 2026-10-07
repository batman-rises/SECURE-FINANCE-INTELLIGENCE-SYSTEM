import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F7F5FC] text-[#211A2D]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 border-r border-purple-100 bg-white lg:flex lg:flex-col">
        {/* Logo */}
        <div className="flex h-24 shrink-0 items-center border-b border-gray-100 px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/sfis_logo.jpg"
              alt="SFIS Logo"
              className="h-12 w-12 object-contain"
            />

            <div>
              <h1 className="text-lg font-bold leading-none">SFIS</h1>

              <p className="mt-1 text-[8px] font-medium tracking-wide text-gray-400">
                SECURE FINANCIAL
                <br />
                INTELLIGENCE SYSTEM
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <nav className="space-y-1">
            <SidebarItem icon="▦" label="Dashboard" active to="/dashboard" />

            <SidebarItem icon="↔" label="Transactions" to="/transactions" />

            <SidebarItem
              icon="⚠"
              label="Fraud Detection"
              to="/fraud-detection"
            />

            <SidebarItem icon="◔" label="Risk Analysis" to="/risk-analysis" />

            <SidebarItem
              icon="▣"
              label="Credit Analysis"
              to="/credit-analysis"
            />

            <SidebarItem icon="◈" label="AI Models" to="/ai-models" />

            <SidebarItem
              icon="◎"
              label="Federated Learning"
              to="/federated-learning"
            />
          </nav>

          <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            System
          </p>

          <nav className="space-y-1">
            <SidebarItem icon="⚙" label="Settings" to="/settings" />

            <SidebarItem icon="?" label="Help & Support" to="#" />
          </nav>
        </div>

        {/* Bottom section */}
        <div className="shrink-0 border-t border-gray-100 p-4">
          {/* System status */}
          <div className="mb-4 rounded-xl border border-green-100 bg-green-50 p-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>

              <span className="text-sm font-semibold text-green-700">
                System Secure
              </span>
            </div>

            <p className="mt-1 text-xs text-green-600">
              All services operational
            </p>
          </div>

          {/* Profile */}
          <div className="mb-3 flex items-center gap-3 rounded-xl bg-purple-50 p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 font-semibold text-white">
              BP
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-900">
                Binayak Panda
              </p>

              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600"
          >
            <span className="flex w-6 justify-center text-base">↪</span>

            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-purple-100 bg-white/95 px-6 backdrop-blur md:px-8">
          <div>
            <p className="text-sm text-gray-400">
              Secure Financial Intelligence System
            </p>

            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-5">
            {/* Notification */}
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600"
              title="Notifications"
            >
              🔔
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            {/* Profile */}
            <div className="hidden items-center gap-3 border-l border-gray-200 pl-5 sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">
                BP
              </div>

              <div>
                <p className="text-sm font-semibold">Binayak Panda</p>

                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-6 md:p-8">
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-sm font-medium text-purple-600">
              Good morning, Binayak 👋
            </p>

            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              Financial Intelligence Overview
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Monitor financial risk, fraud activity and system performance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Fraud Cases"
              value="127"
              change="12.4%"
              description="from last month"
              icon="⚠"
              positive
            />

            <StatCard
              title="NPA Probability"
              value="8.4%"
              change="2.1%"
              description="from last month"
              icon="◔"
              positive
            />

            <StatCard
              title="High Risk Loans"
              value="23"
              change="5"
              description="new this month"
              icon="!"
              warning
            />

            <StatCard
              title="FL Training Round"
              value="12"
              change="Active"
              description="Federated learning"
              icon="◎"
              purple
            />
          </div>

          {/* Charts Row */}
          <div className="mt-6 grid gap-6 xl:grid-cols-3">
            {/* Financial Risk Trend */}
            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm xl:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Financial Risk Trend</h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Risk score over the last 6 months
                  </p>
                </div>

                <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-500 outline-none focus:border-purple-400">
                  <option>Last 6 months</option>

                  <option>Last year</option>
                </select>
              </div>

              {/* Chart */}
              <div className="mt-8">
                <div className="flex h-56 items-end gap-4 border-b border-gray-100 px-2">
                  {[48, 62, 55, 72, 64, 82, 70, 88, 76, 92, 81, 68].map(
                    (height, index) => (
                      <div key={index} className="flex h-full flex-1 items-end">
                        <div
                          style={{ height: `${height}%` }}
                          className="w-full rounded-t-md bg-purple-500 opacity-80 transition hover:opacity-100"
                        ></div>
                      </div>
                    ),
                  )}
                </div>

                <div className="mt-3 flex justify-between px-1 text-xs text-gray-400">
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>
              </div>
            </div>

            {/* Risk Overview */}
            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Risk Overview</h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Overall portfolio risk
                  </p>
                </div>

                <span className="rounded-lg bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-600">
                  Medium
                </span>
              </div>

              {/* Score */}
              <div className="flex justify-center py-8">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-[14px] border-purple-100">
                  <div className="absolute inset-[-14px] rounded-full border-[14px] border-transparent border-l-purple-600 border-t-purple-600 rotate-[-25deg]"></div>

                  <div className="text-center">
                    <p className="text-4xl font-bold text-purple-700">68</p>

                    <p className="text-xs text-gray-400">out of 100</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <RiskBar label="Low Risk" value="42%" width="42%" type="low" />

                <RiskBar
                  label="Medium Risk"
                  value="38%"
                  width="38%"
                  type="medium"
                />

                <RiskBar
                  label="High Risk"
                  value="20%"
                  width="20%"
                  type="high"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            {/* Bank Network */}
            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Bank Network</h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Connected financial institutions
                  </p>
                </div>

                <span className="rounded-lg bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  3 Connected
                </span>
              </div>

              <div className="mt-5 divide-y divide-gray-100">
                <BankRow
                  name="Bank A"
                  location="Mumbai"
                  transactions="12,482"
                  status="Healthy"
                />

                <BankRow
                  name="Bank B"
                  location="Delhi"
                  transactions="9,874"
                  status="Healthy"
                />

                <BankRow
                  name="Bank C"
                  location="Bangalore"
                  transactions="7,631"
                  status="Monitoring"
                />
              </div>
            </div>

            {/* Recent Alerts */}
            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Recent Alerts</h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Latest security and risk events
                  </p>
                </div>

                <button className="text-xs font-semibold text-purple-600 hover:text-purple-700">
                  View All
                </button>
              </div>

              <div className="mt-5 space-y-4">
                <Alert
                  type="danger"
                  title="Suspicious transaction detected"
                  description="Transaction #TX98231 requires review."
                  time="12 min ago"
                />

                <Alert
                  type="warning"
                  title="High-risk loan identified"
                  description="Loan application #LN4921 has high risk."
                  time="34 min ago"
                />

                <Alert
                  type="success"
                  title="Federated round completed"
                  description="Training round 12 completed successfully."
                  time="1 hr ago"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, active = false, to }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
        active
          ? "bg-purple-600 text-white shadow-md shadow-purple-200"
          : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
      }`}
    >
      <span className="flex w-6 justify-center text-base">{icon}</span>

      <span>{label}</span>
    </Link>
  );
}

/* Stat Card */
function StatCard({
  title,
  value,
  change,
  description,
  icon,
  positive,
  warning,
  purple,
}) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <p className="mt-2 text-3xl font-bold text-[#211A2D]">{value}</p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${
            warning
              ? "bg-yellow-50 text-yellow-600"
              : purple
                ? "bg-purple-50 text-purple-600"
                : "bg-purple-50 text-purple-600"
          }`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-xs">
        <span
          className={
            positive
              ? "font-semibold text-green-600"
              : warning
                ? "font-semibold text-red-500"
                : "font-semibold text-purple-600"
          }
        >
          {change}
        </span>

        <span className="text-gray-400">{description}</span>
      </div>
    </div>
  );
}

/* Risk Bar */
function RiskBar({ label, value, width, type }) {
  const barClass =
    type === "low"
      ? "bg-green-500"
      : type === "medium"
        ? "bg-yellow-400"
        : "bg-red-500";

  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="text-gray-500">{label}</span>

        <span className="font-semibold text-gray-700">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-100">
        <div
          className={`h-full rounded-full ${barClass}`}
          style={{ width }}
        ></div>
      </div>
    </div>
  );
}

/* Bank Row */
function BankRow({ name, location, transactions, status }) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 font-bold text-purple-600">
          {name.charAt(name.length - 1)}
        </div>

        <div>
          <p className="text-sm font-semibold">{name}</p>

          <p className="text-xs text-gray-400">{location}</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold">{transactions}</p>

        <p
          className={`text-xs ${
            status === "Healthy" ? "text-green-600" : "text-yellow-600"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

/* Alert */
function Alert({ type, title, description, time }) {
  const styles = {
    danger: {
      box: "bg-red-50",
      icon: "bg-red-100 text-red-600",
      symbol: "!",
    },

    warning: {
      box: "bg-yellow-50",
      icon: "bg-yellow-100 text-yellow-600",
      symbol: "!",
    },

    success: {
      box: "bg-green-50",
      icon: "bg-green-100 text-green-600",
      symbol: "✓",
    },
  };

  const current = styles[type];

  return (
    <div className={`flex gap-3 rounded-xl p-3 ${current.box}`}>
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-bold ${current.icon}`}
      >
        {current.symbol}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>

        <p className="mt-0.5 text-xs text-gray-500">{description}</p>

        <p className="mt-1 text-[11px] text-gray-400">{time}</p>
      </div>
    </div>
  );
}

export default Dashboard;
