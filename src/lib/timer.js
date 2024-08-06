import React, { useEffect } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = React.useState();

  useEffect(() => {
    if (!enabled) return setNow(undefined);

    const timer = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, enabled]);

  return now;
}
export function useInterval(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) return;

    const timer = setInterval(() => {
      cb(Date.now());
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, enabled, cb]);
}
