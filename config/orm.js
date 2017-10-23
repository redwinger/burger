// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(tableInput, cb) {
    var queStr = "SELECT * FROM " + tableInput + ";";
    connection.query(queStr, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queStr = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") ";

    connection.query(queStr, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var queStr = "UPDATE " + table +" SET " + objToSql(objColVals) + " WHERE " + condition;

    connection.query(queStr, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;