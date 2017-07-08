//text file source related info
var ifFileonline = true;
var fileName = 'filename.txt';

var remoteParam = {
    host: 's3.ap-south-1.amazonaws.com',
    port: 443,
    path: '/haptikinterview/chats.txt',
    method: 'GET',
    headers: {
        'Content-Type': 'application/text'
    }
}

// ============================================

var http = require("http");
var https = require("https");
var fs = require('fs');


function getRemoteResponse(options, callback){
    var data = '';
    var client = options.port == 443 ? https : http;
    

    client.get(options, function(response){

        //  ## uncomment below code to download text file
        // var writeStream = fs.createWriteStream(fileName);
        // response.pipe(writeStream)
        response
            .on('error', function(error){
                callback(error, null)
            })
        callback(null, response)
    }).on('error', function(error){
        callback(error, null)
    })
}

function processText(inputStream){
    return new Promise(function(success, failure){
        if(inputStream){
            var userInteractionFrequencyMap = {}
            var lineReader = require('readline').createInterface({
                input: inputStream
            });

            lineReader.on('line', function (line) {
                var person = line.match(/<[^>]+>: /);
                person = person ? person[0].substr(1, person[0].length - 4) : undefined;
                if(person){
                    userInteractionFrequencyMap[person] = userInteractionFrequencyMap[person] ? userInteractionFrequencyMap[person] + 1 : 1
                }
            })
            .on('close', function(){
                var mostinteractivePersons = []
                var persons = Object.keys(userInteractionFrequencyMap);
                if(persons.length < 4){
                    mostinteractivePersons = persons.map(ob => ob)
                }   else{
                    // var max = Number.MAX_SAFE_INTEGER, min = 0;
                    for(j = 0; j < 3; j++){
                        var maxFrequent = persons[0]
                        for(i = 1; i<persons.length; i++){
                            if(userInteractionFrequencyMap[persons[i]] > userInteractionFrequencyMap[maxFrequent]){
                                maxFrequent = persons[i]
                            }
                        }
                        mostinteractivePersons.push(maxFrequent)

                        userInteractionFrequencyMap[maxFrequent] = -(userInteractionFrequencyMap[maxFrequent])
                    }
                }
                success({mostInteractivePersons : mostinteractivePersons})
            })
        }   else{
            failure({
                message : 'no input stream provided'
            })
        }
    })
}

(function(){
    var getInputStream = function(){
        return new Promise(function(success, failure){
            if(ifFileonline){
                getRemoteResponse(remoteParam, function(err, response){
                    if(err){
                        failure(err);
                    }
                    success(response)
                })
            }   else{
                var inputStream;
                inputStream = require('fs').createReadStream(fileName)
                    .on('error', function(e){
                        // failure(e)
                    })
                    success(inputStream)
            }
        })
    }
    getInputStream().then(function(inputStream){
        return processText(inputStream)
    }, function(error){
        throw error
    })
    .then(function(data){
        console.log(data)
    }, function(error){
        console.log(error)
    })
}())