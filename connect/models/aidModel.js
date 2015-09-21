Aid = new Meteor.Collection('aid', {idGeneration : 'MONGO'}
    /*{
  schema : new SimpleSchema({
      aid_id : {
      type : String
    },
      aid_name : {
      type : String
    },
      aid_category_id : {
      type : String
    },
      row_created : {
      type : String
    },
      row_updated: {
          type : String
      }
  })
}*/);

// Collection2 already does schema checking
// Add custom permission rules if needed
Aid.allow({
  insert : function () {
    return false;
  },
  update : function () {
    return false;
  },
  remove : function () {
    return false;
  }
});
/*

Resources.addLike = function (docId) {
  Meteor.call('addLike', docId);
};

Resources.removeLike = function (docId) {
  Meteor.call('removeLike', docId);
};

Meteor.methods({
  'addLike' : function (id) {
    check(id, String);

    var userId = Meteor.userId();

    if (!userId || Resources.findOne({ _id : id, likes : userId })) {
      return;
    }

    Resources.update(id, { $push: { likes: userId }, $set : { likesCount: Resources.findOne({ _id : id }).likes.length + 1 } });
  },
  'removeLike' : function (id) {
    check(id, String);

    var userId = Meteor.userId();

    if (!userId || !Resources.findOne({ _id : id, likes : userId })) {
      return;
    }

    Resources.update(id, { $pull: { likes: userId }, $set : { likesCount: Resources.findOne({ _id : id }).likes.length - 1 } });
  }
});

// Easy Search Configuration
Resources.initEasySearch(['name', 'link'], {
  limit : 10,
  query: function (searchString) {
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    // Only completely match the link
    query.$or[1] = { 'link' : searchString };

    return query;
  },
  sort : function () {
    return { 'likesCount' : -1, 'name' : 1 };
  }
});*/
