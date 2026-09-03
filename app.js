/**
 * mrKangHo GitHub Repositories Showcase & App Store Commercial Portfolio
 * Apple / Linear / Raycast Bespoke UI Loader, Filtering, iTunes API & i18n System
 */

const GITHUB_USERNAME = 'mrKangHo';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`;
const EXCLUDED_REPOS = ['mrKangHo', 'mrKangHo.github.io'];

/// Default Curated App Store Portfolio Apps with Resume Roles, Contributions & Tech Stack
const DEFAULT_APPSTORE_APPS = [
  // Commercial Work Projects
  {
    id: 1440611965,
    name: '놀이의발견',
    artist: 'Woongjin Compass, Co., Ltd.',
    isPersonal: false,
    type: 'commercial',
    platforms: ['ios'],
    role: '모바일 파트장 (웅진컴퍼스 · 2019.07 - 2025.08)',
    contributions: [
      'UIKit 기반 화면을 SwiftUI로 전면 전환하는 마이그레이션을 주도하여 전체 화면의 80% 이상을 SwiftUI로 전환',
      '신규 개발 및 유지보수 상황별 Claude 지침(CLAUDE.md)을 수립하여 SwiftLint를 적용하고, PR 생성 시 lint 위반을 자동 점검하는 CI 체계 구축',
      'Crashlytics → AI 우선순위 판정 → JIRA 자동 등록 → Slack 알림으로 이어지는 QA 자동화 파이프라인 직접 설계 및 구축',
      'Tuist 도입으로 계층별(Feature/Core/UI) 모듈화 설계 및 전체 빌드 속도 30% 이상 개선',
      'TCA 기반 단방향 상태 관리 도입 및 팀 기술 세미나 주도로 런타임 오류 발생률 대폭 감소',
      '전사 공통 디자인 시스템 설계로 신규 화면 UI 구현 시간 40% 이상 단축'
    ],
    techStack: ['Swift', 'SwiftUI', 'TCA', 'Tuist', 'SwiftLint', 'Claude Code', 'Firebase', 'Figma'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ff/1c/db/ff1cdb92-6a1f-ac30-64cb-f06574412ef5/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/%EB%86%80%EC%9D%B4%EC%9D%98%EB%B0%9C%EA%B2%AC/id1440611965',
    genre: '라이프스타일',
    rating: '4.5',
    ratingCount: 1274,
    version: '4.27.13',
    description: '국내 1위 가족 여가 플랫폼! 전국 키즈카페부터 워터파크, 테마파크, 체험 학습 및 숙소까지 한 번에 쉽고 저렴하게 예약해보세요.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/80/96/74/8096742a-d57d-4c14-2ef5-188389553852/1.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2d/cd/61/2dcd61cb-f6f0-2fb4-e123-782cc0244a9e/2.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/44/83/83/4483837e-7dd7-770d-764b-a1857c7a8222/3.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/f7/5d/0a/f75d0ab0-fe4e-81bd-2355-29a0271c9e2b/4.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/2b/00/55/2b0055f2-acb0-8fde-109e-73f8e5c34d28/5.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8c/22/f8/8c22f8b5-1065-4e60-e3b3-400e00b2eed6/6.png/392x696bb.png'
    ]
  },
  {
    id: 6446482198,
    name: '소풍의발견',
    artist: 'Woongjin Compass, Co., Ltd.',
    isPersonal: false,
    type: 'commercial',
    platforms: ['ios'],
    role: 'iOS 리드 (웅진컴퍼스 · 2019.07 - 2025.08)',
    contributions: [
      '체험학습 예약부터 귀가까지 책임지는 올인원 서비스의 iOS 개발 리드 및 빠른 시장 출시(Time-to-Market) 달성',
      'Clean Architecture 도입으로 비즈니스 로직과 프레임워크를 명확히 분리하여 신규 인원 온보딩 기간 단축',
      '기존 전사 디자인 시스템 자산을 이식해 반복적인 UI 작업을 제거하고 핵심 로직 구현에 자원 집중',
      'Storyboard/Xib 없이 100% 코드 기반 UI 구성으로 Git 충돌 사전 방지',
      'Firebase 실시간 데이터 동기화로 끊김 없는 예약 상태 정보 제공, 목표 일정 내 MVP 출시 성공'
    ],
    techStack: ['Swift', 'Clean Architecture', 'UIKit', 'Firebase', 'Git'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b2/28/a4/b228a42d-a10d-9ca5-e57d-79768205186a/AppIcon-1x_U007ephone-0-1-0-85-220-0.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/%EC%86%8C%ED%92%8D%EC%9D%98%EB%B0%9C%EA%B2%AC/id6446482198',
    genre: '교육 / 체험학습',
    rating: '5.0',
    ratingCount: 4,
    version: '1.2.2',
    description: '소풍의발견은 출발부터 프로그램 진행, 식사, 귀가까지 책임지는 체험학습 올인원 서비스입니다.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/77/54/f1/7754f13b-1c44-9e36-f156-208a8e5f886d/7f30fdf3-4238-4680-8ddb-344d64c3b78d_ios_U00285.5_U00291.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/a9/39/dc/a939dce9-c08e-0e8b-a773-90e589dfbd3c/1f2d087f-3f58-4f5c-a09c-678898e0f3e5_ios_U00285.5_U00292.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/be/2b/23/be2b23f8-2ac2-93e3-c950-e087ca55dda7/0084a3af-1485-4e16-a2db-7c065b4c2d50_ios_U00285.5_U00293.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/ca/8e/97/ca8e979d-f400-9a1a-a73c-985ee121c39d/113b61c2-5caf-49ac-8373-6e1c09382642_ios_U00285.5_U00294.png/392x696bb.png'
    ]
  },
  {
    id: 1038288833,
    name: '하나머니(트래블로그)',
    artist: 'Hana Card Co., Ltd.',
    isPersonal: false,
    type: 'commercial',
    platforms: ['ios'],
    role: '모바일 파트장 (페타즈 · 2016.06 - 2018.09)',
    contributions: [
      'Objective-C / Swift 기반 대규모 금융 서비스에 MVVM 아키텍처 전면 도입 및 비즈니스 로직 결합도 감소',
      'GitHub 기반 코드 리뷰 프로세스 주도 및 팀 코딩 컨벤션 통일로 코드 품질 및 개발 생산성 향상',
      '하나금융그룹 혜택 및 트래블로그 결제/환전 네트워크 연동 시 예외 처리 강화로 결제 데이터 정합성 확보'
    ],
    techStack: ['Swift', 'Objective-C', 'MVVM', 'CocoaPods', 'Financial Core', 'Git'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/49/00/b9/4900b978-a047-cb3f-b02d-a899b844bb6d/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/%ED%95%98%EB%82%98%EB%A8%B8%EB%8B%88-%ED%8A%B8%EB%9E%98%EB%B8%94%EB%A1%9C%EA%B7%B8/id1038288833',
    genre: '금융',
    rating: '4.7',
    ratingCount: 100461,
    version: '4.0.41',
    description: '쓸수록 쌓이는 모바일 생활 머니 플랫폼! 하나금융그룹의 혜택과 해외여행 필수 트래블로그 서비스를 손쉽게 이용하세요.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/70/3d/f1/703df1f3-1ba5-dfad-89e6-dec4ac7de4d7/ios420_1_opaque.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7b/6a/f3/7b6af3d2-f7eb-cf7d-8664-840217943fc4/ios420_2_opaque.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/7f/3c/80/7f3c807e-2fea-b201-3e67-d4ad70416664/ios420_3_opaque.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/99/30/a0/9930a09a-b5ac-70ad-372b-30283bc0a81e/ios420_4_opaque.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a4/fd/32/a4fd3275-cf00-0e9b-5756-4ef71501db7d/ios420_5_opaque.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/25/0e/a9/250ea98b-2fc0-81ba-ceb5-0661de91b0f5/ios420_6_opaque.png/320x480bb.jpg'
    ]
  },
  {
    id: 6739484703,
    name: 'TV조선',
    artist: '(주)조선방송',
    isPersonal: false,
    type: 'commercial',
    platforms: ['ios'],
    role: '모바일 파트장 (페타즈 · 2016.06 - 2018.09)',
    contributions: [
      'SMR 광고 시스템을 통합한 커스텀 동영상 플레이어 직접 설계/구현 (자체 광고 제어권 및 수익 모델 확보)',
      'MVVM 아키텍처 도입으로 데이터 흐름 정형화 및 UI-비즈니스 로직 결합도 감소',
      'CocoaPods 기반 라이브러리 관리 체계화로 대규모 리뉴얼 과정의 기술적 충돌 방지 및 미디어 재생 최적화'
    ],
    techStack: ['Objective-C', 'MVVM', 'SMR AD Player', 'Video Streaming', 'CocoaPods'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/35/f0/d0/35f0d013-e136-1994-a5e6-ecaf0eabe624/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/tv%EC%A1%B0%EC%84%A0/id6739484703',
    genre: '엔터테인먼트',
    rating: '3.0',
    ratingCount: 8,
    version: '1.0.7',
    description: 'TV조선 실시간 온에어 무료 시청, 명장면 클립 서비스 및 예능, 교양, 시사 프로그램 VOD 다시보기 서비스.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/82/f6/24/82f62411-6926-3e2f-9d65-4f1c5ab6a903/bc_ios_MO_01.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f1/ea/27/f1ea27e0-7983-8d19-2c18-895b43d16265/bc_ios_MO_02.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/26/87/38/2687385d-7a73-5651-fec8-370d12ac7bcc/bc_ios_MO_03.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6a/9d/2e/6a9d2ee7-ae55-0b8e-23a8-0dc2b43ec3f5/bc_ios_MO_04.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f0/80/f5/f080f50e-214e-a7a2-c49d-70d797418d36/bc_ios_MO_05.png/320x480bb.jpg'
    ]
  },
  {
    id: 6739484927,
    name: 'TV조선 뉴스',
    artist: '(주)조선방송',
    isPersonal: false,
    type: 'commercial',
    platforms: ['ios'],
    role: '모바일 파트장 (페타즈 · 2016.06 - 2018.09)',
    contributions: [
      '실시간 뉴스 생방송 온에어 & 뉴스 클립 스트리밍 최적화 동영상 플레이어 구조 통합',
      '정치, 경제, 사회 등 분야별 뉴스 실시간 데이터 처리 및 네트워크 예외 처리 강화',
      '대규모 트래픽 방송 미디어 환경에서 UI 렌더링 최적화 및 안정적 미디어 서빙'
    ],
    techStack: ['Objective-C', 'MVVM', 'Live Stream', 'CocoaPods'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/4f/fa/ec/4ffaeca0-2ca2-5739-7cd4-5cd1502ca8e4/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/tv%EC%A1%B0%EC%84%A0-%EB%89%B4%EC%8A%A4/id6739484927',
    genre: '뉴스',
    rating: '5.0',
    ratingCount: 1,
    version: '1.0.7',
    description: '생생한 보도와 정치, 경제, 사회 등 분야별 뉴스 클립, 실시간 속보 및 TV조선 뉴스 생방송 시청 서비스.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/dc/33/e7/dc33e7a3-a85a-a13a-03b2-e29580bec338/news_ios_MO_01.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c1/24/a0/c124a09d-5870-f658-c602-888908925b65/news_ios_MO_02.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/36/79/d4/3679d4dd-934b-ee0e-841f-622b441fd6df/news_ios_MO_03.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6b/eb/29/6beb2902-69b1-567b-0e83-82956f5afd7e/news_ios_MO_04.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/11/83/08/118308ff-5a00-eb36-fdf0-afde3310eb48/news_ios_MO_05.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/7b/b7/27/7bb7271b-bd9f-2b34-19e0-37ba9e7d77be/news_ios_MO_06.png/320x480bb.jpg'
    ]
  },
  {
    id: 466682252,
    name: '스타벅스',
    artist: '스타벅스 코리아',
    isPersonal: false,
    type: 'commercial',
    platforms: ['ios'],
    role: 'iOS 선임연구원 (미플즈 · 2015.05 - 2016.05)',
    contributions: [
      '수만 명 동시 접속 환경에서 이벤트 및 메뉴 탐색 화면 렌더링 최적화 수행',
      '거대해진 UIViewController 로직을 MVVM 아키텍처로 재구조화하여 단위 테스트 가능한 기반 마련',
      '사이렌 오더 · 리워드 결제/주문 데이터 정합성을 위한 네트워크 예외 처리 및 트랜잭션 강화',
      'GitHub 기반 코드 리뷰 프로세스 주도 및 공통 UI 컴포넌트화로 개발 생산성 향상'
    ],
    techStack: ['Objective-C', 'MVVM', 'Siren Order', 'CocoaPods', 'Git'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ca/d9/0e/cad90e16-d1a0-9f0b-54f1-b6e61d3237d3/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/%EC%8A%A4%ED%83%80%EB%B2%85%EC%8A%A4/id466682252',
    genre: '음식 및 음료',
    rating: '2.0',
    ratingCount: 2385,
    version: '26.4.0',
    description: '스타벅스 코리아 공식 앱. 사이렌 오더 비대면 주문, 모바일 카드 결제, 리워드 별 적립 및 온라인 스토어 서비스 제공.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/fa/09/47/fa094771-5fcb-3ddf-64c6-220d17c77752/01.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f4/c4/bb/f4c4bbfb-b613-f71e-3b21-cdd8f6a662d8/02.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/d7/89/cf/d789cfbb-4532-aad5-387c-95dc87862b36/03.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6f/cc/c8/6fccc842-7e15-dfd9-732a-199a0079fd29/04.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/39/ac/5b/39ac5bfe-1b98-3f97-3f24-cb28309aa788/05.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/37/8c/17/378c1766-ed7f-af0a-57e1-e442353f2f01/06.png/392x696bb.png'
    ]
  },
  // Freelance & Outsourcing Projects
  {
    id: 664973122,
    name: '레진코믹스',
    artist: 'Lezhin Entertainment',
    isFreelance: true,
    type: 'freelance',
    platforms: ['ios'],
    role: '프리랜서 iOS 개발자 (외주 프로젝트)',
    contributions: [
      '국내 대표 프리미엄 웹툰 플랫폼 레진코믹스 iOS 네이티브 모듈 외주 개발 및 서비스 개선',
      '코인 선물하기, 수신 동의 이벤트 등 신규 주요 기능 SwiftUI 기반 개발',
      'Tuist 모듈화 아키텍처 적용으로 앱 구조 개선 및 개발 생산성 향상'
    ],
    techStack: ['Swift', 'SwiftUI', 'RxSwift', 'Tuist', 'UIKit', 'MVVM', 'REST API'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/be/76/7b/be767bb7-dc2f-fd40-c1fa-82f5e8426b4b/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/%EB%A0%88%EC%A7%84%EC%BD%94%EB%AF%B9%EC%8A%A4-%EC%86%94%EC%A7%81%ED%95%9C-%EC%9E%AC%EB%AF%B8-%EB%8C%80%ED%8F%AD%EB%B0%9C/id664973122',
    genre: '도서 / 웹툰',
    rating: '3.2',
    ratingCount: 948,
    version: '2026.8.1',
    description: '국내 대표 오리지널 웹툰 플랫폼 레진코믹스 공식 iOS 앱. 실시간 웹툰 랭킹, 기다리면 무료, 취향 템플릿 등 맞춤 콘텐츠 서비스를 제공합니다.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ae/c7/63/aec76354-519f-fe4a-5e5f-ee3a39443ed0/6.5-7.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/79/a5/e0/79a5e0e3-b9f0-022f-0ea5-e8d182346078/6.5-6.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6f/c8/93/6fc89348-482a-d4b5-dbdf-603d4c5bed4b/6.5-5.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5d/e3/57/5de35717-6100-9601-be64-bc21f49151b6/6.5-2.png/320x480bb.jpg'
    ]
  },
  {
    id: 1574689419,
    name: 'InvestChosun',
    artist: 'CHOSUN M&D',
    isFreelance: true,
    type: 'freelance',
    platforms: ['ios'],
    role: '프리랜서 iOS 개발자 (외주 프로젝트 · 2021.06)',
    contributions: [
      '조선미디어그룹의 금융 · 자본시장 전문 미디어 InvestChosun iOS 네이티브 앱 신규 개발 및 구축',
      '사용자 친화적 기사 스크랩, 모바일 인터페이스 및 백그라운드 푸시 알림 연동'
    ],
    techStack: ['Swift', 'SwiftUI', 'MVVM', 'REST API', 'Firebase'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d9/73/82/d973825d-47f3-cf82-9028-8f1a7af406dd/AppIcon-0-0-1x_U007ephone-0-1-85-220.jpeg/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/investchosun/id1574689419',
    genre: '뉴스',
    rating: '5.0',
    ratingCount: 2,
    version: '1.1',
    description: '인베스트조선(InvestChosun)은 조선미디어그룹의 금융·자본시장 전문 미디어 서비스입니다. 기업의 자금조달부터 M&A, IPO, 투자 분석 콘텐츠를 실시간으로 제공합니다.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/5c/21/cd/5c21cd9a-76bf-5586-ee06-8846fc1c8522/559f5a69-528c-4660-87d7-1b7d36ec7b56_5.5__Uc2a4_Ud06c_Ub9b0_Uc0f7_01.jpg/392x696bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/63/93/51/6393519b-68a1-b4b5-4db2-bd66f51c7808/dbb79c23-4123-48ae-9913-13ea253a9670_5.5__Uc2a4_Ud06c_Ub9b0_Uc0f7_02.jpg/392x696bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e2/68/0e/e2680e7c-e631-25fc-894a-6c61dbe18dac/f5a0eb4f-0654-48c9-942b-092b53878be0_5.5__Uc2a4_Ud06c_Ub9b0_Uc0f7_03.jpg/392x696bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e2/8d/49/e28d4903-ee2a-aece-73ab-0dd13f24585e/daabe724-574e-4b3a-b6e8-83e12f98f8e3_5.5__Uc2a4_Ud06c_Ub9b0_Uc0f7_04.jpg/392x696bb.jpg'
    ]
  },
  {
    id: 1600621238,
    name: 'Thinking MeMe',
    artist: 'CREVERSE, Inc.',
    isFreelance: true,
    type: 'freelance',
    platforms: ['ios'],
    role: '프리랜서 iOS 개발자 (외주 프로젝트)',
    contributions: [
      '크레버스(CREVERSE) 에듀테크 학습 전용 iOS 애플리케이션 외주 개발 및 서비스 구축',
      'AR MeMe 기반 디지털 포트폴리오 제작 및 수학 일기/오답노트 과제 제출 모듈 연동',
      '학습 복습 비디오 스트리밍 렌더링 및 인터랙티브 갤러리 UX 기능 최적화'
    ],
    techStack: ['Swift', 'UIKit', 'ARKit', 'AVFoundation', 'MVVM', 'REST API'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/7a/b5/11/7ab5117d-1507-8493-3694-41986178cde1/AppIcon-1x_U007emarketing-0-10-0-0-sRGB-85-220-0.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/thinking-meme/id1600621238',
    genre: '교육',
    rating: '2.9',
    ratingCount: 193,
    version: '1.0.33',
    description: 'Thinking MeMe는 과제 제출을 도와주고, AR MeMe 형태의 디지털 포트폴리오를 제작할 수 있는 에듀테크 학습 애플리케이션입니다.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/07/bf/c8/07bfc860-86b1-b6d7-adae-ea30052e2bb7/61b8e3a5-f361-49d6-a17c-d5b2fc2c81d8_01.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/90/df/6a/90df6a7f-b449-7752-e5cf-ca320a526317/789b444a-4030-4d08-ae0e-911563531ede_02.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/0f/f8/a0/0ff8a015-5941-23b6-d4f8-625f015048b6/90db011a-221f-4c03-87a0-25824a9d6d15_03.png/392x696bb.png',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource116/v4/e4/92/27/e492279a-cf07-6455-0fe6-dbe461a56f64/d1d9b5a2-8eaa-4dd3-b61f-e6222a937c20_04.png/392x696bb.png'
    ]
  },
  // Personal Published Apps & 1-Person SaaS Startup by Kangho Lee (Kano)
  {
    id: 1000000001,
    name: 'Dotory (도토리) — 화이트라벨 모바일 쇼핑몰 SaaS',
    artist: 'Dotory · Kano (1인 창업)',
    isPersonal: true,
    type: 'personal',
    platforms: ['ios', 'android'],
    role: '대표 · 창업자 (1인 개발 · 2026.05 - 운영중)',
    contributions: [
      '고객사가 코드 없이 5분 만에 iOS/Android 네이티브 쇼핑몰 앱을 생성하는 화이트라벨 SaaS 단독 기획 · 개발 · 운영',
      'Flutter 기반 공용 모바일 SDK & 앱 템플릿 구축 및 Codemagic CI/CD로 고객사별 앱 자동 빌드 및 TestFlight / Google Play 자동 배포 파이프라인 구현',
      'NestJS 마스터/테넌트 API 분리 설계 및 AsyncLocalStorage / PostgreSQL 기반 멀티테넌시 데이터 아키텍처 구축',
      'Next.js 기반 스튜디오(온보딩/앱설정), CRM 대시보드, 운영자 콘솔, 마케팅 홈페이지 등 4개 프론트엔드 웹 서비스 직접 개발',
      'Claude Code, Gemini CLI 등 AI 코딩 도구를 실제 개발 워크플로우에 통합하여 1인 개발로 7개 이상 저장소 및 풀스택 서비스 동시 운영'
    ],
    techStack: ['Flutter', 'Dart', 'NestJS', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Codemagic', 'Claude Code'],
    icon: 'assets/dotory/icon.svg',
    websiteUrl: 'https://dotory.cloud',
    url: 'https://dotory.cloud',
    genre: '커머스 SaaS / 1인 창업',
    rating: '5.0',
    ratingCount: 0,
    version: '1.0.0',
    description: '고객사가 코드 없이 5분 만에 iOS/Android 네이티브 쇼핑몰 앱을 생성할 수 있는 화이트라벨 모바일 쇼핑몰 SaaS 플랫폼.',
    screenshots: [
      'assets/dotory/hero-screenshot.png',
      'assets/dotory/onboarding_portal_final.png',
      'assets/dotory/crm_dashboard_final.png',
      'assets/dotory/guide-crm-orders.png',
      'assets/dotory/guide-crm-toss.png',
      'assets/dotory/guide-studio-wizard.png',
      'assets/dotory/studio_component_editor.png',
      'assets/dotory/mobile_app_final.png'
    ]
  },
  {
    id: 6801459066,
    name: '오늘의 냉장고',
    artist: 'kangho lee',
    isPersonal: true,
    type: 'personal',
    platforms: ['ios', 'android'],
    role: '기획 · 설계 · 개발 100% (개인 서비스)',
    contributions: [
      'React Native 크로스플랫폼 아키텍처 기반으로 iOS 및 Android 단일 코드베이스 고성능 앱 설계',
      '보관실별(냉장실, 냉동실, 실온) 식재료 유통기한 D-Day 스마트 감지 및 자동 알림 시스템 구축',
      'Google Gemini AI 셰프 연동으로 보유 식재료 조합 기반 실시간 맞춤 레시피 무한 생성 알고리즘 구현',
      '조리 시 부족한 재료를 마트 구매 규격 단위(1병, 1팩 등)로 자동 변환하여 원터치 장바구니 담기 및 냉장고 즉시 입고 시스템 설계'
    ],
    techStack: ['React Native', 'TypeScript', 'Google Gemini AI', 'Firebase', 'Clean Architecture'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/dd/c1/e4/ddc1e48d-880b-18ed-73cc-edbac37ccabe/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98%EC%9D%98-%EB%83%89%EC%9E%A5%EA%B3%A0/id6801459066',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.todayfridge.chef&hl=ko',
    genre: '라이프스타일',
    rating: '5.0',
    ratingCount: 0,
    version: '1.0.0',
    description: '"오늘 저녁, 냉장고에 있는 재료로 뭘 해먹지?" 스마트한 식재료 유통기한 D-Day 관리부터 Google Gemini AI 셰프 기반 맞춤 레시피 추천 및 원터치 장보기까지 해결하는 라이프스타일 서비스.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/fc/7a/02/fc7a0219-0755-4b8a-29b8-94f74fc5e734/01_fridge.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9b/f5/e6/9bf5e6c4-6d22-d5db-1e74-adf24888802e/02_recipes.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9d/90/7e/9d907e47-50e9-4c64-75dc-088cbabf67f9/03_favorites.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/41/b1/e6/41b1e655-ccc1-6b37-330b-060b56aa356b/04_shopping.png/320x480bb.jpg'
    ]
  },
  {
    id: 6763481391,
    name: '오늘의 응가',
    artist: 'kangho lee',
    isPersonal: true,
    type: 'personal',
    platforms: ['ios'],
    role: '기획 · 설계 · 개발 100% (개인 서비스)',
    contributions: [
      '앱을 열고 단 한 번의 탭으로 1초 만에 오늘의 활동을 기록하는 초고속 인터페이스 구현',
      '주간/월간 대시보드 통계 및 직관적인 캘린더 시각화를 통해 장 건강 패턴 및 흐름 파악 연동',
      '복잡한 과정 없는 0-latency 로컬 데이터 퍼스트 구조 설계'
    ],
    techStack: ['Swift', 'SwiftUI', 'Firebase', 'Local First'],
    icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/87/79/a8/8779a868-877f-8aab-599a-8fe54d520796/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/512x512bb.jpg',
    url: 'https://apps.apple.com/kr/app/%EC%98%A4%EB%8A%98%EC%9D%98-%EC%9D%91%EA%B0%80/id6763481391',
    genre: '건강 및 피트니스',
    rating: '5.0',
    ratingCount: 1,
    version: '1.0.0',
    description: '단 한 번의 탭으로 초고속 기록하는 배변 트래커! 대시보드 통계와 직관적인 캘린더를 통해 나의 장 건강 흐름과 패턴을 한눈에 파악하세요.',
    screenshots: [
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ea/a1/7f/eaa17f9c-a9b1-7744-e276-783277ae90c4/1.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/e8/e0/42/e8e04276-727b-bd7c-6f85-7bf1ff749f28/2.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/af/7b/1d/af7b1d35-1f88-9e91-193b-05267b29e24e/3.png/320x480bb.jpg',
      'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/46/95/f0/4695f035-9777-9450-59c6-45ca1bd980ea/4.png/320x480bb.jpg'
    ]
  }
];

// Internationalization (i18n) UI Dictionary
const TRANSLATIONS = {
  ko: {
    statusPill: 'macOS & iOS 프로젝트 진행 가능',
    bio: '<i class="fa-brands fa-apple"></i> macOS & iOS 개발자 | 네이티브 애플 앱, 시스템 도구 및 스킬(Skills) 개발',
    statRepos: '저장소 수',
    statStars: '총 별 수',
    statForks: '포크 수',
    statTechStack: '기술 스택',
    featuredHeading: '주요 오픈소스 소프트웨어',
    featuredSubtext: '엄선된 macOS 애플리케이션, CLI 유틸리티 및 오픈 소스 라이브러리',
    searchPlaceholder: '이름, 언어, 주제로 검색...',
    searchHint: '검색',
    allLang: '전체',
    forksCheckbox: '포크 포함',
    sortUpdated: '최근 업데이트순',
    sortStars: '별 많은순',
    sortName: '이름순 (A-Z)',
    allReposTitle: '전체 오픈소스 저장소',
    noResultsTitle: '검색된 저장소가 없습니다',
    noResultsDesc: '검색 키워드를 수정하거나 언어 필터를 변경해 보세요.',
    resetFilters: '필터 초기화',
    copyToast: '클립보드에 복사되었습니다:',
    copyTooltip: 'git clone 명령어 복사',
    viewRepo: '저장소 보기',
    viewCode: '코드 보기',
    githubProfile: 'GitHub 프로필',
    repositoryLink: '저장소',
    rights: 'All rights reserved.',
    navOpenSource: '오픈소스',
    navAppStore: '포트폴리오',
    appstoreHeading: '실무 프로젝트 포트폴리오',
    appstoreSubtext: 'Apple App Store에 공식 출시하여 서비스 중인 주요 모바일 애플리케이션 실무 경력',
    appstorePlaceholder: 'App Store 앱 실시간 검색 (예: 놀이의발견, 하나머니, TV조선, 스타벅스...)',
    appstoreSearchBtn: '앱 검색',
    appstoreQuickTags: '빠른 탐색:',
    appstoreViewBtn: 'App Store에서 보기',
    appstoreReset: '대표 앱 목록',
    appstoreScreenshots: 'App Store 스크린샷'
  },
  en: {
    statusPill: 'Available for macOS & iOS Projects',
    bio: '<i class="fa-brands fa-apple"></i> macOS & iOS Engineer | Crafting Native Apple Apps, Developer Tools & AI Agent Skills',
    statRepos: 'Repositories',
    statStars: 'Total Stars',
    statForks: 'Forks',
    statTechStack: 'Tech Stack',
    featuredHeading: 'Featured Open Source Software',
    featuredSubtext: 'Selected macOS applications, CLI utilities, and open source libraries',
    searchPlaceholder: 'Search by name, language, or topic...',
    searchHint: 'Search',
    allLang: 'All',
    forksCheckbox: 'Forks',
    sortUpdated: 'Recently Updated',
    sortStars: 'Most Stars',
    sortName: 'Name (A-Z)',
    allReposTitle: 'All Open Source Repositories',
    noResultsTitle: 'No matching repositories found',
    noResultsDesc: 'Try refining your search keyword or switching language filters.',
    resetFilters: 'Reset Filters',
    copyToast: 'Copied to clipboard:',
    copyTooltip: 'Copy git clone',
    viewRepo: 'View Repository',
    viewCode: 'View Code',
    githubProfile: 'GitHub Profile',
    repositoryLink: 'Repository',
    rights: 'All rights reserved.',
    navOpenSource: 'Open Source',
    navAppStore: 'Portfolio',
    appstoreHeading: 'Commercial Work Portfolio',
    appstoreSubtext: 'Featured commercial mobile applications published on Apple App Store',
    appstorePlaceholder: 'Search App Store live (e.g. Nori Discovery, Hana Money, TV Chosun, Starbucks...)',
    appstoreSearchBtn: 'Search App',
    appstoreQuickTags: 'Quick View:',
    appstoreViewBtn: 'View on App Store',
    appstoreReset: 'Show Featured',
    appstoreScreenshots: 'App Screenshots'
  }
};

// Curated metadata enrichment for repos (Bilingual)
const REPO_ENRICHMENTS = {
  'FloatingTube': {
    description: {
      ko: 'macOS 네이티브 플로팅 유튜브 플레이어 (인앱 전체화면, 최상단 고정, 클릭 투과 모드 및 메뉴바 트레이 지원).',
      en: 'macOS native floating YouTube player with in-app fullscreen, always-on-top, click-through mode and menu bar tray.'
    },
    featured: true,
    icon: 'assets/icons/floatingtube.png'
  },
  'brew-manager': {
    description: {
      ko: 'Homebrew 패키지를 편리하게 탐색, 검색, 설치 및 업데이트할 수 있는 macOS GUI 애플리케이션.',
      en: 'macOS GUI application for browsing, searching, installing, and updating Homebrew packages with ease.'
    },
    featured: true,
    icon: 'assets/icons/brew-manager.png'
  },
  'youtubeDownloader': {
    description: {
      ko: 'yt-dlp 기반의 macOS GUI 비디오 & 오디오 다운로더 (사용자 정의 해상도 및 음원 포맷 옵션 지원).',
      en: 'macOS GUI video & audio downloader powered by yt-dlp with custom resolution & audio format options.'
    },
    featured: true,
    icon: 'assets/icons/youtubedownloader.png'
  },
  'homebrew-ytdownloader': {
    description: {
      ko: 'YTDownloader를 위한 Homebrew tap - macOS GUI YTDownloader 간편 포뮬러 설치 지원.',
      en: 'Homebrew tap for YTDownloader - simplified formula installation for macOS GUI YTDownloader.'
    },
    featured: true,
    icon: 'assets/icons/homebrew-ytdownloader.svg'
  },
  'TuistProjectMaker': {
    description: {
      ko: '모듈식 iOS 및 macOS 앱 아키텍처 스캐폴딩을 위한 자동화된 Tuist Swift 프로젝트 생성기.',
      en: 'Automated Tuist Swift project generator for scaffolding modular iOS and macOS app architectures.'
    },
    featured: true,
    icon: 'assets/icons/tuistprojectmaker.svg'
  },
  'clean-arch-checker': {
    description: {
      ko: '클린 아키텍처 경계 및 레이어 의존성을 검사하고 감사하는 가이드 스크립트 도구.',
      en: 'Architecture compliance checker script for auditing Clean Architecture boundaries & layer dependencies.'
    },
    featured: true,
    icon: 'assets/icons/clean-arch-checker.svg'
  },
  'iTorrent': {
    description: {
      ko: 'iOS 16+ 기기를 위해 Swift로 작성된 기능 풍부한 BitTorrent 클라이언트.',
      en: 'Feature-rich BitTorrent client written in Swift for iOS 16+ devices.'
    },
    featured: false,
    icon: 'assets/icons/itorrent.svg'
  },
  'LibTorrent-Swift': {
    description: {
      ko: 'C++ libtorrent 라이브러리를 위한 Swift 래퍼 및 통합 레이어.',
      en: 'Swift wrapper and integration layer around the C++ libtorrent library.'
    },
    featured: false,
    icon: 'assets/icons/libtorrent-swift.svg'
  },
  'DesignSystemMake': {
    description: {
      ko: '디자인 시스템 토큰과 컴포넌트를 표준화하고 구축하기 위한 Swift 라이브러리 및 유틸리티 도구.',
      en: 'Swift library and utility tool for creating and standardizing design system tokens and components.'
    },
    featured: false,
    icon: 'assets/icons/designsystemmake.png'
  },
  'Grassie': {
    description: {
      ko: '시스템 자동화를 위한 Swift 유틸리티 애플리케이션 및 도구.',
      en: 'Swift utility application and tool for system automation.'
    },
    featured: false,
    icon: 'assets/icons/grassie.svg'
  },
  'SkillArchive': {
    description: {
      ko: 'macOS 네이티브 AI 에이전트 스킬(Skills) 백업, 동기화 및 멀티 에이전트 자동 관리 애플리케이션.',
      en: 'Native macOS app for backing up, syncing, and managing AI Agent Skills across Claude Code, Cursor, Gemini CLI, etc.'
    },
    featured: true,
    icon: 'assets/icons/portfolio.svg'
  }
};

// Automatic Language Detection (System / Browser / Saved Preference)
function detectInitialLanguage() {
  const saved = localStorage.getItem('preferred_lang');
  if (saved === 'ko' || saved === 'en') {
    return saved;
  }
  const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (navLang.startsWith('ko')) {
    return 'ko';
  }
  return 'en';
}

// Application State
let currentLang = detectInitialLanguage();
let rawReposData = [];
let processedRepos = [];
let currentFilter = 'all';
let currentSearch = '';
let includeForks = true;
let currentSort = 'updated';
let isFallbackActive = false;

// DOM Elements
const featuredContainer = document.getElementById('featured-container');
const repoGrid = document.getElementById('repo-grid');
const repoCountBadge = document.getElementById('repo-count-badge');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const filterBtns = document.querySelectorAll('.segment-btn');
const toggleForks = document.getElementById('toggle-forks');
const sortSelect = document.getElementById('sort-select');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const shortcutTrigger = document.getElementById('shortcut-trigger');

// App Store DOM Elements
const appstoreContainer = document.getElementById('appstore-container');
const appstoreSearchInput = document.getElementById('appstore-search-input');
const appstoreSearchBtn = document.getElementById('appstore-search-btn');
const btnResetAppStore = document.getElementById('btn-reset-appstore');

// Initialize Application (Modular per page)
document.addEventListener('DOMContentLoaded', () => {
  updateUIStrings();
  initLightbox();

  // Page 1: Open Source Repositories (index.html)
  if (repoGrid) {
    initEvents();
    fetchRepositories();
  }

  // Page 2: Commercial & Personal App Store Portfolio (portfolio.html)
  if (appstoreContainer) {
    initAppStoreEvents();
    initPortfolioTypeFilters();
    renderAppStoreGrid(DEFAULT_APPSTORE_APPS);
    fetchFeaturedAppStoreApps();
  }
});

// Initialize Portfolio Type Filters (All | Commercial | Personal)
function initPortfolioTypeFilters() {
  const filterContainer = document.getElementById('portfolio-type-filters');
  if (!filterContainer) return;

  const btns = filterContainer.querySelectorAll('[data-portfolio-type]');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.dataset.portfolioType;

      const cards = document.querySelectorAll('.appstore-card');
      cards.forEach(card => {
        if (type === 'all' || card.dataset.portfolioType === type) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Automatically fetch live fresh App Store metadata & screenshots on portfolio page
async function fetchFeaturedAppStoreApps() {
  const ids = DEFAULT_APPSTORE_APPS.map(a => a.id).join(',');
  try {
    const url = `https://itunes.apple.com/lookup?id=${ids}&country=kr`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const freshApps = DEFAULT_APPSTORE_APPS.map(defaultApp => {
        const liveApp = data.results.find(r => r.trackId === defaultApp.id);
        if (liveApp) {
          return {
            ...defaultApp,
            name: liveApp.trackName || defaultApp.name,
            artist: liveApp.artistName || defaultApp.artist,
            icon: liveApp.artworkUrl512 || liveApp.artworkUrl100 || defaultApp.icon,
            url: liveApp.trackViewUrl || defaultApp.url,
            genre: liveApp.primaryGenreName || defaultApp.genre,
            rating: liveApp.averageUserRating ? liveApp.averageUserRating.toFixed(1) : defaultApp.rating,
            ratingCount: liveApp.userRatingCount || defaultApp.ratingCount,
            version: liveApp.version || defaultApp.version,
            screenshots: (liveApp.screenshotUrls && liveApp.screenshotUrls.length > 0) 
              ? liveApp.screenshotUrls.slice(0, 8) 
              : defaultApp.screenshots
          };
        }
        return defaultApp;
      });
      renderAppStoreGrid(freshApps);
    }
  } catch (err) {
    console.warn('Live App Store lookup failed, using pre-cached default data', err);
  }
}

