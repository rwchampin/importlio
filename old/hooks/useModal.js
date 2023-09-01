import { useEffect } from "react";
import { useAppDispatch } from "@/old/utils/redux/hooks";
import { setAuth, finishInitialLoad } from "@/old/utils/redux/features/authSlice";

export default function useModal() {
  const dispatch = useAppDispatch();

  const [modal] = useModalMutation();

  useEffect(() => {
    modal(undefined)
      .unwrap()
      .then(() => {
        dispatch(setAuth());
      })
      .finally(() => {
        dispatch(finishInitialLoad());
      });
  }, []);
}
