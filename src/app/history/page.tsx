import React from 'react';

export default function History() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">개발 히스토리</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* Cursor IDE 섹션 */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Cursor IDE 활용</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>실시간 AI 코드 제안 및 자동완성 기능 활용</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>스마트 코드 리팩토링 및 최적화</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>AI 기반 코드 분석 및 버그 감지</span>
              </li>
            </ul>
          </section>

          {/* Claude AI 섹션 */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">Claude AI 활용</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>자연어 처리를 통한 코드 생성 및 수정</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>프로젝트 구조 설계 및 최적화 제안</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>코드 문서화 및 설명 자동화</span>
              </li>
            </ul>
          </section>

          {/* 개발 타임라인 */}
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">개발 타임라인</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="min-w-[100px] font-semibold">2024.03.21</div>
                <div>프로젝트 시작 - AI 도구 설정 및 초기 구조 설계</div>
              </div>
              <div className="flex items-start">
                <div className="min-w-[100px] font-semibold">2024.03.21</div>
                <div>기본 레이아웃 및 페이지 구조 구현</div>
              </div>
              <div className="flex items-start">
                <div className="min-w-[100px] font-semibold">2024.03.21</div>
                <div>AI 기반 기능 통합 및 최적화</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 