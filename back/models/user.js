module.exports = (sequelize, DataTypes) => {
  const User = sequelize.definen('User', { // mySql에는 복수인 users로 저장됨
    // id가 기본적으로 제공되므로 굳이 테이블에 미리 넣어줄 필요가 없다.
    id: {},
    email: {},
    nickname: {},
    password: {},
  }, {
    charset = 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });
  User.associate = (db) => {};
  return User;
}