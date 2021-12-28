import { container } from "tsyringe";
import { TranslationService } from "../Service/TranslationService";
import { useCallback } from "react";

export const useTranslation = () => {
  return useCallback(
    (key: string) => container.resolve(TranslationService).translate(key),
    []
  );
};
