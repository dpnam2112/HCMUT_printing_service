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

  public async updatePrinter(printer: Printer): Promise<boolean> {
    try {
      const data = await fetch(`${BACKEND_API}/api/officer/printers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([printer]),
      });

      return data.status !== 400 && data.status !== 500;
    } catch (e) {
      console.error("Error: ", e);
      return false;
    }
  }

  public async deletePrinters(printer: Printer[]): Promise<boolean> {
    try {
      const data = await fetch(`${BACKEND_API}/api/officer/remove-printers/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          printer_ids: printer.map((p) => p.id),
        }),
      });

      return data.status !== 400 && data.status !== 500;
    } catch (e) {
      console.error("Error: ", e);
      return false;
    }
  }
}

export default new NetworkService();
