import axios from 'axios'

const cycle_status_url='http://localhost:8080/cyclestatus/sortbyregisteredTs/asc';

class StatusService{

    getStatus(){
        return axios.get(cycle_status_url);
    }
}

export default new StatusService();