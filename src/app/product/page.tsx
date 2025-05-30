import React from 'react';

export default function Product() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">제품 기능</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* 페이징 기능 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">스마트 페이징 시스템</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>AI 기반 동적 페이지 크기 최적화</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>사용자 패턴 분석을 통한 자동 페이지 조절</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>무한 스크롤 및 가상화 지원</span>
            </li>
          </ul>
        </section>

        {/* AI 검색 기능 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-green-600">AI 검색 엔진</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>자연어 처리 기반 검색 최적화</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>컨텍스트 인식 검색 추천</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>실시간 검색어 자동 완성</span>
            </li>
          </ul>
        </section>

        {/* AI 콘텐츠 분석 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-600">AI 콘텐츠 분석</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>게시물 자동 카테고리 분류</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>감성 분석 기반 콘텐츠 추천</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>스팸 및 부적절 콘텐츠 자동 필터링</span>
            </li>
          </ul>
        </section>

        {/* 실시간 AI 지원 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-600">실시간 AI 지원</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>AI 챗봇 상담 서비스</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>실시간 번역 및 요약 기능</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>사용자 맞춤형 콘텐츠 제안</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
} 