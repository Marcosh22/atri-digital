export default function Footer () {
    return (
        <footer>
            <div className="has-bg-red">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2><a href="#" target="_blank" className="d-block text-center has-color-white">atri.com.br</a></h2>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .has-bg-red {
                    padding: 15px 0;
                }

                a {
                    text-decoration: none;
                }

            `}</style>
        </footer>
    );
}