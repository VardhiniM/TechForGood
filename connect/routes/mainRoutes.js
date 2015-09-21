Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/loadAid', {
    name: 'aid',
    action: function () {
        this.render('aid');
    }
});


Router.route("/addAid", {
name: 'home',
    template: 'aid',
    data : function(){
        console.log('router Q - ' + JSON.stringify(this.query));
            //Meteor.call("addAid",this.aid);
        var abc={
            "a" : "b"
        };
        Meteor.call("addAid",abc);
    }

});