import React from 'react'

const getMathJax = () => (window as any).MathJax;

const typeset = (selector: () => HTMLElement) => {
    const mathJax = getMathJax();
    // If MathJax script hasn't been loaded yet, then do nothing.
    if (!mathJax) {
        return null;
    }
    mathJax.startup.promise = mathJax.startup.promise
        .then(() => {
            selector();
            return mathJax.typesetPromise();
        })
        .catch((err: any) => console.error(`Typeset failed: ${err.message}`));
    return mathJax.startup.promise;
};

interface LatexProps {
    rawLatex: string;
}

const Latex: React.FC<LatexProps> = ({ rawLatex }) => {
    const ref = React.createRef<HTMLSpanElement>();
    React.useEffect(() => {
        typeset(() => ref.current!);
    }, [rawLatex]);

    return <span ref={ref}>{rawLatex}</span>;
};

export default React.memo(Latex);