function loadData(){
    $.ajax({
        url: "https://randomuser.me/api/"
    }).done(function(json) {
        $("#avatar").prop('src',json.results[0].picture.large);
        var name = json.results[0].name.title+" "+json.results[0].name.first+" "+json.results[0].name.last;
        $('#name').prop('innerHTML',name);
        var location = json.results[0].location.street.name+" "+json.results[0].location.street.number+" "+json.results[0].location.city
        $('#location').prop('innerHTML',location);
        var location2 = json.results[0].location.state + " "+json.results[0].location.country
        $('#location2').prop('innerHTML',location2);
        var birth = json.results[0].dob.date.split('T')[0]+" ("+json.results[0].dob.age+" year)"
        $('#birth').prop('innerHTML',birth);
        var gender = json.results[0].gender
        $('#gender').prop('innerHTML',gender);
    });
}
