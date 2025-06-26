'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center bg-[#1c1c1c] text-white px-12">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="ml-30 flex flex-col gap-6 text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold">실시간 오목 대전</h1>
          <p className="text-xl md:text-3xl text-gray-200 leading-relaxed">
            누가 먼저 오목을 완성할 것인가,<br />
            당신의 차례입니다.
          </p>
          <button
            className="mt-6 px-8 py-4 text-lg md:text-2xl bg-gray-600 text-white rounded-md hover:bg-gray-500 transition w-fit"
            onClick={() => { }}
          >
            시작하기
          </button>
        </motion.div>

        <motion.img
          src="/board.png"
          alt="바둑판 이미지"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-[40vw] md:w-[45vw] lg:w-[50vw] rounded-xl shadow-lg"
        />
      </div>
    </main>
  );
}
