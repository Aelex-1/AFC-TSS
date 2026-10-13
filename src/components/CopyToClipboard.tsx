import { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

type CopyToClipboardProps = {
    text: string;
};

export function CopyToClipboard({ text }: CopyToClipboardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [copied])

    return (
        <div className="relative inline-block">

            <button
                onClick={handleCopy}
                arai-label="Copy to clipboard"
            >
                <FaRegCopy className="mt-1"/>
            </button>

            {copied && (
                <div className="absolute bottom-[125%] left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-md whitespace-nowrap pointer-events-none">
                    Text Copied!
                </div>
            )}
        </div>
    );
}
