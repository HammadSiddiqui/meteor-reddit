Template.website_list.helpers({
    websites:function(){
        return Websites.find({}, {sort: {votes: -1}});
    }
});