import { apiService } from "../service.api";

export async function homeLoader(): Promise<{ bills: any[], legislators: any[] }> {
    const bills = await apiService.getAllBills();
    const legislators = await apiService.getAllLegislators();
    return { legislators, bills };
}

