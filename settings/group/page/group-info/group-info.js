var channelname = document.getElementById("channel_name");
var saveButton = document.getElementById("settings_channel_save");

var serverconfigName;
var editGroup = {};
setupNotify()

socket.emit("userConnected", { id: getID(), name: getUsername(), icon: getPFP(), status: getStatus(), token: getToken(),
    aboutme: getAboutme(), banner: getBanner()});


socket.emit("getGroupInfo", {id: getID(), token: getToken(), group: getUrlParams("id").replace("group-", "")}, function (response) {
    try{

        console.log(response)
        channelname = document.getElementById("channel_name");
        saveButton = document.getElementById("settings_channel_save");

        serverconfigName = response.data.info.name;
        channelname.value = serverconfigName;
        editGroup = response;

        console.log(response);
    }
    catch(err){
        console.log("Unable to get Group Information");
        console.log(err);

        alert("Unable to get channel info. Please try to reload slowly until it works. Known bug!");
    }

});


function getToken(){
    var token = getCookie("token");

    if(token == null || token.length <= 0){
        return null;
    }
    else{
        return token;
    }
}

function getID(){
    var id = getCookie("id");

    if(id == null || id.length != 12){
        id = generateId(12);
        setCookie("id", id, 360);
        return id;
    }
    else{
        return id;
    }
}
function updatePreview(){

    try{

        // Username
        if(channel_name.value != serverconfigName
        ){
            console.log("NOt same");
            saveButton.style.display = "block";
        }
        else{
            console.log("same");
            saveButton.style.display = "none";
        }
    }
    catch(e){
        console.log(e);
    }

}


function saveSettings(){
    try{
        if(channelname.value != null && channelname.value.length > 0 && channelname.value != serverconfigName){

            socket.emit("updateGroupName", {id:getID(), token: getToken(), groupId: getUrlParams("id"), groupName: channelname.value }, function (response) {

                if(response.type== "success"){
                    notify(response.msg, "success", null, true);
                }
                else{
                    notify(response.msg, "error", null, true);
                }
                console.log(response);


            });
        }

        saveButton.style.display = "none";
    }
    catch(error){
        alert("Error while trying to save settings: " + error);
        return;
    }
}