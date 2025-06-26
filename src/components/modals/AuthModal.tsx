'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative bg-white rounded-xl p-15 w-[90%] max-w-lg text-center"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.1, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-4xl text-gray-500 hover:text-gray-700"
                        >
                            ×
                        </button>

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">환영합니다!</h2>

                        <div className="space-y-4">
                            <button className="w-full py-4 bg-[#FEE500] text-gray-900 font-semibold rounded-md shadow hover:brightness-95 transition flex items-center justify-center">
                                <img src="/icons/kakao.png" alt="kakao" className="w-6 h-6 mr-2" />
                                카카오 계정으로 로그인
                            </button>
                            <button className="w-full py-4 bg-[#56BB3D] text-white font-semibold rounded-md shadow hover:brightness-95 transition flex items-center justify-center">
                                <img src="/icons/naver.png" alt="naver" className="w-6 h-6 mr-2" />
                                네이버 계정으로 로그인
                            </button>
                            <button className="w-full py-4 border border-gray-300 text-gray-800 font-semibold rounded-md shadow hover:bg-gray-100 transition flex items-center justify-center">
                                <img src="/icons/google.png" alt="google" className="w-6 h-6 mr-2" />
                                구글 계정으로 로그인
                            </button>
                        </div>

                        <p className="mt-6 text-sm text-purple-600 hover:underline cursor-pointer">
                            귀찮아요. 비회원으로 할래요!
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
