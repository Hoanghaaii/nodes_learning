class NewController {
    index(req, res){
        res.render('news');
    }
    show(req, res){
        res.send("Hello")
    }
}
module.exports = new NewController;