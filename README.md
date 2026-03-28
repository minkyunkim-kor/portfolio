# Portfolio ("The Architect")

본 프로젝트는 12년차 시니어 백엔드 엔지니어의 경험과 역량을 시각적으로 돋보이게 하는 다크 테마 기반의 반응형 포트폴리오 웹사이트입니다. 

## Tech Stack
- **Framework:** React + Vite
- **Styling:** Vanilla CSS (Dark Theme Customization)
- **Deployment:** GitHub Pages 호환성 확보 (`base: './'` 설정)

## Getting Started

의존성을 설치하고 로컬 개발 서버를 실행하기 위한 명령어입니다:

```bash
npm install
npm run dev
```

## Build and Deployment

이 프로젝트는 GitHub Actions를 통해 GitHub Pages에 자동으로 배포되도록 설정되어 있습니다. (`.github/workflows/deploy.yml`)

### 자동 배포 설정 방법
1. 로컬 코드를 완성한 후 GitHub 원격 레포지토리의 `main` 브랜치로 Push 합니다.
2. GitHub Repository의 **[Settings] -> [Pages]** 메뉴로 이동합니다.
3. **Build and deployment** 섹션의 **Source**를 `Deploy from a branch`에서 `GitHub Actions`로 변경합니다.
4. 액션이 실행되면 완료 후 설정된 Pages URL에서 포트폴리오를 확인할 수 있습니다.
