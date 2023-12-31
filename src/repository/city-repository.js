const { Op }=require('sequelize')

const {City}=require('../models/index')

class CityRepository {
    

    async createCity({name})  { //{name:"new delhi"}
        try{
            const city=await City.create({
                name
            })
            return city;
        }catch (error){
            console.log("Something went wrong in the repositary layer")
            throw {error};
        }
    }

    async deleteCity(cityId)  {
        try {
            await City.destroy({
                where:{
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repositary layer")
            throw {error};
        }
    }

    async updateCity(cityId,data)  {{
        try {
            // the below approach will also work but will not return updated object
            // if you are using pgsql then returning : true can be used else not
            // const city=await City.update(data,{
            //     where:{
            //         id: cityId
            //     },
            //   
            // })
            // for getting updated data in mysql we use the below appraoch

            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repositary layer")
            throw {error};
        }
    }}

    async getCity(cityId) {
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repositary layer")
            throw {error};
        }
    }

    async getAllCities(filter){ //filter can be empty also
        try {
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        },
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repositary layer")
            throw {error};
        }
    }


}

module.exports=CityRepository