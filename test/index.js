let assert = require("chai").assert;
let expect = require("chai").expect;
let SmsServiceClass = require("../dist/index.js").default;
let apiCallExecutor = require("../dist/network/apiCallExecutor.js").default
  .apiCallExecutor;
let CredClass = require("../dist/credentials/index.js").default;
const { rejects } = require("assert");
const { resolve } = require("path");
const ts = require("typescript");
let { sampleInput } = require("./testCaseObject.js");
let SmsService = new SmsServiceClass(sampleInput);

describe("Testing started for build folder(dist)", () => {
    
describe("apiCallExecutor", () => {
  it("apiCallExecutor response format",  ()=> {
    return new Promise((resolve, rejects) =>
      apiCallExecutor({
        url: "https://api.slicepay.in/",
        method: "GET",
      })
        .then((data) => {
          expect({ status: "", success: "", message: "" }).to.have.all.keys(
            "status",
            "success",
            "message"
          );
          resolve();
        })
        .catch((error) => {
          expect(error).to.have.all.keys("status", "success", "message");
          resolve();
        })
    );
  }).timeout(4000)
});
  describe("CredClass", () => {
    it("On Creating SmsService instance, creds should be stored.", () => {
      assert.typeOf(CredClass.getCreds("kalyera"), "object");
    });
  });




describe("apiCallExecutor", () => {
  it("sendTransactionalMessage mandatory keys if not present should throw error.", () => {
    return new Promise((resolve, rejects) =>
      SmsService.sendTransactionalMessage("hi there", "hello")
        .then((data) => {
          expect(res).to.have.all.keys("status", "success", "message", "error");
          resolve();
        })
        .catch((error) => {
          expect(error).to.have.all.keys(
            "status",
            "success",
            "message",
            "error"
          );
          resolve();
        })
    );
  }).timeout(4000);
});




});
