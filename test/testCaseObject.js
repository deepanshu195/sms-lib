let testCase = [
  {
    apiCallExecutor: [
      {
        input: {
          url: "https://api.slicepay.in/",
          method: "GET",
        },
        method: "include",
        output: {
          status: 400,
          message: "",
          success: false,
        },
      },
    ],
  },
  {},
];

let sampleInput = {
  kalyera: {
    otp: {
      method: "xxx",
      api_key: "xxxx",
      sender: "xxxx",
      baseEndpoint: "xxxx",
    },
    transactional: {
      method: "xxx",
      api_key: "xxxx",
      sender: "xxxx",
      baseEndpoint: "xxxx",
    },
  },
};

module.exports = {
  sampleInput,
};
