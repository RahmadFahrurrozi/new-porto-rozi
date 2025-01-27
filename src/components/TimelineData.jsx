const TimelineScrollable = () => {
  const timelineData = [
    { id: 1, text: "Step 1: Start your journey." },
    { id: 2, text: "Step 2: Learn React and Tailwind." },
    { id: 3, text: "Step 3: Build amazing projects." },
    { id: 4, text: "Step 4: Deploy your app." },
    { id: 5, text: "Step 5: Continue learning." },
  ];

  return (
    <div className="flex justify-center items-center h-screen overflow-y-auto">
      <div className="relative w-2 bg-gray-800 h-full">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className="absolute flex flex-col items-center"
            style={{ top: `${index * 120}px` }}
          >
            <div className="w-4 h-4 bg-gray-600 rounded-full border-2 border-gray-500"></div>
            {index < timelineData.length - 1 && (
              <div className="w-1 h-32 bg-gray-700"></div>
            )}
            <p className="mt-4 text-sm text-white">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineScrollable;