// Lightbox Event Listeners Setup
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const overlay = document.getElementById('lightbox-overlay');
  const closeBtn = document.getElementById('lightbox-close');

  if (overlay) overlay.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

window.openLightbox = function(imgUrl) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  if (modal && img) {
    img.src = imgUrl;
    modal.classList.remove('hidden');
  }
};

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.add('hidden');
}

// Initialize App Store Search & Quick Tag Events
function initAppStoreEvents() {
  if (appstoreSearchBtn && appstoreSearchInput) {
    appstoreSearchBtn.addEventListener('click', () => {
      const q = appstoreSearchInput.value.trim();
      if (q) {
        searchAppStore(q);
        if (btnResetAppStore) btnResetAppStore.style.display = 'inline-flex';
      }
    });

    appstoreSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = appstoreSearchInput.value.trim();
        if (q) {
          searchAppStore(q);
          if (btnResetAppStore) btnResetAppStore.style.display = 'inline-flex';
        }
      }
    });
  }

  // Quick tag buttons (#놀이의발견, #하나머니, #TV조선, #스타벅스...)
  const quickTagBtns = document.querySelectorAll('[data-app-query]');
  quickTagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quickTagBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const query = btn.dataset.appQuery;
      if (appstoreSearchInput) appstoreSearchInput.value = query;
      searchAppStore(query);
      if (btnResetAppStore) btnResetAppStore.style.display = 'inline-flex';
    });
  });

  if (btnResetAppStore) {
    btnResetAppStore.addEventListener('click', () => {
      if (appstoreSearchInput) appstoreSearchInput.value = '';
      quickTagBtns.forEach(b => b.classList.remove('active'));
      btnResetAppStore.style.display = 'none';
      fetchFeaturedAppStoreApps();
    });
  }
}

