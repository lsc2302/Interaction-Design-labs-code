exports.viewProject = function (req,res) {
    var name = req.params.name;
    console.log(123);
    console.log("The project name is: "+name);
    res.render('project',{
        "projectName":name,
    });
}
