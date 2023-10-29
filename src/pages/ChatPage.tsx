import styled from "@emotion/styled";
import { useState, useEffect } from "react";

function ChatPage() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Holder>
      <h1>{count}</h1>
    </Holder>
  );
}

const Holder = styled.div``;

export default ChatPage;
