export const data = {
  hero: {
    greeting: "The Architect",
    headline: "대규모 트래픽을 견디는 확장 가능한 백엔드 시스템을 설계합니다.",
    tags: ["System Architecture", "High-Traffic", "MSA", "AWS", "Modernization"],
  },
  about: {
    philosophy: "결제는 단 한 번의 장애도 용납되지 않는 도메인입니다. 12년간 대규모 글로벌 서비스인 Samsung Pay의 결제·리워드·로열티 시스템을 설계하고 운영하며, 대용량 트래픽 속에서도 무너지지 않는 백엔드 아키텍처를 만드는 법을 체득했습니다.",
    summary: "레거시를 MSA로 전환하고, 인프라를 클라우드로 이전하며, 서비스 내 기능을 단독 기능으로 런칭하고, 팀의 개발 생산성을 끌어올리는 것 — 코드를 넘어 시스템 전체를 설계하는 엔지니어입니다."
  },
  techStack: {
    languages: ["Java", "Python", "JavaScript/Node.js"],
    frameworks: ["Spring Framework", "Spring Boot", "Spring Batch", "Spring Kafka"],
    databases: ["MySQL", "PostgreSQL", "Cassandra", "Couchbase", "Redis"],
    infrastructure: ["AWS EC2", "AWS EMR", "AWS MWAA", "GCP", "Kubernetes", "Docker"],
    messaging: ["Kafka", "Netty", "TCP Socket"],
    dataEngineering: ["Airflow", "Bigquery", "Spark", "Sqoop", "Hudi"],
    tools: ["Circle CI", "Github Actions", "Spock Framework", "Zeplin", "Athena", "Hibernate Validator"]
  },
  experience: [
    {
      period: "2014.02 ~ 현재",
      company: "삼성전자",
      role: "Backend Engineer / Tech Lead",
      achievements: [
        "Samsung Pay, Chat ON 등 글로벌 대규모 서비스의 백엔드 시스템을 설계·운영했습니다.",
        "초기 메시지 서버 개발자로 시작해 결제망 통신 모듈, 리워드/로열티 플랫폼, 데이터 파이프라인을 거쳐, 현재는 6인 개발팀을 리딩하며 한국 결제 서비스 전반의 아키텍처 의사결정을 주도하고 있습니다. ",
        "레거시 모놀리스의 MSA 전환, 온프레미스 인프라의 클라우드 이전, CI/CD 및 테스트 자동화 체계 구축을 팀 단위로 이끌며 시스템 안정성과 개발 생산성을 함께 높여왔습니다."
      ]
    }
  ],
  projects: [
    {
      period: "2023년 ~ 현재",
      name: "Samsung Pay 한국 결제 및 부가서비스 개발 리딩",
      role: "결제 기능 개발 리드 및 아키텍처 설계",
      techStack: ["Java", "Spring Framework", "Kafka", "Spring Kafka", "Redis", "MySQL", "Spring Batch"],
      details: [
        "6인 모듈 개발팀 리딩",
        "기능 별 중요도에 따른 WRITE/READ DB 분리 및 캐시 전략 의사결정 주도",
        "삼성페이 한국 결제/신규 서비스 주요 기능 설계 및 검토",
        "마이크로서비스 아키텍처를 적용하여 대규모 트랜잭션에도 안정적인 결제 시스템 구축",
        "Legacy 시스템의 기술 부채 해결을 위한 리팩토링 및 아키텍처 개선 주도(기능 별 Microservice 분리 설계 및 프로젝트 리딩)",
        "사용자 VOC 해결 자동화 프로젝트 설계 및 개발"
      ]
    },
    {
      period: "2021년 ~ 2022년",
      name: "Samsung Pass 아키텍처 전환 프로젝트 참여",
      role: "Microservice 전환 참여",
      techStack: ["Java", "Spring Boot"],
      details: [
        "삼성패스 Microservice 전환 개발 참여",
        "기존 공용 라이브러리 화 되어 있던 기능들을 Microservice로 분리 개발"
      ]
    },
    {
      period: "2021년 ~ 2022년",
      name: "Samsung Pay 통계 시스템 통합",
      role: "시스템 통합 및 스펙 일원화 주도",
      techStack: ["GCP", "Bigquery", "Airflow", "AWS EMR", "Hudi", "Spark", "Sqoop"],
      details: [
        "기존 권역별로 분리 운영되던 통계 시스템 통합(이종 통계 시스템 간 스펙 일원화)",
        "GCP 기반 데이터 파이프라인 설계 (Airflow 배치 워크플로우 분석, Bigquery 연계 지원)"
      ]
    },
    {
      period: "2020년",
      name: "CI/CD 파이프라인 구축을 통한 Code Quality 향상 기여",
      role: "CI/CD 파이프라인 구축 및 전파",
      techStack: ["Circle CI", "Spock Framework"],
      details: [
        "수동 배포 및 기본 검증 자동화를 위한 Circle CI 기반 통합 CI/CD 파이프라인 구축",
        "CI/CD 파이프라인 내 Code Quality 측정 자동화 구축"
      ]
    },
    {
      period: "2020년",
      name: "Samsung Pay 한국 서버 개발",
      role: "카드 단기대출 서비스 개발 및 PG사 연동 온라인 결제 기능 개선 설계",
      techStack: ["Java", "Spring Framework", "Kafka", "Redis", "MySQL", "Spring Batch"],
      details: [
        "카드사 단기대출 API 연동을 통하여 카드의 부가기능으로 단기대출 서비스 제공",
        "PG사 웹 결제 프로세스 기능 개선 설계 주도"
      ]
    },
    {
      period: "2019년",
      name: "Samsung Rewards 시스템 전체 설계 및 개발",
      role: "시스템 분리 아키텍처 설계 및 데이터 마이그레이션",
      techStack: ["Java", "Spring Framework", "Kafka", "Spring Kafka", "MySQL", "Spring Batch", "AWS EC2"],
      details: [
        "삼성페이 내 종속되던 대형 리워즈 시스템을 완전 분리 전담",
        "신규 핵심 사용자 관리 기능 및 사용자 기반 전체 데이터 마이그레이션 전략 설계 적용"
      ]
    },
    {
      period: "2017년 ~ 2018년",
      name: "Samsung Pay Global Rewards 시스템 개발",
      role: "실시간 결제 포인트 트랜잭션 구축",
      techStack: ["Java", "Spring Framework", "Kafka", "MySQL", "Spring Batch", "AWS EC2"],
      details: [
        "포인트 실시간 적립, 차감 및 권한 거래 트랜잭션 기능 설계 및 개발",
        "타사 포인트 전환 기능 설계 및 개발",
        "Spring Batch를 활용한 정기 자동 처리(만료, 사용자 등급 갱신, 타사 포인트 전환) 데이터 엔진 확보"
      ]
    },
    {
      period: "2016년 ~ 2017년",
      name: "Samsung Pay Global Loyalty 시스템 개발",
      role: "사용자 로열티 플랫폼 서버 개발",
      techStack: ["Java", "Spring Framework", "Couchbase", "Kafka", "MySQL", "Hibernate Validator", "AWS EC2"],
      details: [
        "국가별 로열티 프로그램 목록 및 속성 관리 기능 개발",
        "사용자별 로열티 프로그램 등록 해지 라이프사이클 기능 구현"
      ]
    }
  ],
  troubleshooting: [
    {
      id: "kafka-lag",
      title: "Kafka Consumer 처리량 개선 및 Lag 해소",
      problem: "Samsung Pay Rewards 결제 처리 시 Peak 트래픽 타이밍에 Consumer가 처리 속도를 따라가지 못해 심각한 Kafka Lag 발생.",
      solution: "단순 Partition 확장만으로는 비용 및 트래픽 증가 속도를 극복할 수 없다고 판단, Consumer batch 및 비동기 처리 로직을 적용하여 동시 I/O 능력을 획기적으로 개선.",
      result: "최대 수만건 규모의 Kafka Lag -> 건수 기준 99% 이상 감소, 사용자 VOC Zero 화, Consumer 처리량 10배 향상"
    },
    {
      id: "code-quality",
      title: "Code Quality 개선 및 배포 자동화 체계 주도",
      problem: "개발-테스트-배포의 전 과정이 개발자의 수동 작업(Postman 등)에 집중되어 누락 케이스가 생기며 배포 후 롤백 및 긴급 패치가 빈번하게 발생됨.",
      solution: "CI/CD 파이프라인 구축(Code Merge, Build, Test 자동화 및 Test Score 측정 자동화), 검증 환경 배포 자동화 툴 스크립트 작성 및 팀내 도입 안착.",
      result: "개발 테스트 생산성 증대, 서비스 전체 배포 안정성 증가(롤백 및 긴급 패치 발생 횟수 분기 평균 75% 감소), 부서 내 전 프로젝트의 Code Test Coverage 80% 이상 확보."
    },
    {
      id: "airflow-mwaa",
      title: "Airflow 인프라 전환 작업 리딩 (Onpremise -> AWS MWAA)",
      problem: "기존 Onpremise 환경 노후화 및 담당자 부재로 인한 문서화 미비. 주요 배치 인프라의 장애 리스크 대응이 어려운 상황.",
      solution: "안정성 확보를 위해 관리형 서비스인 AWS MWAA 전환 기획. 기존 DAG / 설정 환경의 깊이있는 정적 분석 진행 후 MWAA 환경에 맞게 마이그레이션.",
      result: "배치 서버 리소스 운영 리스크 완벽 감소, 재구축 과정 중 상세한 문서화를 통해 운영 인수인계 및 히스토리 레퍼런스 확보를 통해 신규 인력 온보딩 기간 2개월에서 2주로 단축. 기존 onPremise 환경 -> MWAA 전환으로 직접 관리 서버 0대로 감소."
    },
    {
      id: "admin-portal",
      title: "어드민 포탈 부재 문제 해결 및 운영 효율화",
      problem: "팀 전원이 Backend만 구성되어 UI/어드민 기능 개발이 지연되었으며, 기존 기술 스택 노후화로 유지보수 난이도가 극심함.",
      solution: "백엔드 엔지니어에게는 Internal API 제공 역할로 집중. AI 보조 코딩 도구를 활용하여 적은 공수만으로 신규 어드민 포탈 레이아웃과 데이터 연동부를 구현.",
      result: "효율성 극대화 및 프론트엔드 부담감 해소. 새로운 뷰어와 제어 기능을 확보하여 프로덕션 운영 안정성에 큰 기여. 적용 전 어드민 개발 준비 및 배포 시간 3개월에서 1개월 이내로 단축(66% 감소)"
    },
    {
      id: "api-spec",
      title: "API Specification 관리 효율화 파이프라인 도입",
      problem: "오랜 운영 서버의 낡은 워드 포맷 API 명세서 혼재, 개발과 문서 수정의 동기화 어려움, 점진적인 API 확대로 관리 리소스 과부하 상황.",
      solution: "OpenAPI Spec을 도입해 코드와 명세를 동기화/산출되도록 정책 수립. 문서 통합을 위해 Docusaurus 포탈 구축 + GitHub Pages 배포 자동화를 수립, 레거시 워드 문서는 AI를 통해 OpenAPI 규격으로 변환 편입 설계.",
      result: "API Spec의 변경사항 추적 투명화. QA, 외부 제휴사 등 유관 부서와의 협업 속도 급증 및 커뮤니케이션 오버헤드 완벽 차단. 개발자 API 문서 작성 시간 50% 감소."
    }
  ]
};
