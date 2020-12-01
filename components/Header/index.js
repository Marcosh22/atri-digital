export default function Header () {
    return (
        <header>
            <div className="has-bg-red">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-8 col-md-7 col-lg-6">
                            <img src="/images/atri-digital.png" alt="" className="img-fluid d-block"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="has-bg-green">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <h1 className="has-color-white text-center text-uppercase d-flex align-items-center justify-content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={65} height={47} viewBox="0 0 65 47">
                                    <image data-name="FIAT_FLAG_branco" width={65} height={47} xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAvCAQAAAAWAG/kAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkDAEOLirmb5SgAAAD4UlEQVRYw52YQSjfYRjH399fJmUxmexfHHBwwAEHWaRIEmVsOHCQAxcnFxcuHKQshRJJktKwZdY4TE22sNIOajlMbQ5WVhbJP4ln1+fz/tvT8tyePs/z93jf93nf7/NzzjT5IdrqwFbA+sD6wN6A1YEd2wUUIvhC4hRLkAhoLjIPwNrA5sBG7BKGELwI1gx2CJYNdi2JisXKGWhxyKyhEd4SvGcGew7vQ3CuvAr3SHm/3BdrDfJQ7ZXEKxYvl6AFyNwH6wCbBhuzt2EAwStgDWBHYBlgN5KsWIycgpY5Z21Ewz234QW8j8GZ8srdY+X9dp+tNcjxjlSCYnFyziOFzF2wLrAJsEl7G9jZa2C17GwJFAuD3UqqYiE5Aa10ztoIbsMrYxuWA1Eeu+hTcKq8p+6J8v64LWsNsrwjlaSY39mlyNwG6wYbBZuxt6EXwRtgVWAnolZSUuVWsTsJKxbIMTJr7BL2jM6eBBsH6wLbASsGO9fXfXQB7OxbSVHM7+wKZG6C9YANg83ba9CD4E2wcrBTiVEsWW5AM5B5BFZvl8Ajxc4eA5sC6wDbB+Ore6mv++gCwnKHI5WmmN/Z1chcB+sFGwRbdJZJN4K3wUrAziRWsUS5Bs1C5iFYk10CjxQ7ewRsFqwN7ACMr25EX/fRBbCzRdIV8zubQm4VjEKuH2zFWSadCN4FKwI7N4VcDjIp5FrtEjYQzM6mkFsAawGjkPNf3USrAL+zM0HZ2XiQZAlsAIzX/ZqzTNoRzM7OB7s0hVw+Mink2u0S1hDMzqaQg1KSRjAKuUwwCLnoAvzO5pFiZ7eALYANgfG633CWSSuC2dk8UhFTyBUhk0Ku0y6BI1o/GIXcKpg3okHIpYNByEUX4Hd2Hqg1os2CYUTzrvtNZ5k0IZidTSFnj2glyDSEXHQJiwgeBGNnr4NVg1HIpXmvbtgqwO/sQlBrRJsCw4jmCbltZ5nUI/j+I1o5Mg0hF13CPIKHwSwhVwFGIZfivboZVgH2iLYDRiE3DoYRzRNye/Ya1CDYH9H0kbJHtCr8Kl/dXruEGQSPgllCrhSMQi7Je3WzrALsEW0LjELuJRhGNE/IfbXXoBLB1ogm5ohWi1/lq9tnl8ARbQKMnU0hZ4xokmC9utpCzkmMN8i/hmd98qqH9za4Vl6te6C8bwEufH8NylDt/Uc0/CPeqzvgLPNGtGkwa0QrAPOF3BVo3r//fkhC3lJT4///J693QUR5NU7PjN8DyB9/DXik7BEtG5kUcs1gfHWHnGXeiDYHZo1ouWC+kLsALbQqCHlfCZeNbbA+eb0PLpVX5R4q72eAM+TbXw3BIL195fywAAAAAElFTkSuQmCC" />
                                </svg>
                                &nbsp;FIAT FASHION WEAR&nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={65} height={47} viewBox="0 0 65 47">
                                    <image data-name="FIAT_FLAG_branco" width={65} height={47} xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAvCAQAAAAWAG/kAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfkDAEOLirmb5SgAAAD4UlEQVRYw52YQSjfYRjH399fJmUxmexfHHBwwAEHWaRIEmVsOHCQAxcnFxcuHKQshRJJktKwZdY4TE22sNIOajlMbQ5WVhbJP4ln1+fz/tvT8tyePs/z93jf93nf7/NzzjT5IdrqwFbA+sD6wN6A1YEd2wUUIvhC4hRLkAhoLjIPwNrA5sBG7BKGELwI1gx2CJYNdi2JisXKGWhxyKyhEd4SvGcGew7vQ3CuvAr3SHm/3BdrDfJQ7ZXEKxYvl6AFyNwH6wCbBhuzt2EAwStgDWBHYBlgN5KsWIycgpY5Z21Ewz234QW8j8GZ8srdY+X9dp+tNcjxjlSCYnFyziOFzF2wLrAJsEl7G9jZa2C17GwJFAuD3UqqYiE5Aa10ztoIbsMrYxuWA1Eeu+hTcKq8p+6J8v64LWsNsrwjlaSY39mlyNwG6wYbBZuxt6EXwRtgVWAnolZSUuVWsTsJKxbIMTJr7BL2jM6eBBsH6wLbASsGO9fXfXQB7OxbSVHM7+wKZG6C9YANg83ba9CD4E2wcrBTiVEsWW5AM5B5BFZvl8Ajxc4eA5sC6wDbB+Ore6mv++gCwnKHI5WmmN/Z1chcB+sFGwRbdJZJN4K3wUrAziRWsUS5Bs1C5iFYk10CjxQ7ewRsFqwN7ACMr25EX/fRBbCzRdIV8zubQm4VjEKuH2zFWSadCN4FKwI7N4VcDjIp5FrtEjYQzM6mkFsAawGjkPNf3USrAL+zM0HZ2XiQZAlsAIzX/ZqzTNoRzM7OB7s0hVw+Mink2u0S1hDMzqaQg1KSRjAKuUwwCLnoAvzO5pFiZ7eALYANgfG633CWSSuC2dk8UhFTyBUhk0Ku0y6BI1o/GIXcKpg3okHIpYNByEUX4Hd2Hqg1os2CYUTzrvtNZ5k0IZidTSFnj2glyDSEXHQJiwgeBGNnr4NVg1HIpXmvbtgqwO/sQlBrRJsCw4jmCbltZ5nUI/j+I1o5Mg0hF13CPIKHwSwhVwFGIZfivboZVgH2iLYDRiE3DoYRzRNye/Ya1CDYH9H0kbJHtCr8Kl/dXruEGQSPgllCrhSMQi7Je3WzrALsEW0LjELuJRhGNE/IfbXXoBLB1ogm5ohWi1/lq9tnl8ARbQKMnU0hZ4xokmC9utpCzkmMN8i/hmd98qqH9za4Vl6te6C8bwEufH8NylDt/Uc0/CPeqzvgLPNGtGkwa0QrAPOF3BVo3r//fkhC3lJT4///J693QUR5NU7PjN8DyB9/DXik7BEtG5kUcs1gfHWHnGXeiDYHZo1ouWC+kLsALbQqCHlfCZeNbbA+eb0PLpVX5R4q72eAM+TbXw3BIL195fywAAAAAElFTkSuQmCC" />
                                </svg>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .has-bg-red {
                    padding: 40px 0;
                }

                .has-bg-green {
                    padding: 10px 0;
                }

                @media (max-width: 575.98px) {
                    .has-bg-red {
                        padding: 9vw 0;
                    }

                    h1 > svg {
                        width: 8vw;
                    }
                }

                @media (min-width: 576px) and (max-width: 767.98px) {
                    h1 > svg {
                        width: 45px;
                    }
                }

                @media (min-width: 768px) and (max-width: 991.98px) {
                    h1 > svg {
                        width: 45px;
                    }
                }

                @media (min-width: 992px) and (max-width: 1199.98px) {
                    h1 > svg {
                        width: 55px;
                    }
                }
            `}</style>
        </header>
    );
}