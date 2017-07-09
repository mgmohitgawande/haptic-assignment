module.exports = (function(){
    return function(db){
        function api(request, response){
            response.status(200).send({
                status: "loggin up",
                message : 'god bless you'
            })
        }

        return {
            api : api
        }

    }
}())