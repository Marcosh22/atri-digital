export default function Loader() {
    return (
        <>
            <div className="overlay">
                <div className="overlay__inner">
                    <div className="overlay__content">
                        <span className="spinner"></span>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .overlay {
                    left: 0;
                    top: 0;
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    background: rgba(0, 0, 0, 0.3);
                    z-index: 9999;
                }

                .overlay__inner {
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }

                .overlay__content {
                    left: 50%;
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }

                .spinner {
                    width: 75px;
                    height: 75px;
                    display: inline-block;
                    border-width: 2px;
                    border-color: rgba(255, 255, 255, 0.05);
                    border-top-color: #fff;
                    animation: spin 1s infinite linear;
                    border-radius: 100%;
                    border-style: solid;
                }

                @keyframes spin {
                100% {
                    transform: rotate(360deg);
                }
}
            `}</style>
        </>
    ) 
}