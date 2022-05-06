import React, { useCallback, useState } from 'react';

function Chat() {
  const [text, setText] = useState('');

  // useEvent
  const onClick = useCallback(() => {
    console.log("text:", text);
  }, []);

  return (
    <>
      <button onClick={onClick}>Send</button>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default Chat;
