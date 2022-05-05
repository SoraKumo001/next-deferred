import { useDeferredValue, useMemo, useState } from "react";

const Normal = () => {
  const [value, setValue] = useState("");
  const memo = useMemo(() => {
    return (
      <div>
        {new Array(10000).fill(0).map((_, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    );
  }, [value]);
  return (
    <div style={{ width: "300px" }}>
      <div>Normal</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {memo}
    </div>
  );
};

const Deferred = () => {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);
  const memo = useMemo(() => {
    return (
      <div style={{ width: "300px" }}>
        {new Array(10000).fill(0).map((_, index) => (
          <div key={index}>{deferredValue}</div>
        ))}
      </div>
    );
  }, [deferredValue]);
  return (
    <div>
      <div>Deferred</div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {memo}
    </div>
  );
};
const Page = () => {
  return (
    <>
      <div>
        Source code:{" "}
        <a href="https://github.com/SoraKumo001/next-deferred">
          https://github.com/SoraKumo001/next-deferred
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <Normal />
        <Deferred />
      </div>
    </>
  );
};

export default Page;
