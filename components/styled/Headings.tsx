function Heading2Xl({ children }) {
  return (
    <h1 className="text-5xl my-[1rem] mx-0 font-bold tracking-tighter">
      {children}
    </h1>
  );
}

function HeadingXl({ children }) {
  return (
    <h1 className="text-4xl font-bold tracking-tighter my-[1rem] mx-0">
      {children}
    </h1>
  );
}

function HeadingLg({ children }) {
  return <h2 className="text-2xl my-[1rem] mx-0">{children}</h2>;
}

export { Heading2Xl, HeadingXl, HeadingLg };
