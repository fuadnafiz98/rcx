import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

const Code: React.FC<Props> = () => {
  const [code, setCode] = useState<string | undefined>("");
  const [output, setOutput] = useState<string | undefined>("");
  const [theme, setTheme] = useState("vs-dark");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("javascript");

  const outputRef = useRef<null | HTMLDivElement>(null);
  const handleScroll = () =>
    outputRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const handleSubmission = async () => {
    handleScroll();
    setLoading(true);
    const data = {
      code: code,
    };
    console.log(data);
    const response = await fetch(`http://localhost:8000/api/run/${language}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.text();
    // console.log(result);
    setOutput(result);
    setLoading(false);
  };

  return (
    <div className="mx-12 my-6">
      <div className="flex justify-between">
        <div>
          <select
            className="block w-full my-2 font-medium bg-gray-100 border-transparent rounded focus:border-gray-500 focus:bg-white focus:ring-0"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            name="language"
            id="language"
          >
            <option value="c">c</option>
            <option value="cpp">cpp</option>
            <option value="python">python</option>
            <option value="javascript">javascript</option>
          </select>
        </div>
        <button
          onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}
        >
          <div className="p-1 rounded-sm hover:bg-gray-100">
            {theme === "vs-dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 m-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 m-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </div>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="h-3/4">
          <Editor
            loading="Editor Loading..."
            className="border-2 border-gray-800 shadow"
            options={{
              fontSize: "20px",
            }}
            height="70vh"
            theme={theme}
            defaultLanguage={language}
            language={language}
            defaultValue="// write your codes here"
            onChange={(e) => setCode(e)}
          />
        </div>
        <div className="my-4 h-1/4">
          <button
            className="flex items-center justify-between px-4 py-3 font-bold text-gray-900 bg-gray-100 rounded-sm hover:bg-gray-200"
            onClick={handleSubmission}
          >
            {loading && (
              <svg
                className="w-5 h-5 mx-2 text-gray-600 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Submit
          </button>
        </div>
        <div className="mb-12" ref={outputRef}>
          <div className="flex justify-between">
            <h2 className="my-2 text-xl font-medium">Output:</h2>
            <button
              onClick={() => setOutput("")}
              className="p-2 my-2 text-xl font-medium rounded-md hover:bg-red-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-red-500 hover:text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
          <div className="w-full overflow-auto border-2 border-gray-600 h-96">
            <code>
              <pre>{output}</pre>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
interface Props {}

export default Code;
