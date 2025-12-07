// components/LoadingPage.js
import React from "react";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-32 h-32 animate-bounce"
      />
    </div>
  );
}
