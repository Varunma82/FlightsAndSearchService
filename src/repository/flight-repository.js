const {Flights} = require('../models/index')

class FlightRepository{
    async createFlight(data){
        try {
            const flight=await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Some thing went wrong in the repository layer")
            throw {error};
        }
    }
}

module.exports=FlightRepository