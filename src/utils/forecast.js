const request = require('request')



const forecast = (latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=7c226d116489711635c462066d4a74b8&query=' + latitude + ',' + longitude
    request({url,json:true},(error,{body}={})=>{
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Uanbel to find locaiton.Try another search', undefined)
        }else{
            console.log(body.current)
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' and it feels like ' + body.current.feelslike + '. Humidity is ' + body.current.humidity + ' and the observation time is ' + body.current.observation_time)
    
        }
    })
    

}
module.exports = forecast