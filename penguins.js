
var getGradeforQuiz = function(quiz)
{
    return quizes.grade.classroom.map
}




var arrayofQM = function(pegnuins)
{
    var getGradeforQuiz = function(quiz)
    {
        return quizes.grade.classroom.map
    }
    var getMeanQG = function(getGradeforQuiz)
    {
        return d3.mean.map(getGradeforQuiz)
    }
    var returnArrayQ = function(getMeanQG)
    {
        return[]
    }
       

   }
       
       
       
       
    {



   }


    


var mainCode = function(penguinD){
    
    d3.select("#tables")
      .append("table")
      .selectAll("tr")
      .data(penguinD)
      .enter()
      .append("tr")
    {
        
    }
      
    
    
    
    
    
    
}




var penguinPromise = d3.json("penguins/classData.json")
penguinPromise.then(
    function(penguins)
    {
    console.log("classData",penguins)
    mainCode(penguins)
    },
    function(err)
    {
    d3.select("h1").text("it didnt work");
    console.log("fail", err)
    })