// Live App Store API Search via iTunes Search API
async function searchAppStore(query) {
  if (!query || query.trim() === '') {
    fetchFeaturedAppStoreApps();
    if (btnResetAppStore) btnResetAppStore.style.display = 'none';
    return;
  }

  if (!appstoreContainer) return;
  appstoreContainer.innerHTML = `<div class="loading-box"><i class="fa-solid fa-spinner fa-spin"></i> Searching App Store for "${escapeHtml(query)}"...</div>`;

  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&country=kr&entity=software&limit=12`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      const apps = data.results.map(app => ({
        id: app.trackId,
        name: app.trackName,
        artist: app.artistName,
        icon: app.artworkUrl512 || app.artworkUrl100,
        url: app.trackViewUrl,
        genre: app.primaryGenreName || 'App',
        rating: app.averageUserRating ? app.averageUserRating.toFixed(1) : 'N/A',
        ratingCount: app.userRatingCount || 0,
        version: app.version || '1.0',
        description: app.description || 'App Store application',
        screenshots: (app.screenshotUrls || []).slice(0, 8)
      }));
      renderAppStoreGrid(apps);
    } else {
      appstoreContainer.innerHTML = `
        <div class="no-results-box" style="grid-column: 1 / -1;">
          <div class="no-results-icon"><i class="fa-brands fa-app-store-ios"></i></div>
          <h4>App Store 검색 결과가 없습니다</h4>
          <p>"${escapeHtml(query)}" 키워드로 검색된 앱이 없습니다.</p>
        </div>`;
    }
  } catch (err) {
    console.error('App Store API Search failed', err);
    fetchFeaturedAppStoreApps();
  }
}

// Render App Store & Google Play Portfolio Cards with Screenshots & Resume Contributions
function renderAppStoreGrid(apps) {
  if (!appstoreContainer) return;
  appstoreContainer.innerHTML = '';

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  apps.forEach(app => {
    const card = document.createElement('div');
    card.className = 'appstore-card';
    if (app.type) card.dataset.portfolioType = app.type;

    const ratingDisplay = app.rating !== 'N/A' ? `★ ${app.rating}` : '★ NEW';
    const ratingCountStr = app.ratingCount > 0 ? ` (${app.ratingCount.toLocaleString()})` : '';

    const screenshotsHtml = (app.screenshots && app.screenshots.length > 0) ? `
      <div class="appstore-screenshots-wrapper">
        <div class="appstore-screenshots-title">
          <i class="fa-solid fa-mobile-screen-button"></i> ${t.appstoreScreenshots} (${app.screenshots.length})
        </div>
        <div class="appstore-screenshots-scroll">
          ${app.screenshots.map(sUrl => `
            <div class="screenshot-item" onclick="openLightbox('${sUrl}')" title="${escapeHtml(app.name)} Screenshot Preview">
              <img src="${sUrl}" alt="${escapeHtml(app.name)} Screenshot" loading="lazy" onerror="this.parentElement.style.display='none';">
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    let actionButtonsHtml = '';
    if (app.websiteUrl) {
      actionButtonsHtml += `
        <a href="${app.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn-appstore btn-website" title="공식 홈페이지 방문">
          <i class="fa-solid fa-globe"></i> <span>홈페이지</span>
        </a>
      `;
    } else if (app.url || app.appStoreUrl) {
      actionButtonsHtml += `
        <a href="${app.url || app.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-appstore" title="App Store에서 보기">
          <i class="fa-brands fa-apple"></i> <span>App Store</span>
        </a>
      `;
    }
    if (app.playStoreUrl) {
      actionButtonsHtml += `
        <a href="${app.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-playstore" title="Google Play에서 보기">
          <i class="fa-brands fa-google-play"></i> <span>Google Play</span>
        </a>
      `;
    }

    let platformBadgesHtml = '';
    if (app.isFreelance || app.type === 'freelance') {
      platformBadgesHtml += `<span class="category-tag" style="background: rgba(20, 184, 166, 0.15); color: #2dd4bf; border: 1px solid rgba(20, 184, 166, 0.3);">외주 / 프리랜서</span>`;
    } else if (app.isPersonal) {
      platformBadgesHtml += `<span class="category-tag" style="background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3);">개인 프로젝트</span>`;
    }
    if (app.platforms && app.platforms.includes('ios')) {
      platformBadgesHtml += `<span class="platform-badge ios"><i class="fa-brands fa-apple"></i> iOS</span>`;
    }
    if (app.platforms && app.platforms.includes('android')) {
      platformBadgesHtml += `<span class="platform-badge android"><i class="fa-brands fa-google-play"></i> Android</span>`;
    }

    let detailsHtml = '';
    if (app.role || (app.contributions && app.contributions.length > 0)) {
      const contribListHtml = (app.contributions || []).map(c => `<li>${escapeHtml(c)}</li>`).join('');
      const techListHtml = (app.techStack || []).map(t => `<span class="tech-tag-pill">${escapeHtml(t)}</span>`).join('');
      
      detailsHtml = `
        <div class="appstore-details-block">
          <div class="details-heading">
            <i class="fa-solid fa-user-gear"></i>
            <span>${escapeHtml(app.role || '주요 수행 성과 및 담당 역할')}</span>
          </div>
          ${contribListHtml ? `<ul class="details-list">${contribListHtml}</ul>` : ''}
          ${techListHtml ? `<div class="details-tech-row">${techListHtml}</div>` : ''}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="appstore-card-header">
        <img src="${app.icon}" alt="${escapeHtml(app.name)} Icon" class="appstore-icon" loading="lazy" onerror="this.onerror=null; this.src='assets/icons/portfolio.svg';">
        <div class="appstore-meta-header">
          <div class="appstore-title-area">
            <div class="appstore-badge-row">
              <span class="category-tag appstore-genre">${escapeHtml(app.genre)}</span>
              ${platformBadgesHtml}
              <span class="appstore-rating-pill" title="${ratingDisplay}${ratingCountStr}"><i class="fa-solid fa-star"></i> ${ratingDisplay}</span>
            </div>
            <h3 class="appstore-title">${escapeHtml(app.name)}</h3>
            <p class="appstore-developer">${escapeHtml(app.artist)}</p>
          </div>
          <div class="appstore-action-area">
            ${actionButtonsHtml}
          </div>
        </div>
      </div>
      <p class="appstore-desc">${escapeHtml(app.description)}</p>
      ${detailsHtml}
      ${screenshotsHtml}
      <div class="appstore-footer">
        <span class="appstore-version">v${escapeHtml(app.version)}</span>
        <span class="appstore-artist-tag">${escapeHtml(app.artist)}</span>
      </div>
    `;
    appstoreContainer.appendChild(card);
  });
}

// Event Listeners Setup for index.html
function initEvents() {
  if (!searchInput) return;

  // Language Switcher Buttons
  const langBtns = document.querySelectorAll('[data-lang-switch]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.langSwitch;
      if (targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', currentSearch === '');
    render();
  });

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      clearSearchBtn.classList.add('hidden');
      render();
    });
  }

  // Global Keyboard Shortcut: '/' or '⌘K' / 'Ctrl+K'
  document.addEventListener('keydown', (e) => {
    if ((e.key === '/' && document.activeElement !== searchInput && document.activeElement !== appstoreSearchInput) || 
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  if (shortcutTrigger && searchInput) {
    shortcutTrigger.addEventListener('click', () => {
      searchInput.focus();
    });
  }

  // Language filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.lang;
      render();
    });
  });

  // Toggle Forks
  if (toggleForks) {
    toggleForks.addEventListener('change', (e) => {
      includeForks = e.target.checked;
      render();
    });
  }

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      render();
    });
  }

  // Reset button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      currentFilter = 'all';
      filterBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === 'all'));
      includeForks = true;
      if (toggleForks) toggleForks.checked = true;
      currentSort = 'updated';
      if (sortSelect) sortSelect.value = 'updated';
      render();
    });
  }
}

// Switch Active Language and Update UI
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  updateUIStrings();
  if (processedRepos.length > 0) {
    updateStats(processedRepos);
    render();
  }
  if (appstoreContainer) {
    fetchFeaturedAppStoreApps();
  }
}

// Update all UI elements based on current language
function updateUIStrings() {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  document.documentElement.lang = currentLang;

  // Active state on switch buttons
  document.querySelectorAll('[data-lang-switch]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langSwitch === currentLang);
  });

  const statusTextEl = document.getElementById('status-pill-text');
  if (statusTextEl) statusTextEl.textContent = t.statusPill;

  const bioTextEl = document.getElementById('hero-bio-text');
  if (bioTextEl) bioTextEl.innerHTML = t.bio;

  const lblReposEl = document.getElementById('lbl-stat-repos');
  if (lblReposEl) lblReposEl.textContent = t.statRepos;

  const lblStarsEl = document.getElementById('lbl-stat-stars');
  if (lblStarsEl) lblStarsEl.textContent = t.statStars;

  const lblForksEl = document.getElementById('lbl-stat-forks');
  if (lblForksEl) lblForksEl.textContent = t.statForks;

  const featuredHeadingEl = document.getElementById('featured-heading');
  if (featuredHeadingEl) featuredHeadingEl.textContent = t.featuredHeading;

  const featuredSubtextEl = document.getElementById('featured-subtext');
  if (featuredSubtextEl) featuredSubtextEl.textContent = t.featuredSubtext;

  const searchInputEl = document.getElementById('search-input');
  if (searchInputEl) searchInputEl.placeholder = t.searchPlaceholder;

  const searchHintEl = document.getElementById('lbl-search-hint');
  if (searchHintEl) searchHintEl.textContent = t.searchHint;

  const btnAllEl = document.getElementById('btn-lang-all');
  if (btnAllEl) btnAllEl.textContent = t.allLang;

  const lblForksCheckboxEl = document.getElementById('lbl-forks');
  if (lblForksCheckboxEl) lblForksCheckboxEl.textContent = t.forksCheckbox;

  const optUpdatedEl = document.getElementById('opt-sort-updated');
  if (optUpdatedEl) optUpdatedEl.textContent = t.sortUpdated;

  const optStarsEl = document.getElementById('opt-sort-stars');
  if (optStarsEl) optStarsEl.textContent = t.sortStars;

  const optNameEl = document.getElementById('opt-sort-name');
  if (optNameEl) optNameEl.textContent = t.sortName;

  const allReposTitleEl = document.getElementById('all-repos-title-text');
  if (allReposTitleEl) allReposTitleEl.textContent = t.allReposTitle;

  const noResultsTitleEl = document.getElementById('no-results-title');
  if (noResultsTitleEl) noResultsTitleEl.textContent = t.noResultsTitle;

  const noResultsDescEl = document.getElementById('no-results-desc');
  if (noResultsDescEl) noResultsDescEl.textContent = t.noResultsDesc;

  const resetFiltersBtnEl = document.getElementById('reset-filters-btn');
  if (resetFiltersBtnEl) resetFiltersBtnEl.textContent = t.resetFilters;

  const footerRightsEl = document.getElementById('footer-rights');
  if (footerRightsEl) footerRightsEl.textContent = t.rights;

  const footerLinkGithubEl = document.getElementById('footer-link-github');
  if (footerLinkGithubEl) footerLinkGithubEl.textContent = t.githubProfile;

  const footerLinkRepoEl = document.getElementById('footer-link-repo');
  if (footerLinkRepoEl) footerLinkRepoEl.textContent = t.repositoryLink;

  // App Store i18n
  const lblNavOpenSourceEl = document.getElementById('lbl-nav-opensource');
  if (lblNavOpenSourceEl) lblNavOpenSourceEl.textContent = t.navOpenSource;

  const lblNavAppStoreEl = document.getElementById('lbl-nav-appstore');
  if (lblNavAppStoreEl) lblNavAppStoreEl.textContent = t.navAppStore;

  const appstoreHeadingEl = document.getElementById('appstore-heading');
  if (appstoreHeadingEl) appstoreHeadingEl.textContent = t.appstoreHeading;

  const appstoreSubtextEl = document.getElementById('appstore-subtext');
  if (appstoreSubtextEl) appstoreSubtextEl.textContent = t.appstoreSubtext;

  if (appstoreSearchInput) appstoreSearchInput.placeholder = t.appstorePlaceholder;

  const lblAppStoreSearchBtnEl = document.getElementById('lbl-appstore-search-btn');
  if (lblAppStoreSearchBtnEl) lblAppStoreSearchBtnEl.textContent = t.appstoreSearchBtn;

  const lblQuickTagsEl = document.getElementById('lbl-quick-tags');
  if (lblQuickTagsEl) lblQuickTagsEl.textContent = t.appstoreQuickTags;

  const lblResetAppStoreEl = document.getElementById('lbl-reset-appstore');
  if (lblResetAppStoreEl) lblResetAppStoreEl.textContent = t.appstoreReset;
}

// Fetch Repositories from GitHub API
async function fetchRepositories() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`GitHub API HTTP ${response.status}`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('GitHub API response is not an array');
    }
    processAndSetData(data);
  } catch (error) {
    console.warn('GitHub API fetch failed or rate limited. Using static fallback data.', error);
    useFallbackData();
  }
}

// Helper to extract localized text from field (string or object)
function getLocalizedField(field, lang) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    return field[lang] || field.en || field.ko || '';
  }
  return String(field);
}

// Helper to derive category tag from GitHub Topics or repo metadata dynamically
function getCategoryFromRepo(repo, enrichment) {
  // 1. If explicit enrichment category is set in REPO_ENRICHMENTS, use it
  if (enrichment && enrichment.category) {
    return enrichment.category;
  }
  
  // 2. If repository has GitHub topics set on GitHub.com, use the primary topic
  const topics = (Array.isArray(repo.topics) && repo.topics.length > 0) 
    ? repo.topics 
    : (enrichment && enrichment.topics ? enrichment.topics : []);

  if (topics.length > 0) {
    const formattedTopic = formatTopicCategory(topics[0]);
    return { ko: formattedTopic, en: formattedTopic };
  }

  // 3. Fallback: repo language or Fork / Open Source
  if (repo.isFork || repo.fork) {
    return { ko: '포크', en: 'Fork' };
  }
  if (repo.language && repo.language !== 'Other' && repo.language !== 'None') {
    return { ko: `${repo.language} 프로젝트`, en: `${repo.language} Project` };
  }

  return { ko: '오픈 소스', en: 'Open Source' };
}

// Format GitHub Topic string into a clean UI category badge
function formatTopicCategory(topic) {
  if (!topic) return '오픈 소스';
  const t = topic.toLowerCase();
  if (t === 'macos' || t === 'macos-app' || t === 'mac-app') return 'macOS App';
  if (t === 'ios' || t === 'ios-app') return 'iOS App';
  if (t === 'cli' || t === 'cli-tool' || t === 'cli-utility') return 'CLI Tool';
  if (t === 'audit' || t === 'audit-tool' || t === 'linter') return 'Audit Tool';
  if (t === 'library' || t === 'framework' || t === 'package') return 'Library';
  if (t === 'homebrew' || t === 'tap' || t === 'homebrew-tap') return 'Homebrew Tap';
  if (t === 'skills' || t === 'skill') return 'Agent Skill';
  
  // Capitalize words (e.g. clean-architecture -> Clean Architecture)
  return topic.split(/[-_]/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Process raw GitHub API items and enrich metadata
function processAndSetData(repos) {
  try {
    if (!Array.isArray(repos) || repos.length === 0) {
      if (!isFallbackActive) useFallbackData();
      return;
    }

    const filteredRaw = repos.filter(r => !EXCLUDED_REPOS.includes(r.name));
    rawReposData = filteredRaw;

    processedRepos = filteredRaw.map(repo => {
      const enrichment = REPO_ENRICHMENTS[repo.name] || {};
      const topicsList = (Array.isArray(repo.topics) && repo.topics.length > 0) ? repo.topics : (enrichment.topics || []);
      
      return {
        id: repo.id || Math.random(),
        name: repo.name || 'unnamed',
        fullName: repo.full_name || repo.name || '',
        htmlUrl: repo.html_url || `https://github.com/${GITHUB_USERNAME}/${repo.name}`,
        category: getCategoryFromRepo(repo, enrichment),
        description: enrichment.description || repo.description || { 
          ko: `${repo.name} 오픈소스 프로젝트입니다.`, 
          en: `Open source project ${repo.name}.` 
        },
        language: repo.language || (topicsList[0] ? topicsList[0] : 'Other'),
        stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : 0,
        forks: typeof repo.forks_count === 'number' ? repo.forks_count : 0,
        isFork: Boolean(repo.fork),
        updatedAt: repo.updated_at ? new Date(repo.updated_at) : new Date(),
        pushedAt: repo.pushed_at ? new Date(repo.pushed_at) : new Date(),
        topics: topicsList,
        homepage: repo.homepage || null,
        featured: enrichment.featured || false,
        cloneUrl: repo.clone_url || (repo.html_url ? repo.html_url + '.git' : ''),
        icon: enrichment.icon || null
      };
    });

    updateStats(processedRepos);
    render();
  } catch (err) {
    console.error('Error processing repositories:', err);
    if (!isFallbackActive) useFallbackData();
  }
}

