import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">환영합니다</h1>
        <h2 className="text-2xl text-gray-600">NodejsAiApp</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">최신 소식</h3>
            <p className="text-gray-600">새로운 기능과 업데이트 소식을 확인하세요.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">주요 기능</h3>
            <p className="text-gray-600">다양한 기능을 경험해보세요.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">시작하기</h3>
            <p className="text-gray-600">지금 바로 시작해보세요.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 