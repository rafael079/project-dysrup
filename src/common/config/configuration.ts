export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,

  database: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOSTNAME,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: process.env.DATABASE_LOGGING === 'true',
  },
  cors: {
    origin: [process.env.APP_FRONT_END],
    allowedHeaders: [
      'Access-Control-Allow-Origin',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization',
    ],
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE', 'PATCH'],
  },
});
