"use client";
export default function gradient(from: string, to: string) {
  return (
    <>
      <div className={`w-full h-5 rounded-md gradient`}>
        <style jsx>{`
          .gradient {
            background: linear-gradient(to right, ${from}, ${to});
          }
        `}</style>
      </div>
    </>
  );
}
