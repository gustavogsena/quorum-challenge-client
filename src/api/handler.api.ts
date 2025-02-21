import { type Axios } from "axios";
import api from "./api"
import { BILLS_URL_PATH, LEGISLATORS_URL_PATH } from "@/utils/constants";

class ApiHandler {
    #axiosInstance;

    constructor(axiosInstance: Axios) {
        this.#axiosInstance = axiosInstance
    }

    getAllBills = async (limit = 10, offset = 0) => {
        const config = {
            params: { limit, offset }
        }

        const response = await this.#axiosInstance.get(BILLS_URL_PATH, config)
        return response.data
    }

    getBillById = async (id: number) => {
        try {
            const response = await this.#axiosInstance.get(`${BILLS_URL_PATH}/${id}`)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }

    getAllLegislators = async (limit = 50, offset = 0) => {
        const config = {
            params: { limit, offset }
        }

        const response = await this.#axiosInstance.get(LEGISLATORS_URL_PATH, config)
        return response.data
    }

    getLegislatorlById = async (id: number) => {
        try {
            const response = await this.#axiosInstance.get(`${LEGISLATORS_URL_PATH}/${id}`)
            return response.data

        } catch (e) {
            console.error(e)
            throw e;
        }
    }
}

const apiHandler = new ApiHandler(api)

export { apiHandler, ApiHandler };