// Static Fallback Data
function useFallbackData() {
  isFallbackActive = true;
  const fallbackList = [
    {
      id: 1,
      name: 'FloatingTube',
      full_name: 'mrKangHo/FloatingTube',
      html_url: 'https://github.com/mrKangHo/FloatingTube',
      description: 'macOS native floating YouTube player with in-app fullscreen, always-on-top, click-through mode and menu bar tray.',
      language: 'Swift',
      stargazers_count: 1,
      forks_count: 0,
      fork: false,
      updated_at: '2026-09-01T00:00:00Z',
      topics: ['macOS', 'Swift', 'SwiftUI', 'YouTube', 'Pip']
    },
    {
      id: 2,
      name: 'brew-manager',
      full_name: 'mrKangHo/brew-manager',
      html_url: 'https://github.com/mrKangHo/brew-manager',
      description: 'macOS GUI app for browsing, searching, installing, and updating Homebrew packages with ease.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-30T00:00:00Z',
      topics: ['macOS', 'Swift', 'Homebrew', 'GUI']
    },
    {
      id: 3,
      name: 'youtubeDownloader',
      full_name: 'mrKangHo/youtubeDownloader',
      html_url: 'https://github.com/mrKangHo/youtubeDownloader',
      description: 'macOS GUI video & audio downloader powered by yt-dlp with custom format options.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-09-01T00:00:00Z',
      topics: ['macOS', 'Swift', 'yt-dlp', 'YouTube']
    },
    {
      id: 4,
      name: 'homebrew-ytdownloader',
      full_name: 'mrKangHo/homebrew-ytdownloader',
      html_url: 'https://github.com/mrKangHo/homebrew-ytdownloader',
      description: 'Homebrew tap for YTDownloader (macOS GUI for yt-dlp).',
      language: 'Ruby',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-28T00:00:00Z',
      topics: ['Homebrew', 'Tap', 'Ruby', 'yt-dlp']
    },
    {
      id: 5,
      name: 'TuistProjectMaker',
      full_name: 'mrKangHo/TuistProjectMaker',
      html_url: 'https://github.com/mrKangHo/TuistProjectMaker',
      description: 'Automated Tuist Swift project generator for scaffolding modular iOS and macOS architectures.',
      language: 'Swift',
      stargazers_count: 1,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-29T00:00:00Z',
      topics: ['Swift', 'Tuist', 'Xcode', 'Architecture']
    },
    {
      id: 6,
      name: 'clean-arch-checker',
      full_name: 'mrKangHo/clean-arch-checker',
      html_url: 'https://github.com/mrKangHo/clean-arch-checker',
      description: 'Codebase analysis tool to inspect and audit Clean Architecture compliance across layers.',
      language: 'JavaScript',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-25T00:00:00Z',
      topics: ['skills', 'JavaScript', 'Clean-Architecture', 'Linter']
    },
    {
      id: 7,
      name: 'iTorrent',
      full_name: 'mrKangHo/iTorrent',
      html_url: 'https://github.com/mrKangHo/iTorrent',
      description: 'Feature-rich BitTorrent client written in Swift for iOS 16+.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: true,
      updated_at: '2026-08-20T00:00:00Z',
      topics: ['iOS', 'Swift', 'BitTorrent']
    },
    {
      id: 8,
      name: 'LibTorrent-Swift',
      full_name: 'mrKangHo/LibTorrent-Swift',
      html_url: 'https://github.com/mrKangHo/LibTorrent-Swift',
      description: 'Swift wrapper around libtorrent C++ library.',
      language: 'Objective-C++',
      stargazers_count: 0,
      forks_count: 0,
      fork: true,
      updated_at: '2026-08-15T00:00:00Z',
      topics: ['Objective-C++', 'Swift', 'libtorrent']
    },
    {
      id: 9,
      name: 'DesignSystemMake',
      full_name: 'mrKangHo/DesignSystemMake',
      html_url: 'https://github.com/mrKangHo/DesignSystemMake',
      description: 'Swift library for building consistent design system components.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-10T00:00:00Z',
      topics: ['Swift', 'Design-System', 'SwiftUI']
    },
    {
      id: 10,
      name: 'Grassie',
      full_name: 'mrKangHo/Grassie',
      html_url: 'https://github.com/mrKangHo/Grassie',
      description: 'Swift utility application repository.',
      language: 'Swift',
      stargazers_count: 0,
      forks_count: 0,
      fork: false,
      updated_at: '2026-08-05T00:00:00Z',
      topics: ['Swift', 'macOS']
    }
  ];

  processAndSetData(fallbackList);
}

