import React, { useState } from 'react';
import axios from 'axios';
import api from '../api'; 

export default function Index() {
  const [numberType, setNumberType] = useState("e");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`http://localhost:9876/numbers/${numberType}`);
      setResponse(res.data);
    } catch (err) {
      setError("Failed to fetch numbers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Average Calculator</h1>

      <div className="flex gap-4 items-center mb-6">
        <label className="text-lg">Select Number Type:</label>
        <select
          className="border p-2 rounded"
          value={numberType}
          onChange={(e) => setNumberType(e.target.value)}
        >
          <option value="e">Even</option>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="r">Random</option>
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleFetch}
        >
          Fetch
        </button>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {response && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">API Response</h2>
          <p><strong>Previous Window:</strong> {JSON.stringify(response.windowPrevState)}</p>
          <p><strong>Current Window:</strong> {JSON.stringify(response.windowCurrState)}</p>
          <p><strong>Fetched Numbers:</strong> {JSON.stringify(response.numbers)}</p>
          <p><strong>Average:</strong> {response.avg}</p>
        </div>
      )}
    </div>
  );
}
