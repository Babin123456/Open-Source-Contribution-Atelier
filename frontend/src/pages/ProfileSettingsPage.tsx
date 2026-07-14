import React from "react";
import { ProfileSettingsForm } from "../features/auth/ProfileSettingsForm";
import { ActivityHeatmap } from "../components/ui/ActivityHeatmap";
import { useAuth } from "../features/auth/AuthContext";

export function ProfileSettingsPage() {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-8">

      {/* ================= HEADER ================= */}

      <div className="mb-8">
        <h1 className="text-4xl font-black tracking-tight text-black dark:text-white">
          Profile Settings
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Update your account information and preview your public profile live.
        </p>
      </div>

      {/* ================= MAIN GRID ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* ================= SETTINGS FORM ================= */}

        <div className="xl:col-span-5">

          <div className="rounded-3xl border-2 border-gray-200 dark:border-neutral-700 bg-white dark:bg-[#181818] shadow-lg p-8 h-full">

            <div className="flex items-center gap-3 mb-6">

              <div className="text-3xl">
                ⚙️
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Settings
                </h2>

                <p className="text-sm text-gray-500">
                  Manage your profile information
                </p>

              </div>

            </div>

            <ProfileSettingsForm />

          </div>

        </div>

        {/* ================= LIVE PREVIEW ================= */}

        <div className="xl:col-span-4">

          <div className="rounded-3xl border-2 border-blue-200 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-white dark:from-[#1b2433] dark:to-[#151515] shadow-lg p-8 sticky top-6">

            <h2 className="text-2xl font-bold mb-6">
              👀 Live Preview
            </h2>

            {/* Cover */}

            <div className="h-36 rounded-2xl bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">

              {user?.cover_image_url ? (
                <img
                  src={user.cover_image_url}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                "No Cover Image"
              )}

            </div>

            {/* Avatar */}

            <div className="flex justify-center -mt-10">

              <div className="h-24 w-24 rounded-full bg-white shadow-xl border-4 border-white overflow-hidden">

                {user?.avatar_url ? (
                  <img
                    src={user.avatar_url}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-3xl font-bold bg-gray-200">
                    {user?.username?.charAt(0)?.toUpperCase() || "G"}
                  </div>
                )}

              </div>

            </div>

            <div className="text-center mt-4">
              <h3 className="font-bold text-xl">
                {user?.username || "gauri9368gupta"}
              </h3>
              <p className="text-gray-500">
                {user?.email || "gauri9368gupta@gmail.com"}
              </p>
            </div>

            {/* Share Link */}

            <div className="mt-6 rounded-2xl border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-[#1b2433] p-4">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    🔗 Share Profile
                  </p>

                  <p className="mt-1 text-xs text-gray-500 break-all">
                    {`${window.location.origin}/u/${user?.username || "gauri9368gupta"}`}
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${window.location.origin}/u/${user?.username || "gauri9368gupta"}`
                    );
                  }}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Copy
                </button>

              </div>

            </div>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl bg-white dark:bg-[#202020] p-3 shadow">
                🌍 Timezone
                <div className="font-semibold">
                  UTC
                </div>
              </div>
              <div className="rounded-xl bg-white dark:bg-[#202020] p-3 shadow">
                📅 Joined
                <div className="font-semibold">
                  Today
                </div>
              </div>

              <div className="rounded-xl bg-white dark:bg-[#202020] p-3 shadow">

                📝 Bio

                <div className="mt-2 text-sm text-gray-500">

                  No bio added yet.

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= SECURITY ================= */}

        <div className="xl:col-span-3">

          <div className="rounded-3xl border-2 border-gray-200 dark:border-neutral-700 bg-white dark:bg-[#181818] shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">

              🔒 Security

            </h2>

            <div className="space-y-4">

              <div className="rounded-xl bg-gray-100 dark:bg-[#242424] p-4">

                <div className="font-semibold">

                  Password

                </div>

                <div className="text-sm text-gray-500">

                  Last changed 2 weeks ago

                </div>

              </div>

              <div className="rounded-xl bg-gray-100 dark:bg-[#242424] p-4">

                🔔 Notifications

              </div>

              <div className="rounded-xl bg-gray-100 dark:bg-[#242424] p-4">

                🔐 Privacy

              </div>

              <div className="rounded-xl bg-gray-100 dark:bg-[#242424] p-4">

                📦 Download My Data

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= ACTIVITY ================= */}

      <div className="mt-8 rounded-3xl border-2 border-gray-200 dark:border-neutral-700 bg-white dark:bg-[#181818] p-8 shadow-lg">

        <h2 className="text-2xl font-bold mb-6">

          📈 Activity

        </h2>

        <ActivityHeatmap />

      </div>

    </div>
  );
}