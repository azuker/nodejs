const config = {
    database: {
      url: 'mongodb://localhost:27017/quizdb',
      dbName: 'quizdb',
      mongoMock: true,
      useSimulators: true
    },
    enableChanges: true,
  };
module.exports = config;  