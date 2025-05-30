import React from 'react';

export default function Etc() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">AI 시대의 필수 역량</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 기술적 역량 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">기술적 역량</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>AI 도구 활용 및 프롬프트 엔지니어링</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>데이터 리터러시 및 분석 능력</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>디지털 협업 도구 마스터리</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>사이버 보안 인식과 실천</span>
            </li>
          </ul>
        </section>

        {/* 인지적 역량 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">인지적 역량</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>비판적 사고와 문제 해결 능력</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>창의적 사고와 혁신 능력</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>복잡한 시스템 이해 능력</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>학습 민첩성과 적응력</span>
            </li>
          </ul>
        </section>

        {/* 사회적 역량 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">사회적 역량</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>감성 지능과 공감 능력</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>다문화 이해와 협력 능력</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>리더십과 팀워크 스킬</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>효과적인 의사소통 능력</span>
            </li>
          </ul>
        </section>

        {/* 윤리적 역량 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-600">윤리적 역량</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>AI 윤리 이해와 실천</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>디지털 시민의식</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>프라이버시와 데이터 윤리</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>지속가능성 인식</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
} 