const connection = require("../config/mysql")

module.exports = {
  getCompanyProfileById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM company_profile WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  postCompanyProfile: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO company_profile SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              profile_id: result.insertId,
              ...setData,
            }
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      )
    })
  },
  patchCompanyProfile: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE company_profile SET ? WHERE profile_id = ?", [setData, id], (error, result) => {
          if (!error) {
            const newResult = {
              profile_id: id,
              ...setData,
            }
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      )
    })
  }
}