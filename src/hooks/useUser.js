import { useContext } from 'react';
import { Context } from 'contexts/User';

export const useUser = () => useContext(Context);
