
const mockProductInfo = {
  "data": {
      "id": 37315,
      "campus": "hr-rfe",
      "name": "Heir Force Ones",
      "slogan": "A sneaker dynasty",
      "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      "category": "Kicks",
      "default_price": "99.00",
      "created_at": "2021-08-13T14:37:33.145Z",
      "updated_at": "2021-08-13T14:37:33.145Z",
      "features": [
          {
              "feature": "Sole",
              "value": "Rubber"
          },
          {
              "feature": "Material",
              "value": "FullControlSkin"
          },
          {
              "feature": "Mid-Sole",
              "value": "ControlSupport Arch Bridge"
          },
          {
              "feature": "Stitching",
              "value": "Double Stitch"
          }
      ]
  },
  "status": 200,
  "statusText": "OK",
  "headers": {
      "content-length": "640",
      "content-type": "application/json; charset=utf-8"
  },
  "config": {
      "transitional": {
          "silentJSONParsing": true,
          "forcedJSONParsing": true,
          "clarifyTimeoutError": false
      },
      "adapter": [
          "xhr",
          "http"
      ],
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
          "Accept": "application/json, text/plain, */*",
          "Authorization": "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"
      },
      "method": "get",
      "url": "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37315"
  },
  "request": {},
}

const mockAnswer = {
    "id": 5992868,
    "body": "big cheese",
    "date": "2023-07-07T00:00:00.000Z",
    "answerer_name": "no",
    "helpfulness": 0,
    "photos": []
}

const mockAnswers = {
    "5992868": {
        "id": 5992868,
        "body": "big cheese",
        "date": "2023-07-07T00:00:00.000Z",
        "answerer_name": "no",
        "helpfulness": 0,
        "photos": []
    }
}

const mockAnswersSeller = {
  "5992868": {
      "id": 5992868,
      "body": "big cheese",
      "date": "2023-07-07T00:00:00.000Z",
      "answerer_name": "Seller",
      "helpfulness": 0,
      "photos": []
  }
}

const mockQuestions = [
    {
        "question_id": 563551,
        "question_body": "Blah blah blah",
        "question_date": "2022-01-07T00:00:00.000Z",
        "asker_name": "Person Asking A Question",
        "question_helpfulness": 13,
        "reported": false,
        "answers": {
            "5992868": {
                "id": 5992868,
                "body": "big cheese",
                "date": "2023-07-07T00:00:00.000Z",
                "answerer_name": "no",
                "helpfulness": 0,
                "photos": []
            }
        }
    }
]

const mockQuestion = {
    "question_id": 563551,
    "question_body": "Blah blah blah",
    "question_date": "2022-01-07T00:00:00.000Z",
    "asker_name": "Person Asking A Question",
    "question_helpfulness": 13,
    "reported": false,
    "answers": {
        "5992868": {
            "id": 5992868,
            "body": "big cheese",
            "date": "2023-07-07T00:00:00.000Z",
            "answerer_name": "no",
            "helpfulness": 0,
            "photos": []
        }
    }
}



module.exports = {
  mockProductInfo: mockProductInfo,
  mockAnswer: mockAnswer,
  mockAnswers: mockAnswers,
  mockQuestions: mockQuestions,
  mockQuestion: mockQuestion
};