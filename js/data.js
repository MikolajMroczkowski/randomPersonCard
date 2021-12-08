function loadData(){
    $.ajax({
        url: "https://randomuser.me/api/"
    }).done(function(json) {
        const avatar = json.results[0].picture.large;
        const name = json.results[0].name.title+" "+json.results[0].name.first+" "+json.results[0].name.last;
        const location = json.results[0].location.street.name+" "+json.results[0].location.street.number+" "+json.results[0].location.city
        const location2 = json.results[0].location.state + " "+json.results[0].location.country
        const birth = json.results[0].dob.date.split('T')[0] + " (" + json.results[0].dob.age + " year)";
        const gender = json.results[0].gender
        setData(avatar,name,location,location2,birth,gender);
    });
}
function setData(avatar,name,location,location2,birth,gender){
    $("#avatar").prop('src',avatar);
    $('#name').prop('innerHTML',name);
    $('#location').prop('innerHTML',location);
    $('#location2').prop('innerHTML',location2);
    $('#birth').prop('innerHTML',birth);
    $('#gender').prop('innerHTML',gender);
}
