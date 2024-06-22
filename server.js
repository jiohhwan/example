import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';
import Example from './models/inputmodel.js'; // 모델 불러오기

const app = express();
const port = process.env.PORT || 8000;

// __dirname을 ES 모듈에서 사용 가능하도록 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 정적 파일 제공
app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// MongoDB connection URL
const url = 'mongodb+srv://zerter:gyqls0302@jihwan.cqmaoft.mongodb.net/?retryWrites=true&w=majority&appName=JIHWAN';
const dbName = 'GAON';

// MongoDB 연결
const mongoDB = () => {
  return mongoose.connect('mongodb+srv://zerter:gyqls0302@jihwan.cqmaoft.mongodb.net/GAON', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB에 연결되었습니다.'))
    .catch((error) => {
      console.error('MongoDB 연결 중 오류 발생:', error);
      throw error;
    });
};

// 서버 시작
mongoDB().then(() => {
  // mainUI.html 파일 서빙
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'mainUI.html'));
  });

  // 서버 시작 후 mainUI.html을 브라우저에서 열기
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    open(`http://localhost:${port}`);
  });
}).catch(error => {
  console.error('서버를 시작할 수 없습니다:', error);
});



 // 데이터 입력 라우트
 app.post('/add', (req, res) => {
  const inputData = req.body;

  const example = new Example(inputData);
  example.save()
    .then(result => {
      res.status(200).send('Data inserted');
    })
    .catch(error => {
      console.error('데이터 삽입 중 오류 발생:', error);
      res.status(500).send('Error inserting data');
    });
});