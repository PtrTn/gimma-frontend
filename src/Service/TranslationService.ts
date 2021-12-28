import { injectable } from "tsyringe";
import en from "../Locale/en";

@injectable()
export class TranslationService {
  public translate(key: string) {
    if (!en[key]) {
      console.error(`Translation key "${key}" not found.`);
      return key;
    }
    return en[key];
  }
}