// Update Top Profile Statistics
function updateStats(repos) {
  const totalRepos = repos.length;
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks, 0);
  
  const langCounts = {};
  repos.forEach(r => {
    if (r.language && r.language !== 'Other' && r.language !== 'None') {
      langCounts[r.language] = (langCounts[r.language] || 0) + 1;
    }
  });

  const sortedLangs = Object.keys(langCounts).sort((a, b) => langCounts[b] - langCounts[a]);

  const statReposEl = document.getElementById('stat-repos');
  if (statReposEl) statReposEl.textContent = totalRepos;

  const statStarsEl = document.getElementById('stat-stars');
  if (statStarsEl) statStarsEl.textContent = totalStars;

  const statForksEl = document.getElementById('stat-forks');
  if (statForksEl) statForksEl.textContent = totalForks;

  const langStackEl = document.getElementById('stat-languages-stack');
  const langLabelEl = document.getElementById('stat-languages-label');

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  if (langLabelEl) {
    langLabelEl.textContent = `${t.statTechStack} (${sortedLangs.length})`;
  }

  if (langStackEl) {
    langStackEl.innerHTML = '';
    sortedLangs.forEach((lang, index) => {
      const circle = document.createElement('span');
      const langClass = getLanguageDotClass(lang);
      const iconHtml = getLanguageIconHtml(lang);
      
      circle.className = `lang-circle-avatar ${langClass}`;
      circle.setAttribute('title', `${lang} (${langCounts[lang]} repos) - Click to filter`);
      circle.style.zIndex = 20 - index;
      circle.innerHTML = iconHtml;

      circle.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetBtn = Array.from(filterBtns).find(b => 
          b.dataset.lang.toLowerCase() === lang.toLowerCase() || 
          (lang.includes('Objective-C') && b.dataset.lang === 'Objective-C++')
        );
        if (targetBtn) {
          targetBtn.click();
        }
      });

      langStackEl.appendChild(circle);
    });
  }
}

