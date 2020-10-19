function preventCreateFormFromSending(form){
    form.submit(function (event){
        event.preventDefault(); // forhindrer at formen bliver sendt
        getUsers();
    })
}

function preventCreateUserFromSending(form){
    form.submit(function (event){
        event.preventDefault(); //forhindre at formen bliver sendt
        createUsers($("#username").val()) // hent value fra <input>
    });
}

function getUsers(){
    console.log("getUsers er kaldt");
    $.ajax({
        url:"/api/userservice",
        type:"POST",
        contentType:"application/JSON",
        success: function (data){
            $.each(data.users, function (index,value){
                $("#username").append("<div>" + value.username +
                    "</div>")
            })
            $("#status").html("Server: Klar til brug");
        },
        error:function (data){
            console.log("ERROR i svar fra server");
            $("#status").html("ERROR i svar fra server");
        }
    });
}


function createUsers(user){
    console.log("createUser er kaldt");
    //AJAX request
    var createUserObject = {};
    createUserObject["username"] = user;
    var count = $("#users > div").length
    createUserObject["count"] = count
    $.ajax({
        url:"api/createuser",
        type:"POST",
        contentType:"application/JSON",
        data: JSON.stringify(createUserObject),
        success:function (data){
            $("#users").prepend("<div>" + data.users.pop().username +
                "</div>")
            $("#status").html("Server: Klar til brug");
        },
        error:function (data){
            console.log("ERROR i svar fra server");
            $("#status").html("ERROR i svar fra server");
        }
    });
}


function checkQuery(){
    if(typeof jQuery != undefined){
        console.log("jQuery er loaded")
    } else {
        console.log("jQuery er IKKE loaded")
    }
}