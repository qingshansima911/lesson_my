module.exports = {
  get token() {
    console.log("token", this.get("token"));
    return this.get("token");
  },
};