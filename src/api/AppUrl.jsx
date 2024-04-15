class AppUrl {
  static BaseURL = "http://127.0.0.1:8000/api";
  static VisitorDetails = this.BaseURL + "/getVisitor";

  static PostContact = this.BaseURL + "/postcontact";

  static search(searchkey) {
    return this.BaseURL + "/search/" + searchkey;
  }
}

export default AppUrl;
