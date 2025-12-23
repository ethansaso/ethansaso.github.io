import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const path = window.location.hash.substring(1); // Extract the path from the hash

    if (path && path !== "/") {
      navigate(path);
    }
  }, [navigate]);

  return (
    <div
      ref={scrollRef}
      className="w-full text-base-content h-dvh overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-neutral scrollbar-track-transparent scroll-pt-30"
    >
      <Routes>
        <Route path="/" element={<Home scrollRef={scrollRef} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
