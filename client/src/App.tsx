import { useState } from "react";
import {
  deTokenizationUserInput,
  randomeColorMaker,
  tokenCounter,
  tokenizationUserInput,
} from "./libs/tikToken";

const App = () => {
  const [query, setQuery] = useState<string | number>("");
  const [count, setCount] = useState<number>(0);
  const [encodeToken, setEnCodeTokens] = useState<number[]>([]);
  const [decodeToken, setDecodeToken] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const handleUserQuery = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    console.log(value);
    setQuery(value);
    const counter = tokenCounter(value);
    setCount(counter);

    const randColor = randomeColorMaker();
    setColor(randColor);

    for (let i = 0; i < value.length; i++) {
      if (isNaN(Number(value[i]))) {
        const encodedTokens = tokenizationUserInput(value);
        setEnCodeTokens(encodedTokens);
      } else {
        const arr = value.split(/[\s\n]+/);
        const decodedTokens = deTokenizationUserInput(arr);
        setDecodeToken(decodedTokens);
      }
    }
  };

  console.log(color)

  return (
    <div className="flex flex-col justify-center items-center mx-auto my-12 w-full max-w-4xl px-4">
      <h1 className="lg:text-5xl text-3xl font-bold text-center">
        Tokenization
      </h1>

      <div className="flex flex-col gap-4 w-full my-8">
        <label
          htmlFor="token"
          className="lg:text-2xl text-lg font-medium"
        ></label>
        <textarea
          id="token"
          rows={6}
          value={query}
          onChange={handleUserQuery}
          placeholder="Hey, I am tokenizer website"
          className={`w-full text-lg p-5 placeholder:text-lg caret-black outline-none shadow-lg rounded-xl border border-gray-300 ${color}`}
        ></textarea>
      </div>

      <div className="flex flex-col gap-4 w-full mt-6">
        <div className="bg-gray-100 text-center py-4 text-xl lg:text-2xl font-semibold rounded-lg shadow">
          Token count: <span className="text-amber-600">{count}</span>
        </div>

        <div className="bg-gray-100 py-4 px-6 rounded-lg shadow max-h-64 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">Encoded Tokens:</h2>
          {encodeToken.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {encodeToken.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">No tokens generated yet...</p>
          )}
        </div>
        <div className="bg-gray-100 py-4 px-6 rounded-lg shadow max-h-64 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">Decoded Tokens:</h2>
          {decodeToken === "" ? (
            <p className="text-gray-400 italic">No decoded token here</p>
          ) : (
            decodeToken
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
