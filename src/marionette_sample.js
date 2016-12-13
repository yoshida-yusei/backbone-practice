// Marionette.Applicationインスタンスを作成
var App = new Marionette.Application();

// Todo.Listモジュールを定義
App.module('List', function(List, Todo, Backbone, Marionette, $, _) {

  // Todo.Listモジュールの初期化コードを記述
  List.addInitializer(function() {
    alert('アプリ起動！');
  });

});

// アプリケーションの開始
App.start();


var Contact = Backbone.Marionette.ItemView.extend({
  el: '#contact-region',
  template: '#contact-template'
});

var Person = Backbone.Model.extend({
  defaults: {
    payment: 7692,
    peoplecount: '3'
  }
});

var person = new Person();
var contact = new Contact({
  model: person
});

contact.render();

var MyView = Marionette.ItemView.extend({
  el: '#my-element',
  template: false,
  ui: {
    paragraph: 'p',
    button: '.my-button'
  },
  events: {
    'click @ui.button': 'clickedButton'
  },

  clickedButton: function() {
    console.log('I clicked the button!');
    var payment = document.getElementById('payment').value;
    var peoplecount = document.getElementById('peoplecount').value;

    alert('支払いは1人あたり' + payment / peoplecount + 'です。');

    console.log(payment / peoplecount);
  }
});

var view = new MyView();
view.render();

view.ui.paragraph.text();        // returns 'Hello World'
view.ui.button.trigger('click'); // logs 'I clicked the button!'
