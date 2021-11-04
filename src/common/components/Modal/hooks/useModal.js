import { useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const triggerModal = () => setOpen(!open);
  return { open, triggerModal };
};
