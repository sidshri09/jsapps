
function pop(selectObj){
    var idx = selectObj.selectedIndex;
    console.log(idx)
    var state = document.getElementById('state')
    var dist = document.getElementById('dist');
    dist.innerHTML='';
    if (state != null){
        st = state.value
        console.log(st)
        file = `https://districts.s3.ap-south-1.amazonaws.com/districts/${st}.json`
        console.log(file)
        fetch(file)
        .then(response => response.json())
        .then(data => {
            for (const property in data.districts){
                
                var option = document.createElement("option");
                option.value = data.districts[property].district_id
                option.text= data.districts[property].district_name
                dist.appendChild(option);
                console.log(data.districts[property].district_name)
            }
        })
        }
}

function myfunc(){        
        
        var dist = document.getElementById('dist');
        if (dist != null) {
            str = dist.value;
            console.log(str);
        }
        var date = document.getElementById('date');
        if (date != null) {
            date1 = date.value;
            date1 = date1.split('-')[2]+"-"+date1.split('-')[1]+"-"+date1.split('-')[0]
            console.log(date1);
        }
        var url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${str}&date=${date1}`;
        console.log(url)
        // document.getElementById('demo').innerHTML=
        var vacc = document.getElementById('vacc');
        if (vacc != null) {
            vacc1 = vacc.value;
            console.log(vacc1);
        }

        fetch(url)
        .then(response => response.json())
        .then(data => {
            let text = "<table border='1'>"
            text += "<tr><th rowspan=\"1\">" + "Address" + "</th>"
            text += "<th rowspan=\"1\">" + "Total Capacity" + "</th>"
            text += "<th rowspan=\"1\">" + "Dose1 Capacity" + "</th>"
            text += "<th rowspan=\"1\">" + "Dose2 Capacity" + "</th>"
            text += "<th rowspan=\"1\">" + "Block Name" + "</th>"
            text += "<th rowspan=\"1\">" + "Date" + "</th>"
            text += "<th rowspan=\"1\">" + "District" + "</th>"
            text += "<th rowspan=\"1\">" + "Venue" + "</th>"
            text += "<th rowspan=\"1\">" + "Vaccine" + "</th></tr>"
            for (const property in data.sessions){
                if(data.sessions[property].available_capacity != 0 && data.sessions[property].vaccine == vacc1){
                    console.log(data.sessions[property].address)
                    console.log(data.sessions[property].available_capacity)
                    console.log(data.sessions[property].available_capacity_dose1)
                    console.log(data.sessions[property].available_capacity_dose2)
                    console.log(data.sessions[property].block_name)
                    console.log(data.sessions[property].date)
                    console.log(data.sessions[property].district_name)
                    console.log(data.sessions[property].name)
                    console.log(data.sessions[property].vaccine)

                    text += "<tr><td>" + data.sessions[property].address + "</td>";
                    text += "<td>" + data.sessions[property].available_capacity + "</td>";
                    text += "<td>" + data.sessions[property].available_capacity_dose1 + "</td>";
                    text += "<td>" + data.sessions[property].available_capacity_dose2 + "</td>";
                    text += "<td>" + data.sessions[property].block_name + "</td>";
                    text += "<td>" + data.sessions[property].date + "</td>";
                    text += "<td>" + data.sessions[property].district_name + "</td>";
                    text += "<td>" + data.sessions[property].name + "</td>";
                    text += "<td>" + data.sessions[property].vaccine + "</td></tr>";
                }
            }
            text += "</table>"
            document.getElementById("demo").innerHTML = text;
            /* let text = "<table border='1'>"
            text += "<tr><th rowspan=\"1\">" + "ID" + "</th>"
            text += "<th rowspan=\"1\">" + "Title" + "</th>"
            text += "<th rowspan=\"1\">" + "Year" + "</th>"
            text += "<th rowspan=\"1\">" + "Principals" + "</th></tr>"
            

            for (const property in data.params){
                    text += "<tr><td>" + data.params[property].id + "</td>";
                    text += "<td>" + data.params[property].title + "</td>";
                    text += "<td>" + data.params[property].year + "</td>";
                    text += "<td><table border='1'>"
                    text += "<tr><th rowspan=\"3\">" + "Name" + "</th>"
                    text += "<th rowspan=\"3\">" + "Category" + "</th>"
                    text += "<tr>"
                    for (const prop in data.params[property].principals){
                        text += "<td>" + data.params[property].principals[prop].name + "</td>"
                        text += "<td>" + data.params[property].principals[prop].category + "</td>"
                    }
                    text += "</tr>"
                    text += "</table></tr>"    
                    console.log(JSON.stringify(data.params[property]));
                }
                text += "</table>"
                document.getElementById("demo").innerHTML = text; */
                
            
            
        })

}
