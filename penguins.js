var mainCode = function(penguinsData){
    //Draws the home data
    var drawhome = function(){
         d3.selectAll("body *").remove()
            d3.select("body").append("div").attr("id","heading").attr("class","page_asset").text("CLASSROOM")
            d3.select("body").append("div").attr("id","banner").attr("class","page_asset").text("Student INFO")
            d3.select("body").append("div").attr("id","tables").attr("class","page_asset")
            d3.select("body").append("script").attr("src", "https://d3js.org/d3.v5.min.js")
            d3.select("body").append("link").attr("href", "style.css").attr("rel","stylesheet").attr("type","text/css")
            d3.select("body").append("script").attr("type","text/javascript").attr("src","penguins.js")
    }

    //formats data in to the array we need
    var formatData = function(penguinsDMain){
        //the mean quiz
        //Gets the Quiz avg for all Pegnuin - retures avgs in array
        var arrayofQM = function(penguinsData)
        {
            //console.log("classData: ", penguinsData)    
            //console.log("penguin.quizes.grade.map: ", penguinsData[0].quizes[0].grade)

                //Gets the Quiz avg for each Pegnuin - retures avg
                var getEachPenQuizAVG = function(penguinsData)
                {
                        var anw = 00;
                        var arr = []
                        penguinsData.quizes.map(function(quizes)
                            {
                                //console.log("tester: ",quizes.grade)
                                arr.push(quizes.grade);
                                //console.log("This penguin's quiz: ",quizes.grade)
                            })

                        anw = d3.mean(arr)
                        //console.log("This quizes penguin's avg: ",anw)
                        return anw     
                }

                //Gets the Quiz avg for all Pegnuin - retures avgs in array
                var getAllPenQuizAVG = function(penguinsData)
                {
                    //console.log("classData: ", penguinsData)
                    var arr2 = []
                    penguinsData.map(function(penguinsData)
                        {
                            arr2.push(getEachPenQuizAVG(penguinsData));
                        })
                    return arr2
                }
                //console.log("All penguin's avg", d3.mean(getAllPenQuizAVG(penguinsData)))

                return getAllPenQuizAVG(penguinsData)
        }

        //the mean homework
        //Gets the Quiz avg for all Pegnuin - retures avgs in array
        var arrayofHW = function(penguinsData)
        {
            //console.log("classData: ", penguinsData)    
            //console.log("penguin.quizes.grade.map: ", penguinsData[0].quizes[0].grade)

                //Gets the homework avg for each Pegnuin - retures avg
                var getEachPenHwAVG = function(penguinsData)
                {
                        var anw = 00;
                        var arr = []
                        penguinsData.homework.map(function(homework)
                            {
                                //console.log("tester: ",homework.grade)
                                arr.push(homework.grade);
                                //console.log("This penguin's quiz: ",homework.grade)
                            })

                        anw = d3.mean(arr)
                        //console.log("This homework penguin's avg: ",anw)
                        return anw     
                }

                //Gets the homework avg for all Pegnuin - retures avgs in array
                var getAllPenHwAVG = function(penguinsData)
                {
                    //console.log("classData: ", penguinsData)
                    var arr2 = []
                    penguinsData.map(function(penguinsData)
                        {
                            arr2.push(getEachPenHwAVG(penguinsData));
                        })
                    return arr2
                }
                //console.log("All penguin's avg", d3.mean(getAllPenHwAVG(penguinsData)))

                return getAllPenHwAVG(penguinsData)
        }

        //the mean Tests
        //Gets the Quiz avg for all Pegnuin - retures avgs in array
        var arrayofTest = function(penguinsData)
        {
                //Gets the test avg for each Pegnuin - retures avg
                var getEachPenTestAVG = function(penguinsData)
                {
                        var anw = 00;
                        var arr = []
                        penguinsData.test.map(function(test)
                            {
                                //console.log("tester: ",test.grade)
                                arr.push(test.grade);
                                //console.log("This penguin's Tests: ",test.grade)
                            })

                        anw = d3.mean(arr)
                        //console.log("This test penguin's avg: ",anw)
                        return anw     
                }

                //Gets the homework avg for all Pegnuin - retures avgs in array
                var getAllPenTestAVG = function(penguinsData)
                {
                    //console.log("classData: ", penguinsData)
                    var arr2 = []
                    penguinsData.map(function(penguinsData)
                        {
                            arr2.push(getEachPenTestAVG(penguinsData));
                        })
                    return arr2
                }
                //console.log("All penguin's avg", d3.mean(getAllPenTestAVG(penguinsData)))

                return getAllPenTestAVG(penguinsData)
        }

        //the Final
        //Gets the Final for all Pegnuin - retures avgs in array
        var arrayofFinal = function(penguinsData)
        {
                //Gets the test avg for each Pegnuin - retures avg
                var getEachPenFinalAVG = function(penguinsData)
                {

                        return penguinsData.final[0].grade    
                }

                //Gets the Final avg for all Pegnuin - retures avgs in array
                var getAllPenFinalAVG = function(penguinsData)
                {
                    //console.log("classData: ", penguinsData)
                    var arr2 = []
                    penguinsData.map(function(penguinsData)
                        {
                            arr2.push(getEachPenFinalAVG(penguinsData));
                        })
                    return arr2
                }
                //console.log("All penguin's avg", d3.mean(getAllPenFinalAVG(penguinsData)))

                return getAllPenFinalAVG(penguinsData)
        }


        var arrayofQM = arrayofQM(penguinsData)
        var arrayofHW = arrayofHW(penguinsData)
        var arrayofTest = arrayofTest(penguinsData)
        var arrayofFinal = arrayofFinal(penguinsData)

        var i;
        var penguinsDMain = []
        for (i = 0; i < penguinsData.length; i++) 
        {
            var penguins = {}
            penguins.picture = penguinsData[i].picture
            penguins.quiz_mean = arrayofQM[i]
            penguins.homework_mean = arrayofHW[i]
            penguins.test_mean = arrayofTest[i]
            penguins.final_test = arrayofFinal[i]
            penguinsDMain.push(penguins)
        }

        //(final 35%, Tests 30%, Quizes 20%, and HW is 15%)

        console.log("classData 2: ",penguinsDMain)
        
        return penguinsDMain
    }

    var drawdata = function(penguinsDMain)
    {
        //Sudo function for drawing data for pictures 
        var drawHeading = function(){
            d3.select("#tables")
                .append("table")
                .attr("class","L_main_table")
                .attr("id","L_base_table")
                .append("th")
                .attr("class","L_main_table_head")
                .text("ID picture")

            d3.select("#L_base_table")
                .append("th")
                .attr("class","L_main_table_head")
                .attr("id","L_base_table_test_mean")
                .text("test mean")

            d3.select("#L_base_table")
                .append("th")
                .attr("class","L_main_table_head")
                .attr("id","L_base_table_quiz_mean")
                .text("quiz_mean")

            d3.select("#L_base_table")
                .append("th")
                .attr("class","L_main_table_head")
                .attr("id","L_base_table_homework_mean")
                .text("homework_mean")

            d3.select("#L_base_table")
                .append("th")
                .attr("class","L_main_table_head")
                .attr("id","L_base_table_final_test")
                .text("final_test")
        }
            drawHeading()
        
        //Draws ID photo based on location in main array
        var drawIDS = function(penguinsDMain){
        d3.select("#L_base_table")
            .selectAll("tr")
            .data(penguinsDMain)
            .enter()
            .append("tr")
            .attr("class","main_table_rows")
            .attr("id",function(penguinsDMain){return penguinsDMain.picture.substring(0, penguinsDMain.picture.length - 4)})       
            .append("td")
            .attr("class","main_table_Cols ID_pic")
            .append("img")
            .attr("src", function(penguinsDMain){return penguinsDMain.picture})
        }
           drawIDS(penguinsDMain)
        
        //Draws intel based on ID photo location
        var drawIntelforID = function(penguinsDMain){
            penguinsDMain.forEach(function(aPenguins){
                d3.select("#"+aPenguins.picture.substring(0, aPenguins.picture.length - 4))
                    .append("td")
                    .attr("class","main_table_Cols")
                    .append("p")
                    .attr("class","test_mean")
                    .text(function(penguinsDMain){return penguinsDMain.test_mean})

                d3.select("#"+aPenguins.picture.substring(0, aPenguins.picture.length - 4))
                    .append("td")
                    .attr("class","main_table_Cols")
                    .append("p")
                    .attr("class","quiz_mean")
                    .text(function(penguinsDMain){return penguinsDMain.quiz_mean}) 

               d3.select("#"+aPenguins.picture.substring(0, aPenguins.picture.length - 4))
                    .append("td")
                    .attr("class","main_table_Cols")
                    .append("p")
                    .attr("class","homework_mean")
                    .text(function(penguinsDMain){return penguinsDMain.homework_mean}) 

               d3.select("#"+aPenguins.picture.substring(0, aPenguins.picture.length - 4))
                    .append("td")
                    .attr("class","main_table_Cols")
                    .append("p")
                    .attr("class","final_test")
                    .text(function(penguinsDMain){return penguinsDMain.final_test}) 

            });
        }
            drawIntelforID(penguinsDMain)
        
        
        d3.select("#L_base_table_quiz_mean")
            .on("click",function()
                { 
                    console.log("work")
                    var penguinsDquizMean = penguinsDMain
                    penguinsDquizMean.sort(function(a, b){return b.quiz_mean - a.quiz_mean})
                    console.log("work", penguinsDquizMean)
                    drawhome()
                    drawdata(penguinsDquizMean)
                    d3.selectAll(".L_main_table ~ .L_main_table ").remove()
            
                })
        
        /*.on("mouseover",function(aFilmData){
                d3.selectAll("#info-box *").remove()
                d3.select("#info-box")
                    .append("div")
                    .attr("class","movie_description")
                    .text(function(){return aFilmData.description})
                    })*/
        
        
    }
    
    penguinsDMain = formatData(penguinsData)
    drawdata(penguinsDMain)

   
      
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
 
    
    
    
    
    
}




var penguinPromise = d3.json("classData.json")
penguinPromise.then(
    function(penguins)
    {
    console.log("classData: ",penguins)
    mainCode(penguins)
    },
    function(err)
    {
    console.log("it didnt work")
    d3.select("h1").text("it didnt work");
    console.log("fail", err)
    })
