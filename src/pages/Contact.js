import React from 'react';
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import PagesHero from '../components/PagesHero';

function Contact(){
    return(
        <div>
            
            <Navigation />
            <main>
            <PagesHero title="Contact Us" subText="My name is priya" bgClass="contact-bg" />
            
            <div className="container content">
                <div className="row">
                    <div className="col-md-8">
                    <p>WeCare Hostpital&apos;s is open 24/7 all year round, weekends and holidays inclusive. You can reach us through the following means: </p>
                    <p><strong>Phone</strong><br /><a href="tel:+9163071697....">+91 63071697...</a></p>
<p><a href="tel:+917272811811...">+917272811811..</a> <strong>(Ambulance Hotline)</strong></p>
<p><strong>Email</strong><br /></p>
<p><a href="mailto:priyakashinagar..@gmail.com">priyakashinagar..@gamil.com</a></p>
<p><strong>Physical Address</strong><br />Kanpur, <br />Kanpur nagar,<br />Amaliya</p>
                    </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;