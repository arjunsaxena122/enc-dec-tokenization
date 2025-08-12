import { useState } from "react";
import { decodeTokenFromEncodedToken, encodeTokenFromUserInput } from "./api";
import Select from "./components/Select";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isChangeOption, setIsChangeOption] = useState<string>("Encode Input");
  const [data, setData] = useState<string>("");

  const hanldeUserInput = async () => {
    setIsLoading(true);
    try {
      if (isChangeOption.trim() === "Encode Input") {
        const res = await encodeTokenFromUserInput({ token: inputValue });
        const encodeDataFromServer = res?.data?.data?.join(", ");
        setTimeout(() => setData(encodeDataFromServer), 1000);
      } else {
        if (isChangeOption.trim() === "Decode Token") {
          const res = await decodeTokenFromEncodedToken({
            encodedToken: inputValue.split(",").map((num) => Number(num)),
          });
          setTimeout(() => setData(res?.data?.data), 1000);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-amber-400 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-amber-400">
            Token Encoder / Decoder
          </h1>

          <Select
            isChangeOption={isChangeOption}
            setIsChangeOption={setIsChangeOption}
            setInputValue={setInputValue}
            setData={setData}
          />

          <textarea
            rows={8}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="userInput"
            placeholder="Type your text or numbers here..."
            className="bg-gray-700 p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
          />

          <button
            type="submit"
            onClick={hanldeUserInput}
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 rounded-lg transition duration-200"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-amber-400 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-amber-400">Result</h2>
          <div className="flex-1 bg-gray-700 p-4 rounded-lg overflow-auto">
            {isLoading ? (
              <p className="animate-pulse text-gray-400">Loading...</p>
            ) : (
              <p className="whitespace-pre-wrap break-words">{data}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
