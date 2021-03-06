export default Discourse.Route.extend({
  showFooter: true,

  model() {
    let user = this.modelFor("user");
    if (user.get("profile_hidden")) {
      return this.replaceWith("user.profile-hidden");
    }

    return user.summary();
  },

  actions: {
    didTransition() {
      this.controllerFor("user").set("indexStream", true);
    }
  }
});
