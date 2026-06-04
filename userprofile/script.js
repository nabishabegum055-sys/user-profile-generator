function generateProfile(){

    let name =
    document.getElementById("name").value;

    let bio =
    document.getElementById("bio").value;

    let image =
    document.getElementById("image").value;

    document.getElementById(
    "profileName").innerText = name;

    document.getElementById(
    "profileBio").innerText = bio;

    if(image !== ""){
        document.getElementById(
        "profileImage").src = image;
    }
}