function getLanguageIconHtml(lang) {
  if (!lang) return '<i class="fa-solid fa-code"></i>';
  const lower = lang.toLowerCase();
  if (lower.includes('swift')) return '<i class="fa-brands fa-swift"></i>';
  if (lower.includes('ruby')) return '<i class="fa-brands fa-ruby"></i>';
  if (lower.includes('javascript') || lower === 'js') return '<i class="fa-brands fa-js"></i>';
  if (lower.includes('c++') || lower.includes('objective-c') || lower.includes('objc')) return '<span class="lang-badge-text">C++</span>';
  if (lower.includes('html')) return '<i class="fa-brands fa-html5"></i>';
  if (lower.includes('css')) return '<i class="fa-brands fa-css3-alt"></i>';
  return '<i class="fa-solid fa-code"></i>';
}

// Main Render Function for index.html
function render() {
  if (!repoGrid) return;

  let filtered = processedRepos.filter(repo => {
    if (!includeForks && repo.isFork) return false;

    if (currentFilter !== 'all') {
      if (currentFilter === 'Objective-C++') {
        if (!['Objective-C++', 'C++', 'C'].includes(repo.language)) return false;
      } else if (repo.language.toLowerCase() !== currentFilter.toLowerCase()) {
        return false;
      }
    }

    if (currentSearch) {
      const categoryStr = getLocalizedField(repo.category, currentLang).toLowerCase();
      const descStr = getLocalizedField(repo.description, currentLang).toLowerCase();
      const matchName = repo.name.toLowerCase().includes(currentSearch);
      const matchDesc = descStr.includes(currentSearch);
      const matchTopic = repo.topics.some(t => t.toLowerCase().includes(currentSearch));
      const matchLang = repo.language.toLowerCase().includes(currentSearch);
      const matchCategory = categoryStr.includes(currentSearch);
      if (!matchName && !matchDesc && !matchTopic && !matchLang && !matchCategory) return false;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (currentSort === 'stars') {
      return b.stars - a.stars;
    } else if (currentSort === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return b.updatedAt - a.updatedAt;
    }
  });

  renderFeatured();

  repoGrid.innerHTML = '';
  if (repoCountBadge) repoCountBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    if (noResults) noResults.classList.remove('hidden');
  } else {
    if (noResults) noResults.classList.add('hidden');
    filtered.forEach(repo => {
      repoGrid.appendChild(createRepoCard(repo));
    });
  }
}

