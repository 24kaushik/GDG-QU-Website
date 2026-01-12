import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import GoogleButton from './common/GoogleButton';
import GithubButton from './common/GitHubButton';

// Custom hook for typewriter effect
const useTypewriter = (text, speed = 100) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    // Reset when text changes
    useEffect(() => {
        setDisplayText('');
        setCurrentIndex(0);
    }, [text]);

    return displayText;
};

const LoginModal = ({ isOpen, onClose }) => {
    const typewriterText = useTypewriter('Welcome Back 👋', 80);
    const [showCursor, setShowCursor] = useState(true);

    // Cursor blink effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    // Animation variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                damping: 25,
                stiffness: 300,
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            scale: 0.95,
            transition: { duration: 0.2 }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 300
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh',
                            minWidth: '100vw'
                        }}
                    >
                        {/* Modal */}
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md"
                        >
                            {/* Glow effect */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-20 blur-xl"
                                style={{
                                    background: 'linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #f9ab00 50%, #34a853 100%)'
                                }}
                            />

                            {/* Modal content */}
                            <div
                                className="relative rounded-3xl p-8 shadow-2xl"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 251, 0.95) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(66, 133, 244, 0.2)',
                                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.5) inset'
                                }}
                            >
                                {/* Close button */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:bg-gray-100"
                                    style={{ color: '#9ca3af' }}
                                >
                                    <FaTimes size={20} />
                                </motion.button>

                                <motion.div
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {/* Typewriter heading */}
                                    <motion.div variants={itemVariants} className="mb-8">
                                        <h1
                                            className="text-4xl font-bold mb-4 min-h-[3rem]"
                                            style={{
                                                background: 'linear-gradient(135deg, #4285f4 0%, #ea4335 25%, #f9ab00 50%, #34a853 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }}
                                        >
                                            {typewriterText}
                                            <span
                                                className="inline-block w-0.5 h-8 ml-1 align-middle"
                                                style={{
                                                    backgroundColor: '#4285f4',
                                                    opacity: showCursor ? 1 : 0,
                                                    transition: 'opacity 0.1s'
                                                }}
                                            />
                                        </h1>
                                        <p className="text-gray-700 font-medium leading-relaxed">
                                            Every login is another step toward your tech journey.
                                        </p>
                                        <p className="text-gray-700 font-medium leading-relaxed mt-2">
                                            Sign in to learn, connect and grow with the GDG community.
                                        </p>
                                    </motion.div>

                                    {/* Animated divider */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="my-6 flex items-center"
                                    >
                                        <div
                                            className="flex-1 h-0.5"
                                            style={{
                                                background: 'linear-gradient(90deg, transparent, #4285f4, transparent)'
                                            }}
                                        />
                                    </motion.div>

                                    {/* Auth buttons */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="space-y-3"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <GoogleButton />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <GithubButton />
                                        </motion.div>
                                    </motion.div>

                                    {/* Footer */}
                                    <motion.p
                                        variants={itemVariants}
                                        className="text-center mt-8 text-xs"
                                        style={{ color: '#9ca3af' }}
                                    >
                                        © 2025 GDG On Campus - Quantum University
                                    </motion.p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
