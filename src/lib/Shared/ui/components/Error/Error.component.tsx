export const Error = (error: unknown) => (
  <div className="bg-red-500 border-red p-5 rounded">
    <p className="font-bold text-white">Error</p>
    <p className="bg-red-50 rounded p-5 mt-2">{JSON.stringify(error)}</p>
  </div>
);
