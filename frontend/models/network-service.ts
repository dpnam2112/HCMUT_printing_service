import { BACKEND_API } from "./constant";
import { Printer } from "./types";

class NetworkService {
  constructor() {}

  public async getPrinters(): Promise<Printer[]> {
    try {
      const data: Printer[] = await fetch(`${BACKEND_API}/api/printers/`)
        .then((res) => res.json())
        .then((data) => data);
      return data;
    } catch (e) {
      console.error("Error: ", e);
      return [];
    }
  }
}

export default new NetworkService();
