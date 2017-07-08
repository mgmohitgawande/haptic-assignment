var can_create = function(list_of_strings, input_string){

    var n = input_string.length, temp = []
    for(var i = 0 ; i < n; i++)
        temp.push([])
    for(var l = 1; l <= n; l++){
        for(var i = 0; i < n - l + 1; i++){
            var j = i+l-1
            if(list_of_strings.indexOf(input_string.slice(i, j+1)) != -1){
                temp[i][j] = true
            }   else{
                if(i == j){
                    temp[i][j] = list_of_strings.indexOf(input_string.slice(i, j+1)) != -1
                }   else {
                    var have_sub_solutions = false
                    for(var k = i; k<j ; k++){
                        // console.log('ll', i, k, j)
                        if(temp[i][k] && temp[k+1][j]){
                                have_sub_solutions = true;
                                // console.log(i, j)
                                break;
                            }
                    }
                    temp[i][j] = have_sub_solutions;
                }
            }
        }
    }
    console.log(temp)
    return temp[0][temp[0].length-1]
}

console.log(can_create(['back', 'end', 'front', 'tree'], 'backend'))
console.log(can_create(['back', 'end', 'front', 'tree'], 'frontyard'))
console.log(can_create(['back', 'end', 'front', 'tree'], 'frontend'))