define(function (require) {
  var app = require("durandal/app");
  var ko = require("knockout");

  let data = {
    name: ko.observable("123"),
    sayHello: function (otherName, e) {
      app.showMessage("Hello " + otherName + "! Nice to meet you.", "Greetings");
      console.log(e);
    },

    firstName: ko.observable("a"),
    lastName: ko.observable("b"),
    // fullName: function () {
    //   return this.firstName;
    // },
    myFunc: function () {
      alert();
      console.log(this);
      this.name("111");
    },
  };

  return data;
});
