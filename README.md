# Node.js AI App

Next.js를 사용한 웹 애플리케이션입니다.

## 기술 스택

- Next.js
- TypeScript
- Tailwind CSS
- ESLint

## 프로젝트 구조

```
src/
├── app/                # 페이지 컴포넌트
├── components/         # 재사용 가능한 컴포넌트
└── styles/            # 스타일 파일
```

## 주요 기능

- 반응형 네비게이션 바
- 라우팅 기능이 있는 메뉴 (Top, History, Product, Etc)
- 각 페이지별 레이아웃

## 개발 환경 설정

1. 저장소 클론
```bash
git clone [repository-url]
```

2. 종속성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

## 배포

이 프로젝트는 Vercel을 통해 배포됩니다.

### Vercel 배포 방법

1. GitHub 저장소에 코드를 푸시합니다.

2. [Vercel 대시보드](https://vercel.com/dashboard)에 접속합니다.

3. "New Project" 버튼을 클릭합니다.

4. GitHub 저장소를 선택하고 "Import" 버튼을 클릭합니다.

5. 다음 설정을 확인합니다:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

6. "Deploy" 버튼을 클릭하여 배포를 시작합니다.

### 환경 변수 설정 (필요한 경우)

Vercel 대시보드에서 프로젝트의 Settings > Environment Variables 섹션에서 필요한 환경 변수를 설정할 수 있습니다.

### 자동 배포

- main/master 브랜치에 push하면 자동으로 배포가 시작됩니다.
- PR을 생성하면 미리보기 배포가 자동으로 생성됩니다.

## 수정 이력

- 초기 프로젝트 설정
- 기본 레이아웃 구현
- 페이지 라우팅 설정
- Vercel 배포 설정 추가

npm run dev실행