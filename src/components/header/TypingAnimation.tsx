import { useEffect, useState } from "react";

const phrases = [
    "WELCOME to BEAUTY BAY COLLECTION",
    "BEST PRODUCTS",
    "FIND YOUR FAVORITE BRAND",
    "BEAUTY BAY",
];

const TypingAnimation: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 120;
    const deletingSpeed = 25;

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const textLength = displayedText.length;

        if (isDeleting) {
            // O'chirish jarayoni
            if (textLength > 0) {
                const timeoutId = setTimeout(() => {
                    setDisplayedText(currentPhrase.substring(0, textLength - 1));
                }, deletingSpeed);
                return () => clearTimeout(timeoutId);
            } else {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }
        } else {

            if (textLength < currentPhrase.length) {
                const timeoutId = setTimeout(() => {
                    setDisplayedText(currentPhrase.substring(0, textLength + 1));
                }, typingSpeed);
                return () => clearTimeout(timeoutId);
            } else {

                const timeoutId = setTimeout(() => setIsDeleting(true), 2000);
                return () => clearTimeout(timeoutId);
            }
        }
    }, [displayedText, isDeleting, phraseIndex]);

    return (
        <h2 className="text-lg text-[26px] font-bold">
            {displayedText}<span className="blinking-cursor">|</span>
        </h2>
    );
};

export default TypingAnimation;
