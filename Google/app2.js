function myfunc(){        
        /* var movie = document.getElementById('name');
        if (movie != null) {
            str = movie.value;
            console.log(str);
        }
        var url = "https://lmuhni6a1h.execute-api.ap-south-1.amazonaws.com/prod?Movie="+str;
        console.log(url) */
        // document.getElementById('demo').innerHTML=
    
        fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk&num=100", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "df1f5dfc9amsh415a06c32f0e038p1d8c27jsnee061674cd63",
                "x-rapidapi-host": "google-search3.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => {console.log(data)
            let text = "<table border='1'>"
            text += "<tr><th rowspan=\"1\">" + "Title" + "</th>"
            text += "<th rowspan=\"1\">" + "Google Review Stars" + "</th>"
            text += "<th rowspan=\"1\">" + "Description" + "</th>"
            text += "<th rowspan=\"1\">" + "Link" + "</th></tr>"

            for (const property in data.results){
                text += "<tr><td>" + data.results[property].title + "</td>";
                    text += "<td>" + data.results[property].g_review_stars + "</td>";
                    text += "<td>" + data.results[property].description + "</td>";
                    text += "<td>" + "<a href=\""+data.results[property].link+"\">link</a>" + "</td>";
            }
            text += "</table>"
                document.getElementById("demo").innerHTML = text;
        })
        .catch(err => {
            console.error(err);
        });
        
}
