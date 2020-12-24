"use strict";

require("reflect-metadata");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _celebrate = require("celebrate");

require("express-async-errors");

var _AppError = _interopRequireDefault(require("../../errors/AppError"));

var _routes = _interopRequireDefault(require("./routes"));

require("../../container");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
//import '@shared/infra/typeorm';
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
app.use((0, _celebrate.errors)()); // eslint-disable-next-line @typescript-eslint/no-unused-vars

app.use((err, req, res, _) => {
  if (err instanceof _AppError.default) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  } // eslint-disable-next-line


  console.error(err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
}); // eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line func-names

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333!');
});