function getRepoIcon(repo) {
  if (repo.icon) return repo.icon;
  // Automatically check GitHub Raw URL for docs/icon.png
  return `https://raw.githubusercontent.com/mrKangHo/${repo.name}/main/docs/icon.png`;
}

// Helper to generate onerror attribute for GitHub Raw image fallback
function getRepoIconOnError(repoName) {
  return `if (this.src.includes('docs/icon.png')) { this.src='https://raw.githubusercontent.com/mrKangHo/${repoName}/main/assets/icon.png'; } else if (this.src.includes('assets/icon.png')) { this.src='https://raw.githubusercontent.com/mrKangHo/${repoName}/main/icon.png'; } else { this.onerror=null; this.src='assets/icons/portfolio.svg'; }`;
}

// Render Featured Projects Section
function renderFeatured() {
  if (!featuredContainer) return;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const featuredRepos = processedRepos.filter(r => r.featured);
  featuredContainer.innerHTML = '';

  featuredRepos.forEach(repo => {
    const card = document.createElement('div');
    card.className = 'featured-card';
    
    const langDotClass = getLanguageDotClass(repo.language);
    const topicsHtml = repo.topics.slice(0, 4).map(t => `<span class="topic-pill">${escapeHtml(t)}</span>`).join('');
    const iconSrc = getRepoIcon(repo);
    const categoryStr = getLocalizedField(repo.category, currentLang);
    const descStr = getLocalizedField(repo.description, currentLang);

    card.innerHTML = `
      <div>
        <div class="card-header-row">
          <div class="card-app-icon">
            <img src="${iconSrc}" alt="${escapeHtml(repo.name)} App Icon" loading="lazy" onerror="${getRepoIconOnError(repo.name)}">
          </div>
          <div class="card-title-group">
            <div class="card-badge-row">
              <span class="category-tag">${escapeHtml(categoryStr)}</span>
              ${repo.isFork ? '<span class="topic-pill">Fork</span>' : ''}
            </div>
            <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="card-title-link">${escapeHtml(repo.name)}</a>
          </div>
        </div>
        <p class="card-desc">${escapeHtml(descStr)}</p>
        <div class="topics-row">${topicsHtml}</div>
      </div>
      <div class="card-meta-bar">
        <div class="card-stats">
          <span class="meta-lang"><span class="meta-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
          <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        </div>
        <div class="card-actions-group">
          <button class="action-icon-btn" title="${t.copyTooltip}" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
            <i class="fa-regular fa-copy"></i>
          </button>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-btn" title="${t.viewRepo}">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    `;
    featuredContainer.appendChild(card);
  });
}

