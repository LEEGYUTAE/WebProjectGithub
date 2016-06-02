if(Meteor.isClient){
  Meteor.startup(function(){
    DaumMaps.load("87be09b4532a7de661fcb29ae7a79517");
  });
}

Template.map.onRendered(function(){
  this.autorun(function(){
    if(DaumMaps.loaded()){
      new daum.maps.Map();
    }
  });
});