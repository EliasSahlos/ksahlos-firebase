import Link from "next/link";
import React from "react";

function QuoteBlock() {
    return (
        <div>
            <p>
                ‘Photography, is my endless quest to capture not what I actually see, but
                what I would really like to see. My work is mostly influenced by minimalism, impressionism and abstract visual art styles,
                creating simplistic fine-art compositions’.
            </p>
            <button className="bg-black hover:scale-105 ease-in duration-200 rounded shadow-md p-4 my-4 text-white font-thin">
                <Link href="/contact">GET IN TOUCH</Link>
            </button>
        </div>
    );
}

export default QuoteBlock;
