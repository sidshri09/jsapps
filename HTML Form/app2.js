function myfunc(){        
        var movie = document.getElementById('name');
        if (movie != null) {
            str = movie.value;
            console.log(str);
        }
        var url = "https://lmuhni6a1h.execute-api.ap-south-1.amazonaws.com/prod?Movie="+str;
        console.log(url)
        // document.getElementById('demo').innerHTML=
    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let text = "<table border='1'>"
            text += "<tr><th rowspan=\"1\">" + "ID" + "</th>"
            text += "<th rowspan=\"1\">" + "Title" + "</th>"
            text += "<th rowspan=\"1\">" + "Year" + "</th>"
            text += "<th rowspan=\"1\">" + "ImageUrl" + "</th>"
            text += "<th rowspan=\"1\">" + "Principals" + "</th></tr>"
            

            for (const property in data.params){
                    text += "<tr><td>" + data.params[property].id + "</td>";
                    text += "<td>" + data.params[property].title + "</td>";
                    text += "<td>" + data.params[property].year + "</td>";
                    text += "<td>" + "<a href=\""+data.params[property].url+"\">link</a>" + "</td>";
                    text += "<td>"
                    for (const prop in data.params[property].principals){
                        text += data.params[property].principals[prop].name 
                        text +=" : <b>"
                        text += data.params[property].principals[prop].category
                        text +=";</b><br>"
                    }
                    text += "</td></tr>"    
                    console.log(JSON.stringify(data.params[property]));
                }
                text += "</table>"
                document.getElementById("demo").innerHTML = text;
                
            
            
        })

}
