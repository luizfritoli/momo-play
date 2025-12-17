import { useState } from "react";

// Estados do CemeteryRun
export function useRunLogic() {
  const [jump, setJump] = useState(false);

  return { jump, setJump };
}
