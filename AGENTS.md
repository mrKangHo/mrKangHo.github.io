# Project Guidelines & Repository Standards

본 문서는 `mrKangHo`의 공개 저장소 관리 및 메인 포털(`mrKangHo.github.io`) 연동에 대한 표준 작업 지침입니다. 에이전트와 기여자는 모든 공개 저장소를 생성, 수정, 관리할 때 본 지침을 준수해야 합니다.

---

## 1. 공개 저장소 `README.md` 표준 가이드라인

모든 공개 저장소의 `README.md`는 다음 필수 요소를 포함해야 합니다.

### 1.1 다국어 네비게이션
- `README.md` 최상단에 아래 형식으로 언어 전환 링크를 배치합니다.
- 기존에 다른 형태로 언어 설정이 되어 있더라도 반드시 아래 포맷으로 통일합니다.
  ```markdown
  🇰🇷 [한국어](README.md) | 🇺🇸 [English](README.en.md) | 🇯🇵 [日本語](README.ja.md) | 🇨🇳 [中文](README.zh.md)
  ```

### 1.2 시각 자료 포함 (Icon & Screenshot)
- 저장소의 `docs/` 폴더 내에 배치된 아이콘 및 스크린샷을 README 본문에 포함해야 합니다.
  - **아이콘**: 프로젝트 제목 상단 또는 옆에 배치
  - **스크린샷/데모**: 프로젝트 소개 바로 아래 또는 기능 설명 섹션에 배치
- 예시:
  ```markdown
  <p align="center">
    <img src="docs/icon.png" alt="App Icon" width="128" />
  </p>

  ![Screenshot](docs/screenshot.png)
  ```

### 1.3 Homebrew 설치 가이드 포함
- 모든 공개 저장소는 해당 저장소를 기준으로 Homebrew 배포를 기본으로 하므로, `brew` 설치 가이드가 반드시 포함되어야 합니다.
- 예시:
  ```markdown
  ## Installation

  ### Homebrew
  ```bash
  brew tap mrKangHo/tap
  brew install <repository-name>
  ```
  ```

---

## 2. 공개 저장소 `docs/` 디렉토리 구조 표준

모든 공개 저장소는 루트에 `docs/` 디렉토리를 유지하며, 다음 파일들을 필수로 포함해야 합니다.

```text
<repository-root>/
└── docs/
    ├── icon.png (또는 .svg / .webp)
    ├── screenshot.png (또는 .gif / .webp)
    └── introduce.md
```

### 2.1 `docs/introduce.md` 작성 규칙
- 저장소의 README 내용을 바탕으로 핵심 기능과 목적을 **2~3줄로 간략히 요약**하여 작성합니다.
- 메인 사이트(`index.html`)의 프로젝트 카드/소개 영역에서 직접 노출되는 텍스트 소스이므로 명확하고 직관적인 문장으로 작성합니다.
- 예시:
  ```markdown
  macOS 메뉴바에서 간편하게 시스템 상태를 모니터링할 수 있는 경량 오픈소스 유틸리티입니다.
  네이티브 Swift/SwiftUI로 개발되어 적은 리소스로 빠르고 부드럽게 동작합니다.
  ```

---

## 3. 메인 포털 (`index.html`) 연동 지침

- `mrKangHo.github.io`의 메인 페이지(`index.html`)에서 프로젝트/저장소 목록을 소개할 때:
  - 하드코딩된 임의의 문구 대신, 각 저장소의 **`docs/introduce.md` 내용**을 가져와서 카드 소개 문구로 표시합니다.
  - 저장소의 아이콘 및 스크린샷 역시 해당 저장소의 `docs/` 에셋 경로를 참조하여 일관성 있게 렌더링합니다.

---

## 4. Git 작업 및 배포 지침 (절대 원칙)

- **커밋(Commit)까지만 진행**: 모든 작업 완료 시 변경 사항을 스테이징하고 의미 있는 커밋 메시지로 **로컬 커밋까지만 진행**합니다.
- **푸시(Push)는 사용자 요청 시에만 수행**: 사용자의 명시적인 `push` 요청이나 확인이 있기 전에는 **절대로 원격 저장소(`git push`)로 푸시하지 않습니다.**

---

## 5. 저장소 관리 체크리스트

새 저장소를 공개하거나 기존 저장소를 업데이트할 때 다음 항목을 점검합니다:
- [ ] `README.md` 상단에 다국어 네비게이션이 표준 포맷으로 작성되어 있는가?
- [ ] `docs/` 디렉토리에 `icon`, `screenshot`, `introduce.md`가 모두 존재하는가?
- [ ] `docs/introduce.md`가 2~3줄로 요약되어 작성되었는가?
- [ ] `README.md`에 `docs/icon` 및 `docs/screenshot`이 포함되어 있는가?
- [ ] `README.md`에 Homebrew (`brew install ...`) 설치 가이드가 포함되어 있는가?
- [ ] `index.html`에서 해당 저장소 소개 문구가 `docs/introduce.md` 내용과 일치/연동되어 있는가?
- [ ] 작업 완료 후 로컬 커밋까지만 진행되었는가? (사용자 명시적 요청 없이 푸시 금지)

