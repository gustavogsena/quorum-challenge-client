import { ApiHandler, apiHandler } from "./handler.api";

class ApiService {
    /**
     * @type {ApiHandler} #apiHandler
     * */
    #apiHandler;

    constructor(apiHandler: ApiHandler) {
        this.#apiHandler = apiHandler
    }

    getAllBills = async (limit?: number, offset?: number) => {
        try {
            const response = await this.#apiHandler.getAllBills(limit, offset)
            const { status, data: bills } = response
            if (status !== 'success') return null
            return bills;
        } catch (e) {
            console.error(e)
        }
    }

    getAllLegislators = async (limit?: number, offset?: number) => {
        try {
            const response = await this.#apiHandler.getAllLegislators(limit, offset)
            const { status, data: legislators } = response
            if (status !== 'success') return null
            return legislators;

        } catch (e) {
            console.error(e)
        }
    }
}


const apiService = new ApiService(apiHandler)

export { apiService, ApiService };
