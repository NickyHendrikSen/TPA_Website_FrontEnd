import axios from "axios"
import { promises } from "dns";

export class CurrencyServices{
    async getAllCurrencies(): Promise<object> {
        return await axios.get("https://api.exchangeratesapi.io/latest?base=USD")
    } 
}

export default CurrencyServices
