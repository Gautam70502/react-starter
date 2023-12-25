import * as authActions from "src/store/actions/auth";
import { useStoreActions } from "src/store/hooks";

export const useActions = () => {
  return useStoreActions({
    ...authActions,
  });
};
