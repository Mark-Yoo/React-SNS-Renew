module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // mySql에는 복수인 users로 저장됨
    // id가 기본적으로 제공되므로 굳이 테이블에 미리 넣어줄 필요가 없다.
    email: {
      type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, FLOAT, INTEGER, DATETIME
      allowNull: false, // 필수
      unique: true, // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100), // 비밀번호를 암호화 할 경우 늘어날 길이를 대비하여 전체 길이를 넉넉하게 잡음
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci', // 한글 저장
  });
  // 관계형 데이터베이스의 핵심 부분
  // belongsTo를 사용한 데이터베이스에 UserId와 PostId를 자동으로 생성하여 이 곳에 작성한 유저의 아이디와 포스트의 아이디를 자동으로 할당한다.
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
    // 서로 follow와 following을 해야하는 다수 대 다수의 상황에서 follower와 followig의 UserId와 PostId를 구분하기 위해서 foreignKey가 이들의 고유한 이름으로 사용된다.
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId'});
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId'});
  };
  return User;
}