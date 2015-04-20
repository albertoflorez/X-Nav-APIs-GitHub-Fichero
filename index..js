jQuery(document).ready(function() { 

$("#formRepo").hide();
$("#CogerToken").click(cogerToken);
$("#CogerRepo").click(cogerRepo);

});

var github;
var repo;

function cogerToken(){
    var token = $("#token").val();
    github = new Github({
        token: token,
        auth: "oauth"
    });
    $("#formRepo").show();
}

function cogerRepo(){
    var username = $("#NombreUsuario").val();
    var reponame = $("#NombreRepo").val();
    repo = github.getRepo(username, reponame);
    repo.show(mostrarRepo);
}

function mostrarRepo(err, repo) {
    var infoRepo = $("#infoRepo");
    if(err){
        infoRepo.html("Ha habido un error!<br>"+err);
    }else{
        infoRepo.html("<p>Datos del repositorio:</p><ul><li>Descripción del repositorio: " + repo.description + "</li>" + "<li>Fecha de creación: " + repo.created_at + "</li>" + "<li>Nombre completo: " + repo.full_name + "</li></ul>")
    }
}
