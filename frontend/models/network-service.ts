import { BACKEND_API } from "./constant";
import {
  Extension,
  Location,
  PayLoadPrinting,
  Printer,
  PrintingHistory,
  TransactionHistory,
  UserInfo,
} from "./types";

class NetworkService {
  constructor() {}

  public async fetchPrinting(payLoad: PayLoadPrinting) {
    try {
      let formData = new FormData();
      for (const [key, value] of Object.entries(payLoad)) {
        formData.append(key, value);
      }

      const data = await fetch(`${BACKEND_API}/api/perform-print/`, {
        method: "POST",
        body: formData,
      });

      return data.status.toString().startsWith("2");
    } catch (e) {
      console.error("Error: ", e);
      return false;
    }
  }

  public async addPrinter(printer: Omit<Printer, "id">): Promise<boolean> {
    try {
      const data = await fetch(`${BACKEND_API}/api/officer/printers/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([printer]),
      });

      return data.status.toString().startsWith("2");
    } catch (e) {
      console.error("Error: ", e);
      return false;
    }
  }

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

      return data.status.toString().startsWith("2");
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

      return data.status.toString().startsWith("2");
    } catch (e) {
      console.error("Error: ", e);
      return false;
    }
  }

  public async getLocations(): Promise<Location[]> {
    try {
      const data: Location[] = await fetch(`${BACKEND_API}/api/location/`)
        .then((res) => res.json())
        .then((data) => data);
      return data;
    } catch (e) {
      console.error("Error: ", e);
      return [];
    }
  }

  public async getExtensions(): Promise<Extension[]> {
    try {
      const data: Extension[] = await fetch(`${BACKEND_API}/api/get-ext/`)
        .then((res) => res.json())
        .then((data) => data);
      return data;
    } catch (e) {
      console.error("Error: ", e);
      return [];
    }
  }

  public async activateExtension(body: {
    activate: boolean;
    ext: string[];
  }): Promise<boolean> {
    try {
      const data = await fetch(`${BACKEND_API}/api/officer/activate-ext/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      return data.status.toString().startsWith("2");
    } catch (e) {
      console.error("Error: ", e);
      return false;
    }
  }

  public async getPrintingsHistory(): Promise<PrintingHistory[]> {
    try {
      const data: PrintingHistory[] = await fetch(
        `${BACKEND_API}/api/activity/`
      )
        .then((res) => res.json())
        .then((data) => data);
      return data;
    } catch (e) {
      console.error("Error: ", e);
      return [];
    }
  }

  public async getTransactionsHistory(): Promise<TransactionHistory[]> {
    try {
      const data: TransactionHistory[] = await fetch(
        `${BACKEND_API}/api/officer/transactions/`
      )
        .then((res) => res.json())
        .then((data) => data);
      return data;
    } catch (e) {
      console.error("Error: ", e);
      return [];
    }
  }

  public async getUserInfo(): Promise<UserInfo | undefined> {
    try {
      const data: UserInfo = await fetch(`${BACKEND_API}/api/user-info/`)
        .then((res) => res.json())
        .then((data) => data);
      return data;
    } catch (e) {
      console.error("Error: ", e);
      return undefined;
    }
  }
}

export default new NetworkService();
