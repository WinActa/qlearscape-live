import { useState, useEffect } from "react";

export default function QlearScape() {
  const [address, setAddress] = useState("");
  const [report, setReport] = useState(null);
  const [fadeStyle, setFadeStyle] = useState({ opacity: 0, transform: "scale(0.95)" });

  useEffect(() => {
    setTimeout(() => {
      setFadeStyle({
        opacity: 1,
        transform: "scale(1.02)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
      });

      setTimeout(() => {
        setFadeStyle(prev => ({
          ...prev,
          transform: "scale(1)"
        }));
      }, 900);
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
    <div className="min-h-screen bg-white text-center p-8 font-sans transition-all duration-1000 ease-out transform">
      <h1
        className="text-4xl font-bold mb-2 text-blue-700"
        style={fadeStyle}
      >
        QlearScape
      </h1>
      <p
        className="text-lg mb-10 text-blue-500"
        style={fadeStyle}
      >
        Rewriting the rules of insurance efficiency. Built for agents. Powered by intelligence.
      </p>

      <div className="max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Enter property address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border border-gray-300 rounded p-3 mb-4 text-sm"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white px-6 py-2 rounded text-sm hover:bg-gray-800"
        >
          Generate Property Report
        </button>
      </div>

      {report && (
        <div className="text-left max-w-2xl mx-auto border-t pt-6 border-gray-200">
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
                <li>Principal & Interest: {report.mortgageBreakdown.principalInterest}</li>
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
