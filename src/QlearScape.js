import { useState, useEffect, useMemo } from "react";

// Fixed launch date: Nov 10, 2025
const TARGET_ISO = "2025-11-10T00:00:00";

export default function QlearScape() {
  // Countdown
  const target = useMemo(() => new Date(TARGET_ISO), []);
  const [delta, setDelta] = useState(0);

  useEffect(() => {
    const tick = () => setDelta(Math.max(0, +target - +new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const sec = Math.floor((delta / 1000) % 60);
  const min = Math.floor((delta / (1000 * 60)) % 60);
  const hr  = Math.floor((delta / (1000 * 60 * 60)) % 24);
  const day = Math.floor(delta / (1000 * 60 * 60 * 24));
  const pad = (n) => n.toString().padStart(2, "0");

  // Page state
  const [address, setAddress] = useState("");
  const [report, setReport] = useState(null);
  const [fadeStyle, setFadeStyle] = useState({ opacity: 0, transform: "scale(0.95)" });

  useEffect(() => {
    setTimeout(() => {
      setFadeStyle({
        opacity: 1,
        transform: "scale(1.06)",
        transition: "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      });
      setTimeout(() => {
        setFadeStyle((prev) => ({ ...prev, transform: "scale(1)" }));
      }, 700);
    }, 100);
  }, []);

  const mockReport = {
    purchaseDate: "06/15/2019",
    purchasePrice: "$435,000",
    builtDate: "2004",
    marketValue: "$512,000",
    squareFootage: "2,140 sq ft",
    bedsBaths: "4 beds / 2.5 baths",
    homeType: "Single-family residence",
    mortgageBreakdown: {
      principalInterest: "$2,050",
      propertyTax: "$425",
      insurance: "$135",
      total: "$2,610",
    },
    county: "Snohomish",
    floodZone: "Likely X",
  };

  const handleSubmit = () => setReport(mockReport);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 text-center p-8 font-sans transition-all duration-1000 ease-out transform">
      {/* Headline */}
      <h1
        className="text-7xl font-extrabold mb-4 text-rose-600 tracking-wider animate-pulse drop-shadow-lg"
        style={fadeStyle}
      >
        "www.QlearScape.com" is almost here!!
      </h1>
      <p className="text-2xl mb-6 text-rose-800 italic" style={fadeStyle}>
        Rewriting the rules of insurance efficiency. Built for agents. Powered by intelligence.
      </p>

      {/* Countdown (time only) */}
      <div className="mx-auto mb-10 inline-block bg-white/80 rounded-xl px-6 py-4 shadow">
        <div className="text-3xl font-mono tracking-wider">
          {pad(day)}d : {pad(hr)}h : {pad(min)}m : {pad(sec)}s
        </div>
      </div>

      {/* Address input */}
      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Enter property address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border border-gray-300 rounded p-3 mb-4 text-sm shadow-inner"
        />
        <button
          onClick={handleSubmit}
          className="bg-rose-600 text-white px-6 py-2 rounded text-sm hover:bg-rose-700 transition-colors duration-300"
        >
          Generate Property Report
        </button>
      </div>

      {/* Mock report */}
      {report && (
        <div className="text-left max-w-2xl mx-auto border-t pt-6 border-gray-200 bg-white/70 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Qlear Property Report</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>1. Purchase Date:</strong> {report.purchaseDate}</li>
            <li><strong>2. Purchase Price:</strong> {report.purchasePrice}</li>
            <li><strong>3. Construction Built Date:</strong> {report.builtDate}</li>
            <li><strong>4. Market Value:</strong> {report.marketValue}</li>
            <li><strong>5. Square Footage:</strong> {report.squareFootage}</li>
            <li><strong>6. Beds & Baths:</strong> {report.bedsBaths}</li>
            <li><strong>7. Type of Home:</strong> {report.homeType}</li>
            <li>
              <strong>8. Estimated Mortgage (PITI) Breakdown:</strong>
              <ul className="ml-6 list-disc">
                <li>Principal &amp; Interest: {report.mortgageBreakdown.principalInterest}</li>
                <li>Property Tax: {report.mortgageBreakdown.propertyTax}</li>
                <li>Insurance: {report.mortgageBreakdown.insurance}</li>
                <li>Total: {report.mortgageBreakdown.total}</li>
              </ul>
            </li>
            <li><strong>9. County:</strong> {report.county}</li>
            <li><strong>10. Flood Zone:</strong> {report.floodZone}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
