export const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <section className="footer-section">
                <div className="footer-contact">
                    <div className="info-section">
                        <div className="details">
                            <h1>We're dedicated to finding the right solution for you.</h1>
                            <p><span>Phone:</span>+918485993577</p>
                            <p><span>Email:</span>pd745482@gmail.com</p>
                            <p><span>Address:</span>25,Mangaldeep row house pal gam surat.</p>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© {year} Dev Patel All rights reserved.</p>
                        <p>Terms & ConditionsPrivacy PolicyContact Us</p>
                    </div>

                </div>
            </section>
        </>
    )
}