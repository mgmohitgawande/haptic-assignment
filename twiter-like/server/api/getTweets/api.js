module.exports = (function(){
    return function(db){
        function api(request, response){
            response.status(200).send({
                status: "log in",
                message : 'god bless you',
                data : [
                    {
                        tweet : 'tweet text tweet text tweet text tweet text tweet text .',
                        tweeterUser : 'Tweeter User'
                    },
                    {
                        tweet : 'tweet text tweet text tweet text tweet text tweet text .',
                        tweeterUser : 'Tweeter User'
                    },
                    {
                        tweet : 'tweet text tweet text tweet text tweet text tweet text .',
                        tweeterUser : 'Tweeter User'
                    },
                    {
                        tweet : 'tweet text tweet text tweet text tweet text tweet text .',
                        tweeterUser : 'Tweeter User'
                    },
                    {
                        tweet : 'tweet text tweet text tweet text tweet text tweet text .',
                        tweeterUser : 'Tweeter User'
                    },
                    {
                        tweet : 'tweet text tweet text tweet text tweet text tweet text .',
                        tweeterUser : 'Tweeter User'
                    },
                    {
                        tweet : 'tweet text tweet text tweet text tweet text tweet text .',
                        tweeterUser : 'Tweeter User'
                    }
                ]
            })
        }

        return {
            api : api
        }

    }
}())