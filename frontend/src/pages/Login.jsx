import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://sfis-backend.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        const message = Array.isArray(data.detail)
          ? data.detail.map((error) => error.msg).join(", ")
          : data.detail || "Login failed";

        throw new Error(message);
      }

      // Save JWT token
      localStorage.setItem("access_token", data.access_token);

      // Save token type
      localStorage.setItem("token_type", data.token_type);

      // Go to dashboard
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F7F5FC] px-6 py-12 text-[#211A2D]">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="mb-8 flex items-center justify-center gap-4">
          <img
            src="/sfis_logo.jpg"
            alt="SFIS Logo"
            className="h-16 w-16 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold">SFIS</h1>

            <p className="text-[10px] font-medium tracking-wide text-gray-400">
              SECURE FINANCE INTELLIGENCE SYSTEM
            </p>
          </div>
        </Link>

        {/* Login Card */}
        <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-xl shadow-purple-100/50">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to your Secure Finance Intelligence System
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                Remember me
              </label>

              <button
                type="button"
                className="font-medium text-purple-600 hover:text-purple-700"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-purple-600 py-3.5 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Register */}
          <p className="mt-7 text-center text-sm text-gray-500">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1 font-semibold text-purple-600 hover:text-purple-700"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-500 hover:text-purple-600">
            ← Back to SFIS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
