const promisify =
  (asyncCbFunc) =>
  (...param) =>
    new Promise((resolve, reject) => {
      asyncCbFunc(...param, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
    });
