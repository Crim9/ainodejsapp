import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* AI 코딩 소개 섹션 */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">AI 기반 웹 개발 프로젝트</h1>
        <p className="text-xl text-gray-600 mb-4">
          이 웹사이트는 최신 AI 기술을 활용하여 개발되었습니다.
        </p>
        <p className="text-lg text-gray-500">
          Cursor IDE와 Claude AI의 협업으로 제작된 지능형 웹 애플리케이션입니다.
        </p>
      </section>

      {/* 게시판 섹션 */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">게시판</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">번호</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4">AI 웹사이트 개발 시작</td>
                <td className="px-6 py-4">관리자</td>
                <td className="px-6 py-4">2024-03-21</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4">새로운 기능 업데이트 예정</td>
                <td className="px-6 py-4">관리자</td>
                <td className="px-6 py-4">2024-03-21</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            글쓰기
          </button>
        </div>
      </section>
    </div>
  );
} 