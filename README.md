다시 만들어보는 SongSSam

- [x] rvc 레포지토리 클론해서 RunPod에 올리기
- [] fast-api 에 연동하기
- [] nestjs 로 백엔드 api 만들기 -> 로그인, 회원가입 완료. fast-api로 요청 하는 api 미완료
- [] react로 ui 만들기
- [] api 연동하기
- [] Redis, websocket 으로 진행 사항 표시하기
- [] 아마존에 배포하기

SongSSamV2/
apps/
web/ # React
api/ # NestJS (API+BFF+Queue)
infer/ # FastAPI (초기엔 더미 추론, 나중에 RunPod로 교체)
infra/
docker-compose.yml
data/audio/ # 로컬 개발용 공유 폴더(입/출력 wav)

API

- 로그인
- 생성 가능한 모델 종류
- 곡 생성 요청
- 생성된 곡 리스트 조회 및 듣기

나중에 추가할 거

- 멜론 크롤링해서 인기차트 탑 100
- 곡 추천

* ws랑 redis 연결해서 진행사항 표시 기능
