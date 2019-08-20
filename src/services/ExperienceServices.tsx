import axios from "axios"
import { promises } from "dns";

export class ExperienceServices{
    async getAllExperience(): Promise<object> {
        return await axios.get("http://backendtpaweb.herokuapp.com/api/experience")
    } 
}

export default ExperienceServices