// Create Card Element for standard repo grid
function createRepoCard(repo) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const card = document.createElement('div');
  card.className = 'repo-card';

  const langDotClass = getLanguageDotClass(repo.language);
  const topicsHtml = repo.topics.slice(0, 3).map(t => `<span class="topic-pill">${escapeHtml(t)}</span>`).join('');
  const formattedDate = repo.updatedAt ? repo.updatedAt.toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  const iconSrc = getRepoIcon(repo);
  const categoryStr = getLocalizedField(repo.category, currentLang);
  const descStr = getLocalizedField(repo.description, currentLang);

  card.innerHTML = `
    <div>
      <div class="card-header-row">
        <div class="card-app-icon">
          <img src="${iconSrc}" alt="${escapeHtml(repo.name)} App Icon" loading="lazy" onerror="${getRepoIconOnError(repo.name)}">
        </div>
        <div class="card-title-group">
          <div class="card-badge-row">
            <span class="category-tag">${escapeHtml(categoryStr)}</span>
            ${repo.isFork ? '<span class="topic-pill">Fork</span>' : ''}
          </div>
          <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="card-title-link">${escapeHtml(repo.name)}</a>
        </div>
      </div>
      <p class="card-desc">${escapeHtml(descStr)}</p>
      ${topicsHtml ? `<div class="topics-row">${topicsHtml}</div>` : ''}
    </div>
    <div class="card-meta-bar">
      <div class="card-stats">
        <span class="meta-lang"><span class="meta-dot ${langDotClass}"></span> ${escapeHtml(repo.language)}</span>
        <span><i class="fa-regular fa-star"></i> ${repo.stars}</span>
        ${formattedDate ? `<span title="Updated">${formattedDate}</span>` : ''}
      </div>
      <div class="card-actions-group">
        <button class="action-icon-btn" title="${t.copyTooltip}" onclick="copyCloneCommand('${repo.name}', '${repo.cloneUrl || repo.htmlUrl + '.git'}')">
          <i class="fa-regular fa-copy"></i>
        </button>
        <a href="${repo.htmlUrl}" target="_blank" rel="noopener noreferrer" class="action-icon-btn" title="${t.viewCode}">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  `;

  return card;
}

// Helpers
function getLanguageDotClass(lang) {
  if (!lang) return 'other';
  const lower = lang.toLowerCase();
  if (lower.includes('swift')) return 'swift';
  if (lower.includes('ruby')) return 'ruby';
  if (lower.includes('javascript') || lower === 'js') return 'js';
  if (lower.includes('c++') || lower.includes('objective-c')) return 'objc';
  return 'other';
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

window.copyCloneCommand = function(repoName, cloneUrl) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const command = `git clone ${cloneUrl}`;
  navigator.clipboard.writeText(command).then(() => {
    showToast(`${t.copyToast} "git clone ${repoName}"`);
  }).catch(err => {
    console.error('Failed to copy', err);
  });
};

function showToast(msg) {
  if (!toastMessage || !toast) return;
  toastMessage.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}
