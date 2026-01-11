import { IoLogoGithub } from "react-icons/io";

export default function GitHubButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className={`gh-button relative w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium bg-black text-white border-transparent shadow-sm hover:shadow-md transform-gpu hover:-translate-y-0.5`}
        >
            {/* small animated decorative droplet inside the button */}
            <span className="gh-droplet" aria-hidden></span>
            <IoLogoGithub />
            <span>Sign in with GitHub</span>
        </button>
    )
}

// Inject minimal styles for the GitHub button droplet (only once)
if (typeof document !== 'undefined' && !document.getElementById('gh-button-styles')) {
    const s = document.createElement('style');
    s.id = 'gh-button-styles';
    s.textContent = `
        .gh-button { overflow: visible; }
        .gh-droplet {
            position: absolute;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-image: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.6) 18%, rgba(255,255,255,0.08) 48%, transparent 70%);
            box-shadow: 0 6px 12px rgba(0,0,0,0.18), inset 0 -3px 8px rgba(255,255,255,0.18);
            filter: drop-shadow(0 6px 10px rgba(0,0,0,0.12));
            opacity: 0.96;
            pointer-events: none;
            will-change: transform, opacity;
            animation: ghFloat 2.8s ease-in-out infinite, ghPulse 4s ease-in-out infinite;
        }

        @keyframes ghFloat {
            0% { transform: translateY(-50%) translateX(0) scale(1); }
            25% { transform: translateY(-56%) translateX(-3px) scale(1.02); }
            50% { transform: translateY(-50%) translateX(0) scale(1); }
            75% { transform: translateY(-44%) translateX(3px) scale(0.98); }
            100% { transform: translateY(-50%) translateX(0) scale(1); }
        }

        @keyframes ghPulse {
            0% { opacity: 0.96; }
            50% { opacity: 0.86; transform: translateY(-50%) scale(1.06); }
            100% { opacity: 0.96; transform: translateY(-50%) scale(1); }
        }
    `;
    document.head.appendChild(s);
}
