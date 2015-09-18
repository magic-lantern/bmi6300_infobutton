var infoView = Backbone.View.extend({
  el: '#infoModal',
  initialize: function(options) {
    this.template = options.template ? _.template($(options.template).html()) : _.template($('#problemViewTemplate').html());
    this.render();
  },
  render : function() {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }
});
