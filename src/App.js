import { useState, useEffect } from "react";
import { SparklyTitle, LaunchCountdown } from "./HeroBits";

export default function QlearScape() {
  const [address, setAddress] = useState("");
  const [report, setReport] = useState(null);
  const [fadeStyle, setFadeStyle] = useState({ opacity: 0, transform: "scale(0.95)" });

  useEffect(() => {
    setTimeout(() => {
      setFadeStyle({
        opacity: 1,
        transform: "scale(1.06)",
        transition: "opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      });

      setTimeout(() => {
        setFadeStyle(prev => ({
          ...prev,
          transform: "scale(1)"
        }));
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
      total: "$2,610"
    },
    county: "Snohomish",
    floodZone: "Likely X"
  };

  const handleSubmit = () => {
    setReport(mockReport);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-center font-sans p-8">
 <SparklyTitle 
  title="QlearScape" 
  subtitle="Built for agents, powered by intelligence" 
/>
<LaunchCountdown targetISO="2025-10-01T00:00:00-07:00" />



      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Enter property address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 text-sm"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-2 rounded text-sm hover:bg-gray-800"
        >
          Generate Property Report
        </button>
      </div>

{report && (
  <div className="mt-10 mx-auto max-w-2xl bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-4">
    <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">🔍 Property Snapshot</h2>
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
      <p><strong>Purchase Date:</strong> {report.purchaseDate}</p>
      <p><strong>Purchase Price:</strong> {report.purchasePrice}</p>
      <p><strong>Built Date:</strong> {report.builtDate}</p>
      <p><strong>Market Value:</strong> {report.marketValue}</p>
      <p><strong>Square Footage:</strong> {report.squareFootage}</p>
      <p><strong>Beds/Baths:</strong> {report.bedsBaths}</p>
      <p><strong>Home Type:</strong> {report.homeType}</p>
      <p><strong>County:</strong> {report.county}</p>
      <p><strong>Flood Zone:</strong> {report.floodZone}</p>
    </div>
    <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm text-gray-800">
      <h3 className="font-semibold mb-2 text-gray-900">📊 Mortgage Breakdown</h3>
      <p><strong>Principal & Interest:</strong> {report.mortgageBreakdown.principalInterest}</p>
      <p><strong>Property Tax:</strong> {report.mortgageBreakdown.propertyTax}</p>
      <p><strong>Insurance:</strong> {report.mortgageBreakdown.insurance}</p>
      <p><strong>Total:</strong> {report.mortgageBreakdown.total}</p>
    </div>
  </div>
)}

